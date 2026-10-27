import { profile } from "@/content/profile";
const rawUrl = process.env.NEXT_PUBLIC_SITE_URL;
function resolveSiteUrl() {
  if (!rawUrl) return null;
  try {
    const u = new URL(rawUrl);
    return u.protocol === "https:" || u.protocol === "http:" ? u.origin : null;
  } catch {
    return null;
  }
}
export const siteUrl = resolveSiteUrl();
export const isIndexable =
  Boolean(siteUrl) &&
  (process.env.VERCEL_ENV
    ? process.env.VERCEL_ENV === "production"
    : process.env.NODE_ENV === "production");
export const absoluteUrl = (path: string) =>
  siteUrl ? new URL(path, siteUrl).toString() : path;
export const baseTitle = `${profile.name} · Backend Software Engineer`;
