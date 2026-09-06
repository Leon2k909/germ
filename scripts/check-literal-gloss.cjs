const fs = require("fs");
const path = require("path");
const Module = require("module");
const esbuild = require("esbuild");

const root = path.resolve(__dirname, "..");
const result = esbuild.buildSync({
  stdin: {
    contents: `export { literalGloss } from "./src/lib/literalGloss.ts";`,
    resolveDir: root,
    sourcefile: "literal-gloss-check-entry.ts",
  },
  alias: { "@": path.join(root, "src") },
  bundle: true,
  format: "cjs",
  platform: "node",
  target: "node20",
  write: false,
  logLevel: "silent",
});

const compiled = new Module("literal-gloss-check", module);
compiled.filename = path.join(root, ".literal-gloss-check.cjs");
compiled.paths = Module._nodeModulePaths(root);
compiled._compile(result.outputFiles[0].text, compiled.filename);
const { literalGloss } = compiled.exports;

let failures = 0;
function check(name, condition) {
  if (condition) {
    console.log(`ok   ${name}`);
    return;
  }
  failures += 1;
  console.error(`FAIL ${name}`);
}

// ── the line shows German's own order ──────────────────────────────────────
// The whole point: the translation says what the sentence means, the literal
// line says what it says. An idiom is where the two are furthest apart.
check(
  "an idiom is read word by word rather than translated again",
  literalGloss("Ich hab die Nase voll.", "I'm fed up.") === "I have the nose full."
);
// A verb at the end stays at the end — moving it would be translating.
check(
  "the verb stays where German puts it",
  literalGloss("Können wir das Thema wechseln?", "Can we change the subject?")
    === "Can we the topic change?"
);

// ── it says nothing rather than something wrong ────────────────────────────
// One word the bank has never seen would leave a hole, and a hole reads as a
// mistake in the sentence rather than as a gap in the gloss.
check(
  "a single unknown word drops the whole line",
  literalGloss("Ich mag Quarkbällchenautomaten.", "I like doughnut machines.") === null
);
check("a lone word has no order to show", literalGloss("Hallo", "Hello") === null);
// The card would be saying the same thing twice.
check(
  "a sentence whose literal reading is the translation is left off",
  literalGloss("Ich bin müde.", "I am tired.") === null
);
check(
  "and it is left off against any of the translation's alternatives",
  literalGloss("Ich bin müde.", "I'm shattered. / I am tired.") === null
);

// ── the two words that change the sentence's meaning ───────────────────────
// Sie is she, they and formal you at once, and the bank answers in lowercase
// where the capital is the only thing that distinguishes them.
check(
  "capitalised Sie is formal you, not she",
  literalGloss("Warten Sie bitte hier.", "Please wait here.") === "Wait you please here."
);
// der/die/das: article before a noun, that on its own.
const article = literalGloss("Das ist totaler Quatsch.", "That's total nonsense.");
check("das standing alone reads as that", /^That is /u.test(String(article)));
// Which English word the bank offers for the noun is its business — what is
// asserted here is the article, the one part this file decides.
const beforeNoun = literalGloss("Das Auto ist neu.", "The car is new.");
check("das before a noun reads as the", /^The \w+ is new\.$/u.test(String(beforeNoun)));

// ── it reads as English, not as a word list ────────────────────────────────
check(
  "the sentence's own punctuation is kept",
  literalGloss("Hier, bitte. Danke schön!", "Here you go. Thank you!")
    === "Here, please. Thanks beautiful!"
);
check(
  "the verbs that carry most sentences are given in the person German used",
  literalGloss("Die Kinder sind hungrig.", "The kids are hungry.")
    === "The child are hungry."
);

// ── it is on the Listen card, both kinds ───────────────────────────────────
const listen = fs.readFileSync(path.join(root, "src/components/listen/ListenView.tsx"), "utf8");
check(
  "the single sentence carries the line under its meaning",
  /literalGloss\(item\.de, item\.en\)/u.test(listen)
    && listen.includes('<p className="listen-literal" lang="en">')
);
check(
  "so does every turn of a dialogue",
  /\(item\?\.turns \?\? \[\]\)\.map\(\(turn\) => literalGloss\(turn\.de, turn\.en\)\)/u.test(listen)
    && listen.includes("listen-turn-literal")
);
// German words with English meanings is all the bank holds: a French meaning
// has nothing to build from, and an English course would gloss the language
// the learner already speaks.
check(
  "and only where the course is German taught in English",
  /slotLanguage\.de === "de" && slotLanguage\.en === "en"/u.test(listen)
);

if (failures) {
  console.error(`\n${failures} literal-gloss regression${failures === 1 ? "" : "s"}`);
  process.exit(1);
}

console.log("\nThe literal line reads German's order, or says nothing at all");
