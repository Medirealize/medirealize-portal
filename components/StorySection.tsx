import { ArrowUpRight, MessageCircleMore } from "lucide-react";

const NOTE_STORY_URL = "https://note.com/medirealize_note";
const X_DM_URL = "https://x.com/med_structure";

export default function StorySection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-2" aria-label="信頼と共感のストーリー">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-600/40 bg-[#1e293b]/80 p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Story
          </p>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-[#F8FAFC]">
            なぜ、外科医がコードを書くのか
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            15年のキャリア、ボストンでの研究、そして宮崎での再挑戦。医療の現場で見えてきた「構造の限界」を乗り越えるために、医師によるプロトタイプ開発を続けています。現場で得た知見を、実装可能なプロダクトへと変換しています。
          </p>
          <a
            href={NOTE_STORY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-xl border border-slate-600/55 bg-slate-800/70 px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/50"
          >
            noteでストーリーを読む
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </article>

        <article className="rounded-3xl border border-slate-600/40 bg-[#1e293b]/80 p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Recruit
          </p>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-[#F8FAFC]">
            開発パートナー（技術的右腕）を募集しています
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            理想を現実に。医療の構造を共に実装しませんか。医師によるプロトタイプ開発のスピードを、技術で加速できる方との協業を歓迎しています。
          </p>
          <a
            href={X_DM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-xl border border-slate-600/55 bg-slate-800/70 px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/50"
          >
            X（旧Twitter）でDMを送る
            <MessageCircleMore className="h-4 w-4" />
          </a>
        </article>
      </div>
    </section>
  );
}
