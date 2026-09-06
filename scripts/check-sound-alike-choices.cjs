#!/usr/bin/env node
/**
 * A listening choice the learner cannot answer is not a hard question.
 *
 * "Warten ___ erst mal ab." wants wir, and vier was offered beside it. German
 * w is [v] and v is [f]: through a synthesised voice the two differ by one
 * voicing cue on the first consonant and nothing else. The learner reported
 * hearing the same word twice with only one accepted, which is exactly what
 * that is.
 *
 * The distractors are drawn from the sitting's own sentences and sorted by
 * how near they are in LENGTH to the answer — a good rule for a written
 * choice and the worst possible one for a spoken test, because it actively
 * prefers words shaped like the answer. Nothing checked how they sounded.
 *
 * Both ends are checked here. Rejecting too much is cheap — one candidate out
 * of hundreds — but rejecting words that are plainly different would empty
 * the board, so the pairs that must STILL be offered are asserted too.
 */
const path = require("path");
const Module = require("module");
const fs = require("fs");
const esbuild = require("esbuild");

const root = path.resolve(__dirname, "..");
const built = esbuild.buildSync({
  stdin: {
    contents: 'export { germanSoundShape, germanSoundsAlike } from "./src/lib/germanSoundAlike.ts";',
    resolveDir: root,
    sourcefile: "sound-alike-entry.ts",
  },
  alias: { "@": path.join(root, "src") },
  bundle: true, format: "cjs", platform: "node", target: "node20", write: false, logLevel: "silent",
});
const compiled = new Module("sound-alike-check", module);
compiled.filename = path.join(root, ".sound-alike-check.cjs");
compiled.paths = Module._nodeModulePaths(root);
compiled._compile(built.outputFiles[0].text, compiled.filename);
const { germanSoundShape, germanSoundsAlike } = compiled.exports;

let failures = 0;
const check = (name, ok, detail = "") => {
  if (ok) console.log(`ok   ${name}`);
  else { console.error(`FAIL ${name}${detail ? ` — ${detail}` : ""}`); failures += 1; }
};

// ── the pairs a voice cannot separate ───────────────────────────────────────
const CONFUSABLE = [
  ["wir", "vier"],      // the reported one: [v] against [f], nothing else
  ["seit", "seid"],     // final devoicing makes them one word out loud
  ["viel", "fiel"],
  ["das", "dass"],
  ["man", "Mann"],
  ["wahr", "war"],
  ["Rad", "Rat"],
  ["Weg", "weck"],
  ["Meer", "mehr"],
  ["Stadt", "statt"],
  ["Lied", "Lid"],
  ["wieder", "wider"],
];
for (const [a, b] of CONFUSABLE) {
  check(`"${a}" and "${b}" are never offered together`, germanSoundsAlike(a, b),
    `sound shapes: ${germanSoundShape(a)} / ${germanSoundShape(b)}`);
}

// ── and the ones that must still be offered ─────────────────────────────────
// Over-rejecting is cheap, but not free: these are ordinary distractors and a
// board that refuses them has stopped being a test.
const DISTINCT = [
  ["wir", "hier"],
  ["wir", "ihr"],
  ["wir", "wer"],
  ["gehen", "sehen"],
  ["haben", "sagen"],
  ["Haus", "Maus"],       // one sound apart but four letters is enough to hear
  ["morgen", "Morgen"],   // the same word twice is not "sounds alike"
  ["Katze", "Hund"],
  ["arbeiten", "antworten"],
  ["möchte", "machte"],
];
for (const [a, b] of DISTINCT) {
  check(`"${a}" and "${b}" may still be offered together`, !germanSoundsAlike(a, b),
    `sound shapes: ${germanSoundShape(a)} / ${germanSoundShape(b)}`);
}

// ── and the rule is actually wired into both listening stages ───────────────
const guided = fs.readFileSync(path.join(root, "src/GuidedSession.tsx"), "utf8");
check("the missing-word stage rejects a sound-alike distractor",
  /if \(germanSoundsAlike\(word, answer\)\) return false;/u.test(guided));
check("and so does the whole-sentence listening choice",
  /if \(germanSoundsAlike\(value, answer\)\) return false;/u.test(guided));
// The translation stage is READ, not heard, so it keeps its own rule: a
// sound-alike there is a fair question and rejecting it would lose a
// distractor for nothing.
const translation = guided.slice(guided.indexOf("function buildTranslationChoices"), guided.indexOf("function moveOrderToken"));
check("the translation stage is left alone, because it is read rather than heard",
  !translation.includes("germanSoundsAlike"));

if (failures > 0) {
  console.error(`\n${failures} sound-alike check(s) failed`);
  process.exit(1);
}
console.log(`check-sound-alike-choices: ${CONFUSABLE.length} confusable pairs refused, ${DISTINCT.length} ordinary pairs still offered`);
