import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { HomeContent } from "@/components/home-content";
import { siteUrl } from "@/lib/site";
export const metadata: Metadata = {
  ...(siteUrl ? { alternates: { canonical: siteUrl } } : {}),
};
export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    description: profile.description,
    ...(siteUrl ? { url: siteUrl } : {}),
    sameAs: [profile.github, profile.linkedin],
    jobTitle: "Ingeniero en Sistemas de Información",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad Tecnológica Nacional · Facultad Regional Córdoba",
    },
    knowsAbout: [
      "Ingeniería de software",
      "Software industrial",
      "Transformación digital",
    ],
    homeLocation: { "@type": "Place", name: profile.location },
  };
  return (
    <main id="contenido">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HomeContent />
    </main>
  );
}
