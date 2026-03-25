import { ArrowUpRight } from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/XXXXX/viewform?usp=sf_link";

export default function VoiceInputSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-12 pt-2">
      <div className="rounded-3xl border border-blue-100 bg-blue-50/10 p-5 sm:p-7">
        <h3 className="text-center text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
          あなたの言葉を、聞かせてください。
        </h3>

        <div className="mt-5 flex justify-center">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/80 active:scale-[0.99]"
          >
            感想・お問い合わせを送る
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-4 text-center text-xs leading-relaxed text-slate-600">
          ※個別の診療相談にはお答えできません
        </p>
      </div>
    </section>
  );
}

