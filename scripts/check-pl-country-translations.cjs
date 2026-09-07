#!/usr/bin/env node
/**
 * The Polish tables for the country courses that are not written in Polish.
 *
 * Life in the UK, Leben in Deutschland and Vivre en France have gates of
 * their own — check-uk-translations, check-de-translations and
 * check-fr-translations — because those three files carry several targets at
 * once. The courses here have a Polish table and nothing else checking it, so
 * they share this file, the way check-fr-country-translations does for
 * French: a second joins by adding four lines to COURSES rather than by
 * copying two hundred.
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
 * AND THE TWO WAYS A COMPLETE TABLE STILL SHOWS NOTHING. Both have no symptom
 * at runtime, which is why they are checked here rather than noticed later:
 *
 *   - a table never spread into TRANSLATIONS.pl is looked up by nobody;
 *   - a source language missing from Polish's `from` list means the picker
 *     never offers Polish beside that course, so the table is unreachable
 *     even though it is registered.
 */
const assert = require("assert");
const fs = require("fs");
const path = require("path");
const Module = require("module");
const esbuild = require("esbuild");

const root = path.resolve(__dirname, "..");

/**
 * One row per Polish table for a country course.
 *
 * `sourceLetters` are the letters that language has and Polish does not, so a
 * value still written in it can be recognised. Polish carries its own row of
 * accented letters — ą ć ę ł ń ó ś ź ż — and none of them overlaps with the
 * grave accents of Italian or the tilde of Spanish, which makes this net
 * sharper here than it is for a French reader. Proper names are exempt where
 * the two alphabets are shared, so only a LOWERCASE word carrying those
 * letters counts. For a Cyrillic source there is no such exemption — a Polish
 * sentence keeps no Cyrillic at all, names included.
 */
const COURSES = [
  {
    label: "Vivere in Italia",
    source: "it",
    course: { module: "vivereInItaliaCourse", symbol: "vivereInItaliaCourse" },
    table: { module: "vivereInItaliaTranslationsPl", symbol: "VIVERE_IN_ITALIA_PL" },
    // Polish uses ó but never à, ì, ò or ù, so a value carrying those is a
    // line nobody translated.
    sourceLetters: /[àìòù]/,
    // Only terms with NO Polish equivalent belong here. Costituzione and
    // Parlamento do have one and should be translated; demanding that they
    // survive would ask for worse Polish. What is left is the vocabulary a
    // reader will meet on a form or at a counter and nowhere else.
    keep: ["codice fiscale", "Ferragosto", "questura", "IRPEF", "INPS"],
  },
  {
    label: "Vivir en Espana",
    source: "es",
    course: { module: "vivirEnEspanaCourse", symbol: "vivirEnEspanaCourse" },
    table: { module: "vivirEnEspanaTranslationsPl", symbol: "VIVIR_EN_ESPANA_PL" },
    // Polish has ó but never á, í, ú, ñ or the opening marks, so a value
    // carrying those is a line nobody translated.
    sourceLetters: /[áíúñ¿¡]/,
    // Only terms with NO Polish equivalent. Constitución and Parlamento have
    // one and should be translated; asking for those to survive would be
    // asking for worse Polish.
    keep: ["Cortes", "padrón", "NIE", "Bachillerato", "empadronamiento"],
  },
  {
    label: "Zhizn v Rossii",
    source: "ru",
    course: { module: "zhiznVRossiiCourse", symbol: "zhiznVRossiiCourse" },
    table: { module: "zhiznVRossiiTranslationsPl", symbol: "ZHIZN_V_ROSSII_PL" },
    // Cyrillic in a Polish sentence is untranslated text, whatever the word
    // is — so unlike the Latin-alphabet rows above, proper names are not
    // exempt and this net actually catches things.
    sourceLetters: /[Ѐ-ӿ]/,
    cyrillic: true,
    // Only terms the exam asks for that Polish has no word of its own for,
    // and each has to be a PAIR: the Russian to find in the key, the
    // transliteration to require in the Polish, because the rule above
    // forbids Cyrillic in the value. Конституция and Правительство both have
    // a Polish word and should be translated.
    keep: [["СНИЛС", "SNILS"], ["ЕГЭ", "EGE"], ["МРОТ", "MROT"]],
  },
];

// Every table spread into TRANSLATIONS.pl, including the three checked
// elsewhere, because a collision does not care which file it came from.
const MERGED = [
  { label: "Life in the UK", module: "lifeInTheUkTranslationsPl", symbol: "LIFE_IN_THE_UK_PL" },
  { label: "Leben in Deutschland", module: "lebenInDeutschlandTranslationsPl", symbol: "LEBEN_IN_DEUTSCHLAND_PL" },
  { label: "Vivre en France", module: "vivreEnFranceTranslationsPl", symbol: "VIVRE_EN_FRANCE_PL" },
];

const imports = [
  ...COURSES.flatMap(({ course, table }) => [
    `export { ${course.symbol} } from "./src/lib/${course.module}.ts";`,
    `export { ${table.symbol} } from "./src/lib/${table.module}.ts";`,
  ]),
  ...MERGED.map(({ module: name, symbol }) => `export { ${symbol} } from "./src/lib/${name}.ts";`),
].join("\n");

const built = esbuild.buildSync({
  stdin: { contents: imports, resolveDir: root, sourcefile: "pl-country-translations-entry.ts" },
  alias: { "@": path.join(root, "src") },
  bundle: true,
  format: "cjs",
  platform: "node",
  target: "node20",
  write: false,
  logLevel: "silent",
});
const compiled = new Module("pl-country-translations-check", module);
compiled.filename = path.join(root, ".pl-country-translations-check.cjs");
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

  const untranslated = Object.entries(table).filter(([, value]) => {
    const words = String(value).split(/\s+/).filter(Boolean);
    if (words.length < 6) return false;
    const foreign = words.filter((word) => {
      if (!entry.sourceLetters.test(word)) return false;
      // Cyrillic never belongs in a Polish sentence, name or not.
      return entry.cyrillic || word[0] === word[0].toLowerCase();
    });
    return foreign.length > words.length / 3;
  });
  if (untranslated.length) {
    failures.push(
      `${label}: ${untranslated.length} value(s) are still written in the source language: `
      + untranslated.slice(0, 4).map(([key]) => JSON.stringify(key.slice(0, 60))).join(", ")
    );
  }

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
  //
  // A keep entry is normally one string, looked for on both sides. For a
  // Cyrillic source it has to be a PAIR — the Russian to look for in the key,
  // the transliteration to require in the Polish — because the rule above
  // forbids Cyrillic in the value, and a single string could never be found
  // on both sides at once.
  for (const keep of entry.keep) {
    const [source, target] = Array.isArray(keep) ? keep : [keep, keep];
    const withTerm = Object.entries(table).filter(([key]) => key.includes(source));
    const dropped = withTerm.filter(([, value]) => !value.includes(target));
    if (withTerm.length >= 4 && dropped.length > withTerm.length / 2) {
      failures.push(
        `${label}: ${JSON.stringify(target)} survives in only ${withTerm.length - dropped.length} of ${withTerm.length} `
        + `entries about ${JSON.stringify(source)} — that is the word the country uses and it should stay in the sentence`
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
        + "spread into TRANSLATIONS.pl — one of the two translations is lost with no error anywhere"
      );
    } else {
      seen.set(key, entry.label);
    }
  }
}

// ── the picker can reach them ──────────────────────────────────────────────
const lib = fs.readFileSync(path.join(root, "src/lib/courseTranslation.ts"), "utf8");
const from = /id: "pl"[^}]*from: \[([^\]]*)\]/.exec(lib);
assert.ok(from, "Polish has no from list in TRANSLATION_LANGUAGES");
for (const entry of COURSES) {
  assert.ok(
    new RegExp(`pl: \\{[^}]*${entry.table.symbol}`).test(lib),
    `${entry.table.symbol} is not registered in TRANSLATIONS, so nothing would ever look it up`
  );
  assert.ok(
    from[1].includes(`"${entry.source}"`),
    `Polish must be registered as translating FROM "${entry.source}", or it is never offered beside ${entry.label}`
  );
}

if (failures.length) {
  console.error("FAIL check-pl-country-translations");
  failures.forEach((line) => console.error("  " + line));
  process.exit(1);
}

console.log("check-pl-country-translations: every key matches real course text, no table collides with another,");
summaries.forEach((line) => console.log(line));
console.log("  and every table is spread into TRANSLATIONS.pl with its source language in the from list");
process.exit(0);
