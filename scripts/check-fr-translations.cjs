#!/usr/bin/env node
/**
 * The France course carries two translation tables, and both can miss silently.
 *
 * check-uk-translations pins one table against one course. This one has to pin
 * two, and it has one failure the UK course cannot have: the France tables are
 * spread into the SAME objects as the UK and Germany ones —
 *
 *   de: { ...LIFE_IN_THE_UK_DE, ...VIVRE_EN_FRANCE_DE }
 *   en: { ...LEBEN_IN_DEUTSCHLAND_EN, ...VIVRE_EN_FRANCE_EN }
 *
 * — so a key that appears in both tables silently wins for the France course
 * and hands the other course a translation of a sentence it never contained.
 * A short heading is all it takes. Nothing throws; the wrong text simply
 * appears under the wrong card. That is what the collision check is for.
 *
 * As in the UK gate, the reverse direction is not required: a partly
 * translated course is a legitimate state and the interface says so per card.
 * Both tables happen to be complete, and the percentage below is what says so.
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
      'export { vivreEnFranceCourse } from "./src/lib/vivreEnFranceCourse.ts";\n' +
      'export { VIVRE_EN_FRANCE_DE } from "./src/lib/vivreEnFranceTranslationsDe.ts";\n' +
      'export { VIVRE_EN_FRANCE_EN } from "./src/lib/vivreEnFranceTranslationsEn.ts";\n' +
      'export { VIVRE_EN_FRANCE_PL } from "./src/lib/vivreEnFranceTranslationsPl.ts";\n' +
      'export { LIFE_IN_THE_UK_DE } from "./src/lib/lifeInTheUkTranslationsDe.ts";\n' +
      'export { LEBEN_IN_DEUTSCHLAND_EN } from "./src/lib/lebenInDeutschlandTranslationsEn.ts";\n' +
      'export { LIFE_IN_THE_UK_PL } from "./src/lib/lifeInTheUkTranslationsPl.ts";\n' +
      'export { LEBEN_IN_DEUTSCHLAND_PL } from "./src/lib/lebenInDeutschlandTranslationsPl.ts";\n' +
      'export { translateCourseText } from "./src/lib/courseTranslation.ts";',
    resolveDir: root,
    sourcefile: "fr-translations-entry.ts",
  },
  alias: { "@": path.join(root, "src") },
  bundle: true,
  format: "cjs",
  platform: "node",
  target: "node20",
  write: false,
  logLevel: "silent",
});

const compiled = new Module("fr-translations-check", module);
compiled.filename = path.join(root, ".fr-translations-check.cjs");
compiled.paths = Module._nodeModulePaths(root);
compiled._compile(built.outputFiles[0].text, compiled.filename);
const {
  vivreEnFranceCourse,
  VIVRE_EN_FRANCE_DE,
  VIVRE_EN_FRANCE_EN,
  VIVRE_EN_FRANCE_PL,
  LIFE_IN_THE_UK_DE,
  LEBEN_IN_DEUTSCHLAND_EN,
  LIFE_IN_THE_UK_PL,
  LEBEN_IN_DEUTSCHLAND_PL,
  translateCourseText,
} = compiled.exports;

// Every French string a lesson can offer a translation for, in the same sense
// as the UK gate: the tagline under the course header, the lesson title and
// its chapter heading, every paragraph, callout, sub-heading and card.
const translatable = new Set();
if (vivreEnFranceCourse.tagline) translatable.add(vivreEnFranceCourse.tagline);
for (const lesson of vivreEnFranceCourse.lessons ?? []) {
  translatable.add(lesson.title);
  translatable.add(lesson.section);
  for (const block of lesson.blocks ?? []) {
    if (block.type === "h3" || block.type === "p" || block.type === "callout") {
      translatable.add(block.text);
    }
    if (block.type === "cards") {
      for (const item of block.items ?? []) {
        translatable.add(item.h4);
        translatable.add(item.p);
      }
    }
    // A cta closes a lesson with a title and a line beneath it, and
    // localiseLesson translates both. Leaving them out here does not just
    // skip a check: it drops them from the denominator too, so coverage
    // reads 100% while they are untranslated. That is exactly what
    // happened to the two cta strings of the last lesson.
    if (block.type === "cta") {
      translatable.add(block.title);
      translatable.add(block.sub);
    }
    // A quiz closes a lesson, and localiseLesson translates its question,
    // its options and its explanation. Counting them here is what makes
    // the coverage line below describe the lesson a reader actually sees
    // rather than the half of it that was translated first.
    if (block.type === "quiz") {
      translatable.add(block.q);
      for (const option of block.options ?? []) translatable.add(option.text);
      translatable.add(block.explanation);
    }
  }
}
// The course name is shown translated in the switcher, so it counts too.
if (vivreEnFranceCourse.name) translatable.add(vivreEnFranceCourse.name);

const failures = [];

// A translation identical to its French is a forgotten paste — unless the
// French is a name. "Molière", "Mayotte" and "Marianne · Rouget de Lisle" are
// meant to survive unchanged. Same rule as the UK gate: only a SENTENCE that
// came back identical is suspicious.
const looksLikeSentence = (text) => {
  const trimmed = text.trim();
  if (trimmed.includes(" · ")) return false;
  const words = trimmed.split(/\s+/).length;
  return (words > 1 && /[.!?]$/.test(trimmed)) || words > 6;
};

const check = (label, table, sharedWith, sharedLabel) => {
  const orphans = Object.keys(table).filter((key) => !translatable.has(key));
  if (orphans.length) {
    failures.push(
      `${label}: ${orphans.length} key(s) match no card or heading in the course, so they can never be shown:\n` +
        orphans.slice(0, 8).map((key) => `      ${JSON.stringify(key.slice(0, 90))}`).join("\n")
    );
  }

  const untranslated = Object.entries(table)
    .filter(([key, value]) => key === value && looksLikeSentence(key));
  if (untranslated.length) {
    failures.push(
      `${label}: ${untranslated.length} sentence(s) are identical to their French, which is a paste that was never translated: ` +
        untranslated.slice(0, 4).map(([key]) => JSON.stringify(key.slice(0, 60))).join(", ")
    );
  }

  const empty = Object.entries(table).filter(([, value]) => !String(value).trim());
  if (empty.length) failures.push(`${label}: ${empty.length} entries have an empty translation`);

  // The collision that has no symptom: the same key in both halves of the
  // spread. The France entry wins, and the other course shows French-derived
  // text under an English or German card.
  const collisions = Object.keys(table).filter((key) => key in sharedWith);
  if (collisions.length) {
    failures.push(
      `${label}: ${collisions.length} key(s) also exist in ${sharedLabel}, and both are spread into one object — ` +
        `the France entry wins and the other course gets the wrong text:\n` +
        collisions.slice(0, 8).map((key) => `      ${JSON.stringify(key.slice(0, 90))}`).join("\n")
    );
  }
};

check("German", VIVRE_EN_FRANCE_DE, LIFE_IN_THE_UK_DE, "LIFE_IN_THE_UK_DE");
check("English", VIVRE_EN_FRANCE_EN, LEBEN_IN_DEUTSCHLAND_EN, "LEBEN_IN_DEUTSCHLAND_EN");
// Polish is spread on top of TWO other tables, not one, so both are the thing
// it must not collide with.
check(
  "Polish",
  VIVRE_EN_FRANCE_PL,
  { ...LIFE_IN_THE_UK_PL, ...LEBEN_IN_DEUTSCHLAND_PL },
  "LIFE_IN_THE_UK_PL or LEBEN_IN_DEUTSCHLAND_PL"
);

// ── the picker can reach it ───────────────────────────────────────────────
// A table nothing offers is a file that sits there unread.
const lib = fs.readFileSync(path.join(root, "src/lib/courseTranslation.ts"), "utf8");
assert.ok(
  /id: "pl"[^}]*from: \[[^\]]*"fr"/.test(lib),
  "Polish must be registered as translating FROM French, or it is never offered beside this course"
);
assert.ok(
  /pl: \{[^}]*VIVRE_EN_FRANCE_PL/.test(lib),
  "the Polish table is not registered in TRANSLATIONS, so nothing would ever look it up"
);

// German has to be complete, and "complete" means what a reader gets: the
// merged lookup behind translateCourseText, not this one table. A few of
// these strings are bare numbers ("15", "1776") that another course's German
// table already owns, and repeating them here would put the same key twice
// into the same merged object — the collision this file forbids everywhere
// else. So they stay out, and the question asked here is the one a reader's
// tap asks. A string with no answer anywhere is a real gap and fails.
const noGerman = [...translatable].filter(
  (english) => translateCourseText(english, "de") === null
);
if (noGerman.length) {
  failures.push(
    `${noGerman.length} string(s) of Vivre en France have no German at all, in this table or any other:\n` +
      noGerman.slice(0, 8).map((s) => `      ${JSON.stringify(s.slice(0, 90))}`).join("\n")
  );
}

if (failures.length) {
  console.error("FAIL check-fr-translations");
  failures.forEach((line) => console.error("  " + line));
  process.exit(1);
}

const total = translatable.size;
// Floor, not round: 660 of 664 is not "100%", and reporting it as such is how
// the last few strings stay missing for ever.
const share = (table) => Math.floor((Object.keys(table).length / total) * 100);
const coverage = [
  ["German", VIVRE_EN_FRANCE_DE],
  ["English", VIVRE_EN_FRANCE_EN],
  ["Polish", VIVRE_EN_FRANCE_PL],
].map(([language, table]) => `${Object.keys(table).length} have ${language} (${share(table)}%)`).join(", ");
// The German column above counts this table. This counts what a reader
// reaches, which is the merged lookup — the difference is the handful of
// numbers another course's table supplies.
const germanFromElsewhere = total - Object.keys(VIVRE_EN_FRANCE_DE).length;
console.log(
  `check-fr-translations: of ${total} translatable strings, ${coverage}; every key matches real course text, ` +
    "no table collides with another course, the picker offers them beside the French course, " +
    `and a German reader reaches all ${total} — ${germanFromElsewhere} of them through another course's table`
);
