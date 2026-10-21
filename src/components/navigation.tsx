"use client";
import { useState } from "react";
import Link from "next/link";
import { Arrow } from "./icons";
import { TrackedLink } from "./tracked-link";
const links = [
  ["Sobre mí", "sobre-mi"],
  ["Proyectos", "proyectos"],
  ["El recorrido", "recorrido"],
  ["Lado B", "lado-b"],
];
export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="Marcio Bagnus · Inicio">
          mb<span>✳</span>
          <small>Marcio Bagnus</small>
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Cerrar −" : "Menú +"}
        </button>
        <nav
          id="main-nav"
          aria-label="Principal"
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
              {label}
            </TrackedLink>
          ))}
          <TrackedLink
            className="nav-contact"
            href="/#contacto"
            event="contact_click"
            properties={{ channel: "section", placement: "nav" }}
            onClick={() => setOpen(false)}
          >
            Conversemos <Arrow diagonal />
          </TrackedLink>
        </nav>
      </div>
    </header>
  );
}
