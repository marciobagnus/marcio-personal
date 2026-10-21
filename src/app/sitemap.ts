import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { isIndexable, absoluteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexable) return [];
  return [
    "",
    "/privacidad",
    ...projects.map((p) => `/proyectos/${p.slug}`),
  ].map((path) => ({
    url: absoluteUrl(path || "/"),
    changeFrequency: "monthly",
    priority: path ? 0.7 : 1,
  }));
}
