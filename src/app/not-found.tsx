"use client";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { Lines } from "@/components/lines";
export default function NotFound() {
  const { copy } = useLanguage();
  return (
    <main id="contenido" className="not-found container">
      <div id="inicio" />
      <p className="eyebrow">{copy.notFound.eyebrow}</p>
      <h1>
        <Lines lines={copy.notFound.title} />
      </h1>
      <p>{copy.notFound.text}</p>
      <Link className="button button-dark" href="/">
        {copy.notFound.back}
      </Link>
    </main>
  );
}
