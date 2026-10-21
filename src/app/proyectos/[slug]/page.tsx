import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { ProjectArt } from "@/components/project-art";
import { TrackedLink } from "@/components/tracked-link";
import { Arrow } from "@/components/icons";
import { absoluteUrl, siteUrl } from "@/lib/site";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    ...(siteUrl
      ? { alternates: { canonical: absoluteUrl(`/proyectos/${slug}`) } }
      : {}),
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      ...(siteUrl
        ? {
            url: absoluteUrl(`/proyectos/${slug}`),
            images: [absoluteUrl("/opengraph-image")],
          }
        : {}),
    },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    <main id="contenido" className="case-page container">
      <div id="inicio" />
      <Link href="/#proyectos" className="back-link">
        ← Todos los proyectos
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
      <p className="art-disclaimer">Ilustración conceptual del proyecto.</p>
      <div className="case-content">
        {[
          ["01", "El problema", p.challenge],
          ["02", "El enfoque", p.approach],
          ["03", "Lo que me llevo", p.learnings],
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
              Explorar el repositorio <Arrow diagonal />
            </TrackedLink>
          ) : (
            <p>
              El código de este proyecto es privado. Podemos conversar sobre su
              enfoque.
            </p>
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
              Visitar el sitio <Arrow diagonal />
            </TrackedLink>
          )}
          <TrackedLink
            className="quiet-link"
            href="/#contacto"
            event="contact_click"
            properties={{ channel: "section", placement: "case" }}
          >
            Conversemos <Arrow />
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
          <span className="eyebrow">SEGUIR EXPLORANDO</span>
          <h2>{next.title}</h2>
        </div>
        <Arrow diagonal />
      </TrackedLink>
    </main>
  );
}
