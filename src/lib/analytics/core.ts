export const campaignKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;
export type Campaign = Partial<Record<(typeof campaignKeys)[number], string>>;
export type Attribution = Campaign & { referrer?: string };
export const CONSENT_KEY = "mb:analytics-consent:v1";
export type Consent = "granted" | "denied";
export type EventMap = {
  navigation_click: { target: string };
  project_open: { project: string; placement: string };
  outbound_click: { target: string; placement: string };
  contact_click: { channel: string; placement: string };
  email_copy: { placement: string };
  section_view: { section: string };
  scroll_depth: { percent: number };
  engaged_30s: { page: string };
};
export type EventName = keyof EventMap;
// Campaign values are public slugs, never names, email addresses or free text.
export function campaignFromSearch(search: string): Campaign {
  const params = new URLSearchParams(search);
  return Object.fromEntries(
    campaignKeys.flatMap((key) => {
      const value = params.get(key);
      return value && /^[a-zA-Z0-9_-]{1,80}$/.test(value)
        ? [[key, value.toLowerCase()]]
        : [];
    }),
  );
}
export function referrerHost(referrer: string, currentHost: string) {
  try {
    const url = new URL(referrer);
    return ["https:", "http:"].includes(url.protocol) &&
      url.hostname !== currentHost
      ? url.hostname
      : undefined;
  } catch {
    return undefined;
  }
}
export function analyticsUrl(href: string) {
  const url = new URL(href);
  const safe = new URL(url.pathname, url.origin);
  for (const [key, value] of Object.entries(campaignFromSearch(url.search)))
    safe.searchParams.set(key, value);
  return safe.toString();
}
export function readConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}
