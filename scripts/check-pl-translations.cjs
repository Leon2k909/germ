#!/usr/bin/env node
/**
 * The same guard as check-ru-translations, for the Polish course and its
 * German table.
 *
 * The table is keyed on the course's own Polish text, and it fails the same
 * silent way all of them do: one wrong character — a straight quote where the
 * course has a typographic one, a hyphen for an en dash, a missing full stop
 * — and the lookup misses. The card still renders, the tap still works, and
 * the reader is told there is no translation for a card that was in fact
 * translated. So every key must correspond to real course text.
 *
 * The reverse is not required. A partly translated course is a legitimate
 * state and the interface says so per card, so coverage is printed rather
 * than demanded.
 *
 * THE QUIZZES ARE PART OF THE TABLE, as in the Russian one and unlike the
 * three older ones. A lesson that ends in three questions nobody can read is
 * not a lesson anybody finishes. localiseLesson already translates quiz text,
 * so this needed only the entries.
 *
 * HOW A PASTE IS CAUGHT HERE. Polish and German share an alphabet, so the
 * Cyrillic test the Russian check uses does not carry over. What does carry
 * over is that no German word contains ą, ę, ł, ń, ś, ź, ż or ó. A German
 * sentence may hold one or two of them — Solidarność, województwo — but a
 * sentence where a third of the words do is Polish that was never translated.
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
      'export { zycieWPolsceCourse } from "./src/lib/zycieWPolsceCourse.ts";\n' +
      'export { ZYCIE_W_POLSCE_DE } from "./src/lib/zycieWPolsceTranslationsDe.ts";',
    resolveDir: root,
    sourcefile: "pl-translations-entry.ts",
  },
  alias: { "@": path.join(root, "src") },
  bundle: true,
  format: "cjs",
  platform: "node",
  target: "node20",
  write: false,
  logLevel: "silent",
});

const compiled = new Module("pl-translations-check", module);
compiled.filename = path.join(root, ".pl-translations-check.cjs");
compiled.paths = Module._nodeModulePaths(root);
compiled._compile(built.outputFiles[0].text, compiled.filename);
const { zycieWPolsceCourse: course, ZYCIE_W_POLSCE_DE: table } = compiled.exports;

// Every Polish string the reader can meet, split so the coverage line can say
// which half is done. The course NAME is deliberately absent: it is an
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
// this counts the SOURCE lines instead. Six of these crept into the Russian
// table while it was written chapter by chapter, and two of them differed.
const entryLines = fs
  .readFileSync(path.join(root, "src/lib/zycieWPolsceTranslationsDe.ts"), "utf8")
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

// ── a German value that is still Polish ────────────────────────────────────
const POLISH_ONLY = /[ąćęłńóśźż]/i;
const stillPolish = Object.entries(table).filter(([, value]) => {
  const words = String(value).split(/\s+/).filter(Boolean);
  if (words.length < 4) return false;
  const polish = words.filter((word) => POLISH_ONLY.test(word)).length;
  return polish / words.length > 0.3;
});
if (stillPolish.length) {
  failures.push(
    `${stillPolish.length} value(s) still read as Polish rather than German: `
    + stillPolish.slice(0, 4).map(([key]) => JSON.stringify(key.slice(0, 60))).join(", ")
  );
}

// A sentence identical to its Polish is the same fault seen from the other
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
    `${identical.length} sentence(s) are identical to their Polish: `
    + identical.slice(0, 4).map(([key]) => JSON.stringify(key.slice(0, 60))).join(", ")
  );
}

// ── the words the course is about have to survive ──────────────────────────
// A translation that turned the Sejm into a parliament and a województwo into
// a province would teach the reader a word nobody in the country uses. A
// handful may legitimately reword; a majority losing the term is the failure
// worth catching, which is how the German course's check draws the same line.
const KEEP = [
  { polish: "Sejm", german: "Sejm" },
  { polish: "Senat", german: "Senat" },
  { polish: "Konstytucj", german: "Verfassung" },
  { polish: "Solidarnoś", german: "Solidarność" },
  { polish: "wojewódz", german: "Woiwodschaft" },
];
for (const { polish, german } of KEEP) {
  const withTerm = Object.entries(table).filter(([key]) => key.includes(polish));
  const dropped = withTerm.filter(([, value]) => !value.includes(german));
  if (withTerm.length >= 4 && dropped.length > withTerm.length / 2) {
    failures.push(
      `"${german}" survives in only ${withTerm.length - dropped.length} of ${withTerm.length} entries about `
      + `"${polish}" — that is the word the country uses and it should stay in the sentence`
    );
  }
}

// ── the picker can reach it ────────────────────────────────────────────────
const lib = fs.readFileSync(path.join(root, "src/lib/courseTranslation.ts"), "utf8");
assert.ok(
  /id: "de"[^}]*from: \[[^\]]*"pl"/.test(lib),
  "German must be registered as translating FROM Polish, or it is never offered beside this course"
);
assert.ok(
  /de: \{[\s\S]{0,400}?ZYCIE_W_POLSCE_DE/.test(lib),
  "the German table is not registered in TRANSLATIONS, so nothing would ever look it up"
);
const shell = fs.readFileSync(path.join(root, "src/prototype/NewUiPrototype.tsx"), "utf8");
assert.ok(
  /translationLanguagesFor\(activePack\.contentLang\)/.test(shell),
  "the picker must filter by the course's own language rather than list every table"
);

if (failures.length) {
  console.error("FAIL check-pl-translations");
  failures.forEach((line) => console.error("  " + line));
  process.exit(1);
}

const keys = new Set(Object.keys(table));
const doneProse = [...prose].filter((key) => keys.has(key)).length;
const doneQuiz = [...quiz].filter((key) => keys.has(key)).length;
const pct = (done, total) => (total === 0 ? 100 : Math.floor((done / total) * 100));
console.log(
  `check-pl-translations: ${doneProse} of ${prose.size} cards and headings (${pct(doneProse, prose.size)}%) `
  + `and ${doneQuiz} of ${quiz.size} question strings (${pct(doneQuiz, quiz.size)}%) have German, `
  + "every key matches real course text, none is written twice, and the picker offers it beside the Polish course"
);
process.exit(0);
