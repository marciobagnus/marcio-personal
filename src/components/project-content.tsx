"use client";
import Link from "next/link";
import { projects, type Project } from "@/content/projects";
import { localizeProject } from "@/content/i18n/localize";
import { ProjectArt } from "./project-art";
import { Arrow } from "./icons";
import { TrackedLink } from "./tracked-link";
import { useLanguage } from "./language-provider";
export function ProjectContent({ project }: { project: Project }) {
  const { copy } = useLanguage();
  const p = localizeProject(project, copy);
  const next = localizeProject(
    projects[
      (projects.findIndex((p) => p.slug === project.slug) + 1) % projects.length
    ],
    copy,
  );
  return (
    <main id="contenido" className="case-page container">
      <div id="inicio" />
      <Link href="/#proyectos" className="back-link">
        {copy.projectPage.back}
      </Link>
      <p className="eyebrow">{p.eyebrow}</p>
      <h1>{p.title}</h1>
      <p className="case-summary">{p.summary}</p>
      <div className="case-bar">
        <div className="tags">
          {p.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <span>{p.year}</span>
      </div>
      <ProjectArt kind={p.visual} large />
      <p className="art-disclaimer">{copy.projectPage.illustration}</p>
      <div className="case-content">
        {[
          ["01", copy.projectPage.sections[0], p.challenge],
          ["02", copy.projectPage.sections[1], p.approach],
          ["03", copy.projectPage.sections[2], p.learnings],
        ].map(([n, title, text]) => (
          <section key={n}>
            <span className="eyebrow">{n} /</span>
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </section>
        ))}
        <div className="case-actions">
          {p.github ? (
            <TrackedLink
              className="button button-dark"
              href={p.github}
              target="_blank"
              rel="noopener"
              event="outbound_click"
              properties={{ target: p.slug, placement: "case_github" }}
            >
              {copy.projectPage.repo} <Arrow diagonal />
            </TrackedLink>
          ) : (
            <p>{copy.projectPage.private}</p>
          )}
          {p.website && (
            <TrackedLink
              className="button button-outline"
              href={p.website}
              target="_blank"
              rel="noopener"
              event="outbound_click"
              properties={{ target: p.slug, placement: "case_website" }}
            >
              {copy.projectPage.website} <Arrow diagonal />
            </TrackedLink>
          )}
          <TrackedLink
            className="quiet-link"
            href="/#contacto"
            event="contact_click"
            properties={{ channel: "section", placement: "case" }}
          >
            {copy.projectPage.contact} <Arrow />
          </TrackedLink>
        </div>
      </div>
      <TrackedLink
        className="next-project"
        href={`/proyectos/${next.slug}`}
        event="project_open"
        properties={{ project: next.slug, placement: "next_project" }}
      >
        <div>
          <span className="eyebrow">{copy.projectPage.next}</span>
          <h2>{next.title}</h2>
        </div>
        <Arrow diagonal />
      </TrackedLink>
    </main>
  );
}
