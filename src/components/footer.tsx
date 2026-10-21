import Link from "next/link";
import { PrivacyPreferences } from "./analytics";
export function Footer() {
  return (
    <footer className="site-footer container">
      <p>
        © {new Date().getFullYear()} Marcio Bagnus
        <span>Hecho con criterio. Y curiosidad.</span>
      </p>
      <div>
        <Link href="/privacidad">Privacidad</Link>
        <PrivacyPreferences />
        <a href="#inicio" aria-label="Volver al inicio">
          Volver arriba ↑
        </a>
      </div>
    </footer>
  );
}
