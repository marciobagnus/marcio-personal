import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { ProjectContent } from "@/components/project-content";
import { es } from "@/content/i18n/es";
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
    title: es.projects[project.slug].title,
    description: es.projects[project.slug].summary,
    ...(siteUrl
      ? { alternates: { canonical: absoluteUrl(`/proyectos/${slug}`) } }
      : {}),
    openGraph: {
      title: es.projects[project.slug].title,
      description: es.projects[project.slug].summary,
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
  return <ProjectContent project={p} />;
}
