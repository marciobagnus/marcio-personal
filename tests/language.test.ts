import { test } from "node:test";
import assert from "node:assert/strict";
import { LANGUAGE_KEY, readLanguage, isLanguage } from "../src/lib/language.ts";
import { CONSENT_KEY } from "../src/lib/analytics/core.ts";
import { es } from "../src/content/i18n/es.ts";
import { en } from "../src/content/i18n/en.ts";
import { projects } from "../src/content/projects.ts";
import { localizeProject } from "../src/content/i18n/localize.ts";

test("language defaults to Spanish and only accepts supported stored preferences", () => {
  for (const value of [null, "", "fr", "EN", "granted", "{}"])
    assert.equal(readLanguage({ getItem: () => value }), "es");
  for (const value of ["es", "en"])
    assert.equal(
      readLanguage({
        getItem: (key) => {
          assert.equal(key, LANGUAGE_KEY);
          return value;
        },
      }),
      value,
    );
  assert.equal(isLanguage("en"), true);
  assert.equal(isLanguage("es-AR"), false);
});

test("denied storage is safe and language storage is independent of consent", () => {
  assert.equal(
    readLanguage({
      getItem: () => {
        throw new Error("Storage unavailable");
      },
    }),
    "es",
  );
  assert.notEqual(LANGUAGE_KEY, CONSENT_KEY);
});

test("both dictionaries cover the same keys with nonempty copy", () => {
  const compare = (spanish: unknown, english: unknown, path = "copy") => {
    if (typeof spanish === "string") {
      assert.equal(typeof english, "string", path);
      assert.ok((english as string).trim(), path);
      return;
    }
    assert.deepEqual(
      Object.keys(english as object).sort(),
      Object.keys(spanish as object).sort(),
      path,
    );
    for (const [key, value] of Object.entries(spanish as object))
      compare(
        value,
        (english as Record<string, unknown>)[key],
        `${path}.${key}`,
      );
  };
  compare(es, en);
});

test("localised projects retain identifiers, dates, URLs and technology facts", () => {
  for (const project of projects) {
    for (const dictionary of [es, en]) {
      const translated = localizeProject(project, dictionary);
      for (const key of [
        "slug",
        "github",
        "website",
        "visual",
        "category",
      ] as const)
        assert.equal(translated[key], project[key]);
      for (const tag of project.tags.filter(
        (tag) => !Object.hasOwn(dictionary.tags, tag),
      ))
        assert.ok(translated.tags.includes(tag));
      if (project.year) {
        assert.ok(translated.year.endsWith(String(project.year)));
        assert.ok(translated.challenge.includes(String(project.year)));
      }
      assert.ok(!translated.challenge.includes("{year}"));
      assert.ok(
        translated.title &&
          translated.summary &&
          translated.approach &&
          translated.learnings,
      );
    }
  }
});
