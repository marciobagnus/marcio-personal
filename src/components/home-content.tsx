"use client";
import { profile, experience, curiosities } from "@/content/profile";
import { Arrow, Asterisk } from "./icons";
import { Projects } from "./projects";
import { CopyEmail } from "./copy-email";
import { TrackedLink } from "./tracked-link";
import { useLanguage } from "./language-provider";
export function HomeContent() {
  const { copy } = useLanguage();
  const h = copy.home;
  return (
    <>
      <section className="hero container" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> {h.hero.eyebrow}
          </p>
          <h1>
            {h.hero.title[0]}
            <br />
            {h.hero.title[1]}
            <br />
            <span>
              {h.hero.emphasis[0]}
              <br />
              {h.hero.emphasis[1]}
            </span>
          </h1>
          <p className="hero-intro">{h.hero.intro}</p>
          <div className="hero-actions">
            <TrackedLink
              className="button button-dark"
              href="#proyectos"
              event="navigation_click"
              properties={{ target: "projects_hero" }}
            >
              {h.hero.projects} <Arrow />
            </TrackedLink>
            <TrackedLink
              className="quiet-link"
              href="#sobre-mi"
              event="navigation_click"
              properties={{ target: "about_hero" }}
            >
              {h.hero.about} <span>↓</span>
            </TrackedLink>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-heading">
            <span>{h.hero.visualHeading}</span>
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
              {h.hero.technology} <b>01</b>
            </span>
            <span className="diagram-label label-people">
              {h.hero.people} <b>02</b>
            </span>
            <span className="diagram-label label-purpose">
              {h.hero.purpose} <b>03</b>
            </span>
            <i className="diagram-point point-one" />
            <i className="diagram-point point-two" />
            <div className="diagram-caption">
              {h.hero.caption}
              <br />
              <strong>{h.hero.captionStrong}</strong>
            </div>
          </div>
          <div className="visual-bottom">
            <span>{h.hero.mind}</span>
            <span>{h.hero.perspective}</span>
          </div>
        </div>
        <div className="hero-foot">
          <span>{h.hero.motto}</span>
          <a href="#sobre-mi">
            {h.hero.explore} <span>↓</span>
          </a>
          <span>{h.hero.coordinates}</span>
        </div>
      </section>
      <div className="experience-strip">
        <div className="container">
          <span>{h.hero.experience}</span>
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
          <p className="eyebrow">{h.about.eyebrow}</p>
          <div className="side-note">
            {h.about.note[0]}
            <br />
            {h.about.note[1]}
          </div>
        </div>
        <div className="section-main">
          <h2>
            {h.about.title}
            <br />
            <span>{h.about.emphasis}</span>
          </h2>
          <div className="about-columns">
            <p>{h.about.paragraphs[0]}</p>
            <p>{h.about.paragraphs[1]}</p>
          </div>
          <blockquote>{h.about.quote}</blockquote>
          <div className="about-facts">
            <div>
              <strong>{h.about.facts[0].title}</strong>
              <span>{h.about.facts[0].text}</span>
            </div>
            <div>
              <strong>{h.about.facts[1].title}</strong>
              <span>{h.about.facts[1].text}</span>
            </div>
            <div>
              <strong>{h.about.facts[2].title}</strong>
              <span>{h.about.facts[2].text}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="projects-section section" id="proyectos">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{h.projects.eyebrow}</p>
              <h2>
                {h.projects.title}
                <br />
                <span>{h.projects.emphasis}</span>
              </h2>
            </div>
            <p>
              {h.projects.note[0]}
              <br />
              {h.projects.note[1]}
            </p>
          </div>
          <Projects />
          <div className="all-github">
            <span>{h.projects.more}</span>
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
              {h.projects.github} <Arrow diagonal />
            </TrackedLink>
          </div>
        </div>
      </section>
      <section className="section container journey-section" id="recorrido">
        <div className="section-side">
          <p className="eyebrow">{h.journey.eyebrow}</p>
          <h2>
            {h.journey.title[0]}
            <br />
            {h.journey.title[1]}
            <br />
            <span>{h.journey.emphasis}</span>
          </h2>
          <p className="side-note">
            {h.journey.note[0]}
            <br />
            {h.journey.note[1]}
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
                <span className="timeline-role">
                  {copy.experience[e.id].role}
                </span>
                <p>{copy.experience[e.id].text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="human-section section" id="lado-b">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{h.personal.eyebrow}</p>
              <h2>
                {h.personal.title}
                <br />
                <span>{h.personal.emphasis}</span>
              </h2>
            </div>
            <p>
              {h.personal.note[0]}
              <br />
              {h.personal.note[1]}
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
                  <span>{copy.curiosities[c.kind].label}</span>
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
                <h3>{copy.curiosities[c.kind].title}</h3>
                <p>{copy.curiosities[c.kind].text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section container contact-section" id="contacto">
        <div className="contact-top">
          <p className="eyebrow">
            <span className="status-dot" /> {h.contact.eyebrow}
          </p>
          <span>{h.contact.location}</span>
        </div>
        <div className="contact-body">
          <h2>
            {h.contact.title[0]}
            <br />
            {h.contact.title[1]}
            <br />
            <em>{h.contact.emphasis}</em>
          </h2>
          <div>
            <p>{h.contact.intro}</p>
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
    </>
  );
}
