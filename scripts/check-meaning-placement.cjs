const fs = require("fs");
const path = require("path");
const Module = require("module");
const esbuild = require("esbuild");

const root = path.resolve(__dirname, "..");
const result = esbuild.buildSync({
  stdin: {
    contents: `
      export {
        DEFAULT_MEANING_PLACEMENT,
        MEANING_PLACEMENTS,
        getMeaningPlacement,
        setMeaningPlacement,
      } from "./src/lib/meaningPlacement.ts";
    `,
    resolveDir: root,
    sourcefile: "meaning-placement-check-entry.ts",
  },
  alias: { "@": path.join(root, "src") },
  bundle: true,
  format: "cjs",
  platform: "node",
  target: "node20",
  write: false,
  logLevel: "silent",
});

const store = new Map();
global.localStorage = {
  getItem: (key) => (store.has(key) ? store.get(key) : null),
  setItem: (key, value) => store.set(key, String(value)),
  removeItem: (key) => store.delete(key),
};
global.window = { localStorage: global.localStorage, addEventListener() {}, removeEventListener() {} };

const compiled = new Module("meaning-placement-check", module);
compiled.filename = path.join(root, ".meaning-placement-check.cjs");
compiled.paths = Module._nodeModulePaths(root);
compiled._compile(result.outputFiles[0].text, compiled.filename);
const {
  DEFAULT_MEANING_PLACEMENT,
  getMeaningPlacement,
  setMeaningPlacement,
} = compiled.exports;

let failures = 0;
function check(name, condition) {
  if (condition) {
    console.log(`ok   ${name}`);
    return;
  }
  failures += 1;
  console.error(`FAIL ${name}`);
}

// ── the setting ──────────────────────────────────────────────────────────
// The card is the default deliberately: the meaning was the smallest thing on
// screen and the one that says what the sentence means.
check("the meaning is on the card unless asked otherwise", DEFAULT_MEANING_PLACEMENT === "card");
check("and that is what an untouched profile reads", getMeaningPlacement() === "card");
check("the old placement is still choosable", setMeaningPlacement("below") === "below" && getMeaningPlacement() === "below");
check("and the card can be chosen back", setMeaningPlacement("card") === "card" && getMeaningPlacement() === "card");
store.set("gl-meaning-placement-v1", "somewhere-else");
check("a value nothing wrote falls back to the default", getMeaningPlacement() === "card");
store.clear();

// ── the card ─────────────────────────────────────────────────────────────
const guided = fs.readFileSync(path.join(root, "src/GuidedSession.tsx"), "utf8");
check(
  "one place decides it and every board asks that",
  guided.includes('const meaningOnCard = useMemo(() => getMeaningPlacement() === "card", []);')
    && guided.includes('import { getMeaningPlacement } from "@/lib/meaningPlacement";')
);
// Both shapes come out of the same helper, so the two placements can never
// show different things — only the same thing in a different place.
check(
  "both placements render from one helper",
  /const secondLanguage = \(chip: string, body: React\.ReactNode\) => \(meaningOnCard \? \(/u.test(guided)
    && guided.includes('<p className="fs-board-meaning">')
    && guided.includes('<motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="fs-trow">')
);
// Every board that showed a meaning row must offer it in both places, or a
// stage would silently lose its second language on one of the two settings.
const insideBoard = (guided.match(/\{meaningOnCard && (?:phase !== "Translate"\s*\n?\s*&& )?secondLanguage\(/gu) ?? []).length;
const belowBoard = (guided.match(/\{!meaningOnCard && secondLanguage\(|!meaningOnCard\s*\n?\s*&& secondLanguage\(/gu) ?? []).length;
check(`each board offers both placements (${insideBoard} on the card, ${belowBoard} below)`, insideBoard === 3 && belowBoard === 3);
// Translate asks what the sentence means, so the card cannot answer it — on
// either setting.
check(
  "Translate withholds the meaning wherever the meaning would sit",
  guided.includes('{meaningOnCard && phase !== "Translate"')
    && guided.includes('{phase !== "Translate" && !meaningOnCard')
);

const css = fs.readFileSync(path.join(root, "src/index.css"), "utf8");
// Bigger than the row it replaces, smaller than the sentence it belongs to:
// the point of the change is that it can be read without being hunted for.
const cardSize = /\.fs-board-meaning \{[^}]*font-size: clamp\((\d+)px/u.exec(css);
const rowSize = /\.fs-trow p \{[^}]*font-size: clamp\((\d+)px/u.exec(css);
const lineSize = /\.fs-line \{[^}]*font-size: clamp\((\d+)px/u.exec(css);
check(
  `on the card it reads bigger than the row (${cardSize?.[1]}px vs ${rowSize?.[1]}px) and under the sentence (${lineSize?.[1]}px)`,
  cardSize && rowSize && lineSize
    && Number(cardSize[1]) > Number(rowSize[1])
    && Number(cardSize[1]) < Number(lineSize[1])
);

const settings = fs.readFileSync(path.join(root, "src/Gamification.tsx"), "utf8");
check(
  "and Profile and settings can move it",
  settings.includes('data-testid={`meaning-placement-${value}`}')
    && settings.includes('["card", "On the card"]')
    && settings.includes('["below", "Underneath"]')
);

if (failures) {
  console.error(`\n${failures} meaning-placement regression${failures === 1 ? "" : "s"}`);
  process.exit(1);
}

console.log("\nThe meaning rides on the card by default, and moves off it on request");
