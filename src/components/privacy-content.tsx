"use client";
import Link from "next/link";
import { profile } from "@/content/profile";
import { PrivacyPreferences } from "./analytics";
import { useLanguage } from "./language-provider";

export function PrivacyContent() {
  const { copy } = useLanguage();
  const p = copy.privacy;
  return (
    <main id="contenido" className="privacy-page container">
      <div id="inicio" />
      <Link className="back-link" href="/">
        {p.back}
      </Link>
      <p className="eyebrow">{p.eyebrow}</p>
      <h1>
        {p.title}
        <br />
        <span>{p.emphasis}</span>
      </h1>
      <p className="privacy-intro">
        {p.introBefore} {profile.name}. {p.introAfter}
      </p>
      {p.sections.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {index === 2 && <PrivacyPreferences />}
          {index === 3 && (
            <p>
              {p.contact}{" "}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>.
            </p>
          )}
        </section>
      ))}
    </main>
  );
}
