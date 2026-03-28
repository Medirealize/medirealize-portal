import {
  DEVLOG_BODY,
  DEVLOG_BULLETS,
  DEVLOG_CTA_LABEL,
  DEVLOG_STRIPE_URL,
  DEVLOG_SUPPORT_USAGE_NOTE,
  DEVLOG_TITLE,
} from "@/lib/productLeadContent";

const SURFACE =
  "rounded-2xl border border-[#DADDE1] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08)]";

/**
 * ランディング「開発サポーター／開発日誌」ブロック。文言は lib/productLeadContent の定数のみ使用。
 */
export default function DevelopmentLog() {
  return (
    <section
      className={`${SURFACE} min-w-0 w-full max-w-3xl p-8 lg:p-10`}
      aria-labelledby="devlog-portal-heading"
    >
      <h2
        id="devlog-portal-heading"
        className="text-pretty text-center text-base font-bold leading-snug tracking-tight text-[#050505] sm:text-lg md:text-xl lg:leading-tight"
      >
        {DEVLOG_TITLE}
      </h2>

      <ul className="mt-6 list-none space-y-4 text-left text-base leading-relaxed text-[#1C1E21]">
        {DEVLOG_BULLETS.map((line) => (
          <li key={line} className="flex min-w-0 gap-3">
            <span className="shrink-0 pt-[0.15em] text-[#65676B]" aria-hidden>
              ・
            </span>
            <span className="min-w-0 break-words">{line}</span>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-pretty text-left text-base leading-[1.75] text-[#65676B] sm:text-[1.0625rem] sm:leading-relaxed lg:text-center lg:text-lg lg:leading-relaxed">
        {DEVLOG_BODY}
      </p>

      <div className="mx-auto mt-8 flex w-full min-w-0 max-w-md flex-col items-stretch sm:items-center">
        <a
          href={DEVLOG_STRIPE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[52px] w-full items-center justify-center rounded-lg bg-[#1877F2] px-4 py-3.5 text-center text-sm font-semibold leading-snug text-white shadow-sm transition-colors hover:bg-[#166FE5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/50 active:scale-[0.99] sm:min-h-[54px] sm:px-5 sm:text-base md:text-lg"
        >
          {DEVLOG_CTA_LABEL}
        </a>
        <p className="mt-3 text-center text-xs leading-relaxed text-[#65676B] sm:max-w-none sm:px-1">
          {DEVLOG_SUPPORT_USAGE_NOTE}
        </p>
      </div>
    </section>
  );
}
