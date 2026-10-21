// Contact and professional facts are shared between languages.
// description/tagline remain Spanish for existing SEO consumers.
export const profile = {
  name: "Marcio Bagnus",
  email: "marciobagnus@gmail.com",
  location: "Córdoba, Argentina",
  github: "https://github.com/marciobagnus",
  linkedin: "https://www.linkedin.com/in/marciobagnus/",
  description:
    "Ingeniero en Sistemas. Conecto tecnología, personas e industria para transformar problemas reales en soluciones con sentido.",
  tagline: "Ingeniería con mirada humana.",
};
export const experience = [
  {
    id: "bagnus",
    date: "2024 — 2026",
    company: "Máquinas Bagnus",
  },
  {
    id: "libellula",
    date: "2023",
    company: "Libellula Software",
  },
  {
    id: "mercadolibre",
    date: "2021 — 2023",
    company: "Mercado Libre",
  },
  {
    id: "municipality",
    date: "2016 — 2021",
    company: "Municipalidad de Córdoba",
  },
  {
    id: "iveco",
    date: "2012 — 2014",
    company: "Iveco",
  },
] as const;
export const curiosities = [
  {
    number: "01",
    kind: "music",
  },
  {
    number: "02",
    kind: "mind",
  },
  {
    number: "03",
    kind: "italy",
  },
  {
    number: "04",
    kind: "learn",
  },
] as const;
