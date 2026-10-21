import { test } from "node:test";
import assert from "node:assert/strict";
import {
  campaignFromSearch,
  analyticsUrl,
  referrerHost,
} from "../src/lib/analytics/core.ts";
test("allowlists campaign labels, normalizes casing, drops arbitrary data", () => {
  assert.deepEqual(
    campaignFromSearch(
      "?utm_source=LinkedIn&utm_medium=social&utm_campaign=perfil_2026&email=private@example.com",
    ),
    {
      utm_source: "linkedin",
      utm_medium: "social",
      utm_campaign: "perfil_2026",
    },
  );
});
test("does not retain email addresses, free text, URLs or oversized campaign values", () => {
  for (const value of [
    "name@example.com",
    "Jane Doe",
    "https://example.com",
    "a".repeat(81),
    "<script>",
  ]) {
    assert.deepEqual(
      campaignFromSearch(`?utm_source=${encodeURIComponent(value)}`),
      {},
    );
  }
});
test("redacts non-campaign parameters and fragments from analytics URLs", () => {
  assert.equal(
    analyticsUrl(
      "https://portfolio.example/proyectos/loomarq?utm_source=linkedin&token=secret&email=x@y.com#private",
    ),
    "https://portfolio.example/proyectos/loomarq?utm_source=linkedin",
  );
});
test("keeps only the external hostname of a referring URL", () => {
  assert.equal(
    referrerHost(
      "https://www.linkedin.com/in/somebody?token=secret",
      "portfolio.example",
    ),
    "www.linkedin.com",
  );
});
test("ignores direct traffic, internal referrers, malformed and non-http URLs", () => {
  for (const url of [
    "",
    "bad-url",
    "https://portfolio.example/private",
    "javascript:alert(1)",
  ])
    assert.equal(referrerHost(url, "portfolio.example"), undefined);
});
