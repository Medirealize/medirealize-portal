"use client";

import FadeInUpOnScroll from "@/components/FadeInUpOnScroll";
import FeatureCard from "@/components/FeatureCard";
import {
  DEVLOG_BODY,
  DEVLOG_BULLETS,
  DEVLOG_CTA_LABEL,
  DEVLOG_STRIPE_URL,
  DEVLOG_TITLE,
  FEATURE_DEFINITIONS,
  HERO_MAIN_COPY,
  HERO_SUB_COPY,
  MA_FOOTNOTE_CHIP,
  MEDICAL_DISCLAIMER,
  PHASE_BADGE_LONG,
  PHASE_BADGE_SHORT,
} from "@/lib/productLeadContent";

const HERO_BOX =
  "rounded-2xl border border-[#DADDE1] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08)]";
const HERO_PAD = "p-6 sm:p-7 md:p-8 lg:p-8 xl:p-10";
const INNER_MAX = "mx-auto w-full max-w-6xl px-4 sm:px-6";

export default function ProductLeadSection() {
  return (
    <div className={`${INNER_MAX} pb-16 pt-6 sm:pb-20 sm:pt-8`}>
      <section className="flex w-full flex-col items-center text-center" aria-label="ヒーロー">
        <div
          className={`${HERO_BOX} ${HERO_PAD} mx-auto w-full max-w-[min(100%,26rem)] sm:max-w-[min(100%,32rem)] md:max-w-[min(100%,40rem)] lg:w-max lg:max-w-[min(100%,calc(100vw-2rem))] lg:min-w-0`}
        >
          <div className="mx-auto inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-[#DADDE1] bg-[#F0F2F5] px-3 py-1.5 text-xs font-semibold leading-tight text-[#65676B] md:px-3.5 md:py-1.5 md:text-[13px]">
            <span className="inline-flex h-2 w-2 shrink-0 rounded-full bg-[#1877F2]" aria-hidden />
            <span className="sm:hidden">{PHASE_BADGE_SHORT}</span>
            <span className="hidden sm:inline">{PHASE_BADGE_LONG}</span>
          </div>

          <h1 className="relative mx-auto mt-6 w-full min-w-0 text-center text-lg font-extrabold leading-snug tracking-tight text-[#050505] sm:mt-6 sm:text-2xl sm:leading-tight md:text-3xl md:leading-[1.2] lg:mt-6 lg:whitespace-nowrap lg:text-5xl lg:leading-[1.12] xl:text-[2.75rem] xl:leading-[1.08] 2xl:text-[3rem] 2xl:leading-[1.05]">
            {HERO_MAIN_COPY}
          </h1>

          <p className="relative mx-auto mt-5 w-full min-w-0 max-w-full text-pretty text-center text-sm font-normal leading-relaxed text-[#65676B] sm:text-base md:text-base lg:mt-5 lg:text-lg lg:leading-relaxed xl:text-xl xl:leading-relaxed 2xl:whitespace-nowrap">
            {HERO_SUB_COPY}
          </p>
        </div>
      </section>

      <section className="mt-9 sm:mt-10" aria-label="プロダクト導線">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:items-stretch lg:gap-4">
          {FEATURE_DEFINITIONS.map((f, i) => (
            <FeatureCard
              key={f.key}
              title={f.catchCopy}
              steps={f.steps}
              cta={f.cta}
              href={f.externalUrl}
              icon={f.icon}
              productIndex={i + 1}
            />
          ))}
        </div>

        <p
          className="mt-5 w-full text-right text-xs leading-relaxed text-[#65676B] sm:mt-6 sm:text-sm lg:mt-6"
          role="note"
        >
          {MEDICAL_DISCLAIMER}
        </p>
      </section>

      <div className="mt-10 flex justify-center sm:mt-11">
        <section
          className={`${HERO_BOX} w-full max-w-full p-6 sm:max-w-xl sm:p-8 md:max-w-2xl lg:w-fit lg:max-w-[min(100%,40rem)] lg:p-8 xl:max-w-[min(100%,42rem)] xl:p-10`}
          aria-labelledby="devlog-portal-heading"
        >
          <h2
            id="devlog-portal-heading"
            className="text-pretty text-center text-base font-bold leading-snug tracking-tight text-[#050505] sm:text-lg md:text-xl"
          >
            {DEVLOG_TITLE}
          </h2>
          <ul className="mt-6 list-none space-y-4 text-left text-sm leading-[1.75] text-[#1C1E21] sm:mt-7 sm:space-y-4 md:text-base md:leading-relaxed lg:leading-relaxed">
            {DEVLOG_BULLETS.map((line) => (
              <li key={line} className="flex gap-3 pl-0">
                <span className="shrink-0 pt-[0.2em] text-[#65676B]" aria-hidden>
                  ・
                </span>
                <span className="min-w-0 break-words">{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-pretty text-left text-sm leading-[1.75] text-[#65676B] sm:mt-8 sm:text-center md:text-base md:leading-relaxed">
            {DEVLOG_BODY}
          </p>
          <div className="mt-8 flex justify-center sm:mt-9">
            <a
              href={DEVLOG_STRIPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] w-full max-w-sm items-center justify-center rounded-lg bg-[#1877F2] px-6 py-3.5 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#166FE5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/50 active:scale-[0.99] sm:w-auto md:min-h-[52px] md:text-lg"
            >
              {DEVLOG_CTA_LABEL}
            </a>
          </div>
        </section>
      </div>

      <div className="mt-10 flex justify-center sm:mt-11">
        <FadeInUpOnScroll>
          <div className="w-fit max-w-[min(100%,calc(100vw-2rem))] rounded-full border border-[#DADDE1] bg-[#F0F2F5] px-4 py-2 text-center text-xs font-medium leading-snug text-[#65676B] shadow-[0_1px_2px_rgba(0,0,0,0.06)] sm:px-5 sm:text-sm md:px-6">
            {MA_FOOTNOTE_CHIP}
          </div>
        </FadeInUpOnScroll>
      </div>
    </div>
  );
}
