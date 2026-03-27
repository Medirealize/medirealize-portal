import { ArrowUpRight } from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfwY_2V2nYnON8jk7xfHTdibgj6PLhfUcZ6KK6CGoNCU9qF1w/viewform?usp=publish-editor";

export default function VoiceInputSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-3 pb-10 pt-2 sm:px-4 sm:pb-12">
      <div className="rounded-xl border border-[#DADDE1] bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.08)] sm:p-7">
        <h3 className="text-center text-lg font-bold leading-snug tracking-tight text-[#050505] sm:text-xl">
          あなたの言葉を、聞かせてください。
        </h3>

        <div className="mt-5 flex justify-center">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-[#1877F2] px-5 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#166FE5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/50 active:scale-[0.99] sm:min-h-0 sm:w-auto sm:text-sm"
          >
            感想・お問い合わせを送る
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-4 text-center text-xs leading-relaxed text-[#65676B]">
          ※個別の診療相談にはお答えできません
        </p>
      </div>
    </section>
  );
}
