import Link from "next/link";
export default function NotFound() {
  return (
    <main id="contenido" className="not-found container">
      <p className="eyebrow">404 / FUERA DEL MAPA</p>
      <h1>
        Esta página
        <br />
        todavía no existe.
      </h1>
      <p>Volvamos a un buen punto de partida.</p>
      <Link className="button button-dark" href="/">
        Volver al inicio ↗
      </Link>
    </main>
  );
}
