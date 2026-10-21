import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const read = (path) => readFileSync(`.next/server/app/${path}.html`, "utf8");
const home = read("index");
assert.match(home, /<html[^>]*lang="es-AR"/);
assert.ok(home.includes('aria-label="ES — Español" aria-pressed="true"'));
assert.ok(home.includes('aria-label="EN — English" aria-pressed="false"'));
assert.ok(home.includes("La tecnología"));
for (const id of [
  "contenido",
  "inicio",
  "sobre-mi",
  "proyectos",
  "recorrido",
  "lado-b",
  "contacto",
])
  assert.ok(home.includes(`id="${id}"`), `Missing anchor: ${id}`);
assert.equal((home.match(/<h1[ >]/g) ?? []).length, 1);
assert.ok(home.includes("application/ld+json"));
assert.ok(home.includes("mailto:marciobagnus@gmail.com"));
assert.ok(
  home.includes('href="https://github.com/marciobagnus/bagnus-platform"'),
);
assert.ok(home.includes('href="https://github.com/marciobagnus/quasar"'));
for (const slug of [
  "bagnus-platform",
  "loomarq",
  "quasar",
  "esp32-iot-web-server",
  "cinematica-robotica",
]) {
  const page = read(`proyectos/${slug}`);
  assert.match(page, /<html[^>]*lang="es-AR"/);
  assert.equal((page.match(/<h1[ >]/g) ?? []).length, 1);
  assert.ok(page.includes("El problema"));
  assert.ok(page.includes('name="description"'));
  if (slug === "bagnus-platform" || slug === "quasar") {
    assert.ok(page.includes(`href="https://github.com/marciobagnus/${slug}"`));
    assert.ok(!page.includes("El código de este proyecto es privado"));
  }
}
assert.ok(read("privacidad").includes("Preferencias de métricas"));
assert.match(read("privacidad"), /<html[^>]*lang="es-AR"/);
assert.ok(read("_not-found").includes("todavía no existe."));
assert.ok(!home.includes('src="https://www.googletagmanager.com'));
assert.ok(!home.includes("fonts.googleapis.com"));
console.log(
  "HTML smoke checks passed: Spanish SSR, language control, anchors, metadata, project routes, privacy/404, public repositories, local fonts and default analytics state.",
);
