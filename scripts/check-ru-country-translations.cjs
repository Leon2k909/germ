#!/usr/bin/env node
/**
 * The Russian tables for the country courses.
 *
 * Russian was a complete interface language — every string of the app, every
 * card note — for several releases before it could read a single country
 * course: the switch beside a card had German, English, Polish and French in
 * it and nothing else. This file guards the tables that close that gap, the
 * way check-pl-country-translations does for Polish. A course joins by adding
 * four lines to COURSES rather than by copying two hundred.
 *
 * Every table is keyed on its course's own source text and fails the same
 * silent way all of them do: one wrong character — a straight quote where the
 * course has a typographic one, ss for ß, a missing full stop — and the
 * lookup misses. The card still renders, the tap still works, and the reader
 * is told there is no translation for a card that was in fact translated. So
 * every key must match real course text.
 *
 * The reverse is not demanded. A partly translated course is a legitimate
 * state and the interface says so per card, so coverage is printed rather
 * than required.
 *
 * AND THE THREE WAYS A COMPLETE TABLE STILL SHOWS NOTHING. None of them has a
 * symptom at runtime, which is why they are checked here rather than noticed
 * later:
 *
 *   - a table never spread into TRANSLATIONS.ru is looked up by nobody;
 *   - a source language missing from Russian's `from` list means the picker
 *     never offers Russian beside that course;
 *   - and getTranslationLanguage has to accept a stored "ru", or the choice
 *     is silently forgotten on the next reload and the reader has to make it
 *     again every time.
 */
const assert = require("assert");
const fs = require("fs");
const path = require("path");
const Module = require("module");
const esbuild = require("esbuild");

const root = path.resolve(__dirname, "..");

/**
 * One row per Russian table for a country course.
 *
 * There is no `sourceLetters` here and there does not need to be: the target
 * is Cyrillic, so a value still written in the source language shows up as a
 * run of Latin words. Only LOWERCASE ones count — the names that stay in the
 * source language, Bundesgesetzblatt or Amtsgericht, are capitalised, and a
 * card that lists four of them is doing exactly what it should.
 */
const COURSES = [
  {
    label: "Leben in Deutschland",
    source: "de",
    course: { module: "lebenInDeutschlandCourse", symbol: "lebenInDeutschlandCourse" },
    table: { module: "lebenInDeutschlandTranslationsRu", symbol: "LEBEN_IN_DEUTSCHLAND_RU" },
    // Only what a reader meets printed on a form or a doorplate and nowhere
    // else. Bundestag and Grundgesetz have Russian names and should get them;
    // demanding that those survive would ask for worse Russian.
    keep: ["BAföG", "Bundesgesetzblatt", "Abitur", "Bürgeramt", "Einwohnermeldeamt"],
  },
  {
    label: "Life in the UK",
    source: "en",
    course: { module: "lifeInTheUkCourse", symbol: "lifeInTheUkCourse" },
    table: { module: "lifeInTheUkTranslationsRu", symbol: "LIFE_IN_THE_UK_RU" },
    // What a reader meets printed on a letter or a doorplate. The NHS is not
    // called anything else on the card that tells you to register with a GP.
    keep: ["NHS", "National Insurance", "GCSE", "council tax"],
  },
  {
    label: "Zycie w Polsce",
    source: "pl",
    course: { module: "zycieWPolsceCourse", symbol: "zycieWPolsceCourse" },
    table: { module: "zycieWPolsceTranslationsRu", symbol: "ZYCIE_W_POLSCE_RU" },
    keep: [
      "PESEL",
      "wójt",
      // Polish institutions Russian does have a name for. Leaving them in
      // Polish would be as wrong as translating PESEL: the reader knows the
      // Sejm as the Сейм, and a card that called it a parliament instead
      // would be smooth Russian about nothing in particular.
      ["Sejm", "Сейм"],
      ["powiat", "повят"],
      ["województw", "воеводств"],
    ],
  },
  {
    label: "Vivre en France",
    source: "fr",
    course: { module: "vivreEnFranceCourse", symbol: "vivreEnFranceCourse" },
    table: { module: "vivreEnFranceTranslationsRu", symbol: "VIVRE_EN_FRANCE_RU" },
    keep: [
      // The words a reader meets on a doorplate, a card or a form and nowhere
      // else. They lead in French wherever the course is about them.
      "préfecture",
      "carte Vitale",
      "Assurance maladie",
      "Sécurité sociale",
      "état civil",
      "tiers payant",
      "mutuelle",
      // The one the republic names in French because no single Russian word
      // carries it: laïcité is neither atheism nor a wall between two powers,
      // and a translation would have to pick one of those and be wrong.
      "laïcité",
      // And the one on the other side of that line. The mairie is where a
      // reader registers a birth and joins the electoral roll, and Russian
      // has always called it the мэрия.
      ["mairie", "мэри"],
    ],
  },
  {
    label: "Vivere in Italia",
    source: "it",
    course: { module: "vivereInItaliaCourse", symbol: "vivereInItaliaCourse" },
    table: { module: "vivereInItaliaTranslationsRu", symbol: "VIVERE_IN_ITALIA_RU" },
    keep: [
      // Printed on a card, a payslip or a form, and nowhere else.
      "codice fiscale",
      "carta d'identità",
      "tessera sanitaria",
      "permesso di soggiorno",
      "questura",
      "anagrafe",
      "INPS",
      "INAIL",
      "IRPEF",
      "CCNL",
      // The region is on the other side: Russian names it, and the course
      // says region on fourteen cards about who runs the hospitals.
      ["regione", "обла"],
    ],
  },
];

const imports = COURSES.flatMap(({ course, table }) => [
  `export { ${course.symbol} } from "./src/lib/${course.module}.ts";`,
  `export { ${table.symbol} } from "./src/lib/${table.module}.ts";`,
]).join("\n");

const built = esbuild.buildSync({
  stdin: { contents: imports, resolveDir: root, sourcefile: "ru-country-translations-entry.ts" },
  alias: { "@": path.join(root, "src") },
  bundle: true,
  format: "cjs",
  platform: "node",
  target: "node20",
  write: false,
  logLevel: "silent",
});
const compiled = new Module("ru-country-translations-check", module);
compiled.filename = path.join(root, ".ru-country-translations-check.cjs");
compiled.paths = Module._nodeModulePaths(root);
compiled._compile(built.outputFiles[0].text, compiled.filename);

const failures = [];
const summaries = [];

for (const entry of COURSES) {
  const course = compiled.exports[entry.course.symbol];
  const table = compiled.exports[entry.table.symbol];
  const { label } = entry;

  // Exactly what localiseLesson translates, split so the coverage line can
  // say which half is done. The course NAME is deliberately absent: it is an
  // interface string and goes through the i18n tables instead.
  const prose = new Set();
  const quiz = new Set();
  if (course.tagline) prose.add(course.tagline);
  for (const lesson of course.lessons ?? []) {
    prose.add(lesson.title);
    if (lesson.section) prose.add(lesson.section);
    if (lesson.summary) prose.add(lesson.summary);
    for (const block of lesson.blocks ?? []) {
      if (block.type === "h3" || block.type === "p" || block.type === "callout") prose.add(block.text);
      if (block.type === "cards") {
        for (const item of block.items ?? []) {
          prose.add(item.h4);
          prose.add(item.p);
        }
      }
      if (block.type === "cta") {
        prose.add(block.title);
        prose.add(block.sub);
      }
      // The questions that close a lesson. Leaving them out here would not
      // just skip a check: it would drop them from the denominator, so the
      // line below would call a course finished while every question in it
      // was still in its own language.
      if (block.type === "quiz") {
        quiz.add(block.q);
        for (const option of block.options ?? []) quiz.add(option.text);
        quiz.add(block.explanation);
      }
    }
  }
  prose.delete(undefined);
  quiz.delete(undefined);
  const translatable = new Set([...prose, ...quiz]);

  const orphans = Object.keys(table).filter((key) => !translatable.has(key));
  if (orphans.length) {
    failures.push(
      `${label}: ${orphans.length} key(s) match no card, heading or question in the course, so they can never be shown:\n`
      + orphans.slice(0, 8).map((key) => `      ${JSON.stringify(key.slice(0, 90))}`).join("\n")
    );
  }

  const empty = Object.entries(table).filter(([, value]) => !String(value).trim());
  if (empty.length) failures.push(`${label}: ${empty.length} entries have an empty translation`);

  // A repeated key in an object literal is silent: the later line wins and
  // the earlier translation is gone. Object.keys has already collapsed them,
  // so this counts the SOURCE lines instead.
  const entryLines = fs
    .readFileSync(path.join(root, `src/lib/${entry.table.module}.ts`), "utf8")
    .split(/\r?\n/)
    .filter((line) => line.startsWith('  "'));
  const written = new Set();
  const twice = [];
  for (const line of entryLines) {
    const key = line.slice(3, line.indexOf('"', 3));
    if (written.has(key)) twice.push(key);
    written.add(key);
  }
  if (twice.length) {
    failures.push(
      `${label}: ${twice.length} key(s) are written twice, and only the later line survives: `
      + twice.slice(0, 6).map((key) => JSON.stringify(key.slice(0, 50))).join(", ")
    );
  }

  // A value that is still a run of Latin words is a line nobody translated.
  const untranslated = Object.entries(table).filter(([, value]) => {
    const words = String(value).split(/\s+/).filter(Boolean);
    if (words.length < 6) return false;
    const latin = words.filter((word) => {
      if (!/[A-Za-z]/.test(word) || /[Ѐ-ӿ]/.test(word)) return false;
      const first = word.replace(/^[^\p{L}]+/u, "")[0];
      return first !== undefined && first === first.toLowerCase();
    });
    return latin.length > words.length / 3;
  });
  if (untranslated.length) {
    failures.push(
      `${label}: ${untranslated.length} value(s) are still written in the source language: `
      + untranslated.slice(0, 4).map(([key]) => JSON.stringify(key.slice(0, 60))).join(", ")
    );
  }

  // The terms a card is about are bold, and the reader is meant to see which
  // ones. An ODD number of markers renders a literal ** because the run never
  // closes; FEWER runs than the source means a term the course emphasised is
  // now plain text. More is fine — Russian sometimes needs two words where
  // German had one.
  const spans = (text) => (String(text).match(/\*\*/g) || []).length;
  const emphasis = Object.entries(table).filter(([key, value]) => {
    if (spans(value) % 2 === 1) return true;
    return spans(value) < spans(key);
  });
  if (emphasis.length) {
    failures.push(
      `${label}: ${emphasis.length} translation(s) lose the emphasis the course put on a term, or leave a ** unclosed: `
      + emphasis.slice(0, 4).map(([key]) => JSON.stringify(key.slice(0, 60))).join(", ")
    );
  }

  // A card that is nothing but a row of institution names reads the same in
  // both languages, and those names are exactly what has to survive — the
  // Bundesagentur für Arbeit is not called anything else in Russian. Every
  // word of such a line is capitalised apart from the small joining words.
  // Anything with real sentence words in it still has to change.
  const particles = new Set([
    "und", "für", "von", "der", "die", "das", "des", "den", "im", "am", "zur", "zum", "bei",
    "and", "of", "the", "for", "in", "on", "at", "to", "a", "an",
    "i", "w", "we", "z", "ze", "na", "do", "o", "po", "za", "przy", "dla", "od", "oraz",
  ]);
  const isProperNames = (text) => {
    const lexical = String(text)
      .replace(/[0-9]+/g, " ")
      .replace(/[^\p{L} ]/gu, " ")
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    return lexical.length > 0
      && lexical.every((word) => particles.has(word.toLowerCase()) || word[0] !== word[0].toLowerCase());
  };
  const looksLikeSentence = (text) => {
    const trimmed = String(text).trim();
    const words = trimmed.split(/\s+/).length;
    return ((words > 1 && /[.!?]$/.test(trimmed)) || words > 6) && !isProperNames(trimmed);
  };
  const identical = Object.entries(table).filter(([key, value]) => key === value && looksLikeSentence(key));
  if (identical.length) {
    failures.push(
      `${label}: ${identical.length} sentence(s) are identical to their source: `
      + identical.slice(0, 4).map(([key]) => JSON.stringify(key.slice(0, 60))).join(", ")
    );
  }

  // The words the course is about have to survive. A translation that turned
  // the Bürgeramt into a town hall would read more smoothly and send the
  // reader looking for a building that is not signposted anywhere.
  // A plain string must survive as it stands; a pair says the source term on
  // the left has one Russian name, on the right, and the reader has to get
  // that one rather than a smooth paraphrase. Case is not part of the test:
  // a term that opens a sentence is capitalised in Russian too, and demanding
  // the source's own casing would fail every card that begins with it.
  for (const rule of entry.keep) {
    const [needle, expected] = Array.isArray(rule) ? rule : [rule, rule];
    const wanted = expected.toLowerCase();
    const withTerm = Object.entries(table).filter(([key]) => key.includes(needle));
    const dropped = withTerm.filter(([, value]) => !String(value).toLowerCase().includes(wanted));
    if (withTerm.length >= 4 && dropped.length > withTerm.length / 2) {
      failures.push(
        `${label}: ${JSON.stringify(expected)} survives in only ${withTerm.length - dropped.length} of ${withTerm.length} `
        + `entries about ${JSON.stringify(needle)} — that is the word the country uses and it should stay in the sentence`
      );
    }
  }

  const keys = new Set(Object.keys(table));
  const doneProse = [...prose].filter((key) => keys.has(key)).length;
  const doneQuiz = [...quiz].filter((key) => keys.has(key)).length;
  const pct = (done, total) => (total === 0 ? 100 : Math.floor((done / total) * 100));
  summaries.push(
    `  ${label}: ${doneProse}/${prose.size} cards and headings (${pct(doneProse, prose.size)}%), `
    + `${doneQuiz}/${quiz.size} question strings (${pct(doneQuiz, quiz.size)}%)`
  );
}

// ── the collision that has no symptom ──────────────────────────────────────
//
// Short strings repeat across courses on their own: a year, a one-word
// heading. Sharing the key costs nothing while both tables say the SAME
// thing, since whichever spread lands last puts back what the other held.
// What has to fail is two DIFFERENT translations under one key.
const seen = new Map();
for (const entry of COURSES) {
  const table = compiled.exports[entry.table.symbol];
  for (const [key, value] of Object.entries(table)) {
    const earlier = seen.get(key);
    if (earlier && earlier.value !== String(value)) {
      failures.push(
        `${entry.label} and ${earlier.label} both hold the key ${JSON.stringify(key.slice(0, 70))} with different `
        + "translations, and both are spread into TRANSLATIONS.ru — one of the two is lost with no error anywhere"
      );
    } else if (!earlier) {
      seen.set(key, { label: entry.label, value: String(value) });
    }
  }
}

// ── the reader can reach them, and keep them ───────────────────────────────
const lib = fs.readFileSync(path.join(root, "src/lib/courseTranslation.ts"), "utf8");
const from = /id: "ru"[^}]*from: \[([^\]]*)\]/.exec(lib);
assert.ok(from, "Russian has no from list in TRANSLATION_LANGUAGES");
assert.ok(
  /export type TranslationLanguage[^;]*"ru"/.test(lib),
  "\"ru\" is not a TranslationLanguage, so nothing could be stored or looked up under it"
);
assert.ok(
  /stored === "ru"/.test(lib),
  "getTranslationLanguage does not accept a stored \"ru\", so the choice is forgotten on every reload"
);
for (const entry of COURSES) {
  assert.ok(
    new RegExp(`ru: \\{[^}]*${entry.table.symbol}`).test(lib),
    `${entry.table.symbol} is not registered in TRANSLATIONS, so nothing would ever look it up`
  );
  assert.ok(
    from[1].includes(`"${entry.source}"`),
    `Russian must be registered as translating FROM "${entry.source}", or it is never offered beside ${entry.label}`
  );
}

if (failures.length) {
  console.error("FAIL check-ru-country-translations");
  failures.forEach((line) => console.error("  " + line));
  process.exit(1);
}

console.log("check-ru-country-translations: every key matches real course text, no table collides with another,");
summaries.forEach((line) => console.log(line));
console.log("  and every table is spread into TRANSLATIONS.ru, offered by the picker and kept across a reload");
process.exit(0);
