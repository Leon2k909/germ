import { loadScopedJson, saveScopedJson, type UserProfile } from "@/lib/profileStorage";

/**
 * Packs the learner is not especially interested in, right now.
 *
 * Pausing a pack (see mutedPacks.ts) says "skip this entirely" — right for
 * something you will never touch, like a niche game's vocabulary. This is a
 * softer signal for the ordinary case: somebody who has no interest in
 * cooking still wants "Ich brauche ein Pflaster" if it ever comes up, just
 * not ahead of the sentences they actually reach for. A deprioritized pack
 * stays in the course and is still reviewed once learned — it is simply the
 * last thing Continue Learning and Listen reach for, in both directions and
 * every language, since a lack of interest in cooking is not particular to
 * German or to English.
 *
 * Profile-scoped, for the same reason muting is: two people sharing a
 * machine do not share one taste.
 */
const KEY = "gl-pack-interest-v1";

const PACK_INTEREST_EVENT = "gl:pack-interest-change";

function normalise(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.filter((entry): entry is string => typeof entry === "string" && entry.length > 0))];
}

export function getDeprioritizedPacks(profile?: UserProfile | null): Set<string> {
  if (typeof window === "undefined") return new Set();
  return new Set(normalise(loadScopedJson<string[]>(KEY, [], profile)));
}

export function setPackDeprioritized(
  partKey: string,
  deprioritized: boolean,
  profile?: UserProfile | null
): Set<string> {
  const next = getDeprioritizedPacks(profile);
  if (deprioritized) next.add(partKey);
  else next.delete(partKey);
  saveScopedJson(KEY, [...next], profile);
  if (typeof window !== "undefined") window.dispatchEvent(new Event(PACK_INTEREST_EVENT));
  return next;
}

/** Deprioritize or restore several packs in one write and one change event. */
export function setPacksDeprioritized(
  partKeys: Iterable<string>,
  deprioritized: boolean,
  profile?: UserProfile | null
): Set<string> {
  const next = getDeprioritizedPacks(profile);
  for (const key of partKeys) {
    if (deprioritized) next.add(key);
    else next.delete(key);
  }
  saveScopedJson(KEY, [...next], profile);
  if (typeof window !== "undefined") window.dispatchEvent(new Event(PACK_INTEREST_EVENT));
  return next;
}
