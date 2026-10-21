import type { Metadata } from "next";
import { PrivacyContent } from "@/components/privacy-content";
import { siteUrl, absoluteUrl } from "@/lib/site";
export const metadata: Metadata = {
  title: "Privacidad y métricas",
  ...(siteUrl ? { alternates: { canonical: absoluteUrl("/privacidad") } } : {}),
};
export default function Privacy() {
  return <PrivacyContent />;
}
