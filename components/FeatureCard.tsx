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
        "group relative flex h-full min-h-0 min-w-0 flex-col overflow-visible rounded-2xl border border-[#DADDE1] bg-white p-6 text-left shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition-all duration-200",
        "hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] active:translate-y-0",
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

      <div className="relative flex min-w-0 items-start gap-3">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0F2F5] text-[#1877F2] ring-1 ring-[#DADDE1]">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="min-w-0 flex-1 pt-0.5 text-left text-lg font-bold leading-tight tracking-tight text-[#050505] sm:text-xl lg:text-[1.25rem] xl:whitespace-nowrap xl:text-2xl xl:leading-snug">
          {title}
        </h3>
      </div>

      <ol className="mt-6 min-w-0 flex-1 space-y-4">
        {steps.map((step, stepIdx) => (
          <li key={stepIdx} className="flex min-w-0 gap-3">
            <span
              className={[
                "mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-bold",
                "border-[#DADDE1] bg-[#F0F2F5] text-[#050505]",
                "group-hover:border-[#CCD0D5] group-hover:bg-[#E4E6EB]",
              ].join(" ")}
            >
              {STEP_MARKERS[stepIdx]}
            </span>
            <span className="min-w-0 flex-1 pt-0.5 text-[0.9375rem] leading-snug tracking-tight text-[#1C1E21] sm:text-base lg:whitespace-nowrap lg:leading-[1.45] lg:[font-size:clamp(0.75rem,0.24rem+0.7vw,1rem)] xl:[font-size:clamp(0.8125rem,0.28rem+0.62vw,1.0625rem)]">
              {step}
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-6">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[52px] w-full items-center justify-center rounded-lg bg-[#1877F2] px-4 py-3.5 text-center text-lg font-semibold text-white shadow-sm transition-colors hover:bg-[#166FE5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/40 active:scale-[0.99] lg:min-h-[56px] lg:text-xl lg:leading-tight xl:text-[1.3125rem]"
        >
          {cta}
        </a>
      </div>

      <span className="sr-only">product {productIndex}</span>
    </div>
  );
}
