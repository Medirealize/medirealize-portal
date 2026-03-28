"use client";

import DevelopmentLog from "@/components/DevelopmentLog";
import FadeInUpOnScroll from "@/components/FadeInUpOnScroll";
import FeatureCard from "@/components/FeatureCard";
import {
  FEATURE_DEFINITIONS,
  HERO_MAIN_COPY,
  HERO_SUB_COPY,
  MA_FOOTNOTE_CHIP,
  MEDICAL_DISCLAIMER,
  PHASE_BADGE_LONG,
  PHASE_BADGE_SHORT,
} from "@/lib/productLeadContent";

const HERO_BOX =
  "rounded-2xl border border-[#E4E6EB] bg-white shadow-[0_2px_14px_rgba(0,0,0,0.06)]";
/** 横パディングを厚めにし、見出し・本文が枠線から離れるようにする */
const HERO_PAD =
  "py-6 pl-6 pr-6 sm:py-7 sm:pl-8 sm:pr-8 md:py-8 md:pl-10 md:pr-10 lg:py-8 lg:pl-11 lg:pr-11 xl:py-10 xl:pl-14 xl:pr-14 2xl:pl-16 2xl:pr-16";
const INNER_MAX = "mx-auto w-full max-w-6xl px-4 sm:px-6";

export default function ProductLeadSection() {
  return (
    <div className={`${INNER_MAX} pb-16 pt-6 sm:pb-20 sm:pt-8`}>
      <section className="w-full text-center" aria-label="ヒーロー">
        <div className="flex w-full justify-center">
          <div
            className={`${HERO_BOX} ${HERO_PAD} w-full max-w-[min(100%,26rem)] sm:max-w-[min(100%,32rem)] md:max-w-[min(100%,42rem)] lg:w-max lg:max-w-[min(100%,calc(100vw-2rem))] lg:min-w-0 xl:max-w-[min(100%,72rem)]`}
          >
            <div className="mx-auto inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-[#DADDE1] bg-[#F0F2F5] px-3 py-1.5 text-xs font-semibold leading-tight text-[#65676B] md:px-3.5 md:py-1.5 md:text-[13px]">
              <span className="inline-flex h-2 w-2 shrink-0 rounded-full bg-[#1877F2]" aria-hidden />
              <span className="sm:hidden">{PHASE_BADGE_SHORT}</span>
              <span className="hidden sm:inline">{PHASE_BADGE_LONG}</span>
            </div>

            <h1 className="relative mx-auto mt-6 w-full min-w-0 max-w-full text-center text-lg font-extrabold leading-snug tracking-tight text-[#050505] sm:mt-6 sm:text-2xl sm:leading-tight md:text-3xl md:leading-[1.2] lg:mt-6 lg:whitespace-nowrap lg:text-[clamp(1.125rem,0.75rem+1.15vw,1.875rem)] lg:leading-[1.14] xl:text-[clamp(1.1875rem,0.8rem+1.05vw,2rem)] xl:leading-[1.12] 2xl:text-[clamp(1.25rem,0.85rem+0.95vw,2.125rem)] 2xl:leading-[1.1]">
              {HERO_MAIN_COPY}
            </h1>

            <p className="relative mx-auto mt-5 w-full min-w-0 max-w-[min(100%,34rem)] text-pretty text-center text-[0.9375rem] font-normal leading-[1.8] text-[#65676B] sm:mt-5 sm:max-w-[min(100%,36rem)] sm:text-base sm:leading-[1.78] md:max-w-[min(100%,40rem)] lg:mt-6 lg:max-w-[min(100%,42rem)] lg:text-[1.0625rem] lg:leading-[1.72] xl:max-w-[min(100%,44rem)] xl:text-lg xl:leading-[1.68]">
              {HERO_SUB_COPY}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-9 sm:mt-10" aria-label="プロダクト導線">
        <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 sm:items-stretch lg:grid-cols-4 lg:gap-6 lg:[grid-auto-rows:minmax(0,1fr)]">
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
          className="mt-6 w-full text-right text-xs leading-relaxed text-[#65676B] sm:mt-7 sm:text-sm lg:mt-8 lg:text-[0.9375rem] lg:leading-relaxed"
          role="note"
        >
          {MEDICAL_DISCLAIMER}
        </p>
      </section>

      <div className="mt-10 w-full sm:mt-11">
        <div className="flex w-full min-w-0 justify-center">
          <DevelopmentLog />
        </div>
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
