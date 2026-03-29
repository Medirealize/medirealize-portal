import {
  DEVLOG_BODY,
  DEVLOG_BULLETS,
  DEVLOG_CHECKOUT_PATH,
  DEVLOG_CTA_LABEL,
  DEVLOG_SUPPORT_CANCEL_NOTE,
  DEVLOG_SUPPORT_FUND_NOTE,
  DEVLOG_TITLE,
} from "@/lib/productLeadContent";

const SURFACE =
  "rounded-2xl border border-[#E4E6EB] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)]";

function LeadBody({ text }: { text: string }) {
  const marker = "月額100円";
  const i = text.indexOf(marker);
  if (i < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <strong className="font-semibold text-[#050505]">{marker}</strong>
      {text.slice(i + marker.length)}
    </>
  );
}

/** ランディング「開発の軌跡／開発日誌」購読ブロック */
export default function DevelopmentLog() {
  return (
    <section
      className={`${SURFACE} min-w-0 w-full max-w-3xl p-8 lg:p-9 xl:p-10`}
      aria-labelledby="devlog-portal-heading"
    >
      <h2
        id="devlog-portal-heading"
        className="text-balance text-center text-base font-bold leading-snug tracking-tight text-[#050505] sm:text-lg md:text-xl lg:leading-tight"
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

      <p className="mt-8 text-pretty text-left text-base leading-[1.75] text-[#65676B] sm:text-[1.0625rem] sm:leading-relaxed lg:text-center lg:text-lg lg:leading-[1.7] xl:text-[1.125rem]">
        <LeadBody text={DEVLOG_BODY} />
      </p>

      <div className="mx-auto mt-9 flex w-full min-w-0 max-w-lg flex-col items-stretch sm:items-center lg:mt-10">
        <a
          href={DEVLOG_CHECKOUT_PATH}
          className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl bg-[#1877F2] px-4 py-3 text-center text-[0.8125rem] font-semibold leading-snug tracking-tight text-white shadow-md transition-[box-shadow,transform,background-color] hover:bg-[#166FE5] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/45 active:scale-[0.99] sm:min-h-[54px] sm:px-5 sm:text-sm md:min-h-[56px] md:px-6 md:text-base md:leading-snug"
        >
          {DEVLOG_CTA_LABEL}
        </a>
        <div className="mt-3 max-w-2xl text-pretty text-center text-xs leading-[1.65] text-[#65676B] sm:text-[0.8125rem] sm:leading-relaxed">
          <p>{DEVLOG_SUPPORT_FUND_NOTE}</p>
          <p className="mt-1.5 text-center">{DEVLOG_SUPPORT_CANCEL_NOTE}</p>
        </div>
      </div>
    </section>
  );
}
