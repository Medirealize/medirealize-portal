import { ArrowUpRight, MessageCircleMore } from "lucide-react";

const NOTE_STORY_URL = "https://note.com/medirealize_note";
const X_DM_URL = "https://x.com/med_structure";

export default function StorySection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-3 pb-12 pt-2 sm:px-4 sm:pb-14" aria-label="信頼と共感のストーリー">
      <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">
        <article className="rounded-xl border border-[#DADDE1] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.08)] sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1877F2]">
            Story
          </p>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-[#050505]">
            なぜ、外科医がコードを書くのか
          </h3>
          <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[#65676B] sm:text-sm sm:leading-relaxed">
            15年のキャリア、ボストンでの研究、そして宮崎での再挑戦。医療の現場で見えてきた「構造の限界」を乗り越えるために、医師によるプロトタイプ開発を続けています。現場で得た知見を、実装可能なプロダクトへと変換しています。
          </p>
          <a
            href={NOTE_STORY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-[#DADDE1] bg-[#F0F2F5] px-4 py-2 text-sm font-semibold text-[#1877F2] transition-colors hover:bg-[#E4E6EB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/40"
          >
            noteでストーリーを読む
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </article>

        <article className="rounded-xl border border-[#DADDE1] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.08)] sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1877F2]">
            Recruit
          </p>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-[#050505]">
            開発パートナー（技術的右腕）を募集しています
          </h3>
          <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[#65676B] sm:text-sm sm:leading-relaxed">
            理想を現実に。医療の構造を共に実装しませんか。医師によるプロトタイプ開発のスピードを、技術で加速できる方との協業を歓迎しています。
          </p>
          <a
            href={X_DM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-[#DADDE1] bg-[#F0F2F5] px-4 py-2 text-sm font-semibold text-[#1877F2] transition-colors hover:bg-[#E4E6EB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/40"
          >
            X（旧Twitter）でDMを送る
            <MessageCircleMore className="h-4 w-4" />
          </a>
        </article>
      </div>
    </section>
  );
}
