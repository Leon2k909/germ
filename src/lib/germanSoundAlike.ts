/**
 * Whether two German words are too close to tell apart by ear.
 *
 * The listening stages ask the learner to pick a word from three recordings.
 * The distractors are drawn from the sitting's own sentences and sorted by how
 * near they are in LENGTH to the answer, which is a good rule for a written
 * choice and a bad one for a spoken test: it actively prefers words shaped
 * like the answer, and nothing was checking how they sound.
 *
 * "Warten ___ erst mal ab." wants wir, and vier came up beside it. In German
 * w is [v] and v is [f], so the two differ by one voicing cue on the first
 * consonant and nothing else — through a synthesised voice that is not a test
 * of whether the learner knows the sentence. Same for seit and seid, viel and
 * fiel, das and dass, man and Mann, wahr and war.
 *
 * So the spelling is reduced to roughly what it sounds like and the two are
 * compared. This is not a pronunciation model and does not need to be: it only
 * has to answer "would these two arrive at the ear the same", and it is only
 * ever used to REJECT a distractor.
 */

/**
 * The rules, in the order they have to run.
 *
 * Digraphs before the single letters inside them, long-vowel markers before
 * the doubles collapse, the doubles before the vocalised -er (so Meer reaches
 * it as "mer" and lands where mehr does), and final devoicing last.
 */
export function germanSoundShape(word: string): string {
  const out = String(word ?? "").toLocaleLowerCase("de-DE").trim();
  if (!out) return "";
  return out
    // Digraphs and spelling conventions that are one sound.
    .replace(/ß/gu, "s")
    .replace(/sch/gu, "S")
    .replace(/chs/gu, "ks")
    .replace(/ch/gu, "C")
    .replace(/ph/gu, "f")
    .replace(/th/gu, "t")
    .replace(/ck/gu, "k")
    .replace(/qu/gu, "kv")
    .replace(/tz/gu, "ts")
    .replace(/z/gu, "ts")
    // Diphthongs, before the single vowels inside them.
    .replace(/äu|eu/gu, "OY")
    .replace(/ei|ai|ey|ay/gu, "AI")
    .replace(/au/gu, "AU")
    // Long-vowel markers: ie, and a silent h after a vowel.
    .replace(/ie/gu, "i")
    .replace(/([aeiouäöü])h/gu, "$1")
    // f, v and w fold together. German w is [v]; v is [f] in native words and
    // [v] in loanwords; and [f] against [v] is a single voicing cue, the thing
    // a synthesised voice blurs worst. Folding all three catches both halves
    // of the problem: wir against vier, and viel against fiel.
    .replace(/[fvw]/gu, "F")
    .replace(/ä/gu, "e")
    .replace(/y/gu, "i")
    // Doubles are never two sounds.
    .replace(/(.)\1+/gu, "$1")
    // A vocalised final -er is a vowel, not a consonant: aber and abba.
    .replace(/er$/u, "A")
    // Final devoicing: Rad and Rat, seid and seit, Weg and weck, Stadt and
    // statt — dt first, or the d is still there when the d rule looks.
    .replace(/dt$/u, "t")
    .replace(/d$/u, "t")
    .replace(/b$/u, "p")
    .replace(/g$/u, "k");
}

/**
 * Too close to offer as alternatives in a listening choice.
 *
 * Only an exact collision counts. A near-miss rule was tried first — one
 * sound apart on a short word — and it threw away wir against hier, gehen
 * against sehen, Haus against Maus. Those are ordinary distractors, and a
 * board that refuses them has stopped being a test. What the learner could
 * not answer was two spellings that arrive as the SAME sound.
 */
export function germanSoundsAlike(a: string, b: string): boolean {
  const rawA = String(a ?? "").toLocaleLowerCase("de-DE").trim();
  const rawB = String(b ?? "").toLocaleLowerCase("de-DE").trim();
  // The same word is not a sound-alike. The callers already refuse a repeat of
  // the answer; calling it confusable here would hide that rather than fix it.
  if (!rawA || !rawB || rawA === rawB) return false;
  const left = germanSoundShape(rawA);
  const right = germanSoundShape(rawB);
  return Boolean(left) && left === right;
}
