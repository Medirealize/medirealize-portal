import {
  DEVLOG_BODY,
  DEVLOG_BULLETS,
  DEVLOG_CTA_LABEL,
  DEVLOG_STRIPE_URL,
  DEVLOG_TITLE,
} from "@/lib/productLeadContent";

const SURFACE =
  "rounded-2xl border border-[#DADDE1] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08)]";

/**
 * ランディング「開発の軌跡」ブロック。文言は lib/productLeadContent の定数のみ使用。
 */
export default function DevelopmentLog() {
  return (
    <section
      className={`${SURFACE} w-full max-w-3xl p-8 lg:p-10`}
      aria-labelledby="devlog-portal-heading"
    >
      <h2
        id="devlog-portal-heading"
        className="text-center text-lg font-bold leading-snug tracking-tight text-[#050505] md:text-xl"
      >
        {DEVLOG_TITLE}
      </h2>

      <ul className="mt-6 list-none space-y-4 text-left text-base leading-relaxed text-[#1C1E21]">
        {DEVLOG_BULLETS.map((line) => (
          <li key={line} className="flex gap-3">
            <span className="shrink-0 pt-[0.15em] text-[#65676B]" aria-hidden>
              ・
            </span>
            <span className="min-w-0 break-words">{line}</span>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-pretty text-center text-base leading-relaxed text-[#65676B]">
        {DEVLOG_BODY}
      </p>

      <div className="mt-8 flex justify-center">
        <a
          href={DEVLOG_STRIPE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[52px] w-full max-w-sm items-center justify-center rounded-lg bg-[#1877F2] px-6 py-3.5 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#166FE5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/50 active:scale-[0.99] sm:w-auto md:text-lg"
        >
          {DEVLOG_CTA_LABEL}
        </a>
      </div>
    </section>
  );
}
