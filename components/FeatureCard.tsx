"use client";

import {
  CalendarClock,
  MessageSquare,
  Stethoscope,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import {
  DEV_IN_PROGRESS_LABEL,
  type FeatureIconKey,
} from "@/lib/productLeadContent";

const ICON_MAP: Record<FeatureIconKey, LucideIcon> = {
  stethoscope: Stethoscope,
  calendar: CalendarClock,
  message: MessageSquare,
  sparkles: Sparkles,
};

const STEP_MARKERS = ["①", "②", "③"] as const;

export type FeatureCardProps = {
  title: string;
  steps: readonly [string, string, string];
  cta: string;
  href: string;
  icon: FeatureIconKey;
  productIndex: number;
};

export default function FeatureCard({
  title,
  steps,
  cta,
  href,
  icon,
  productIndex,
}: FeatureCardProps) {
  const Icon = ICON_MAP[icon];

  return (
    <div
      className={[
        "@container/card group relative flex h-full min-h-0 min-w-0 max-w-full flex-col self-stretch overflow-visible rounded-2xl border border-[#E4E6EB] bg-white p-5 text-left shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-shadow duration-200 sm:p-5 sm:px-5 sm:py-5 md:p-6",
        "hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] active:translate-y-0",
        "[touch-action:manipulation]",
      ].join(" ")}
      aria-label={`${title} のカード`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-px -top-px z-10 rounded-bl-md rounded-tr-[11px] border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold leading-none text-red-600 shadow-sm sm:-right-1.5 sm:-top-1.5 sm:rounded-md sm:rounded-br-md sm:rounded-tl-none sm:rounded-tr-md sm:px-3 sm:py-1.5 sm:text-sm"
      >
        {DEV_IN_PROGRESS_LABEL}
      </span>

      <div className="relative flex min-w-0 items-start gap-2.5 pr-10 sm:gap-3 sm:pr-12">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F0F2F5] text-[#1877F2] ring-1 ring-[#DADDE1] sm:h-11 sm:w-11">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <h3
          className="min-w-0 flex-1 break-words pt-0.5 text-left text-base font-bold leading-snug tracking-tight text-[#050505] sm:text-lg sm:leading-tight lg:truncate lg:whitespace-nowrap lg:leading-tight lg:tracking-tight lg:[font-size:clamp(0.625rem,0.12rem+4.6cqw,0.8125rem)] xl:[font-size:clamp(0.6875rem,0.15rem+4.2cqw,0.875rem)] min-[1600px]:[font-size:clamp(0.75rem,0.2rem+3.8cqw,0.9375rem)]"
          title={title}
        >
          {title}
        </h3>
      </div>

      <ol className="mt-5 min-h-0 min-w-0 flex-1 space-y-3.5 sm:mt-6 sm:space-y-4">
        {steps.map((step, stepIdx) => (
          <li key={stepIdx} className="flex min-w-0 gap-2.5 sm:gap-3">
            <span
              className={[
                "mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold sm:h-10 sm:w-10 sm:text-sm",
                "border-[#DADDE1] bg-[#F0F2F5] text-[#050505]",
                "group-hover:border-[#CCD0D5] group-hover:bg-[#E4E6EB]",
              ].join(" ")}
            >
              {STEP_MARKERS[stepIdx]}
            </span>
            <span className="min-w-0 flex-1 break-words pt-0.5 text-[0.8125rem] leading-[1.65] text-[#1C1E21] sm:text-sm sm:leading-relaxed lg:text-[0.8125rem] lg:leading-[1.68] xl:text-[0.875rem] xl:leading-[1.7] min-[1600px]:text-base">
              {step}
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-auto pt-5 sm:pt-6">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[48px] w-full items-center justify-center rounded-lg bg-[#1877F2] px-3 py-3 text-center text-sm font-semibold leading-snug text-white shadow-sm transition-colors hover:bg-[#166FE5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/40 active:scale-[0.99] sm:min-h-[50px] sm:px-4 sm:py-3.5 sm:text-base lg:min-h-[52px] lg:text-[0.9375rem] xl:text-base"
        >
          {cta}
        </a>
      </div>

      <span className="sr-only">product {productIndex}</span>
    </div>
  );
}
