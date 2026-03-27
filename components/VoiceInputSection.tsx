import { ArrowUpRight } from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfwY_2V2nYnON8jk7xfHTdibgj6PLhfUcZ6KK6CGoNCU9qF1w/viewform?usp=publish-editor";

export default function VoiceInputSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-12 pt-2">
      <div className="rounded-3xl border border-slate-600/40 bg-[#151f32]/85 p-5 sm:p-7">
        <h3 className="text-center text-lg font-bold tracking-tight text-[#F8FAFC] sm:text-xl">
          あなたの言葉を、聞かせてください。
        </h3>

        <div className="mt-5 flex justify-center">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b5998] px-5 py-3 text-sm font-semibold text-[#F8FAFC] shadow-sm transition-colors hover:bg-[#334d86] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/60 active:scale-[0.99]"
          >
            感想・お問い合わせを送る
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-4 text-center text-xs leading-relaxed text-slate-500">
          ※個別の診療相談にはお答えできません
        </p>
      </div>
    </section>
  );
}
