"use client";

import { useLanguage } from "./language-provider";

export function LanguageSwitch() {
  const { language, copy, setLanguage } = useLanguage();
  return (
    <div
      className="language-switch"
      role="group"
      aria-label={copy.language.label}
    >
      <button
        type="button"
        lang="es"
        aria-label="ES — Español"
        aria-pressed={language === "es"}
        onClick={() => setLanguage("es")}
      >
        ES
      </button>
      <button
        type="button"
        lang="en"
        aria-label="EN — English"
        aria-pressed={language === "en"}
        onClick={() => setLanguage("en")}
      >
        EN
      </button>
      <span className="sr-only" aria-live="polite">
        {copy.language.announcement}
      </span>
    </div>
  );
}
