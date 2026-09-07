#!/usr/bin/env node
/**
 * A translation nobody can reach is not a translation.
 *
 * Every table for a country course is keyed on the course's own text, and
 * check-uk-translations and its siblings count how much of that text has a
 * German, English, Polish or French line waiting for it. What none of them
 * could see is whether the SCREEN ever offers that line. It did not, for two
 * of the six kinds of block: 673 translated quiz strings and six closing
 * lines shipped complete, counted, and invisible, because the components that
 * render a quiz and a call to action printed their text raw while the
 * paragraphs above them carried the tap marker.
 *
 * localiseLesson would have translated them, but courseReadingLanguage
 * returns "off" for anything that is not a programming course, so for all
 * seven country courses that function never runs. The tap marker is the only
 * path, and this checks that every kind of block the localiser knows about
 * has a component that offers one.
 *
 * The list of kinds is READ from courseTranslation.ts rather than repeated
 * here: add a case to localiseLesson and this gate immediately asks which
 * component renders it.
 */
const fs = require("fs");
const path = require("path");
const assert = require("assert");

const root = path.resolve(__dirname, "..");
const read = (rel) => {
  const file = path.join(root, rel);
  assert.ok(fs.existsSync(file), `${rel} moved — this check reads it`);
  return fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
};

/**
 * Which component puts each kind of block on screen.
 *
 * A quiz has two: the one-page lesson view hides its questions and the
 * stepped session shows them one at a time, and a reader meets the stepped
 * one. Missing the second is exactly how the questions stayed English while
 * every gate reported them translated.
 */
const RENDERED = {
  p: [["src/components/course/LessonBlocks.tsx", "TranslatableText"]],
  callout: [["src/components/course/LessonBlocks.tsx", "TranslatableText"]],
  h3: [["src/components/course/LessonBlocks.tsx", "LessonHeading"]],
  cards: [["src/components/course/LessonBlocks.tsx", "LessonCard"]],
  quiz: [
    ["src/components/course/LessonBlocks.tsx", "Quiz"],
    ["src/components/course/CourseSession.tsx", "QuizStepView"],
  ],
  cta: [["src/components/course/LessonBlocks.tsx", "LessonCta"]],
};

const failures = [];

// The kinds localiseLesson translates, taken from the switch itself.
const lib = read("src/lib/courseTranslation.ts");
const localiser = lib.slice(lib.indexOf("function localiseLesson"));
const kinds = [...localiser.matchAll(/case "(\w+)":/g)].map((m) => m[1]);
assert.ok(kinds.length >= 5, "localiseLesson has no switch any more — this check reads its cases");

for (const kind of kinds) {
  if (!RENDERED[kind]) {
    failures.push(
      `localiseLesson translates a ${kind} block and nothing here says which component offers the reader that translation — ` +
        "add it to RENDERED, and make sure the component really calls translateCourseText"
    );
  }
}

/** One component's source: from its declaration to the next top-level one. */
function bodyOf(source, name) {
  const start = source.indexOf(`function ${name}(`);
  if (start < 0) return null;
  const after = source.slice(start + 1);
  const next = after.search(/\n(?:export )?function \w+/);
  return next < 0 ? after : after.slice(0, next);
}

for (const [kind, places] of Object.entries(RENDERED)) {
  for (const [file, name] of places) {
    const body = bodyOf(read(file), name);
    if (body === null) {
      failures.push(`${name} is gone from ${file}, and it is what shows a ${kind} block its translation`);
      continue;
    }
    if (!body.includes("translateCourseText(")) {
      failures.push(
        `${name} in ${file} renders a ${kind} block without asking translateCourseText, ` +
          "so every translated string of that kind is unreachable"
      );
    }
  }
}

/**
 * The screens that show a QUESTION BANK, which is not lesson text.
 *
 * The practice tab and the test draw from the seven country banks and printed
 * them raw, so the German written for the Life in the UK questions was
 * readable inside a lesson and invisible in the two places you go to
 * practise. Both are shared by all seven countries, so this is the one insert
 * point each language will ever need.
 */
const QUESTION_VIEWS = [
  "src/components/course/UkPracticeView.tsx",
  "src/components/lifeInTheUk/UkTestView.tsx",
];
for (const file of QUESTION_VIEWS) {
  const source = read(file);
  if (!source.includes("<QuestionReading")) {
    failures.push(
      `${file} shows bank questions without rendering QuestionReading, so a reader with a ` +
        "translation for them is never offered it"
    );
  }
}
{
  const shared = read("src/components/course/questionReading.tsx");
  if (!shared.includes("translateCourseText(")) {
    failures.push(
      "questionReading.tsx no longer asks translateCourseText, so the marker it renders shows nothing"
    );
  }
}

// The switch has to point at those components and no others, or the check
// above tests a component the screen never mounts.
const blocks = read("src/components/course/LessonBlocks.tsx");
for (const [kind, component] of [["quiz", "Quiz"], ["cta", "LessonCta"], ["cards", "LessonCard"]]) {
  const branch = blocks.slice(blocks.indexOf(`case "${kind}":`));
  const end = branch.search(/\n {10}case "/);
  const used = (end < 0 ? branch : branch.slice(0, end)).includes(`<${component}`);
  if (!used) failures.push(`the ${kind} branch of LessonBlocks no longer renders ${component}`);
}

if (failures.length) {
  console.error("FAIL check-translation-reaches-screen");
  failures.forEach((line) => console.error("  " + line));
  process.exit(1);
}

console.log(
  `check-translation-reaches-screen: all ${kinds.length} kinds of translatable block, and the ` +
    `${QUESTION_VIEWS.length} screens that show a question bank, offer the reader the translation`
);
process.exit(0);
