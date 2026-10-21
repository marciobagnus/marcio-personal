import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const read = (path) => readFileSync(`.next/server/app/${path}.html`, "utf8");
const home = read("index");
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
  assert.equal((page.match(/<h1[ >]/g) ?? []).length, 1);
  assert.ok(page.includes("El problema"));
  assert.ok(page.includes('name="description"'));
  if (slug === "bagnus-platform" || slug === "quasar") {
    assert.ok(page.includes(`href="https://github.com/marciobagnus/${slug}"`));
    assert.ok(!page.includes("El código de este proyecto es privado"));
  }
}
assert.ok(read("privacidad").includes("Preferencias de métricas"));
assert.ok(!home.includes('src="https://www.googletagmanager.com'));
assert.ok(!home.includes("fonts.googleapis.com"));
console.log(
  "HTML smoke checks passed: anchors, metadata, project routes, public repositories, local fonts and default analytics state.",
);
