"use client";
import { useState } from "react";
import Link from "next/link";
import { Arrow } from "./icons";
import { TrackedLink } from "./tracked-link";
import { useLanguage } from "./language-provider";
import { LanguageSwitch } from "./language-switch";
const links = [
  ["about", "sobre-mi"],
  ["projects", "proyectos"],
  ["journey", "recorrido"],
  ["personal", "lado-b"],
] as const;
export function Navigation() {
  const [open, setOpen] = useState(false);
  const { copy } = useLanguage();
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label={copy.navigation.home}>
          mb<span>✳</span>
          <small>Marcio Bagnus</small>
        </Link>
        <nav
          id="main-nav"
          aria-label={copy.navigation.main}
          className={open ? "nav-links is-open" : "nav-links"}
        >
          {links.map(([label, id]) => (
            <TrackedLink
              key={id}
              href={`/#${id}`}
              event="navigation_click"
              properties={{ target: id }}
              onClick={() => setOpen(false)}
            >
              {copy.navigation[label]}
            </TrackedLink>
          ))}
          <TrackedLink
            className="nav-contact"
            href="/#contacto"
            event="contact_click"
            properties={{ channel: "section", placement: "nav" }}
            onClick={() => setOpen(false)}
          >
            {copy.navigation.contact} <Arrow diagonal />
          </TrackedLink>
        </nav>
        <div className="header-controls">
          <LanguageSwitch />
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? copy.navigation.close : copy.navigation.open}
          </button>
        </div>
      </div>
    </header>
  );
}
