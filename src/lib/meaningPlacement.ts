/**
 * Where a lesson card puts the language you already speak.
 *
 * The German has always had the card to itself — big, centred, lit — and the
 * meaning sat in a small row below it, outside the border, at a third of the
 * size. That is a fair picture of which half is being taught and a poor one
 * of how a card is read: the eye goes to the board, and the line that says
 * what any of it means is the one furthest from it.
 *
 * So both sit on the card now, the meaning under the target and smaller than
 * it, but of a size you read rather than one you look for. The old placement
 * is still here for anyone who wants the meaning out of the way — some people
 * are deliberately not reading it — and it is a setting rather than a
 * judgement about which is right.
 */
export type MeaningPlacement = "card" | "below";

export const MEANING_PLACEMENTS: MeaningPlacement[] = ["card", "below"];
export const DEFAULT_MEANING_PLACEMENT: MeaningPlacement = "card";

const KEY = "gl-meaning-placement-v1";

export function getMeaningPlacement(): MeaningPlacement {
  try {
    const value = window.localStorage.getItem(KEY);
    if (MEANING_PLACEMENTS.includes(value as MeaningPlacement)) return value as MeaningPlacement;
  } catch { /* storage blocked: the documented default */ }
  return DEFAULT_MEANING_PLACEMENT;
}

export function setMeaningPlacement(value: MeaningPlacement): MeaningPlacement {
  const next = MEANING_PLACEMENTS.includes(value) ? value : DEFAULT_MEANING_PLACEMENT;
  try {
    window.localStorage.setItem(KEY, next);
  } catch { /* keep the session usable */ }
  return next;
}
