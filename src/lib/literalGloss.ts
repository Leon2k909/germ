import { germanWordGloss } from "@/lib/germanWordGloss";

/**
 * The German sentence read word by word, in German's own order.
 *
 * The natural translation is the only thing on the card, and it hides the
 * sentence's shape: "Ich hab die Nase voll" arrives as "I'm fed up", which
 * says what it means and nothing about what it says. The literal line puts
 * the words back where German has them — I have the nose full — so the
 * grammar is visible while the sentence is being heard.
 *
 * It is derived, not written: every word is looked up in the same offline
 * gloss bank that answers a tap on that word, so no card carries a second
 * translation and none can drift from the first.
 */

/** The gloss as a literal line wants it: one meaning, no qualifiers. */
const oneSense = (gloss: string) => gloss
  .split(/[/;]/u)[0]
  .replace(/\([^)]*\)/gu, "")
  .replace(/\s+/gu, " ")
  .trim();

const LEADING = /^[¿¡"'„“‚‘«(\[]+/u;
const TRAILING = /[.,!?;:…"'“”‘’»)\]]+$/u;

const bare = (token: string) => token.replace(LEADING, "").replace(TRAILING, "");
const punctuationAfter = (token: string) => (TRAILING.exec(token)?.[0] ?? "")
  .replace(/["'“”‘’»)\]]/gu, "");

/**
 * The person the German is actually in, for the handful of verbs that carry
 * most sentences.
 *
 * The word bank answers with the dictionary form, which is what a tapped word
 * wants — sind is the verb "sein", to be. Read back as a sentence it becomes
 * "the child be hungry", which looks like broken English rather than like
 * German's own order, and the order is the whole point of the line. Only sein,
 * haben and werden are listed: they appear in nearly every sentence, and every
 * other verb reads perfectly well in its plain form.
 */
const CONJUGATED = new Map(Object.entries({
  bin: "am", bist: "are", ist: "is", sind: "are", seid: "are",
  war: "was", warst: "were", waren: "were", wart: "were", wäre: "were", wären: "were",
  hab: "have", habe: "have", hast: "have", hat: "has", habt: "have", haben: "have",
  hatte: "had", hattest: "had", hatten: "had", hattet: "had", hätte: "would have", hätten: "would have",
  wird: "becomes", wirst: "become", werde: "become", werden: "become", werdet: "become",
  wurde: "became", wurden: "became", würde: "would", würden: "would",
}));

/**
 * Formal you, which is only formal because of its capital letter.
 *
 * The word bank is asked in lowercase, where sie is she, they and formal you
 * at once, and the first of those wins. "Warten Sie bitte hier" then came out
 * as "wait she please here" — not a rough reading of the sentence but a
 * different one, and the learner has no way to see that from the line.
 */
const FORMAL = new Map(Object.entries({
  Sie: "you (formal)", Ihnen: "to you (formal)",
  Ihr: "your (formal)", Ihre: "your (formal)", Ihren: "your (formal)",
  Ihrem: "your (formal)", Ihrer: "your (formal)", Ihres: "your (formal)",
}));

/**
 * der / die / das: the article before a noun, that on its own.
 *
 * One word doing two jobs, and both are common enough that picking either
 * blindly reads wrong half the time — "Das geht gar nicht" as "the goes not
 * at all", or "das Auto" as "that car". German capitalises its nouns, so the
 * next word settles it.
 */
const ARTICLES = new Set(["der", "die", "das", "den", "dem", "des"]);
const standingAlone = (word: string, next: string | undefined) => {
  if (!ARTICLES.has(word.toLocaleLowerCase("de-DE"))) return null;
  const following = bare(String(next ?? ""));
  return following && /^\p{Lu}/u.test(following) ? "the" : "that";
};

/** Punctuation only, or a numeral — carried through rather than looked up. */
const carriedThrough = (word: string) => word === "" || /^[\d.,:%-]+$/u.test(word);

const comparable = (value: string) => value
  .toLocaleLowerCase("en-GB")
  .replace(/[^\p{L}\p{N}]+/gu, " ")
  .trim();

/**
 * Returns the word-by-word line, or null where it would teach nothing.
 *
 * Null is the common answer and deliberately so. A line with a hole in it
 * ("I have the ??? full") reads as a mistake rather than as a lesson, so one
 * unknown word drops the whole line; a single word has no order to show; and
 * where the literal reading is simply the translation again — "Ich bin müde",
 * "I am tired" — the extra line is noise on the card.
 */
export function literalGloss(german: string, meaning: string): string | null {
  const tokens = String(german ?? "").trim().split(/\s+/u).filter(Boolean);
  if (tokens.length < 2) return null;

  const words: string[] = [];
  for (const [index, token] of tokens.entries()) {
    const word = bare(token);
    // The commas and full stops are the sentence's own joints: without them
    // "Hier, bitte. Danke schön!" runs together into one line of four words.
    const tail = punctuationAfter(token);
    if (carriedThrough(word)) {
      words.push(word + tail);
      continue;
    }
    const gloss = FORMAL.get(word)
      ?? CONJUGATED.get(word.toLocaleLowerCase("de-DE"))
      ?? standingAlone(word, tokens[index + 1])
      ?? germanWordGloss(word, {
        midSentenceCapital: index > 0 && /^\p{Lu}/u.test(word),
      });
    if (!gloss) return null;
    const sense = oneSense(gloss);
    if (!sense) return null;
    words.push(sense + tail);
  }

  const line = words.join(" ").replace(/\s+/gu, " ").trim()
    // A new sentence starts with a capital, here as anywhere else.
    .replace(/([.!?…]\s+)(\p{Ll})/gu, (_all, stop: string, letter: string) =>
      stop + letter.toLocaleUpperCase("en-GB"));
  if (!line) return null;

  // The card already says this. Both sides are compared without punctuation
  // or case, and the meaning's alternatives are each checked, so "I am tired"
  // never appears underneath "I'm tired. / I am tired."
  const said = comparable(line);
  if (!said) return null;
  const meanings = String(meaning ?? "").split("/").map(comparable);
  if (meanings.some((option) => option === said)) return null;

  return line.charAt(0).toLocaleUpperCase("en-GB") + line.slice(1);
}
