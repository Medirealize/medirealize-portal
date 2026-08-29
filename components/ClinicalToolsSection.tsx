import { ArrowUpRight } from "lucide-react";
import {
  CLINICAL_TOOLS_DISCLAIMER,
  CLINICAL_TOOLS_EYEBROW,
  CLINICAL_TOOLS_HEADLINE,
  CLINICAL_TOOLS_LEAD,
  CLINICAL_TOOLS_SECTION_LABEL,
  CLINICAL_TOOLS_STATUS_BADGE,
  CLINICAL_TOOL_DEFINITIONS,
} from "@/lib/productLeadContent";

export default function ClinicalToolsSection() {
  return (
    <section className="mt-12 sm:mt-14" aria-labelledby="clinical-tools-heading">
      <div className="mb-5 flex flex-col items-center gap-2 sm:mb-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#65676B]">
          {CLINICAL_TOOLS_SECTION_LABEL}
        </p>
        <div className="h-px w-12 bg-[#DADDE1]" aria-hidden />
      </div>

      <div className="rounded-2xl border border-[#E4E6EB] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
        <div className="border-b border-[#E4E6EB] px-5 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-8">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#DADDE1] bg-[#F0F2F5] px-3 py-1 text-xs font-semibold text-[#65676B]">
            {CLINICAL_TOOLS_EYEBROW}
          </span>
          <h2
            id="clinical-tools-heading"
            className="mt-3 text-pretty text-lg font-bold leading-snug tracking-tight text-[#050505] sm:text-xl md:text-2xl md:leading-tight"
          >
            {CLINICAL_TOOLS_HEADLINE}
          </h2>
          <p className="mt-4 max-w-3xl text-pretty text-[0.9375rem] leading-[1.75] text-[#1C1E21] sm:text-base sm:leading-relaxed">
            {CLINICAL_TOOLS_LEAD}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {CLINICAL_TOOL_DEFINITIONS.map((tool) => (
            <a
              key={tool.key}
              href={tool.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 border-b border-[#E4E6EB] px-5 py-6 transition-colors hover:bg-[#F0F2F5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/40 sm:px-6 sm:py-7 lg:border-r lg:last:border-r-0"
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0F2F5] text-xl ring-1 ring-[#DADDE1]"
                  aria-hidden
                >
                  {tool.icon}
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#65676B] opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-bold leading-snug text-[#050505] sm:text-base">
                  {tool.name}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#65676B] sm:text-[0.8125rem]">
                  {tool.tagline}
                </p>
              </div>
              <span className="mt-auto inline-flex w-fit items-center rounded-full border border-[#DADDE1] bg-[#F0F2F5] px-2.5 py-1 text-[10px] font-semibold text-[#65676B]">
                {CLINICAL_TOOLS_STATUS_BADGE}
              </span>
            </a>
          ))}
        </div>

        <div className="border-t border-[#E4E6EB] bg-[#F9FAFB] px-5 py-5 sm:px-7 lg:px-8">
          <p className="text-pretty text-xs leading-relaxed text-[#65676B] sm:text-[0.8125rem]">
            {CLINICAL_TOOLS_DISCLAIMER}
          </p>
        </div>
      </div>
    </section>
  );
}
