#!/usr/bin/env node
/**
 * The English tables for the country courses written in a Latin alphabet.
 *
 * Russian has a check of its own — check-ru-en-translations — because a
 * Cyrillic source needs rules these do not: a value that is still mostly
 * Cyrillic is unreadable rather than merely untranslated. The courses here
 * share one file instead, the way check-fr-translations covers two, so a
 * fourth or fifth table joins by adding three lines to COURSES rather than
 * by copying two hundred.
 *
 * Every table is keyed on its course's own source text and fails the same
 * silent way all of them do: one wrong character — a straight quote where the
 * course has a typographic one, a hyphen for an en dash, a missing full stop
 * — and the lookup misses. The card still renders, the tap still works, and
 * the reader is told there is no translation for a card that was in fact
 * translated. So every key must match real course text.
 *
 * The reverse is not demanded. A partly translated course is a legitimate
 * state and the interface says so per card, so coverage is printed rather
 * than required.
 *
 * AND THE COLLISION ENGLISH NEEDS AND GERMAN DOES NOT. English is not only a
 * target here, it is also a SOURCE: Life in the UK is written in it. The
 * English lookup merges every table below into one object, so a key present
 * in two of them loses one silently — the later spread wins, and a card in
 * one course shows the sentence belonging to another. That has no symptom at
 * runtime at all, which is why it is checked here rather than noticed later.
 */
const assert = require("assert");
const fs = require("fs");
const path = require("path");
const Module = require("module");
const esbuild = require("esbuild");

const root = path.resolve(__dirname, "..");

/**
 * One row per English table for a Latin-alphabet country course.
 *
 * `sourceLetters` are the letters that language has and English does not, so
 * a value still written in it can be recognised. Proper names are exempt from
 * that test: Kraków and Łódź are correct inside an English sentence, and only
 * a LOWERCASE word carrying those letters is a line nobody translated.
 */
const COURSES = [
  {
    label: "Zycie w Polsce",
    course: { module: "zycieWPolsceCourse", symbol: "zycieWPolsceCourse" },
    table: { module: "zycieWPolsceTranslationsEn", symbol: "ZYCIE_W_POLSCE_EN" },
    sourceLetters: /[ąćęłńóśźż]/,
    keep: ["Sejm", "Senat", "wójt", "starosta", "PESEL"],
  },
];

// Every table spread into TRANSLATIONS.en, including the ones checked
// elsewhere, because a collision does not care which file it came from.
const MERGED = [
  { label: "Life in the UK (source)", module: "lifeInTheUkCourse", symbol: null },
  { label: "Leben in Deutschland", module: "lebenInDeutschlandTranslationsEn", symbol: "LEBEN_IN_DEUTSCHLAND_EN" },
  { label: "Vivre en France", module: "vivreEnFranceTranslationsEn", symbol: "VIVRE_EN_FRANCE_EN" },
  { label: "Zhizn v Rossii", module: "zhiznVRossiiTranslationsEn", symbol: "ZHIZN_V_ROSSII_EN" },
].filter((entry) => entry.symbol);

const imports = [
  ...COURSES.flatMap(({ course, table }) => [
    `export { ${course.symbol} } from "./src/lib/${course.module}.ts";`,
    `export { ${table.symbol} } from "./src/lib/${table.module}.ts";`,
  ]),
  ...MERGED.map(({ module: name, symbol }) => `export { ${symbol} } from "./src/lib/${name}.ts";`),
].join("\n");

const built = esbuild.buildSync({
  stdin: { contents: imports, resolveDir: root, sourcefile: "en-translations-entry.ts" },
  alias: { "@": path.join(root, "src") },
  bundle: true,
  format: "cjs",
  platform: "node",
  target: "node20",
  write: false,
  logLevel: "silent",
});
const compiled = new Module("en-translations-check", module);
compiled.filename = path.join(root, ".en-translations-check.cjs");
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

  // A value still written in the source language. Proper names are exempt:
  // Kraków and Łódź belong inside an English sentence, so only a LOWERCASE
  // word carrying a letter English does not have counts as untranslated.
  const untranslated = Object.entries(table).filter(([, value]) => {
    const words = String(value).split(/\s+/).filter(Boolean);
    if (words.length < 6) return false;
    const foreign = words.filter((word) => entry.sourceLetters.test(word) && word[0] === word[0].toLowerCase());
    return foreign.length > words.length / 3;
  });
  if (untranslated.length) {
    failures.push(
      `${label}: ${untranslated.length} value(s) are still written in the source language: `
      + untranslated.slice(0, 4).map(([key]) => JSON.stringify(key.slice(0, 60))).join(", ")
    );
  }

  // A sentence identical to its source is the same fault from the other
  // side. Names and numbers can legitimately match, so prose is the target.
  const looksLikeSentence = (text) => {
    const trimmed = String(text).trim();
    const words = trimmed.split(/\s+/).length;
    return (words > 1 && /[.!?]$/.test(trimmed)) || words > 6;
  };
  const identical = Object.entries(table).filter(([key, value]) => key === value && looksLikeSentence(key));
  if (identical.length) {
    failures.push(
      `${label}: ${identical.length} sentence(s) are identical to their source: `
      + identical.slice(0, 4).map(([key]) => JSON.stringify(key.slice(0, 60))).join(", ")
    );
  }

  // The words the course is about have to survive. A translation that turned
  // the Sejm into a parliament and the wójt into a mayor would read more
  // smoothly and teach a word nobody in the country uses.
  for (const term of entry.keep) {
    const withTerm = Object.entries(table).filter(([key]) => key.includes(term));
    const dropped = withTerm.filter(([, value]) => !value.includes(term));
    if (withTerm.length >= 4 && dropped.length > withTerm.length / 2) {
      failures.push(
        `${label}: "${term}" survives in only ${withTerm.length - dropped.length} of ${withTerm.length} entries `
        + "about it — that is the word the country uses and it should stay in the sentence"
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
const seen = new Map();
for (const entry of [...COURSES.map((c) => ({ label: c.label, symbol: c.table.symbol })), ...MERGED]) {
  const table = compiled.exports[entry.symbol];
  for (const key of Object.keys(table)) {
    if (seen.has(key)) {
      failures.push(
        `${entry.label} and ${seen.get(key)} both hold the key ${JSON.stringify(key.slice(0, 70))}, and both are `
        + "spread into TRANSLATIONS.en — one of the two translations is lost with no error anywhere"
      );
    } else {
      seen.set(key, entry.label);
    }
  }
}

// ── the picker can reach them ──────────────────────────────────────────────
const lib = fs.readFileSync(path.join(root, "src/lib/courseTranslation.ts"), "utf8");
const from = /id: "en"[^}]*from: \[([^\]]*)\]/.exec(lib);
assert.ok(from, "English has no from list in TRANSLATION_LANGUAGES");
for (const entry of COURSES) {
  assert.ok(
    new RegExp(`en: \\{[^}]*${entry.table.symbol}`).test(lib),
    `${entry.table.symbol} is not registered in TRANSLATIONS, so nothing would ever look it up`
  );
}
assert.ok(
  from[1].includes('"pl"'),
  "English must be registered as translating FROM Polish, or it is never offered beside that course"
);

if (failures.length) {
  console.error("FAIL check-en-translations");
  failures.forEach((line) => console.error("  " + line));
  process.exit(1);
}

console.log("check-en-translations: every key matches real course text, no key collides across the English tables,");
summaries.forEach((line) => console.log(line));
process.exit(0);
