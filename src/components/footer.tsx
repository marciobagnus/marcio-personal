"use client";
import Link from "next/link";
import { PrivacyPreferences } from "./analytics";
import { useLanguage } from "./language-provider";
export function Footer() {
  const { copy } = useLanguage();
  return (
    <footer className="site-footer container">
      <p>
        © {new Date().getFullYear()} Marcio Bagnus
        <span>{copy.footer.made}</span>
      </p>
      <div>
        <Link href="/privacidad">{copy.footer.privacy}</Link>
        <PrivacyPreferences />
        <a href="#inicio" aria-label={copy.footer.topLabel}>
          {copy.footer.top}
        </a>
      </div>
    </footer>
  );
}
