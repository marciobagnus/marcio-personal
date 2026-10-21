export type Category = "Industria" | "Backend" | "IoT" | "Exploración";
export type ProjectSlug =
  | "bagnus-platform"
  | "loomarq"
  | "quasar"
  | "esp32-iot-web-server"
  | "cinematica-robotica";
export type Project = {
  slug: ProjectSlug;
  category: Category;
  tags: string[];
  year?: number;
  github?: string;
  website?: string;
  visual: "platform" | "loomarq" | "quasar" | "esp32" | "robot";
};
// Shared facts only. Editorial copy lives in content/i18n.
export const projects: Project[] = [
  {
    slug: "bagnus-platform",
    category: "Industria",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    github: "https://github.com/marciobagnus/bagnus-platform",
    visual: "platform",
  },
  {
    slug: "loomarq",
    category: "Industria",
    tags: ["Digitalización", "Manufactura", "Web"],
    github: "https://github.com/marciobagnus/loomarq-web",
    website: "https://getloomarq.com",
    visual: "loomarq",
  },
  {
    slug: "quasar",
    category: "Backend",
    tags: ["Go", "API REST", "Trilateración"],
    github: "https://github.com/marciobagnus/quasar",
    visual: "quasar",
  },
  {
    slug: "esp32-iot-web-server",
    category: "IoT",
    tags: ["ESP32", "Arduino", "C++", "HTTP"],
    github: "https://github.com/marciobagnus/esp32-iot-web-server",
    visual: "esp32",
    year: 2024,
  },
  {
    slug: "cinematica-robotica",
    category: "Exploración",
    tags: ["Octave", "Robótica", "Simulación"],
    github: "https://github.com/marciobagnus/proyecto_robotica",
    visual: "robot",
  },
];
