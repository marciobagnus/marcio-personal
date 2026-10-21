import type { Dictionary } from "./types";

export const en: Dictionary = {
  language: { label: "Language", announcement: "Language: English." },
  navigation: {
    home: "Marcio Bagnus · Home",
    main: "Main navigation",
    open: "Menu +",
    close: "Close −",
    about: "About me",
    projects: "Projects",
    journey: "My journey",
    personal: "Beyond work",
    contact: "Let’s talk",
    skip: "Skip to content",
  },
  home: {
    hero: {
      eyebrow: "SYSTEMS ENGINEER · CÓRDOBA, AR",
      title: ["Technology", "transforms."],
      emphasis: ["People give it", "purpose."],
      intro:
        "I’m Marcio. I connect engineering, people and industry to build solutions that matter.",
      projects: "Explore my projects",
      about: "A little about me",
      visualHeading: "HOW I SEE THE WORLD",
      technology: "TECHNOLOGY",
      people: "PEOPLE",
      purpose: "PURPOSE",
      caption: "Where these worlds meet",
      captionStrong: "is where I want to be.",
      mind: "AN ENGINEER’S MIND.",
      perspective: "A HUMAN PERSPECTIVE. ↗",
      motto: "Engineering with heart.",
      explore: "KEEP EXPLORING",
      coordinates: "31°25′ S · 64°11′ W",
      experience: "MY PATH HAS TAKEN ME THROUGH",
    },
    about: {
      eyebrow: "01 / ABOUT ME",
      note: ["Engineering is my foundation.", "Curiosity is my compass."],
      title: "Understand the system.",
      emphasis: "The human one, too.",
      paragraphs: [
        "My journey brings together software, industry and real-world problems. I’ve worked in the public sector, e-commerce and CAD/CAM software in Italy. Each setting taught me to look beyond the screen.",
        "Today, I’m especially interested in the meeting point of technology, business and people. I want to contribute through engineering, listen more closely and support changes that make sense to the people experiencing them.",
      ],
      quote:
        "“I want to be an engineer who understands people and can lead change through technology.”",
      facts: [
        {
          title: "Systems Engineering",
          text: "UTN · Facultad Regional Córdoba",
        },
        {
          title: "Artificial Intelligence",
          text: "Bachelor’s degree in progress · UTN FRC",
        },
        {
          title: "Argentina ↔ Italy",
          text: "Two cultures, an open perspective",
        },
      ],
    },
    projects: {
      eyebrow: "02 / IDEAS TAKING SHAPE",
      title: "From a problem",
      emphasis: "to something tangible.",
      note: [
        "Personal projects and explorations.",
        "The common thread: learning by doing.",
      ],
      more: "More experiments, code and learning.",
      github: "My GitHub profile",
    },
    journey: {
      eyebrow: "03 / MY JOURNEY",
      title: ["It wasn’t a", "straight line."],
      emphasis: "That adds perspective.",
      note: ["Every industry taught me", "a different way of seeing."],
    },
    personal: {
      eyebrow: "04 / BEYOND THE IDE",
      title: "There’s more",
      emphasis: "to who I am.",
      note: ["A professional profile", "doesn’t tell the whole story."],
    },
    contact: {
      eyebrow: "05 / WHERE WE MEET NEXT",
      location: "CÓRDOBA, ARGENTINA · CONNECTED TO THE WORLD",
      title: ["Good ideas", "start with a"],
      emphasis: "conversation.",
      intro:
        "Do we share a question, a project or a way of looking at things? I’d enjoy getting to know you.",
    },
  },
  projectList: {
    filter: "Filter projects",
    filters: {
      Todos: "All",
      Industria: "Industry",
      Backend: "Backend",
      IoT: "IoT",
      Exploración: "Exploration",
    },
    count: "projects",
    caseLink: "View case study:",
    repo: "View on GitHub",
  },
  tags: {
    Digitalización: "Digitalisation",
    Manufactura: "Manufacturing",
    Web: "Web",
    "API REST": "REST API",
    Trilateración: "Trilateration",
    Robótica: "Robotics",
    Simulación: "Simulation",
  },
  projectPage: {
    back: "← All projects",
    illustration: "Conceptual project illustration.",
    sections: ["The problem", "The approach", "What I learned"],
    repo: "Explore the repository",
    private:
      "The code for this project is private. We can talk about the approach.",
    website: "Visit the website",
    contact: "Let’s talk",
    next: "KEEP EXPLORING",
  },
  art: {
    api: "GO / REST API",
    workshop: "Workshop / Orders",
    title: ["Every machine,", "its own story."],
    intake: "Intake",
    diagnosis: "Diagnosis",
    repair: "Repair",
    digital: "DIGITAL ENGINEERING",
    loomarq: "People. Processes. Technology.",
    sender: "Sender",
    quasar: "Three signals. One meeting point.",
    esp32: "One browser. A physical world.",
    robot: "3 DOF / endless questions",
  },
  footer: {
    made: "Made with care. And curiosity.",
    privacy: "Privacy",
    top: "Back to top ↑",
    topLabel: "Back to the top",
  },
  clipboard: {
    idle: "Copy email",
    success: "Email copied!",
    error: "You can select the email address and copy it.",
  },
  metrics: {
    preferences: "Analytics preferences",
    eyebrow: "YOUR PRIVACY",
    title: "Will you help me improve this space?",
    active:
      "With your permission, I can measure visits, traffic sources and interactions. Without your name or email address.",
    inactive:
      "Analytics is not active in this environment. You can still save your preference.",
    details: "View details",
    storageError:
      "Your browser cannot save this preference. Analytics remains disabled.",
    accept: "Accept analytics",
    reject: "Essential only",
    close: "Close",
  },
  privacy: {
    back: "← Back to home",
    eyebrow: "A TRANSPARENT SPACE",
    title: "Privacy",
    emphasis: "and analytics.",
    introBefore: "This is the personal website of",
    introAfter: "Here’s how measurement works when it is enabled.",
    sections: [
      {
        title: "What can be measured",
        paragraphs: [
          "With your consent, the configured providers may measure page views, referring domains, UTM campaigns, device, browser and approximate location. Events include opening projects, contact clicks, sections viewed, scroll depth and visible reading time.",
          "Custom events do not send names, email addresses, messages or the full URL of the page you came from. Only UTM parameters formatted as public labels are retained. Measurement does not identify visitors by name.",
        ],
      },
      {
        title: "Providers and storage",
        paragraphs: [
          "The available integrations are Vercel Web Analytics, Vercel Speed Insights and Google Analytics 4. They load only when configured and you accept analytics. GA4 may use first-party cookies and pseudonymous identifiers. Campaign attribution is saved in sessionStorage for the lifetime of the tab after consent.",
          "Your choice is kept in localStorage until you change it or clear your browser data. You can decline without losing access to the content. Report retention periods depend on the provider and the settings chosen by the site owner.",
          "The language preference is saved separately in localStorage and does not depend on accepting analytics. If storage is unavailable, you can still change the language during your visit.",
        ],
      },
      {
        title: "Your choice",
        paragraphs: [
          "You can review or withdraw permission using the button below or the footer. Withdrawing permission stops measurement, clears local attribution and deletes GA cookies accessible from this domain. Aggregated records already sent may remain in reports.",
        ],
      },
      {
        title: "Contact and external links",
        paragraphs: [
          "The email link opens your email application; this site has no form that stores your data. GitHub, LinkedIn and linked projects have their own policies. The hosting provider may process technical logs to deliver and protect the pages.",
        ],
      },
    ],
    contact: "For privacy questions, email me at",
  },
  notFound: {
    eyebrow: "404 / OFF THE MAP",
    title: ["This page", "doesn’t exist yet."],
    text: "Let’s return to a good starting point.",
    back: "Back to home ↗",
  },
  projects: {
    "bagnus-platform": {
      title: "Bagnus Platform",
      eyebrow: "FROM THE WORKSHOP TO SOFTWARE",
      year: "Personal project",
      summary:
        "A connected workshop operation: customers, machines, repairs and quotes in one place.",
      challenge:
        "Representing what happens in a workshop while preserving each machine’s history, intake records and repair decisions.",
      approach:
        "A modular monolith with clean architecture. Each physical intake creates a repair order, and changes in status are recorded. The system manages customers, machines and quotes, with role-based permissions.",
      learnings:
        "A good domain model starts by listening to the people who work with it every day. Traceability and clear rules matter as much as technology.",
    },
    loomarq: {
      title: "LOOMARQ",
      eyebrow: "TECHNOLOGY CLOSE TO INDUSTRY",
      year: "Personal initiative",
      summary:
        "An initiative to bring digital engineering closer to industrial production and automated machinery.",
      challenge:
        "Making a technology offering understandable to people who need to solve concrete production and machinery problems.",
      approach:
        "A public website that introduces the initiative and opens a channel for enquiries. The initial focus brings together industrial production, machinery and an understanding of each case’s context.",
      learnings:
        "Conversations with industry start with the problem, the process and the people. The technical solution comes next.",
    },
    quasar: {
      title: "Operación Fuego de Quasar",
      eyebrow: "BACKEND · MERCADO LIBRE",
      year: "Technical challenge",
      summary:
        "The challenge I completed when applying to Mercado Libre: a Go API that reconstructs a message and locates its sender using three satellites.",
      challenge:
        "Determining a sender’s position and reconstructing their message from distances and fragments received by three satellites. The challenge was part of my selection process at Mercado Libre.",
      approach:
        "A Go API separating models, views, services and in-memory storage. The position is calculated through trilateration, and the message is reconstructed by combining its fragments. The endpoints can process all three satellites together or receive information from each one separately.",
      learnings:
        "Learning Go while solving a concrete problem helped me connect a mathematical model with an API. I also learned to balance research, clarity and delivery time.",
    },
    "esp32-iot-web-server": {
      title: "ESP32 · IoT web server",
      eyebrow: "MONITORING AND CONTROL · ESP32",
      year: "Academic project",
      summary:
        "A web dashboard on an ESP32 to read sensors, control LEDs and a relay, and send messages to an OLED display from the browser.",
      challenge:
        "Integrating sensor monitoring and actuator control into a web interface as part of an academic assignment in {year}.",
      approach:
        "An asynchronous HTTP server with HTML, CSS and JavaScript embedded in the firmware. The interface uses fetch to read the potentiometer and DHT22 sensor, toggle the blue LED and relay, adjust another LED through PWM, and send text to the SH1106 OLED. The repository recovers the assignment’s code and documents setup in Arduino IDE; compilation and current hardware operation still need validation.",
      learnings:
        "Connecting a web interface to sensors and actuators requires coordinating HTTP requests, readings and physical outputs. Recovering the project also made it possible to document its origins and distinguish the code’s features from what still needs board-level validation.",
    },
    "cinematica-robotica": {
      title: "From calculation to motion.",
      eyebrow: "EXPLORATION · ROBOTICS",
      year: "Academic project",
      summary:
        "Forward and inverse kinematics simulation for a robot with three degrees of freedom. Mathematics you can see.",
      challenge:
        "Relating a robot’s joint angles to the position of its end effector and visualising its trajectories.",
      approach:
        "An Octave simulation using Denavit–Hartenberg matrices, forward and inverse kinematics, and trajectory generation. It includes geometric figures and an interactive menu.",
      learnings:
        "Visualisation helps connect mathematical abstraction with the behaviour of a physical system.",
    },
  },
  experience: {
    bagnus: {
      role: "Software Engineer · Freelance project",
      text: "From workshop processes to a management platform. Software close to the people who use it.",
    },
    libellula: {
      role: "Backend Software Engineer · Italy",
      text: "CAD/CAM software, nesting and customer support. A view of technology through manufacturing.",
    },
    mercadolibre: {
      role: "Mid-level Backend Software Engineer",
      text: "Microservices with Java and Spring Boot, observability and operating production systems.",
    },
    municipality: {
      role: "Software Engineer",
      text: "Systems built with C#/.NET and SQL Server, continuous integration and work with suppliers.",
    },
    iveco: {
      role: "Engineering Intern · ICT",
      text: "My first experience in industry: regulatory data automation and SQL Server.",
    },
  },
  curiosities: {
    music: {
      label: "In my headphones",
      title: "Progressive house.",
      text: "I enjoy music that gradually builds a story. Electronic music is a space I like to explore.",
    },
    mind: {
      label: "On my radar",
      title: "The human mind.",
      text: "Psychology and neuroscience spark my curiosity. I’m interested in how we learn, change and grow.",
    },
    italy: {
      label: "In my story",
      title: "A bridge to Italy.",
      text: "I’m Argentine and Italian. I worked in Italy, and I enjoy connecting perspectives and cultures.",
    },
    learn: {
      label: "In my nature",
      title: "Always learning.",
      text: "After Systems Engineering at UTN, I started a bachelor’s degree in Artificial Intelligence. Learning remains part of the journey.",
    },
  },
};
