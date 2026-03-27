import { ArrowUpRight } from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfwY_2V2nYnON8jk7xfHTdibgj6PLhfUcZ6KK6CGoNCU9qF1w/viewform?usp=publish-editor";

export default function VoiceInputSection() {
  return (
    <section className="mx-auto flex w-full max-w-6xl justify-center px-3 pb-10 pt-2 sm:px-4 sm:pb-12">
      <div className="w-fit max-w-full rounded-xl border border-[#DADDE1] bg-white px-6 py-7 shadow-[0_1px_2px_rgba(0,0,0,0.08)] sm:px-8 sm:py-8">
        <h3 className="text-center text-base font-bold leading-snug tracking-tight text-[#050505] text-balance sm:text-lg sm:whitespace-nowrap">
          あなたの言葉を、聞かせてください。
        </h3>

        <div className="mt-6 flex justify-center sm:mt-7">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] w-full min-w-0 max-w-full items-center justify-center gap-2 rounded-lg bg-[#1877F2] px-5 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#166FE5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/50 active:scale-[0.99] sm:w-auto sm:min-h-0 sm:text-sm"
          >
            感想・お問い合わせを送る
            <ArrowUpRight className="h-4 w-4 shrink-0" />
          </a>
        </div>

        <p className="mt-4 text-center text-[0.6875rem] leading-relaxed text-[#65676B] sm:mt-5 sm:text-xs">
          ※個別の診療相談にはお答えできません
        </p>
      </div>
    </section>
  );
}
