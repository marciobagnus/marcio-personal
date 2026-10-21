"use client";

import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { es } from "@/content/i18n/es";
import { en } from "@/content/i18n/en";
import type { Dictionary, Language } from "@/content/i18n/types";
import {
  documentLanguages,
  isLanguage,
  LANGUAGE_KEY,
  readLanguage,
} from "@/lib/language";

const dictionaries: Record<Language, Dictionary> = { es, en };
const LanguageContext = createContext<{
  language: Language;
  copy: Dictionary;
  setLanguage: (language: Language) => void;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Server render and first client render must agree. Never read storage here.
  const [language, updateLanguage] = useState<Language>("es");
  const readingPosition = useRef<{ element: Element; top: number } | null>(
    null,
  );

  const setLanguage = (next: Language) => {
    const headerBottom =
      document.querySelector(".site-header")?.getBoundingClientRect().bottom ??
      0;
    const element = [
      ...document.querySelectorAll(
        "main h1, main h2, main h3, main p, main .diagram-label, .site-footer",
      ),
    ].find((element) => {
      const rect = element.getBoundingClientRect();
      return rect.bottom > headerBottom + 16 && rect.top < window.innerHeight;
    });
    readingPosition.current = element
      ? { element, top: element.getBoundingClientRect().top }
      : null;
    updateLanguage(next);
    try {
      localStorage.setItem(LANGUAGE_KEY, next);
    } catch {
      // In-memory preference still works for the lifetime of this app visit.
    }
  };

  useEffect(() => {
    try {
      updateLanguage(readLanguage(localStorage));
    } catch {
      // Some browsers deny access to the storage object itself.
    }
    const sync = (event: StorageEvent) => {
      if (event.key === LANGUAGE_KEY)
        updateLanguage(isLanguage(event.newValue) ? event.newValue : "es");
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  useLayoutEffect(() => {
    document.documentElement.lang = documentLanguages[language];
    const position = readingPosition.current;
    if (position?.element.isConnected) {
      window.scrollBy({
        top: position.element.getBoundingClientRect().top - position.top,
        behavior: "instant",
      });
    }
    readingPosition.current = null;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, copy: dictionaries[language], setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("LanguageProvider is required");
  return value;
}

export function SkipLink() {
  const { copy } = useLanguage();
  return (
    <a className="skip-link" href="#contenido">
      {copy.navigation.skip}
    </a>
  );
}
