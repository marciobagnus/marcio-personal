import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Metrics } from "@/components/analytics";
import { profile } from "@/content/profile";
import { baseTitle, isIndexable, siteUrl } from "@/lib/site";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/manrope";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl ?? "http://localhost:3000"),
  title: { default: baseTitle, template: `%s · ${profile.name}` },
  description: profile.description,
  applicationName: "Marcio Bagnus",
  authors: [{ name: profile.name }],
  keywords: [
    "Marcio Bagnus",
    "Ingeniería en Sistemas",
    "Transformación digital",
    "Software industrial",
    "Córdoba",
  ],
  robots: { index: isIndexable, follow: isIndexable },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: profile.name,
    title: baseTitle,
    description: profile.description,
    ...(siteUrl
      ? {
          url: siteUrl,
          images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: baseTitle,
    description: profile.description,
    ...(siteUrl ? { images: ["/opengraph-image"] } : {}),
  },
  icons: { icon: "/icon.svg", apple: "/apple-icon" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <Navigation />
        {children}
        <Footer />
        <Metrics />
      </body>
    </html>
  );
}
