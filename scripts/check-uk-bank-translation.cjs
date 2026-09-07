#!/usr/bin/env node
/**
 * German for the Life in the UK practice questions.
 *
 * These questions are not lesson text, so check-uk-translations would call
 * every one of these keys an orphan and refuse them. They reach the reader
 * all the same: ukSessionQuizzes turns them into steps of the same stepped
 * lesson that shows the course's own quiz blocks, through the same component
 * and the same tap marker. A lesson was being read in German and then asking
 * its questions in English.
 *
 * What this checks:
 *
 *   - every key is a string the bank really contains, character for
 *     character, because a key one character off is never found and nothing
 *     anywhere reports it;
 *   - every string of the bank has German — measured through
 *     translateCourseText, the lookup a reader's tap goes through, so a
 *     string another table already answers counts and is not duplicated here;
 *   - no key of this table is also a key of another German table, which would
 *     be a silent collision in the single object they are all spread into;
 *   - no value is empty, and no sentence came back identical to its English.
 */
const path = require("path");
const Module = require("module");
const esbuild = require("esbuild");

const root = path.resolve(__dirname, "..");

const built = esbuild.buildSync({
  stdin: {
    contents:
      'export { UK_QUESTIONS } from "./src/lib/ukQuestionBank.ts";\n' +
      'export { UK_QUESTION_BANK_DE } from "./src/lib/ukQuestionBankTranslationsDe.ts";\n' +
      'export { LIFE_IN_THE_UK_DE } from "./src/lib/lifeInTheUkTranslationsDe.ts";\n' +
      'export { VIVRE_EN_FRANCE_DE } from "./src/lib/vivreEnFranceTranslationsDe.ts";\n' +
      'export { ZHIZN_V_ROSSII_DE } from "./src/lib/zhiznVRossiiTranslationsDe.ts";\n' +
      'export { ZYCIE_W_POLSCE_DE } from "./src/lib/zycieWPolsceTranslationsDe.ts";\n' +
      'export { VIVERE_IN_ITALIA_DE } from "./src/lib/vivereInItaliaTranslationsDe.ts";\n' +
      'export { VIVIR_EN_ESPANA_DE } from "./src/lib/vivirEnEspanaTranslationsDe.ts";\n' +
      'export { CSHARP_COURSE_DE } from "./src/lib/csharpCourseDe.ts";\n' +
      'export { translateCourseText } from "./src/lib/courseTranslation.ts";',
    resolveDir: root,
    sourcefile: "uk-bank-translation-entry.ts",
  },
  alias: { "@": path.join(root, "src") },
  bundle: true,
  format: "cjs",
  platform: "node",
  target: "node20",
  write: false,
  logLevel: "silent",
});

const compiled = new Module("uk-bank-translation-check", module);
compiled.filename = path.join(root, ".uk-bank-translation-check.cjs");
compiled.paths = Module._nodeModulePaths(root);
compiled._compile(built.outputFiles[0].text, compiled.filename);

const {
  UK_QUESTIONS,
  UK_QUESTION_BANK_DE,
  LIFE_IN_THE_UK_DE,
  VIVRE_EN_FRANCE_DE,
  ZHIZN_V_ROSSII_DE,
  ZYCIE_W_POLSCE_DE,
  VIVERE_IN_ITALIA_DE,
  VIVIR_EN_ESPANA_DE,
  CSHARP_COURSE_DE,
  translateCourseText,
} = compiled.exports;

const failures = [];

/** Every string of the bank a reader can be shown. */
const inBank = new Set();
for (const question of UK_QUESTIONS) {
  const add = (text) => {
    if (typeof text === "string" && text.trim()) inBank.add(text.trim());
  };
  add(question.q);
  for (const option of question.options) add(option);
  add(question.explanation);
}

const orphans = Object.keys(UK_QUESTION_BANK_DE).filter((key) => !inBank.has(key));
if (orphans.length) {
  failures.push(
    `${orphans.length} key(s) match no question in the bank, so they can never be shown:\n` +
      orphans.slice(0, 8).map((key) => `      ${JSON.stringify(key.slice(0, 90))}`).join("\n")
  );
}

const noGerman = [...inBank].filter((english) => translateCourseText(english, "de") === null);
if (noGerman.length) {
  failures.push(
    `${noGerman.length} question string(s) have no German at all, in this table or any other:\n` +
      noGerman.slice(0, 8).map((text) => `      ${JSON.stringify(text.slice(0, 90))}`).join("\n")
  );
}

const OTHER_TABLES = [
  ["Life in the UK", LIFE_IN_THE_UK_DE],
  ["Vivre en France", VIVRE_EN_FRANCE_DE],
  ["Zhizn v Rossii", ZHIZN_V_ROSSII_DE],
  ["Zycie w Polsce", ZYCIE_W_POLSCE_DE],
  ["Vivere in Italia", VIVERE_IN_ITALIA_DE],
  ["Vivir en Espana", VIVIR_EN_ESPANA_DE],
  ["C# for s&box", CSHARP_COURSE_DE],
];
for (const [label, table] of OTHER_TABLES) {
  const shared = Object.keys(UK_QUESTION_BANK_DE).filter((key) => key in table);
  if (shared.length) {
    failures.push(
      `${shared.length} key(s) are also in the German table of ${label}. Both are spread into one ` +
        "object, so whichever spread runs last decides the wording for both — drop them here:\n" +
        shared.slice(0, 6).map((key) => `      ${JSON.stringify(key.slice(0, 80))}`).join("\n")
    );
  }
}

const empty = Object.entries(UK_QUESTION_BANK_DE).filter(([, value]) => !String(value).trim());
if (empty.length) failures.push(`${empty.length} entries have an empty translation`);

// A translation identical to its English is a forgotten paste — unless the
// English is a name or a title. Only a SENTENCE that came back unchanged is
// suspicious, so this asks for final punctuation or real length.
//
// A title is not a sentence even when it ends in a full stop or an
// exclamation mark: "Rule, Britannia!" is "Rule, Britannia!" in German, and
// demanding a difference would only invite a worse answer. Title Case is the
// test — every word that carries letters begins with a capital, apart from
// the short joining words a title leaves in lower case.
const JOINING = new Set(["a", "an", "and", "as", "at", "by", "for", "in", "of", "on", "or", "the", "to"]);
const looksLikeTitle = (text) => {
  const words = text.replace(/[.!?,]/g, " ").split(/\s+/).filter(Boolean);
  return words.length > 1 && words.every((word) => JOINING.has(word) || /^[A-ZÄÖÜ]/.test(word));
};
const looksLikeSentence = (text) => {
  const trimmed = text.trim();
  if (looksLikeTitle(trimmed)) return false;
  const words = trimmed.split(/\s+/).length;
  return (words > 1 && /[.!?]$/.test(trimmed)) || words > 6;
};
const untranslated = Object.entries(UK_QUESTION_BANK_DE)
  .filter(([key, value]) => key === value && looksLikeSentence(key));
if (untranslated.length) {
  failures.push(
    `${untranslated.length} sentence(s) are identical to their English, which is a paste that was never translated: ` +
      untranslated.slice(0, 4).map(([key]) => JSON.stringify(key.slice(0, 60))).join(", ")
  );
}

if (failures.length) {
  console.error("FAIL check-uk-bank-translation");
  failures.forEach((line) => console.error("  " + line));
  process.exit(1);
}

const here = Object.keys(UK_QUESTION_BANK_DE).length;
console.log(
  `check-uk-bank-translation: ${UK_QUESTIONS.length} practice questions, ${inBank.size} strings, ` +
    `all of them reachable in German (${here} from this table, ${inBank.size - here} from a course table), ` +
    "every key matches a real question and no table collides with another"
);
process.exit(0);
