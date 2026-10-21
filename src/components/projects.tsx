"use client";
import { useState } from "react";
import { projects, type Category } from "@/content/projects";
import { ProjectArt } from "./project-art";
import { Arrow } from "./icons";
import { TrackedLink } from "./tracked-link";
import { useLanguage } from "./language-provider";
import { localizeProject } from "@/content/i18n/localize";
const filters = [
  "Todos",
  "Industria",
  "Backend",
  "IoT",
  "Exploración",
] as const;
export function Projects() {
  const [filter, setFilter] = useState<Category | "Todos">("Todos");
  const { copy } = useLanguage();
  const visible = projects.filter(
    (p) => filter === "Todos" || p.category === filter,
  );
  return (
    <>
      <div
        className="project-filters"
        role="group"
        aria-label={copy.projectList.filter}
      >
        {filters.map((f) => (
          <button
            key={f}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {copy.projectList.filters[f]}
            {f === "Todos" && (
              <span>{String(projects.length).padStart(2, "0")}</span>
            )}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {visible.length} {copy.projectList.count}
      </p>
      <div className="project-grid">
        {visible.map((project) => {
          const p = localizeProject(project, copy);
          return (
            <article key={p.slug} className="project-card">
              <TrackedLink
                href={`/proyectos/${p.slug}`}
                event="project_open"
                properties={{ project: p.slug, placement: "project_grid" }}
                className="project-image-link"
                aria-label={`${copy.projectList.caseLink} ${p.title}`}
              >
                <ProjectArt kind={p.visual} />
                <span className="project-arrow">
                  <Arrow diagonal />
                </span>
              </TrackedLink>
              <div className="project-meta">
                <span>{p.eyebrow}</span>
                <span>{p.year}</span>
              </div>
              <h3>
                <TrackedLink
                  href={`/proyectos/${p.slug}`}
                  event="project_open"
                  properties={{ project: p.slug, placement: "project_title" }}
                >
                  {p.title}
                </TrackedLink>
              </h3>
              <p>{p.summary}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              {p.github && (
                <TrackedLink
                  className="repo-link"
                  aria-label={`${copy.projectList.repo}: ${p.title}`}
                  href={p.github}
                  target="_blank"
                  rel="noopener"
                  event="outbound_click"
                  properties={{ target: p.slug, placement: "github_grid" }}
                >
                  {copy.projectList.repo} <Arrow diagonal />
                </TrackedLink>
              )}
            </article>
          );
        })}
      </div>
    </>
  );
}
