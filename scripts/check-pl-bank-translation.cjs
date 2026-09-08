#!/usr/bin/env node
/**
 * Polish for the practice questions of the country packs.
 *
 * These questions are not lesson text, so check-pl-translations and its
 * siblings would call every one of these keys an orphan and refuse them. They
 * reach a reader all the same, in three places: ukSessionQuizzes folds the UK
 * bank into the stepped lesson, and UkPracticeView and UkTestView — both
 * shared by all seven countries — show every bank. A lesson was being read in
 * Polish and then asking its questions in English.
 *
 * The German sibling lists all six banks because German has all six. Polish
 * is arriving one bank at a time, so BANKS holds the ones a Polish reader can
 * already have. A bank is added to that list on the day its table ships, and
 * from that day this gate refuses to let a single string of it go missing.
 *
 * What this checks, for each bank listed:
 *
 *   - every key is a string the bank really contains, character for
 *     character, because a key one character off is never found and nothing
 *     anywhere reports it;
 *   - every string of the bank has Polish — measured through
 *     translateCourseText, the lookup a reader's tap goes through, so a
 *     string another table already answers counts and is not duplicated here;
 *   - no key of a bank table is also a key of another Polish table, which
 *     would be a silent collision in the single object they are spread into;
 *   - the English names the exam itself asks for survive into the Polish;
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
      'export { DE_QUESTIONS } from "./src/lib/deQuestionBank.ts";\n' +
      'export { FR_QUESTIONS } from "./src/lib/frQuestionBank.ts";\n' +
      'export { UK_QUESTION_BANK_PL } from "./src/lib/ukQuestionBankTranslationsPl.ts";\n' +
      'export { DE_QUESTION_BANK_PL } from "./src/lib/deQuestionBankTranslationsPl.ts";\n' +
      'export { FR_QUESTION_BANK_PL } from "./src/lib/frQuestionBankTranslationsPl.ts";\n' +
      'export { LIFE_IN_THE_UK_PL } from "./src/lib/lifeInTheUkTranslationsPl.ts";\n' +
      'export { LEBEN_IN_DEUTSCHLAND_PL } from "./src/lib/lebenInDeutschlandTranslationsPl.ts";\n' +
      'export { VIVRE_EN_FRANCE_PL } from "./src/lib/vivreEnFranceTranslationsPl.ts";\n' +
      'export { VIVERE_IN_ITALIA_PL } from "./src/lib/vivereInItaliaTranslationsPl.ts";\n' +
      'export { VIVIR_EN_ESPANA_PL } from "./src/lib/vivirEnEspanaTranslationsPl.ts";\n' +
      'export { ZHIZN_V_ROSSII_PL } from "./src/lib/zhiznVRossiiTranslationsPl.ts";\n' +
      'export { translateCourseText } from "./src/lib/courseTranslation.ts";',
    resolveDir: root,
    sourcefile: "pl-bank-translation-entry.ts",
  },
  alias: { "@": path.join(root, "src") },
  bundle: true,
  format: "cjs",
  platform: "node",
  target: "node20",
  write: false,
  logLevel: "silent",
});

const compiled = new Module("pl-bank-translation-check", module);
compiled.filename = path.join(root, ".pl-bank-translation-check.cjs");
compiled.paths = Module._nodeModulePaths(root);
compiled._compile(built.outputFiles[0].text, compiled.filename);

const M = compiled.exports;

/** The Polish tables a bank table must NOT share a key with. */
const COURSE_TABLES = [
  ["Life in the UK", M.LIFE_IN_THE_UK_PL],
  ["Leben in Deutschland", M.LEBEN_IN_DEUTSCHLAND_PL],
  ["Vivre en France", M.VIVRE_EN_FRANCE_PL],
  ["Vivere in Italia", M.VIVERE_IN_ITALIA_PL],
  ["Vivir en Espana", M.VIVIR_EN_ESPANA_PL],
  ["Zhizn v Rossii", M.ZHIZN_V_ROSSII_PL],
];

const BANKS = [
  {
    label: "Life in the UK",
    questions: M.UK_QUESTIONS,
    table: M.UK_QUESTION_BANK_PL,
    symbol: "UK_QUESTION_BANK_PL",
    // The exam is sat in English and asks for these exact words, so a Polish
    // rendering of them would teach the wrong answer. Each is only measured
    // where the key already carries it.
    keep: [
      "Equality Act 2010",
      "Human Rights Act 1998",
      "Magna Carta",
      "Church of England",
      "House of Commons",
      "House of Lords",
    ],
  },
  {
    label: "Leben in Deutschland",
    questions: M.DE_QUESTIONS,
    table: M.DE_QUESTION_BANK_PL,
    symbol: "DE_QUESTION_BANK_PL",
    // Same reason, in German: the test asks for the word itself, so the word
    // itself is what a Polish reader has to come away with.
    keep: [
      "Grundgesetz",
      "Bundestag",
      "Bundesrat",
      "Bundeskanzler",
      "Bundespräsident",
      "Bundesverfassungsgericht",
      "Standesamt",
    ],
  },
  {
    label: "Vivre en France",
    questions: M.FR_QUESTIONS,
    table: M.FR_QUESTION_BANK_PL,
    symbol: "FR_QUESTION_BANK_PL",
    // Polish inflects these where a sentence needs a case — Senatu,
    // senatorów — so the rule only asks that most entries keep the name, not
    // every one.
    keep: [
      "laïcité",
      "Sénat",
      "SMIC",
      "Défenseur des droits",
      "Assurance maladie",
      "Sécurité sociale",
      "prud'hommes",
    ],
  },
];

const failures = [];

// A translation identical to its source is a forgotten paste — unless the
// source is a name or a title. Only a SENTENCE that came back unchanged is
// suspicious, so this asks for final punctuation or real length.
//
// A title is not a sentence even when it ends in a full stop or an
// exclamation mark: "Rule, Britannia!" is "Rule, Britannia!" in Polish too,
// and demanding a difference would only invite a worse answer. Title Case is
// the test — every word that carries letters begins with a capital, apart
// from the short joining words a title leaves in lower case.
const JOINING = new Set([
  "a", "an", "and", "as", "at", "by", "for", "in", "of", "on", "or", "the", "to",
  "de", "des", "du", "la", "le", "les", "et", "en",
]);
const looksLikeTitle = (text) => {
  const words = text.replace(/[.!?,]/g, " ").split(/\s+/).filter(Boolean);
  return words.length > 1 && words.every((word) => JOINING.has(word) || /^[A-Z]/.test(word));
};
const looksLikeSentence = (text) => {
  const trimmed = text.trim();
  if (looksLikeTitle(trimmed)) return false;
  const words = trimmed.split(/\s+/).length;
  return (words > 1 && /[.!?]$/.test(trimmed)) || words > 6;
};

const counts = [];
for (const { label, questions, table, symbol, keep } of BANKS) {
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

  const noPolish = [...inBank].filter((source) => M.translateCourseText(source, "pl") === null);
  if (noPolish.length) {
    failures.push(
      `${label}: ${noPolish.length} question string(s) have no Polish at all, in this table or any other:\n` +
        noPolish.slice(0, 8).map((text) => `      ${JSON.stringify(text.slice(0, 90))}`).join("\n")
    );
  }

  for (const [other, otherTable] of COURSE_TABLES) {
    const shared = Object.keys(table).filter((key) => key in otherTable);
    if (shared.length) {
      failures.push(
        `${label}: ${shared.length} key(s) are also in the Polish table of ${other}. Both are spread ` +
          "into one object, so whichever spread runs last decides the wording for both — drop them here:\n" +
          shared.slice(0, 6).map((key) => `      ${JSON.stringify(key.slice(0, 80))}`).join("\n")
      );
    }
  }

  for (const term of keep) {
    const withTerm = Object.entries(table).filter(([key]) => key.includes(term));
    const dropped = withTerm.filter(([, value]) => !value.includes(term));
    if (withTerm.length >= 4 && dropped.length > withTerm.length / 2) {
      failures.push(
        `${label}: ${dropped.length} of ${withTerm.length} entries mentioning "${term}" no longer carry it. ` +
          "The exam asks for that exact English wording, so it stays as it is:\n" +
          dropped.slice(0, 4).map(([key]) => `      ${JSON.stringify(key.slice(0, 80))}`).join("\n")
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

  // A bank table nobody spread into the lookup would pass every check above
  // and still show a reader nothing, so make sure it is registered.
  const registered = require("fs").readFileSync(path.join(root, "src/lib/courseTranslation.ts"), "utf8");
  if (!registered.includes(`...${symbol}`)) {
    failures.push(`${symbol} is never spread into TRANSLATIONS.pl, so nothing in it can ever be found`);
  }

  const here = Object.keys(table).length;
  counts.push(
    `${label} ${questions.length} questions / ${inBank.size} strings ` +
      `(${here} here, ${inBank.size - here} from a course table)`
  );
}

if (failures.length) {
  console.error("FAIL check-pl-bank-translation");
  failures.forEach((line) => console.error("  " + line));
  process.exit(1);
}

console.log(
  `check-pl-bank-translation: ${counts.join("; ")} — all reachable in Polish, ` +
    "every key matches a real question and no table collides with another"
);
process.exit(0);
