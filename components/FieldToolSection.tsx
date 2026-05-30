import { ArrowUpRight, Compass } from "lucide-react";
import {
  FIELD_TOOL_APP_NAME,
  FIELD_TOOL_AUDIENCE_CARDS,
  FIELD_TOOL_CTA_LABEL,
  FIELD_TOOL_DISCLAIMER,
  FIELD_TOOL_EYEBROW,
  FIELD_TOOL_EXTERNAL_URL,
  FIELD_TOOL_HEADLINE,
  FIELD_TOOL_HOWTO_LABEL,
  FIELD_TOOL_HOWTO_URL,
  FIELD_TOOL_LEAD,
  FIELD_TOOL_ORIGIN_NOTE,
  FIELD_TOOL_SECTION_LABEL,
  FIELD_TOOL_STATUS_BADGE,
  FIELD_TOOL_STEPS,
  FIELD_TOOL_TAGLINE,
} from "@/lib/productLeadContent";

const STEP_MARKERS = ["①", "②", "③"] as const;

function RadarDecoration() {
  return (
    <div
      className="pointer-events-none absolute -right-6 -top-6 hidden h-40 w-40 opacity-[0.07] sm:block lg:-right-4 lg:-top-4 lg:h-48 lg:w-48"
      aria-hidden
    >
      <div className="absolute inset-0 rounded-full border-2 border-emerald-600" />
      <div className="absolute inset-[18%] rounded-full border-2 border-emerald-600" />
      <div className="absolute inset-[36%] rounded-full border-2 border-emerald-600" />
      <div className="absolute left-1/2 top-1/2 h-[52%] w-px -translate-x-1/2 -translate-y-1/2 bg-emerald-600" />
      <div className="absolute left-1/2 top-1/2 h-px w-[52%] -translate-x-1/2 -translate-y-1/2 bg-emerald-600" />
      <span className="absolute left-[62%] top-[28%] h-2.5 w-2.5 rounded-full bg-emerald-600" />
      <span className="absolute left-[38%] top-[58%] h-2 w-2 rounded-full bg-emerald-500" />
      <span className="absolute left-[72%] top-[62%] h-1.5 w-1.5 rounded-full bg-emerald-400" />
    </div>
  );
}

export default function FieldToolSection() {
  return (
    <section className="mt-12 sm:mt-14" aria-labelledby="field-tool-heading">
      <div className="mb-5 flex flex-col items-center gap-2 sm:mb-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#65676B]">
          {FIELD_TOOL_SECTION_LABEL}
        </p>
        <div className="h-px w-12 bg-[#DADDE1]" aria-hidden />
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-white via-white to-emerald-50/40 shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
        <RadarDecoration />

        <div className="relative border-b border-emerald-100/80 px-5 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
              <Compass className="h-3.5 w-3.5 shrink-0" aria-hidden />
              {FIELD_TOOL_EYEBROW}
            </span>
            <span className="rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-semibold text-emerald-700">
              {FIELD_TOOL_STATUS_BADGE}
            </span>
          </div>

          <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-emerald-700">{FIELD_TOOL_APP_NAME}</p>
              <p className="mt-0.5 text-xs text-[#65676B]">{FIELD_TOOL_TAGLINE}</p>
              <h2
                id="field-tool-heading"
                className="mt-3 text-pretty text-lg font-bold leading-snug tracking-tight text-[#050505] sm:text-xl md:text-2xl md:leading-tight"
              >
                {FIELD_TOOL_HEADLINE}
              </h2>
              <p className="mt-4 max-w-3xl text-pretty text-[0.9375rem] leading-[1.75] text-[#1C1E21] sm:text-base sm:leading-relaxed">
                {FIELD_TOOL_LEAD}
              </p>
              <p className="mt-3 max-w-3xl text-pretty text-sm leading-relaxed text-[#65676B]">
                {FIELD_TOOL_ORIGIN_NOTE}
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-2.5 sm:flex-row lg:w-auto lg:min-w-[14rem] lg:flex-col">
              <a
                href={FIELD_TOOL_EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-center text-sm font-bold text-white shadow-md transition-colors hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/45 active:scale-[0.99] sm:text-base lg:w-full"
              >
                {FIELD_TOOL_CTA_LABEL}
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
              </a>
              <a
                href={FIELD_TOOL_HOWTO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-white px-5 py-3 text-center text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/35 lg:w-full"
              >
                {FIELD_TOOL_HOWTO_LABEL}
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
          {FIELD_TOOL_AUDIENCE_CARDS.map((card) => (
            <article
              key={card.key}
              className="border-b border-emerald-100/80 px-5 py-6 last:border-b-0 sm:px-7 sm:py-7 lg:border-b-0 lg:border-r lg:px-8 lg:py-8 lg:last:border-r-0"
            >
              <div className="flex items-start gap-3">
                <span
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-xl ring-1 ring-emerald-100"
                  aria-hidden
                >
                  {card.icon}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold leading-snug text-[#050505] sm:text-lg">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#65676B]">{card.lead}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-3">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-[#1C1E21]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="border-t border-emerald-100/80 bg-emerald-50/30 px-5 py-6 sm:px-7 sm:py-7 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
            使い方（3ステップ）
          </p>
          <ol className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {FIELD_TOOL_STEPS.map((step, index) => (
              <li
                key={step.label}
                className="rounded-xl border border-emerald-100 bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-xs font-bold text-emerald-800">
                  {STEP_MARKERS[index]}
                </span>
                <p className="mt-3 text-sm font-semibold leading-snug text-[#050505]">{step.label}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-[#65676B]">{step.detail}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-pretty text-xs leading-relaxed text-[#65676B] sm:text-[0.8125rem]">
            {FIELD_TOOL_DISCLAIMER}
          </p>
        </div>
      </div>
    </section>
  );
}
