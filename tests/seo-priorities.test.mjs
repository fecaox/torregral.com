import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const target = await readFile(new URL("../cafe-adaptogene-naturel/index.html", import.meta.url), "utf8");
const explainer = await readFile(new URL("../qu-est-ce-qu-un-cafe/index.html", import.meta.url), "utf8");
const homepage = await readFile(new URL("../index.html", import.meta.url), "utf8");
const sitemap = await readFile(new URL("../sitemap.xml", import.meta.url), "utf8");
const profileSlugs = [
  "neuroatypiques",
  "hpi",
  "tdah",
  "trouble-autistique",
  "hypersensible",
  "overthinker",
  "multipotentiel",
  "dyslexie",
  "dyspraxie",
  "cerveau-en-ebullition",
  "profil-atypique",
  "fatigue-mentale",
  "createur-intense",
];

test("la page cible clairement la comparaison entre café naturel et café adaptogène", () => {
  assert.match(target, /<title>Café naturel ou adaptogène \? Différences et guide \| Torrégral<\/title>/);
  assert.match(target, /<h1>Café naturel ou adaptogène : quelles différences \?<\/h1>/);
  assert.match(target, /<h2>Café naturel ou adaptogène : de quoi parle-t-on \?<\/h2>/);
});

test("la description relie les trois intentions observées dans Search Console", () => {
  assert.match(
    target,
    /<meta name="description" content="Café naturel, café adaptogène ou café aux champignons : comparez composition, goût, caféine et ingrédients pour choisir sans confusion\." \/>/,
  );
});

test("la canonique reste stable et la mise à jour est datée du 24 septembre 2026", () => {
  assert.match(target, /<link rel="canonical" href="https:\/\/www\.torregral\.com\/cafe-adaptogene-naturel\/" \/>/);
  assert.match(target, /"dateModified": "2026-09-24"/);
  assert.match(sitemap, /<loc>https:\/\/www\.torregral\.com\/cafe-adaptogene-naturel\/<\/loc>\s*<lastmod>2026-09-24<\/lastmod>/);
});

test("la page pédagogique transmet un lien contextuel vers le guide café naturel", () => {
  assert.match(explainer, /href="\.\.\/cafe-adaptogene-naturel\/">café naturel et café adaptogène<\/a>/);
});

test("la page pédagogique date également sa mise à jour", () => {
  assert.match(explainer, /"dateModified": "2026-09-24"/);
  assert.match(
    sitemap,
    /<loc>https:\/\/www\.torregral\.com\/qu-est-ce-qu-un-cafe\/<\/loc>\s*<lastmod>2026-09-24<\/lastmod>/,
  );
});

for (const slug of ["cafe-energie-stable", "cafe-sans-crash", "cafe-focus"]) {
  test(`${slug} renforce la page café adaptogène naturel`, async () => {
    const html = await readFile(new URL(`../${slug}/index.html`, import.meta.url), "utf8");
    assert.match(html, /href="\.\.\/cafe-adaptogene-naturel\/"/);
  });
}

test("Google Analytics reste bloqué tant que le visiteur n’a pas consenti", async () => {
  const script = await readFile(new URL("../script.js", import.meta.url), "utf8");
  assert.match(script, /G-8V7MLJZSPN/);
  assert.match(script, /analytics_storage/);
  assert.match(script, /googletagmanager\.com\/gtag\/js/);
  assert.match(script, /localStorage/);
  assert.match(script, /Gérer les cookies/);
});

for (const slug of profileSlugs) {
  test(`${slug} reste accessible mais sort de l’index`, async () => {
    const html = await readFile(new URL(`../${slug}/index.html`, import.meta.url), "utf8");
    assert.match(html, /<meta name="robots" content="noindex, follow" \/>/);
    assert.doesNotMatch(sitemap, new RegExp(`<loc>https://www\\.torregral\\.com/${slug}/</loc>`));
  });
}

test("l’accueil ne pousse plus les pages de profils sans visibilité", () => {
  assert.doesNotMatch(homepage, /href="(?:neuroatypiques|hpi|overthinker)\/"/);
});

test("les clics vers Stripe déclenchent begin_checkout seulement après consentement", async () => {
  const script = await readFile(new URL("../script.js", import.meta.url), "utf8");
  assert.match(script, /buy\.stripe\.com/);
  assert.match(script, /begin_checkout/);
  assert.match(script, /readChoice\(\) !== "granted"/);
  assert.match(script, /transport_type:\s*"beacon"/);
});
