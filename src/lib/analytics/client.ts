"use client";
import { track } from "@vercel/analytics";
import {
  analyticsUrl,
  readConsent,
  campaignFromSearch,
  referrerHost,
  type Attribution,
  type EventMap,
  type EventName,
} from "./core";
export const debug = process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "true";
export const vercelEnabled =
  process.env.NEXT_PUBLIC_VERCEL_ANALYTICS === "true";
export const speedEnabled = process.env.NEXT_PUBLIC_SPEED_INSIGHTS === "true";
export const gaId = /^G-[A-Z0-9]+$/.test(process.env.NEXT_PUBLIC_GA_ID ?? "")
  ? process.env.NEXT_PUBLIC_GA_ID
  : undefined;
export const metricsConfigured =
  vercelEnabled || speedEnabled || Boolean(gaId) || debug;
export const environmentEnabled =
  process.env.NODE_ENV === "production" || debug;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
export function attribution(): Attribution {
  const incoming = campaignFromSearch(window.location.search);
  const referrer = referrerHost(document.referrer, window.location.hostname);
  const current: Attribution = {
    ...incoming,
    ...(referrer ? { referrer } : {}),
  };
  try {
    const key = "mb:attribution:v1";
    const previous = JSON.parse(sessionStorage.getItem(key) ?? "null") as {
      first: Attribution;
      last: Attribution;
    } | null;
    // Only write after consent. Preserve first touch, update last on a new campaign.
    const next = previous
      ? {
          first: previous.first,
          last: Object.keys(incoming).length ? current : previous.last,
        }
      : { first: current, last: current };
    sessionStorage.setItem(key, JSON.stringify(next));
    return next.last;
  } catch {
    return current;
  }
}
export function trackEvent<N extends EventName>(
  name: N,
  properties: EventMap[N],
) {
  if (!environmentEnabled || !metricsConfigured || readConsent() !== "granted")
    return;
  const data = { ...attribution(), ...properties };
  if (debug) console.info("[analytics]", name, data);
  if (gaId)
    window.gtag?.("event", name, {
      ...data,
      page_location: analyticsUrl(location.href),
    });
  // Two curated properties maximum for Vercel Pro. Never infer plan from coding experience.
  if (
    vercelEnabled &&
    process.env.NEXT_PUBLIC_VERCEL_CUSTOM_EVENTS === "true"
  ) {
    try {
      track(name, properties);
    } catch {
      /* Analytics must never block navigation. */
    }
  }
}
