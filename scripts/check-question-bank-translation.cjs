#!/usr/bin/env node
/**
 * German for the practice questions of the country packs.
 *
 * These questions are not lesson text, so check-uk-translations and its
 * siblings would call every one of these keys an orphan and refuse them. They
 * reach a reader all the same, in three places: ukSessionQuizzes folds the UK
 * bank into the stepped lesson, and UkPracticeView and UkTestView — both
 * shared by all seven countries — show every bank. A lesson was being read in
 * German and then asking its questions in English.
 *
 * One gate, a list of banks, so the next language is three lines rather than
 * a copied file.
 *
 * What this checks, for each bank listed:
 *
 *   - every key is a string the bank really contains, character for
 *     character, because a key one character off is never found and nothing
 *     anywhere reports it;
 *   - every string of the bank has German — measured through
 *     translateCourseText, the lookup a reader's tap goes through, so a
 *     string another table already answers counts and is not duplicated here;
 *   - no key of a bank table is also a key of another German table, which
 *     would be a silent collision in the single object they are spread into;
 *   - no value is empty, and no sentence came back identical to its source.
 */
const path = require("path");
const Module = require("module");
const esbuild = require("esbuild");

const root = path.resolve(__dirname, "..");

const built = esbuild.buildSync({
  stdin: {
    contents:
      'export { UK_QUESTIONS } from "./src/lib/ukQuestionBank.ts";\n' +
      'export { FR_QUESTIONS } from "./src/lib/frQuestionBank.ts";\n' +
      'export { UK_QUESTION_BANK_DE } from "./src/lib/ukQuestionBankTranslationsDe.ts";\n' +
      'export { FR_QUESTION_BANK_DE } from "./src/lib/frQuestionBankTranslationsDe.ts";\n' +
      'export { LIFE_IN_THE_UK_DE } from "./src/lib/lifeInTheUkTranslationsDe.ts";\n' +
      'export { VIVRE_EN_FRANCE_DE } from "./src/lib/vivreEnFranceTranslationsDe.ts";\n' +
      'export { ZHIZN_V_ROSSII_DE } from "./src/lib/zhiznVRossiiTranslationsDe.ts";\n' +
      'export { ZYCIE_W_POLSCE_DE } from "./src/lib/zycieWPolsceTranslationsDe.ts";\n' +
      'export { VIVERE_IN_ITALIA_DE } from "./src/lib/vivereInItaliaTranslationsDe.ts";\n' +
      'export { VIVIR_EN_ESPANA_DE } from "./src/lib/vivirEnEspanaTranslationsDe.ts";\n' +
      'export { CSHARP_COURSE_DE } from "./src/lib/csharpCourseDe.ts";\n' +
      'export { translateCourseText } from "./src/lib/courseTranslation.ts";',
    resolveDir: root,
    sourcefile: "question-bank-translation-entry.ts",
  },
  alias: { "@": path.join(root, "src") },
  bundle: true,
  format: "cjs",
  platform: "node",
  target: "node20",
  write: false,
  logLevel: "silent",
});

const compiled = new Module("question-bank-translation-check", module);
compiled.filename = path.join(root, ".question-bank-translation-check.cjs");
compiled.paths = Module._nodeModulePaths(root);
compiled._compile(built.outputFiles[0].text, compiled.filename);

const M = compiled.exports;

/** The German tables a bank table must NOT share a key with. */
const COURSE_TABLES = [
  ["Life in the UK", M.LIFE_IN_THE_UK_DE],
  ["Vivre en France", M.VIVRE_EN_FRANCE_DE],
  ["Zhizn v Rossii", M.ZHIZN_V_ROSSII_DE],
  ["Zycie w Polsce", M.ZYCIE_W_POLSCE_DE],
  ["Vivere in Italia", M.VIVERE_IN_ITALIA_DE],
  ["Vivir en Espana", M.VIVIR_EN_ESPANA_DE],
  ["C# for s&box", M.CSHARP_COURSE_DE],
];

const BANKS = [
  { label: "Life in the UK", questions: M.UK_QUESTIONS, table: M.UK_QUESTION_BANK_DE },
  { label: "Vivre en France", questions: M.FR_QUESTIONS, table: M.FR_QUESTION_BANK_DE },
];

const failures = [];

// A translation identical to its source is a forgotten paste — unless the
// source is a name or a title. Only a SENTENCE that came back unchanged is
// suspicious, so this asks for final punctuation or real length.
//
// A title is not a sentence even when it ends in a full stop or an
// exclamation mark: "Rule, Britannia!" is "Rule, Britannia!" in German, and
// demanding a difference would only invite a worse answer. Title Case is the
// test — every word that carries letters begins with a capital, apart from
// the short joining words a title leaves in lower case.
const JOINING = new Set([
  "a", "an", "and", "as", "at", "by", "for", "in", "of", "on", "or", "the", "to",
  "de", "des", "du", "la", "le", "les", "et", "en",
]);
const looksLikeTitle = (text) => {
  const words = text.replace(/[.!?,]/g, " ").split(/\s+/).filter(Boolean);
  return words.length > 1 && words.every((word) => JOINING.has(word) || /^[A-ZÄÖÜÀÉÈÊÎÔÛÇ]/.test(word));
};
const looksLikeSentence = (text) => {
  const trimmed = text.trim();
  if (looksLikeTitle(trimmed)) return false;
  const words = trimmed.split(/\s+/).length;
  return (words > 1 && /[.!?]$/.test(trimmed)) || words > 6;
};

const counts = [];
for (const { label, questions, table } of BANKS) {
  const inBank = new Set();
  for (const question of questions) {
    const add = (text) => {
      if (typeof text === "string" && text.trim()) inBank.add(text.trim());
    };
    add(question.q);
    for (const option of question.options) add(option);
    add(question.explanation);
  }

  const orphans = Object.keys(table).filter((key) => !inBank.has(key));
  if (orphans.length) {
    failures.push(
      `${label}: ${orphans.length} key(s) match no question in the bank, so they can never be shown:\n` +
        orphans.slice(0, 8).map((key) => `      ${JSON.stringify(key.slice(0, 90))}`).join("\n")
    );
  }

  const noGerman = [...inBank].filter((source) => M.translateCourseText(source, "de") === null);
  if (noGerman.length) {
    failures.push(
      `${label}: ${noGerman.length} question string(s) have no German at all, in this table or any other:\n` +
        noGerman.slice(0, 8).map((text) => `      ${JSON.stringify(text.slice(0, 90))}`).join("\n")
    );
  }

  for (const [other, otherTable] of COURSE_TABLES) {
    const shared = Object.keys(table).filter((key) => key in otherTable);
    if (shared.length) {
      failures.push(
        `${label}: ${shared.length} key(s) are also in the German table of ${other}. Both are spread ` +
          "into one object, so whichever spread runs last decides the wording for both — drop them here:\n" +
          shared.slice(0, 6).map((key) => `      ${JSON.stringify(key.slice(0, 80))}`).join("\n")
      );
    }
  }

  const empty = Object.entries(table).filter(([, value]) => !String(value).trim());
  if (empty.length) failures.push(`${label}: ${empty.length} entries have an empty translation`);

  const untranslated = Object.entries(table)
    .filter(([key, value]) => key === value && looksLikeSentence(key));
  if (untranslated.length) {
    failures.push(
      `${label}: ${untranslated.length} sentence(s) are identical to their source, which is a paste that was never translated: ` +
        untranslated.slice(0, 4).map(([key]) => JSON.stringify(key.slice(0, 60))).join(", ")
    );
  }

  const here = Object.keys(table).length;
  counts.push(
    `${label} ${questions.length} questions / ${inBank.size} strings ` +
      `(${here} here, ${inBank.size - here} from a course table)`
  );
}

// A bank table nobody spread into the lookup would pass every check above and
// still show a reader nothing, so make sure each is registered.
const registered = require("fs").readFileSync(path.join(root, "src/lib/courseTranslation.ts"), "utf8");
for (const name of ["UK_QUESTION_BANK_DE", "FR_QUESTION_BANK_DE"]) {
  if (!registered.includes(`...${name}`)) {
    failures.push(`${name} is never spread into TRANSLATIONS.de, so nothing in it can ever be found`);
  }
}

if (failures.length) {
  console.error("FAIL check-question-bank-translation");
  failures.forEach((line) => console.error("  " + line));
  process.exit(1);
}

console.log(
  `check-question-bank-translation: ${counts.join("; ")} — all reachable in German, ` +
    "every key matches a real question and no table collides with another"
);
process.exit(0);
