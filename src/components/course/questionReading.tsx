import { useState } from "react";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { ui } from "@/lib/i18n";
import { translateCourseText, useTranslationLanguage } from "@/lib/courseTranslation";

/**
 * A whole exam question in the reading language, behind one tap.
 *
 * The practice tab and the test printed their questions raw, so a table could
 * hold every question of a bank and a reader would never be shown one word of
 * it. The lesson had the marker; the places you go to practise did not.
 *
 * It shows the WHOLE item rather than threading a line under each answer.
 * That is deliberate twice over: the answers in those two views are buttons
 * built with their own correct-and-wrong colouring, which this would have to
 * be woven into, and an exam item reads better whole — the English above, as
 * the exam puts it, and the same item underneath in a language you have.
 *
 * Renders nothing at all when no part of the question has a translation, so a
 * course with no table for the reader's language looks exactly as it did.
 */
export function QuestionReading({
  className,
  explanation,
  options,
  question,
}: {
  className?: string;
  explanation?: string;
  options: readonly string[];
  question: string;
}) {
  const language = useTranslationLanguage();
  const [open, setOpen] = useState(false);

  const read = (text: string | undefined) =>
    typeof text === "string" && text.trim() ? translateCourseText(text, language) : null;

  const questionRead = read(question);
  const optionsRead = options.map((option) => read(option));
  const explanationRead = read(explanation);
  if (!questionRead && !explanationRead && !optionsRead.some(Boolean)) return null;

  const title = open ? ui("Tap to hide the translation") : ui("Tap for the translation");

  return (
    <div className={cn("mt-2", className)}>
      <button
        aria-expanded={open}
        aria-label={title}
        className={cn(
          "inline-flex items-center gap-1.5 text-[12px] font-bold transition-opacity",
          open ? "text-[var(--accent)] opacity-100" : "text-[var(--text-3)] opacity-70 hover:opacity-100"
        )}
        onClick={() => setOpen((value) => !value)}
        title={title}
        type="button"
      >
        <Languages className="h-3.5 w-3.5" />
      </button>
      {open && (
        <div className="mt-2 border-l-2 border-[var(--accent)] pl-3">
          {questionRead && <p className="text-sm font-black text-[var(--text-1)]">{questionRead}</p>}
          {optionsRead.some(Boolean) && (
            <ul className="mt-1.5 space-y-0.5">
              {optionsRead.map((text, index) => (
                <li className="text-[13px] font-semibold text-[var(--text-2)]" key={index}>
                  <span className="text-[var(--text-3)]">{String.fromCharCode(65 + index)}</span> {text ?? options[index]}
                </li>
              ))}
            </ul>
          )}
          {explanationRead && (
            <p className="mt-2 text-[13px] font-semibold leading-5 text-[var(--text-2)]">{explanationRead}</p>
          )}
        </div>
      )}
    </div>
  );
}
