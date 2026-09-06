#!/usr/bin/env node
/**
 * The same guard as check-uk-translations and check-de-translations, for the
 * Russian course and its German table.
 *
 * The table is keyed on the course's own Russian text, and it fails the same
 * silent way all of them do: one wrong character — a straight quote where the
 * course has a typographic one, a hyphen for an em dash, a missing full stop
 * — and the lookup misses. The card still renders, the tap still works, and
 * the reader is told there is no translation for a card that was in fact
 * translated. So every key must correspond to real course text.
 *
 * The reverse is not required. A partly translated course is a legitimate
 * state, the interface says so per card, and this table is filled in chapter
 * by chapter — so coverage is printed rather than demanded.
 *
 * WHAT THIS ONE ADDS over the older two. The source is Cyrillic, which means
 * a German reader cannot fall back on the original the way they can with an
 * English or French card. Two rules follow from that:
 *
 *   - a value still written in Cyrillic is a paste that was never translated,
 *     and is caught here rather than shown to somebody who cannot read it;
 *   - the QUIZZES are part of the table. The three older courses leave them
 *     in the source language; in front of Cyrillic that leaves a lesson
 *     ending in three unreadable questions, so they are counted here as
 *     translatable text like any other.
 *
 * And it checks that the picker can reach the table at all: a German table
 * whose language is not registered as reading FROM Russian would never be
 * offered beside this course, and the whole file would sit there unreachable.
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
      'export { ZHIZN_V_ROSSII_DE } from "./src/lib/zhiznVRossiiTranslationsDe.ts";',
    resolveDir: root,
    sourcefile: "ru-translations-entry.ts",
  },
  alias: { "@": path.join(root, "src") },
  bundle: true,
  format: "cjs",
  platform: "node",
  target: "node20",
  write: false,
  logLevel: "silent",
});

const compiled = new Module("ru-translations-check", module);
compiled.filename = path.join(root, ".ru-translations-check.cjs");
compiled.paths = Module._nodeModulePaths(root);
compiled._compile(built.outputFiles[0].text, compiled.filename);
const { zhiznVRossiiCourse: course, ZHIZN_V_ROSSII_DE: table } = compiled.exports;

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
// this counts the SOURCE lines instead. Six of these crept in while the
// table was written chapter by chapter, and two of them differed — a card
// title had been overwritten by a quiz option that read "Am 9. Mai".
const entryLines = fs
  .readFileSync(path.join(root, "src/lib/zhiznVRossiiTranslationsDe.ts"), "utf8")
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

// ── a German value that is still Russian ───────────────────────────────────
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
// the target, as in the German course's own check.
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
// catching, which is how the German course's check draws the same line.
const KEEP = [
  { russian: "Дума", german: "Duma" },
  { russian: "Кремл", german: "Kreml" },
  { russian: "Конституц", german: "Verfassung" },
  { russian: "Президент", german: "Präsident" },
  { russian: "рубл", german: "Rubel" },
];
for (const { russian, german } of KEEP) {
  const withTerm = Object.entries(table).filter(([key]) => key.includes(russian));
  const dropped = withTerm.filter(([, value]) => !value.includes(german));
  if (withTerm.length >= 4 && dropped.length > withTerm.length / 2) {
    failures.push(
      `"${german}" survives in only ${withTerm.length - dropped.length} of ${withTerm.length} entries about `
      + `"${russian}" — that is the word the country uses and it should stay in the sentence`
    );
  }
}

// ── the picker can reach it ────────────────────────────────────────────────
const lib = fs.readFileSync(path.join(root, "src/lib/courseTranslation.ts"), "utf8");
assert.ok(
  /id: "de"[^}]*from: \[[^\]]*"ru"/.test(lib),
  "German must be registered as translating FROM Russian, or it is never offered beside this course"
);
assert.ok(
  /de: \{[^}]*ZHIZN_V_ROSSII_DE/.test(lib),
  "the German table is not registered in TRANSLATIONS, so nothing would ever look it up"
);
const shell = fs.readFileSync(path.join(root, "src/prototype/NewUiPrototype.tsx"), "utf8");
assert.ok(
  /translationLanguagesFor\(activePack\.contentLang\)/.test(shell),
  "the picker must filter by the course's own language rather than list every table"
);

if (failures.length) {
  console.error("FAIL check-ru-translations");
  failures.forEach((line) => console.error("  " + line));
  process.exit(1);
}

const keys = new Set(Object.keys(table));
const doneProse = [...prose].filter((key) => keys.has(key)).length;
const doneQuiz = [...quiz].filter((key) => keys.has(key)).length;
const pct = (done, total) => (total === 0 ? 100 : Math.floor((done / total) * 100));
console.log(
  `check-ru-translations: ${doneProse} of ${prose.size} cards and headings (${pct(doneProse, prose.size)}%) `
  + `and ${doneQuiz} of ${quiz.size} question strings (${pct(doneQuiz, quiz.size)}%) have German, `
  + "every key matches real course text, no value is still Cyrillic, and the picker offers it beside the Russian course"
);
process.exit(0);
