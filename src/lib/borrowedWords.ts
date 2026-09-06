/**
 * German words quoted inside an English line, said in German.
 *
 * A handful of cards teach the articles by naming them: "Der Kühlschrank. Der,
 * not das!" and "Der, die or das?" are English sentences with German words
 * standing in them. Read by the English voice, "der" comes out as the English
 * "durr" and "die" as the English verb — so the card teaching you how the
 * articles sound is the one mispronouncing them.
 *
 * THE TRAP. Two of those three words are ordinary English. "to die", "one
 * die", "die down", "What did he die of?" are all real cards, and saying any
 * of them in German would be a worse bug than the one being fixed. So a word
 * is never judged on its spelling alone.
 *
 * THE RULE, in two parts:
 *
 *   1. A word is a candidate only if it also appears on the GERMAN side of the
 *      same card. "die" against "sterben" is not a candidate; "die" against
 *      "Der, die oder das?" is.
 *
 *   2. Candidates are only spoken in German if at least one of them is
 *      unmistakably German — an umlaut, an ß, or a word that is not English at
 *      all. That is what separates a card quoting German from a card that
 *      merely shares a word: "I am in the city" and "Ich bin in der Stadt"
 *      share "in", and nothing about that pair is German enough to act on.
 *
 * Both parts read the card's own two sides. Nothing here is a dictionary of
 * German, so it cannot drift out of step with the content.
 */
import { englishWordGloss } from "@/lib/englishWordGloss";

type SpeechSegment = { text: string; lang: string };

const WORD = /[\p{L}][\p{L}\p{M}]*/gu;

/**
 * German words that are not also English words.
 *
 * Only needed for the proof in part 2, and deliberately short: every entry is
 * a word that could not be an English sentence's own. Anything with an umlaut
 * or an ß proves it without being listed.
 */
const UNMISTAKABLY_GERMAN = new Set([
  "der", "das", "dem", "des", "ein", "eine", "einen", "einem", "eines",
  "nicht", "kein", "keine", "keinen", "oder", "und", "aber", "doch", "auch",
  "sehr", "noch", "schon", "immer", "etwas", "nichts", "ich", "wir", "ihr",
  "mich", "dich", "sich", "uns", "euch", "mein", "dein", "unser",
  "wie", "wo", "wer", "warum", "wann", "hier", "dort", "jetzt",
  "heute", "gestern", "bitte", "danke", "nein", "auf", "aus",
  "mit", "nach", "bei", "von", "zu", "vor", "unter", "zwischen",
  "ist", "sind", "waren", "haben", "hatte", "wird", "werden",
  "können", "muss", "müssen", "soll", "sollen", "wollen",
]);

/**
 * Words kept OUT of the list above, and why.
 *
 * Every one of these is a German word this could have listed and an English
 * word besides: was, war, hat, will, den, man, sein, morgen ("morgen" against
 * English "morgen" is safe, but "Morgen"/"morning" is not the point) — and
 * "was" is the one that proved it. "What exactly was unclear?" sits beside
 * "Was genau war unklar?", they share "was", and the card was having the
 * German voice say the English auxiliary. Nothing is lost by leaving them out:
 * they only ever served as PROOF that a card quotes German, and a card that
 * genuinely does has better proof than "was".
 */

/** Lower-cased and stripped of combining marks, so "Der" matches "der". */
function fold(word: string): string {
  return word.normalize("NFC").toLocaleLowerCase("de-DE");
}

function wordsOf(text: string): string[] {
  return [...String(text ?? "").matchAll(WORD)].map((match) => fold(match[0]));
}

function unmistakablyGerman(word: string): boolean {
  if (/[äöüßÄÖÜ]/.test(word)) return true;
  return UNMISTAKABLY_GERMAN.has(fold(word));
}

/**
 * A capital in the middle of an English sentence, on a word the German line
 * also uses.
 *
 * English capitalises the start of a sentence and proper nouns; it does not
 * capitalise common nouns, and German capitalises every one of them. So a
 * capitalised word sitting mid-sentence in the English line, which the German
 * line also contains, is a German noun being quoted — as good a proof as an
 * umlaut, and the only proof available to the many that have none.
 *
 * "We're having Abendbrot: bread, cheese, cold cuts" is the case: the whole
 * line went to the English voice, which read the one German word in it as
 * though it were English.
 *
 * Sentence-initial words are excluded, because every English sentence starts
 * with a capital and that says nothing about the language. Four letters and
 * up: a short capitalised token is as likely to be an initial or an English
 * proper noun, and neither is worth the risk of the wrong voice.
 *
 * And a word English HAS is never proof, however it is capitalised. "I have a
 * Gift for you!" beside a German line about Gift — poison — would otherwise
 * hand the ordinary English word to the German voice, which is the whole
 * mistake this file exists to avoid. The gloss table answers that: it knows
 * gift and kindergarten as English and has never heard of Abendbrot.
 */
function quotedGermanNoun(word: string, at: number, line: string): boolean {
  if (word.length < 4 || word[0] !== word[0].toLocaleUpperCase("de-DE")) return false;
  if (englishWordGloss(fold(word))) return false;
  const before = line.slice(0, at).replace(/[\s"'“”‘’(\[]+$/u, "");
  return before !== "" && !/[.!?…]$/u.test(before);
}

/**
 * Split an English line into what the English voice says and what the German
 * voice says. One segment, all English, whenever the rule does not fire —
 * which is almost always.
 */
export function borrowedWordSegments(
  english: string,
  german: string,
  englishLang: string,
  germanLang: string
): SpeechSegment[] {
  const source = String(english ?? "");
  if (!source.trim()) return [];
  const plain: SpeechSegment[] = [{ text: source, lang: englishLang }];

  const germanSide = new Set(wordsOf(german));
  if (!germanSide.size) return plain;

  const marks: Array<{ end: number; word: string; german: boolean; shared: boolean; certain: boolean; quoted: boolean }> = [];
  for (const match of source.matchAll(WORD)) {
    const word = match[0];
    const shared = germanSide.has(fold(word));
    marks.push({
      end: (match.index ?? 0) + word.length,
      word: fold(word),
      german: false,
      shared,
      certain: shared && unmistakablyGerman(word),
      // Kept apart from `certain` on purpose. A capitalised noun speaks for
      // ITSELF and lends nothing to its neighbours: the article rescue below
      // is for a "die" that cannot prove its own language, and letting a
      // Tisch or an Abendbrot vouch for the word beside it would widen that
      // exception into the thing it was narrowed down from.
      quoted: shared && quotedGermanNoun(word, match.index ?? 0, source),
    });
  }
  if (!marks.some((mark) => mark.certain || mark.quoted)) return plain;

  /**
   * One word can be rescued by its neighbours, and it is always an article.
   *
   * "die" in "Der, die or das?" has to be German and can never prove it about
   * itself, so it borrows the proof from the "Der" and "das" beside it. That
   * is the whole of the exception.
   *
   * It was briefly ANY shared word next to a certain one, which is too much:
   * "In Cologne you shout Alaaf, in Düsseldorf Helau." then handed the second
   * English "in" to the German voice for sitting next to a place name, and
   * "'Mit freundlichen Grüßen' remains the safe standard." nearly did the
   * same with "standard". An English word beside a German one is still an
   * English word — unless it is one of the three this feature exists for.
   */
  const ARTICLES = new Set(["der", "die", "das", "den", "dem", "des"]);
  for (let index = 0; index < marks.length; index += 1) {
    marks[index].german = marks[index].certain
      || marks[index].quoted
      || (marks[index].shared
        && ARTICLES.has(marks[index].word)
        && Boolean(marks[index - 1]?.certain || marks[index + 1]?.certain));
  }
  // Nothing to gain from splitting a line that turns out to be German
  // throughout, and one clip keeps the caption and the pause simple.
  if (marks.every((mark) => mark.german)) return [{ text: source, lang: germanLang }];

  // Punctuation and spacing ride with the word they follow, so the German
  // voice reads "Der," and the English voice picks up at " not".
  const out: SpeechSegment[] = [];
  let cursor = 0;
  for (const mark of marks) {
    const lang = mark.german ? germanLang : englishLang;
    const text = source.slice(cursor, mark.end);
    const last = out[out.length - 1];
    if (last && last.lang === lang) last.text += text;
    else out.push({ text, lang });
    cursor = mark.end;
  }
  if (cursor < source.length) {
    const tail = source.slice(cursor);
    if (out.length) out[out.length - 1].text += tail;
    else out.push({ text: tail, lang: englishLang });
  }
  return out.filter((segment) => segment.text.trim().length > 0);
}
