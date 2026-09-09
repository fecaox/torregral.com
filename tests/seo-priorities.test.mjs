import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const target = await readFile(new URL("../cafe-adaptogene-naturel/index.html", import.meta.url), "utf8");

test("la page café adaptogène naturel possède un titre orienté comparaison", () => {
  assert.match(target, /<title>Café adaptogène naturel : différences et guide \| Torrégral<\/title>/);
});

test("la description relie les trois intentions observées dans Search Console", () => {
  assert.match(
    target,
    /<meta name="description" content="Café adaptogène, café aux champignons ou café naturel : comparez leur composition, leur goût et leur logique avant de choisir\." \/>/,
  );
});

for (const slug of ["cafe-energie-stable", "cafe-sans-crash", "cafe-focus"]) {
  test(`${slug} renforce la page café adaptogène naturel`, async () => {
    const html = await readFile(new URL(`../${slug}/index.html`, import.meta.url), "utf8");
    assert.match(html, /href="\.\.\/cafe-adaptogene-naturel\/"/);
  });
}
