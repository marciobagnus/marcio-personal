import type { Metadata } from "next";
import { profile, experience, curiosities } from "@/content/profile";
import { Arrow, Asterisk } from "@/components/icons";
import { Projects } from "@/components/projects";
import { CopyEmail } from "@/components/copy-email";
import { TrackedLink } from "@/components/tracked-link";
import { siteUrl } from "@/lib/site";
export const metadata: Metadata = {
  ...(siteUrl ? { alternates: { canonical: siteUrl } } : {}),
};
export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    description: profile.description,
    ...(siteUrl ? { url: siteUrl } : {}),
    sameAs: [profile.github, profile.linkedin],
    jobTitle: "Ingeniero en Sistemas de Información",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad Tecnológica Nacional · Facultad Regional Córdoba",
    },
    knowsAbout: [
      "Ingeniería de software",
      "Software industrial",
      "Transformación digital",
    ],
    homeLocation: { "@type": "Place", name: profile.location },
  };
  return (
    <main id="contenido">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section className="hero container" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> INGENIERO EN SISTEMAS · CÓRDOBA, AR
          </p>
          <h1>
            La tecnología
            <br />
            transforma.
            <br />
            <span>
              Las personas
              <br />
              le dan sentido.
            </span>
          </h1>
          <p className="hero-intro">
            Soy Marcio. Conecto ingeniería, personas e industria para construir
            soluciones que importan.
          </p>
          <div className="hero-actions">
            <TrackedLink
              className="button button-dark"
              href="#proyectos"
              event="navigation_click"
              properties={{ target: "projects_hero" }}
            >
              Explorá mis proyectos <Arrow />
            </TrackedLink>
            <TrackedLink
              className="quiet-link"
              href="#sobre-mi"
              event="navigation_click"
              properties={{ target: "about_hero" }}
            >
              Un poco sobre mí <span>↓</span>
            </TrackedLink>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-heading">
            <span>MI FORMA DE VER EL MUNDO</span>
            <span>FIG. 01</span>
          </div>
          <div className="human-diagram">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="diagram-core">
              <Asterisk />
            </div>
            <span className="diagram-label label-tech">
              TECNOLOGÍA <b>01</b>
            </span>
            <span className="diagram-label label-people">
              PERSONAS <b>02</b>
            </span>
            <span className="diagram-label label-purpose">
              PROPÓSITO <b>03</b>
            </span>
            <i className="diagram-point point-one" />
            <i className="diagram-point point-two" />
            <div className="diagram-caption">
              El punto de encuentro
              <br />
              <strong>es donde quiero estar.</strong>
            </div>
          </div>
          <div className="visual-bottom">
            <span>MENTE DE INGENIERO.</span>
            <span>MIRADA HUMANA. ↗</span>
          </div>
        </div>
        <div className="hero-foot">
          <span>Ingeniería con sentimientos.</span>
          <a href="#sobre-mi">
            SEGUÍ EXPLORANDO <span>↓</span>
          </a>
          <span>31°25′ S · 64°11′ O</span>
        </div>
      </section>
      <div className="experience-strip">
        <div className="container">
          <span>MI CAMINO PASÓ POR</span>
          <div>
            <b>IVECO</b>
            <b>
              Municipalidad
              <br />
              <small>de Córdoba</small>
            </b>
            <b>mercado libre</b>
            <b>
              Libellula<span>software</span>
            </b>
            <b>
              UTN<span>FRC</span>
            </b>
          </div>
        </div>
      </div>
      <section className="section container about-section" id="sobre-mi">
        <div className="section-side">
          <p className="eyebrow">01 / SOBRE MÍ</p>
          <div className="side-note">
            La ingeniería es mi base.
            <br />
            La curiosidad, mi brújula.
          </div>
        </div>
        <div className="section-main">
          <h2>
            Entender el sistema.
            <br />
            <span>También el humano.</span>
          </h2>
          <div className="about-columns">
            <p>
              Mi recorrido une software, industria y problemas del mundo real.
              Pasé por el sector público, el comercio electrónico y el software
              CAD/CAM en Italia. En cada contexto aprendí a mirar más allá de la
              pantalla.
            </p>
            <p>
              Hoy me interesa especialmente el encuentro entre tecnología,
              negocio y personas. Quiero aportar desde la ingeniería, escuchar
              mejor y acompañar cambios que tengan sentido para quienes los
              viven.
            </p>
          </div>
          <blockquote>
            “Quiero ser un ingeniero capaz de comprender a las personas y
            liderar transformaciones a través de la tecnología.”
          </blockquote>
          <div className="about-facts">
            <div>
              <strong>Ingeniería en Sistemas</strong>
              <span>UTN · Facultad Regional Córdoba</span>
            </div>
            <div>
              <strong>Inteligencia Artificial</strong>
              <span>Licenciatura en curso · UTN FRC</span>
            </div>
            <div>
              <strong>Argentina ↔ Italia</strong>
              <span>Dos culturas, una mirada abierta</span>
            </div>
          </div>
        </div>
      </section>
      <section className="projects-section section" id="proyectos">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / IDEAS QUE TOMAN FORMA</p>
              <h2>
                Del problema
                <br />
                <span>a algo concreto.</span>
              </h2>
            </div>
            <p>
              Proyectos propios y exploraciones.
              <br />
              El punto en común: aprender haciendo.
            </p>
          </div>
          <Projects />
          <div className="all-github">
            <span>Más experimentos, código y aprendizaje.</span>
            <TrackedLink
              href={profile.github}
              target="_blank"
              rel="noopener"
              event="outbound_click"
              properties={{
                target: "github_profile",
                placement: "projects_footer",
              }}
            >
              Mi perfil en GitHub <Arrow diagonal />
            </TrackedLink>
          </div>
        </div>
      </section>
      <section className="section container journey-section" id="recorrido">
        <div className="section-side">
          <p className="eyebrow">03 / EL RECORRIDO</p>
          <h2>
            No fue una
            <br />
            línea recta.
            <br />
            <span>Y eso suma.</span>
          </h2>
          <p className="side-note">
            Cada industria me enseñó
            <br />
            una forma distinta de mirar.
          </p>
          <span className="journey-star">
            <Asterisk />
          </span>
        </div>
        <div className="timeline">
          {experience.map((e) => (
            <article key={e.company}>
              <span className="timeline-date">{e.date}</span>
              <div>
                <h3>{e.company}</h3>
                <span className="timeline-role">{e.role}</span>
                <p>{e.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="human-section section" id="lado-b">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / FUERA DEL IDE</p>
              <h2>
                También soy
                <br />
                <span>todo esto.</span>
              </h2>
            </div>
            <p>
              Porque un perfil profesional
              <br />
              no cuenta la historia completa.
            </p>
          </div>
          <div className="curiosity-grid">
            {curiosities.map((c) => (
              <article
                className={`curiosity curiosity-${c.kind}`}
                key={c.number}
              >
                <div className="curiosity-top">
                  <span>{c.number} /</span>
                  <span>{c.label}</span>
                </div>
                {c.kind === "music" ? (
                  <div className="sound-wave" aria-hidden="true">
                    {Array.from({ length: 24 }, (_, i) => (
                      <i
                        key={i}
                        style={{ height: `${18 + ((i * 17 + 11) % 65)}%` }}
                      />
                    ))}
                  </div>
                ) : c.kind === "mind" ? (
                  <div className="mind-art" aria-hidden="true">
                    ?<span>¿</span>
                  </div>
                ) : c.kind === "italy" ? (
                  <div className="italy-art" aria-hidden="true">
                    AR <span>↔</span> IT
                  </div>
                ) : (
                  <div className="learn-art" aria-hidden="true">
                    ∞
                  </div>
                )}
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section container contact-section" id="contacto">
        <div className="contact-top">
          <p className="eyebrow">
            <span className="status-dot" /> 05 / EL PRÓXIMO PUNTO DE ENCUENTRO
          </p>
          <span>CÓRDOBA, ARGENTINA · CONECTADO AL MUNDO</span>
        </div>
        <div className="contact-body">
          <h2>
            Las buenas ideas
            <br />
            empiezan con una
            <br />
            <em>conversación.</em>
          </h2>
          <div>
            <p>
              ¿Compartimos una inquietud, un proyecto o una forma de ver las
              cosas? Me va a gustar conocerte.
            </p>
            <TrackedLink
              className="contact-mail"
              href={`mailto:${profile.email}`}
              event="contact_click"
              properties={{ channel: "email", placement: "contact" }}
            >
              {profile.email}
              <Arrow diagonal />
            </TrackedLink>
            <CopyEmail />
            <div className="contact-socials">
              <TrackedLink
                href={profile.linkedin}
                target="_blank"
                rel="noopener"
                event="contact_click"
                properties={{ channel: "linkedin", placement: "contact" }}
              >
                LinkedIn <Arrow diagonal />
              </TrackedLink>
              <TrackedLink
                href={profile.github}
                target="_blank"
                rel="noopener"
                event="outbound_click"
                properties={{ target: "github_profile", placement: "contact" }}
              >
                GitHub <Arrow diagonal />
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
