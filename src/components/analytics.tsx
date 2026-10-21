"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  analyticsUrl,
  CONSENT_KEY,
  readConsent,
  referrerHost,
  type Consent,
} from "@/lib/analytics/core";
import {
  attribution,
  debug,
  environmentEnabled,
  gaId,
  metricsConfigured,
  speedEnabled,
  trackEvent,
  vercelEnabled,
} from "@/lib/analytics/client";

export function PrivacyPreferences() {
  return (
    <button
      className="text-button"
      onClick={() => window.dispatchEvent(new Event("mb:open-privacy"))}
    >
      Preferencias de métricas
    </button>
  );
}
export function Metrics() {
  const pathname = usePathname();
  const [consent, setConsent] = useState<Consent | null>(null);
  const [visible, setVisible] = useState(false);
  const [gaReady, setGaReady] = useState(false);
  const previousPage = useRef<string | null>(null);
  const gaInitialized = useRef(false);
  const [storageError, setStorageError] = useState(false);
  const active = metricsConfigured && environmentEnabled;
  useEffect(() => {
    setConsent(readConsent());
    setVisible(active && readConsent() === null);
    const open = () => setVisible(true);
    window.addEventListener("mb:open-privacy", open);
    const sync = (event: StorageEvent) => {
      if (event.key === CONSENT_KEY) window.location.reload();
    };
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("mb:open-privacy", open);
      window.removeEventListener("storage", sync);
    };
  }, [active]);
  const choose = useCallback(
    (value: Consent) => {
      const wasGranted = consent === "granted";
      try {
        localStorage.setItem(CONSENT_KEY, value);
        setStorageError(false);
      } catch {
        setStorageError(true);
        return;
      }
      setConsent(value);
      setVisible(false);
      if (value === "denied") {
        window.gtag?.("consent", "update", {
          analytics_storage: "denied",
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
        });
        try {
          sessionStorage.removeItem("mb:attribution:v1");
        } catch {
          /* No storage access. */
        }
        // Stop already loaded SDKs and erase GA cookies scoped to this origin/domain.
        document.cookie.split(";").forEach((cookie) => {
          const name = cookie.split("=")[0].trim();
          if (!/^_ga(?:_|$)|^_gid$/.test(name)) return;
          const host = location.hostname.split(".");
          document.cookie = `${name}=; Max-Age=0; path=/`;
          for (let i = 0; i < host.length - 1; i++)
            document.cookie = `${name}=; Max-Age=0; path=/; domain=.${host.slice(i).join(".")}`;
        });
        if (wasGranted) window.location.reload();
      }
    },
    [consent],
  );
  useEffect(() => {
    if (!active || consent !== "granted" || !gaId || gaInitialized.current)
      return;
    gaInitialized.current = true;
    // Queue consent, config and early interactions before the remote SDK loads.

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer!.push(arguments);
    };
    window.gtag("consent", "default", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    window.gtag("js", new Date());
    window.gtag("config", gaId, {
      send_page_view: false,
      page_location: analyticsUrl(location.href),
      page_referrer: referrerHost(document.referrer, location.hostname)
        ? new URL(document.referrer).origin
        : "",
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
    setGaReady(true);
  }, [active, consent]);
  useEffect(() => {
    if (!active || consent !== "granted") return;
    const data = attribution();
    if (debug)
      console.info("[analytics]", "page_view", { page: pathname, ...data });
    if (gaId && gaReady)
      window.gtag?.("event", "page_view", {
        page_title: document.title,
        page_location: analyticsUrl(location.href),
        page_referrer:
          previousPage.current ??
          (referrerHost(document.referrer, location.hostname)
            ? new URL(document.referrer).origin
            : ""),
        ...data,
      });
    if (gaId && gaReady) previousPage.current = analyticsUrl(location.href);
  }, [pathname, consent, active, gaReady]);
  useEffect(() => {
    if (!active || consent !== "granted") return;
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio >= 0.25 &&
            !seen.has(entry.target.id)
          ) {
            seen.add(entry.target.id);
            trackEvent("section_view", { section: entry.target.id });
          }
        }),
      { threshold: 0.25 },
    );
    document
      .querySelectorAll("section[id]")
      .forEach((el) => observer.observe(el));
    const depths = new Set<number>();
    const scroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height <= 0) return;
      const percent = (window.scrollY / height) * 100;
      [25, 50, 75, 90].forEach((n) => {
        if (percent >= n && !depths.has(n)) {
          depths.add(n);
          trackEvent("scroll_depth", { percent: n });
        }
      });
    };
    window.addEventListener("scroll", scroll, { passive: true });
    // Count actual visible time. Hidden tabs do not inflate engagement.
    let elapsed = 0;
    let last = performance.now();
    let engaged = false;
    const interval = setInterval(() => {
      const now = performance.now();
      if (document.visibilityState === "visible")
        elapsed += Math.min(now - last, 2000);
      last = now;
      if (elapsed >= 30_000 && !engaged) {
        engaged = true;
        trackEvent("engaged_30s", { page: pathname });
      }
    }, 1000);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scroll);
      clearInterval(interval);
    };
  }, [pathname, consent, active]);
  const load = active && consent === "granted";
  return (
    <>
      {load && vercelEnabled && (
        <Analytics
          beforeSend={(event) => ({ ...event, url: analyticsUrl(event.url) })}
        />
      )}
      {load && speedEnabled && (
        <SpeedInsights
          beforeSend={(event) => ({ ...event, url: analyticsUrl(event.url) })}
        />
      )}
      {load && gaId && (
        <Script
          id="mb-ga4"
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        />
      )}
      {visible && (
        <aside className="consent-panel" aria-label="Preferencias de métricas">
          <div>
            <span className="eyebrow">TU PRIVACIDAD</span>
            <h2>¿Me ayudás a mejorar este espacio?</h2>
            <p>
              {active
                ? "Con tu permiso puedo medir visitas, procedencia e interacciones. Sin tu nombre ni tu correo."
                : "La medición no está activa en este entorno. Podés dejar elegida tu preferencia."}{" "}
              <Link href="/privacidad">Ver detalles</Link>
            </p>
            {storageError && (
              <p role="status">
                Tu navegador no permite guardar la preferencia. La medición
                permanece desactivada.
              </p>
            )}
          </div>
          <div className="consent-actions">
            <button
              className="button button-dark"
              onClick={() => choose("granted")}
            >
              Aceptar métricas
            </button>
            <button
              className="button button-outline"
              onClick={() => choose("denied")}
            >
              Solo lo necesario
            </button>
            <button className="text-button" onClick={() => setVisible(false)}>
              Cerrar
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
