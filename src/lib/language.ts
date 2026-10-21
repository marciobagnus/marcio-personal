import type { Language } from "@/content/i18n/types";

export const LANGUAGE_KEY = "mb:language:v1";
export const documentLanguages: Record<Language, string> = {
  es: "es-AR",
  en: "en",
};

export function isLanguage(value: unknown): value is Language {
  return value === "es" || value === "en";
}

export function readLanguage(storage: Pick<Storage, "getItem">): Language {
  try {
    const value = storage.getItem(LANGUAGE_KEY);
    return isLanguage(value) ? value : "es";
  } catch {
    return "es";
  }
}
