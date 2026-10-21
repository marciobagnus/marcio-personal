export type Category = "Industria" | "Backend" | "IoT" | "Exploración";
export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  category: Category;
  year: string;
  summary: string;
  tags: string[];
  github?: string;
  website?: string;
  challenge: string;
  approach: string;
  learnings: string;
  visual: "platform" | "loomarq" | "quasar" | "esp32" | "robot";
};
// Curaduría explícita. No se consulta GitHub en runtime ni se exponen repos privados.
export const projects: Project[] = [
  {
    slug: "bagnus-platform",
    title: "Bagnus Platform",
    eyebrow: "DEL TALLER AL SOFTWARE",
    category: "Industria",
    year: "Proyecto propio",
    summary:
      "La operación de un taller, conectada: clientes, máquinas, reparaciones y presupuestos en un mismo lugar.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    github: "https://github.com/marciobagnus/bagnus-platform",
    visual: "platform",
    challenge:
      "Representar lo que pasa en un taller sin perder la historia de cada máquina, sus ingresos y las decisiones de cada reparación.",
    approach:
      "Un monolito modular con arquitectura limpia. Cada ingreso físico genera una orden de reparación; los cambios de estado quedan registrados. La gestión contempla clientes, máquinas y presupuestos, con permisos por rol.",
    learnings:
      "Un buen modelo de dominio empieza escuchando a quienes trabajan con él todos los días. La trazabilidad y las reglas claras importan tanto como la tecnología.",
  },
  {
    slug: "loomarq",
    title: "LOOMARQ",
    eyebrow: "TECNOLOGÍA CERCA DE LA INDUSTRIA",
    category: "Industria",
    year: "Iniciativa propia",
    summary:
      "Una iniciativa para acercar la ingeniería digital a la producción industrial y la maquinaria automatizada.",
    tags: ["Digitalización", "Manufactura", "Web"],
    github: "https://github.com/marciobagnus/loomarq-web",
    website: "https://getloomarq.com",
    visual: "loomarq",
    challenge:
      "Hacer comprensible una propuesta tecnológica para personas que necesitan resolver problemas concretos de producción y maquinaria.",
    approach:
      "Un sitio público que presenta la iniciativa y abre un canal de consulta. El primer foco combina producción industrial, maquinaria y comprensión del contexto de cada caso.",
    learnings:
      "La conversación con la industria empieza por el problema, el proceso y las personas. La solución técnica viene después.",
  },
  {
    slug: "quasar",
    title: "Operación Fuego de Quasar",
    eyebrow: "BACKEND · MERCADO LIBRE",
    category: "Backend",
    year: "Challenge técnico",
    summary:
      "El challenge que resolví para mi postulación a Mercado Libre: una API en Go que reconstruye un mensaje y localiza su emisor a partir de tres satélites.",
    tags: ["Go", "API REST", "Trilateración"],
    github: "https://github.com/marciobagnus/quasar",
    visual: "quasar",
    challenge:
      "Determinar la posición de un emisor y reconstruir su mensaje a partir de las distancias y los fragmentos recibidos por tres satélites. El desafío fue parte de mi proceso de selección en Mercado Libre.",
    approach:
      "Una API en Go con separación entre modelos, vistas, servicios y almacenamiento en memoria. La ubicación se calcula mediante trilateración y el mensaje se reconstruye combinando sus fragmentos. Los endpoints permiten procesar los tres satélites juntos o recibir la información de cada uno por separado.",
    learnings:
      "Aprender Go mientras resolvía un problema concreto me llevó a conectar un modelo matemático con una API. También aprendí a equilibrar la investigación, la claridad de la solución y el tiempo de entrega.",
  },
  {
    slug: "esp32-iot-web-server",
    title: "ESP32 · Servidor web IoT",
    eyebrow: "MONITOREO Y CONTROL · ESP32",
    category: "IoT",
    year: "Proyecto académico · 2024",
    summary:
      "Un panel web en un ESP32 para consultar sensores, controlar LEDs y un relé, y enviar mensajes a una pantalla OLED desde el navegador.",
    tags: ["ESP32", "Arduino", "C++", "HTTP"],
    github: "https://github.com/marciobagnus/esp32-iot-web-server",
    visual: "esp32",
    challenge:
      "Integrar el monitoreo de sensores y el control de actuadores en una interfaz web como parte de un trabajo práctico académico de 2024.",
    approach:
      "Un servidor HTTP asíncrono con HTML, CSS y JavaScript embebidos en el firmware. La interfaz usa fetch para consultar el potenciómetro y el sensor DHT22, alternar el LED azul y el relé, ajustar otro LED mediante PWM y enviar texto al OLED SH1106. El repositorio recupera el código del trabajo práctico y documenta su preparación en Arduino IDE; la compilación y el funcionamiento actual en hardware están pendientes de validación.",
    learnings:
      "Conectar una interfaz web con sensores y actuadores exige coordinar las solicitudes HTTP, las lecturas y las salidas físicas. Recuperar el proyecto también permitió documentar su procedencia y distinguir las funciones del código de lo que todavía requiere validación en placa.",
  },
  {
    slug: "cinematica-robotica",
    title: "Del cálculo al movimiento.",
    eyebrow: "EXPLORACIÓN · ROBÓTICA",
    category: "Exploración",
    year: "Proyecto académico",
    summary:
      "Simulación de cinemática directa e inversa de un robot de tres grados de libertad. Matemática que se puede ver.",
    tags: ["Octave", "Robótica", "Simulación"],
    github: "https://github.com/marciobagnus/proyecto_robotica",
    visual: "robot",
    challenge:
      "Relacionar los ángulos de las articulaciones de un robot con la posición de su efector final y visualizar sus trayectorias.",
    approach:
      "Simulación en Octave con matrices de Denavit-Hartenberg, cinemática directa e inversa y generación de trayectorias. Incluye figuras geométricas y un menú interactivo.",
    learnings:
      "Visualizar ayuda a conectar la abstracción matemática con el comportamiento de un sistema físico.",
  },
];
