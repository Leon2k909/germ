const fs = require("fs");
const path = require("path");
const Module = require("module");
const esbuild = require("esbuild");

const root = path.resolve(__dirname, "..");
const result = esbuild.buildSync({
  stdin: {
    contents: `
      export { conversationPriorityScore } from "./src/lib/conversationPriority.ts";
      export {
        getDeprioritizedPacks,
        setPackDeprioritized,
        setPacksDeprioritized,
      } from "./src/lib/packInterest.ts";
    `,
    resolveDir: root,
    sourcefile: "pack-interest-check-entry.ts",
  },
  alias: { "@": path.join(root, "src") },
  bundle: true,
  format: "cjs",
  platform: "node",
  target: "node20",
  write: false,
  logLevel: "silent",
});

global.localStorage = (() => {
  let store = new Map();
  return {
    getItem: (key) => (store.has(key) ? store.get(key) : null),
    setItem: (key, value) => store.set(key, String(value)),
    removeItem: (key) => store.delete(key),
    clear: () => store.clear(),
  };
})();
global.window = {
  addEventListener() {}, removeEventListener() {}, dispatchEvent() {},
  localStorage: global.localStorage,
};

const compiled = new Module("pack-interest-check", module);
compiled.filename = path.join(root, ".pack-interest-check.cjs");
compiled.paths = Module._nodeModulePaths(root);
compiled._compile(result.outputFiles[0].text, compiled.filename);
const {
  conversationPriorityScore,
  getDeprioritizedPacks,
  setPackDeprioritized,
  setPacksDeprioritized,
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

// ── the setting itself ──────────────────────────────────────────────────
global.localStorage.clear();
check("nothing is deprioritized until the learner says so", getDeprioritizedPacks().size === 0);
setPackDeprioritized("part182", true);
check("marking a pack deprioritized is remembered", getDeprioritizedPacks().has("part182"));
setPackDeprioritized("part182", false);
check("and unmarking it is remembered too", !getDeprioritizedPacks().has("part182"));
setPacksDeprioritized(["part182", "part49"], true);
check(
  "several packs can be set in one write",
  getDeprioritizedPacks().has("part182") && getDeprioritizedPacks().has("part49")
);
global.localStorage.clear();

// ── the score itself ────────────────────────────────────────────────────
// A high commonality, high-band item with every authored boost still must
// not outrank the lowest-scoring ordinary item once it is deprioritized —
// this is the whole point: it is not folded into the existing scoring, it
// sits past all of it.
const bestPossibleOrdinary = conversationPriorityScore({
  partKey: "part1", kind: "phrase", commonality: 0, lessonPriority: -2,
});
const worstPossibleOrdinary = conversationPriorityScore({
  partKey: "some-life-event-pack", kind: "vocab", commonality: 5000, lessonPriority: 2,
});
const bestPossibleDeprioritized = conversationPriorityScore({
  partKey: "part1", kind: "phrase", commonality: 0, lessonPriority: -2, deprioritized: true,
});
check(
  "even the strongest deprioritized item scores after the weakest ordinary one",
  bestPossibleDeprioritized > worstPossibleOrdinary
);
check(
  "deprioritizing changes nothing when it is false",
  conversationPriorityScore({ partKey: "part1", kind: "phrase", commonality: 500, deprioritized: false })
    === conversationPriorityScore({ partKey: "part1", kind: "phrase", commonality: 500 })
);
// Among the deprioritized, commonality still orders them — it is pushed to
// the back of the queue, not shuffled once it gets there.
const commonDeprioritized = conversationPriorityScore({ partKey: "part1", kind: "phrase", commonality: 0, deprioritized: true });
const rareDeprioritized = conversationPriorityScore({ partKey: "part1", kind: "phrase", commonality: 5000, deprioritized: true });
check(
  "deprioritized items still rank among themselves by how common they are",
  commonDeprioritized < rareDeprioritized
);

// ── it actually reaches both places that build a sitting ──────────────────
const guided = fs.readFileSync(path.join(root, "src/guided_learning_session.tsx"), "utf8");
check(
  "Continue Learning reads the setting and passes it into both of its score calls",
  guided.includes('import { getDeprioritizedPacks } from "@/lib/packInterest";')
    && (guided.match(/deprioritized: deprioritizedPacks\.has\(/gu) ?? []).length >= 2
);
const listen = fs.readFileSync(path.join(root, "src/lib/listenMode.ts"), "utf8");
check(
  "Listen reads the same setting for its own sentence ranking",
  listen.includes('import { getDeprioritizedPacks } from "@/lib/packInterest";')
    && /deprioritized: deprioritizedPacks\.has\(/u.test(listen)
);

// ── it is a setting, not a removal ─────────────────────────────────────────
// Muting a pack (mutedPacks.ts) drops it from the catalogue entirely. This
// is the opposite promise — the pack stays, so nothing here may filter it
// out of anything the way withoutMutedPacks does.
check(
  "packInterest exports no catalogue filter — a deprioritized pack is never dropped",
  !fs.readFileSync(path.join(root, "src/lib/packInterest.ts"), "utf8").includes("export function without")
);

// ── reachable from the lesson list ──────────────────────────────────────
const learnView = fs.readFileSync(path.join(root, "src/components/lab/LearnView.tsx"), "utf8");
check(
  "every pack card carries its own not-interested toggle",
  learnView.includes("toggleDeprioritized(key)") && learnView.includes('ui(deprioritized ? "Normal priority" : "Not interested")')
);
check(
  "and several packs can be set from one selection, same as pausing",
  learnView.includes("bulkSetDeprioritized(true)") && learnView.includes("bulkSetDeprioritized(false)")
);

// ── and it is a SETTING, in the settings ────────────────────────────────
// The lesson list is where you find the toggle while reading about one pack.
// "What am I not interested in" is a thing decided once, about yourself, and
// it has to be answerable where the rest of that lives.
const settings = fs.readFileSync(path.join(root, "src/Gamification.tsx"), "utf8");
check(
  "Profile and settings carries the interests control",
  settings.includes("<InterestsSetting apiParts={apiParts} onRequestCatalogue={onRequestCatalogue} />")
    && settings.includes('import { InterestsSetting } from "@/components/settings/InterestsSetting";')
);
check(
  "and searching the settings for interests finds it",
  /"Learning options": "[^"]*\binterests\b[^"]*"/u.test(settings)
);
const panel = fs.readFileSync(path.join(root, "src/components/settings/InterestsSetting.tsx"), "utf8");
check(
  "the panel both adds and removes, and asks for the catalogue it needs",
  panel.includes("toggle(key, true)")
    && panel.includes("toggle(key, false)")
    && panel.includes("onRequestCatalogue?.()")
);

if (failures) {
  console.error(`\n${failures} pack-interest regression${failures === 1 ? "" : "s"}`);
  process.exit(1);
}

console.log("\nA deprioritized pack stays in the course and is always learned last");
