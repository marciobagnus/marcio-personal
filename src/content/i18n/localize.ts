import type { Project } from "../projects";
import type { Dictionary } from "./types";

export function localizeProject(project: Project, copy: Dictionary) {
  const editorial = copy.projects[project.slug];
  return {
    ...project,
    ...editorial,
    year: [editorial.year, project.year].filter(Boolean).join(" · "),
    challenge: editorial.challenge.replace(
      "{year}",
      String(project.year ?? ""),
    ),
    tags: project.tags.map((tag) =>
      Object.hasOwn(copy.tags, tag)
        ? copy.tags[tag as keyof Dictionary["tags"]]
        : tag,
    ),
  };
}
