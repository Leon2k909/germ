#!/usr/bin/env node
/**
 * The same guard as check-ru-translations, for the ENGLISH table of the
 * Russian course.
 *
 * It exists because English reached three of the seven country courses and
 * German reached all seven. Of the four English could not read, this is the
 * one where the gap actually stops a reader: a Latin-alphabet sentence can be
 * guessed at, Cyrillic cannot, and the picker hid itself because no table
 * existed to offer.
 *
 * The table is keyed on the course's own Russian text and fails the same
 * silent way all of them do: one wrong character — a straight quote where the
 * course has a typographic one, a hyphen for an em dash, a missing full stop
 * — and the lookup misses. The card still renders, the tap still works, and
 * the reader is told there is no translation for a card that was in fact
 * translated. So every key must correspond to real course text.
 *
 * The reverse is not demanded. A partly translated course is a legitimate
 * state, the interface says so per card, and a table is filled in chapter by
 * chapter — so coverage is printed rather than required, exactly as in the
 * German check beside it.
 *
 * WHAT THIS ONE ADDS over check-ru-translations. English is not only a target
 * here, it is also a SOURCE: Life in the UK is written in it. The English
 * lookup merges three tables into one object, so a key present in two of them
 * loses one silently — the later spread wins, and a card in one course shows
 * the translation belonging to another. That collision has no symptom at all
 * at runtime, which is why it is checked here rather than noticed later.
 */
const assert = require("assert");
const fs = require("fs");
const path = require("path");
const Module = require("module");
const esbuild = require("esbuild");

const root = path.resolve(__dirname, "..");

const built = esbuild.buildSync({
  stdin: {
    contents:
      'export { zhiznVRossiiCourse } from "./src/lib/zhiznVRossiiCourse.ts";\n' +
      'export { ZHIZN_V_ROSSII_EN } from "./src/lib/zhiznVRossiiTranslationsEn.ts";\n' +
      'export { LEBEN_IN_DEUTSCHLAND_EN } from "./src/lib/lebenInDeutschlandTranslationsEn.ts";\n' +
      'export { VIVRE_EN_FRANCE_EN } from "./src/lib/vivreEnFranceTranslationsEn.ts";',
    resolveDir: root,
    sourcefile: "ru-en-translations-entry.ts",
  },
  alias: { "@": path.join(root, "src") },
  bundle: true,
  format: "cjs",
  platform: "node",
  target: "node20",
  write: false,
  logLevel: "silent",
});

const compiled = new Module("ru-en-translations-check", module);
compiled.filename = path.join(root, ".ru-en-translations-check.cjs");
compiled.paths = Module._nodeModulePaths(root);
compiled._compile(built.outputFiles[0].text, compiled.filename);
const {
  zhiznVRossiiCourse: course,
  ZHIZN_V_ROSSII_EN: table,
  LEBEN_IN_DEUTSCHLAND_EN: germanyTable,
  VIVRE_EN_FRANCE_EN: franceTable,
} = compiled.exports;

// Every Russian string the reader can meet, split so the coverage line can
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

const failures = [];

// ── every key is real course text ──────────────────────────────────────────
const orphans = Object.keys(table).filter((key) => !translatable.has(key));
if (orphans.length) {
  failures.push(
    `${orphans.length} key(s) match no card, heading or question in the course, so they can never be shown:\n`
    + orphans.slice(0, 8).map((key) => `      ${JSON.stringify(key.slice(0, 90))}`).join("\n")
  );
}

const empty = Object.entries(table).filter(([, value]) => !String(value).trim());
if (empty.length) failures.push(`${empty.length} entries have an empty translation`);

// ── nothing said twice ─────────────────────────────────────────────────────
// A repeated key in an object literal is silent: the later line wins and the
// earlier translation is gone. Object.keys has already collapsed them, so
// this counts the SOURCE lines instead.
const entryLines = fs
  .readFileSync(path.join(root, "src/lib/zhiznVRossiiTranslationsEn.ts"), "utf8")
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
    `${twice.length} key(s) are written twice, and only the later line survives: `
    + twice.slice(0, 6).map((key) => JSON.stringify(key.slice(0, 50))).join(", ")
  );
}

// ── the collision that has no symptom ──────────────────────────────────────
// TRANSLATIONS.en spreads three tables into one object. A key in two of them
// keeps only the last, and the card shows another course's sentence with no
// error anywhere.
for (const [label, other] of [["Leben in Deutschland", germanyTable], ["Vivre en France", franceTable]]) {
  const collisions = Object.keys(table).filter((key) => key in other);
  if (collisions.length) {
    failures.push(
      `${collisions.length} key(s) also exist in the English table for ${label}, and both are spread into one `
      + `object — one of the two translations is lost with no error anywhere:\n`
      + collisions.slice(0, 8).map((key) => `      ${JSON.stringify(key.slice(0, 90))}`).join("\n")
    );
  }
}

// ── an English value that is still Russian ─────────────────────────────────
// A few Cyrillic characters are fine and often right: a quoted name like the
// payment system, a ship, a newspaper. A value that is MOSTLY Cyrillic is a
// paste that was never translated, and here nobody can read past it.
const cyrillic = (text) => (String(text).match(/[Ѐ-ӿ]/g) || []).length;
const stillRussian = Object.entries(table).filter(([, value]) => {
  const letters = (String(value).match(/[\p{L}]/gu) || []).length;
  return letters > 0 && cyrillic(value) > letters / 2;
});
if (stillRussian.length) {
  failures.push(
    `${stillRussian.length} value(s) are still written in Cyrillic, which is a paste that was never translated: `
    + stillRussian.slice(0, 4).map(([key]) => JSON.stringify(key.slice(0, 60))).join(", ")
  );
}

// A sentence identical to its Russian is the same fault seen from the other
// side. Single words can legitimately match — a name, a number — so prose is
// the target.
const looksLikeSentence = (text) => {
  const trimmed = String(text).trim();
  const words = trimmed.split(/\s+/).length;
  return (words > 1 && /[.!?]$/.test(trimmed)) || words > 6;
};
const identical = Object.entries(table).filter(([key, value]) => key === value && looksLikeSentence(key));
if (identical.length) {
  failures.push(
    `${identical.length} sentence(s) are identical to their Russian: `
    + identical.slice(0, 4).map(([key]) => JSON.stringify(key.slice(0, 60))).join(", ")
  );
}

// ── the words the course is about have to survive ──────────────────────────
// A translation that turned the Duma into a parliament and the Kremlin into a
// castle would teach the reader a word nobody in the country uses. A handful
// may legitimately reword; a majority losing the term is the failure worth
// catching.
const KEEP = [
  { russian: "Дума", english: "Duma" },
  { russian: "Кремл", english: "Kremlin" },
  { russian: "Конституц", english: "Constitution" },
  { russian: "Президент", english: "President" },
];
for (const { russian, english } of KEEP) {
  const withTerm = Object.entries(table).filter(([key]) => key.includes(russian));
  const dropped = withTerm.filter(([, value]) => !value.includes(english));
  if (withTerm.length >= 4 && dropped.length > withTerm.length / 2) {
    failures.push(
      `"${english}" survives in only ${withTerm.length - dropped.length} of ${withTerm.length} entries about `
      + `"${russian}" — that is the word the country uses and it should stay in the sentence`
    );
  }
}

// ── the picker can reach it ────────────────────────────────────────────────
const lib = fs.readFileSync(path.join(root, "src/lib/courseTranslation.ts"), "utf8");
assert.ok(
  /id: "en"[^}]*from: \[[^\]]*"ru"/.test(lib),
  "English must be registered as translating FROM Russian, or it is never offered beside this course"
);
assert.ok(
  /en: \{[^}]*ZHIZN_V_ROSSII_EN/.test(lib),
  "the English table is not registered in TRANSLATIONS, so nothing would ever look it up"
);

if (failures.length) {
  console.error("FAIL check-ru-en-translations");
  failures.forEach((line) => console.error("  " + line));
  process.exit(1);
}

const keys = new Set(Object.keys(table));
const doneProse = [...prose].filter((key) => keys.has(key)).length;
const doneQuiz = [...quiz].filter((key) => keys.has(key)).length;
const pct = (done, total) => (total === 0 ? 100 : Math.floor((done / total) * 100));
console.log(
  `check-ru-en-translations: ${doneProse} of ${prose.size} cards and headings (${pct(doneProse, prose.size)}%) `
  + `and ${doneQuiz} of ${quiz.size} question strings (${pct(doneQuiz, quiz.size)}%) have English, `
  + "no key collides with the other two English tables, no value is still Cyrillic, "
  + "and the picker offers it beside the Russian course"
);
process.exit(0);
