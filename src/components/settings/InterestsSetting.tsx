import { useMemo, useState } from "react";
import { Search, ThumbsDown, X } from "lucide-react";
import { ui, uiFmt, uiOr } from "@/lib/i18n";
import { normalizeCatalogSearchText } from "@/lib/catalogSearch";
import { getDeprioritizedPacks, setPackDeprioritized } from "@/lib/packInterest";

/**
 * The topics a learner would rather not spend their time on.
 *
 * The lesson list has the same toggle on every pack, which is the right place
 * to find it while you are reading about that pack — and the wrong place to
 * answer "what am I not interested in", which is a thing you decide once,
 * about yourself, in the settings where the rest of that lives.
 *
 * Deprioritized, never removed: a pack listed here stays in the course, keeps
 * anything already learned from it, and is still reviewed. It is simply the
 * last thing Continue Learning and Listen reach for, in whichever language
 * the course is in — an indifference to cooking is not an indifference to
 * German.
 */
export function InterestsSetting({
  apiParts,
  onRequestCatalogue,
}: {
  apiParts: Record<string, any>;
  onRequestCatalogue?: () => void;
}) {
  const [chosen, setChosen] = useState<Set<string>>(() => getDeprioritizedPacks());
  const [query, setQuery] = useState("");

  const catalogueReady = Object.keys(apiParts).length > 0;

  const nameOf = (key: string) => uiOr(apiParts[key]?.theme, apiParts[key]?.label ?? key);

  const toggle = (key: string, deprioritized: boolean) => {
    setChosen(new Set(setPackDeprioritized(key, deprioritized)));
  };

  /**
   * Searched over what a pack calls itself, not over everything it teaches.
   *
   * The lesson list searches the sentences too, because that is where you go
   * looking for one. Here the question is "which subjects do I not care
   * about", and indexing 700 packs' worth of phrases to answer it would cost
   * more than the answer is worth on a settings page.
   */
  const matches = useMemo(() => {
    const terms = normalizeCatalogSearchText(query).split(" ").filter(Boolean);
    if (terms.length === 0) return [];
    return Object.entries(apiParts)
      .filter(([key, part]: [string, any]) => {
        if (chosen.has(key)) return false;
        const haystack = normalizeCatalogSearchText([
          key, part?.label, part?.theme, part?.description, part?.focus,
        ].filter(Boolean).join(" "));
        return terms.every((term) => haystack.includes(term));
      })
      .slice(0, 8);
  }, [apiParts, chosen, query]);

  return (
    <div className="mt-5 rounded-[18px] bg-[var(--surface)] p-4">
      <p className="text-sm font-black text-[var(--text-1)]">{ui("Topics you are not interested in")}</p>
      <p className="mt-1 text-xs font-semibold leading-5 text-[var(--text-3)]">
        {ui("These stay in your course and keep any progress — they are simply learned last, after everything else, in lessons and in Listen.")}
      </p>

      {chosen.size > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {[...chosen].map((key) => (
            <li key={key}>
              <button
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-2)] py-1.5 pl-3 pr-2 text-[11px] font-black text-[var(--text-2)] transition-colors hover:bg-[var(--surface-3)] hover:text-[var(--text-1)]"
                onClick={() => toggle(key, false)}
                title={uiFmt("Give {topic} its normal place in the order again.", { topic: nameOf(key) })}
                type="button"
              >
                <ThumbsDown className="h-3 w-3" />
                <span className="max-w-[220px] truncate">{nameOf(key)}</span>
                <X className="h-3.5 w-3.5 opacity-70" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="relative mt-3">
        <Search aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-3)]" />
        <input
          className="h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] pl-9 pr-3 text-sm font-bold text-[var(--text-1)] outline-none focus:border-[var(--accent)]"
          onChange={(event) => setQuery(event.target.value)}
          // The catalogue is deferred until something needs it, and this is
          // the moment this panel does: asked for on the first keystroke
          // rather than on every visit to settings.
          onFocus={() => { if (!catalogueReady) onRequestCatalogue?.(); }}
          placeholder={ui("Search topics, like cooking or football…")}
          type="search"
          value={query}
        />
      </div>

      {query.trim().length > 0 && (
        catalogueReady ? (
          matches.length > 0 ? (
            <ul className="mt-2 flex flex-col gap-1.5">
              {matches.map(([key, part]: [string, any]) => (
                <li key={key}>
                  <button
                    className="flex w-full items-center justify-between gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2.5 text-left transition-colors hover:bg-[var(--surface-3)]"
                    onClick={() => { toggle(key, true); setQuery(""); }}
                    type="button"
                  >
                    <span className="min-w-0">
                      <strong className="block truncate text-xs font-black text-[var(--text-1)]">{nameOf(key)}</strong>
                      <small className="block text-[11px] font-semibold text-[var(--text-3)]">{part?.level}</small>
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[var(--surface)] px-2.5 py-1 text-[11px] font-black text-[var(--text-2)]">
                      <ThumbsDown className="h-3 w-3" />
                      {ui("Not interested")}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-xs font-semibold text-[var(--text-3)]">{ui("Nothing matches that")}</p>
          )
        ) : (
          <p className="mt-2 text-xs font-semibold text-[var(--text-3)]">{ui("Loading your lessons…")}</p>
        )
      )}
    </div>
  );
}
