#!/usr/bin/env node
/**
 * The same guard as check-ru-translations and check-pl-translations, for the
 * Italian course and its German table.
 *
 * The table is keyed on the course's own Italian text, and it fails the same
 * silent way all of them do: one wrong character — a straight apostrophe where
 * the course has a typographic one, a hyphen for an en dash, a missing full
 * stop — and the lookup misses. The card still renders, the tap still works,
 * and the reader is told there is no translation for a card that was in fact
 * translated. So every key must correspond to real course text.
 *
 * The reverse is not required. A partly translated course is a legitimate
 * state and the interface says so per card, so coverage is printed rather
 * than demanded.
 *
 * THE QUIZZES ARE PART OF THE TABLE, as in the Russian and Polish ones.
 *
 * HOW A PASTE IS CAUGHT HERE. The Cyrillic test does not carry over, and
 * neither does the Polish one: Italian's accented vowels are too rare to
 * count on. What is reliable is the function words. No German sentence
 * contains "che", "della", "sono" or "non", and a value where a sixth of the
 * words are Italian ones is Italian that was never translated. A German
 * sentence may quote one or two — la Camera, il Quirinale — which is why the
 * threshold is a share and not a single hit.
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
      'export { vivereInItaliaCourse } from "./src/lib/vivereInItaliaCourse.ts";\n' +
      'export { VIVERE_IN_ITALIA_DE } from "./src/lib/vivereInItaliaTranslationsDe.ts";',
    resolveDir: root,
    sourcefile: "it-translations-entry.ts",
  },
  alias: { "@": path.join(root, "src") },
  bundle: true,
  format: "cjs",
  platform: "node",
  target: "node20",
  write: false,
  logLevel: "silent",
});

const compiled = new Module("it-translations-check", module);
compiled.filename = path.join(root, ".it-translations-check.cjs");
compiled.paths = Module._nodeModulePaths(root);
compiled._compile(built.outputFiles[0].text, compiled.filename);
const { vivereInItaliaCourse: course, VIVERE_IN_ITALIA_DE: table } = compiled.exports;

// Every Italian string the reader can meet, split so the coverage line can say
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
// this counts the SOURCE lines instead.
const entryLines = fs
  .readFileSync(path.join(root, "src/lib/vivereInItaliaTranslationsDe.ts"), "utf8")
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

// ── a German value that is still Italian ───────────────────────────────────
const ITALIAN_WORDS = new Set([
  "il", "lo", "la", "gli", "le", "un", "uno", "una", "del", "dello", "della", "dei", "degli",
  "delle", "al", "allo", "alla", "ai", "agli", "alle", "dal", "dalla", "dai", "nel", "nella",
  "nei", "nelle", "sul", "sulla", "che", "chi", "con", "non", "più", "sono", "è", "ha", "hanno",
  "come", "anche", "questo", "questa", "quando", "dove", "perché", "tra", "fra", "ogni", "loro",
  "essere", "stato", "viene", "vengono", "può", "possono", "deve", "devono", "cui", "suo", "sua",
]);
const stillItalian = Object.entries(table).filter(([, value]) => {
  const words = String(value).toLowerCase().split(/[^\p{L}àèéìòù]+/u).filter(Boolean);
  if (words.length < 6) return false;
  const italian = words.filter((word) => ITALIAN_WORDS.has(word)).length;
  return italian / words.length > 1 / 6;
});
if (stillItalian.length) {
  failures.push(
    `${stillItalian.length} value(s) still read as Italian rather than German: `
    + stillItalian.slice(0, 4).map(([key]) => JSON.stringify(key.slice(0, 60))).join(", ")
  );
}

// A sentence identical to its Italian is the same fault seen from the other
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
    `${identical.length} sentence(s) are identical to their Italian: `
    + identical.slice(0, 4).map(([key]) => JSON.stringify(key.slice(0, 60))).join(", ")
  );
}

// ── the words the course is about have to survive ──────────────────────────
// A translation that turned the Senato into an upper house and the Costituzione
// into a charter would teach the reader words nobody in the country uses. A
// handful may legitimately reword; a majority losing the term is the failure
// worth catching, which is how the German course's check draws the same line.
const KEEP = [
  { italian: "Costituzione", german: "Verfassung" },
  { italian: "Senato", german: "Senat" },
  { italian: "Parlamento", german: "Parlament" },
  { italian: "Presidente", german: "Präsident" },
  { italian: "Regione", german: "Region" },
];
for (const { italian, german } of KEEP) {
  const withTerm = Object.entries(table).filter(([key]) => key.includes(italian));
  const dropped = withTerm.filter(([, value]) => !value.includes(german));
  if (withTerm.length >= 4 && dropped.length > withTerm.length / 2) {
    failures.push(
      `"${german}" survives in only ${withTerm.length - dropped.length} of ${withTerm.length} entries about `
      + `"${italian}" — that is the word the country uses and it should stay in the sentence`
    );
  }
}

// ── the picker can reach it ────────────────────────────────────────────────
const lib = fs.readFileSync(path.join(root, "src/lib/courseTranslation.ts"), "utf8");
assert.ok(
  /id: "de"[^}]*from: \[[^\]]*"it"/.test(lib),
  "German must be registered as translating FROM Italian, or it is never offered beside this course"
);
assert.ok(
  /de: \{[\s\S]{0,400}?VIVERE_IN_ITALIA_DE/.test(lib),
  "the German table is not registered in TRANSLATIONS, so nothing would ever look it up"
);
const shell = fs.readFileSync(path.join(root, "src/prototype/NewUiPrototype.tsx"), "utf8");
assert.ok(
  /translationLanguagesFor\(activePack\.contentLang\)/.test(shell),
  "the picker must filter by the course's own language rather than list every table"
);

if (failures.length) {
  console.error("FAIL check-it-translations");
  failures.forEach((line) => console.error("  " + line));
  process.exit(1);
}

const keys = new Set(Object.keys(table));
const doneProse = [...prose].filter((key) => keys.has(key)).length;
const doneQuiz = [...quiz].filter((key) => keys.has(key)).length;
const pct = (done, total) => (total === 0 ? 100 : Math.floor((done / total) * 100));
console.log(
  `check-it-translations: ${doneProse} of ${prose.size} cards and headings (${pct(doneProse, prose.size)}%) `
  + `and ${doneQuiz} of ${quiz.size} question strings (${pct(doneQuiz, quiz.size)}%) have German, `
  + "every key matches real course text, none is written twice, and the picker offers it beside the Italian course"
);
process.exit(0);
