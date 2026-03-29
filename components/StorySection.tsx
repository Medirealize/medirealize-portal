import { ArrowUpRight } from "lucide-react";
import FacebookIcon from "@/components/FacebookIcon";
import { FACEBOOK_MESSENGER_URL } from "@/lib/socialLinks";

const NOTE_STORY_URL = "https://note.com/medirealize_note";

const socialCtaBase =
  "inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-[#DADDE1] bg-[#F0F2F5] px-4 py-2.5 text-sm font-semibold text-[#1877F2] transition-colors hover:bg-[#E4E6EB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/40";

const RECRUIT_LEAD =
  "医師である僕と、この巨大な構造ハックに挑む『右腕』を探しています。実名制の安心感を持って対話したいので、Facebookから合言葉を添えてメッセージをください。";

export default function StorySection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-3 pb-12 pt-2 sm:px-4 sm:pb-14" aria-label="信頼と共感のストーリー">
      <div className="mx-auto grid w-full max-w-xl grid-cols-1 gap-3 sm:max-w-2xl sm:gap-4 lg:max-w-none lg:grid-cols-2 lg:gap-4">
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
            className={`mt-5 ${socialCtaBase}`}
          >
            noteでストーリーを読む
            <ArrowUpRight className="h-4 w-4 shrink-0" />
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
          <p className="mt-3 rounded-lg border border-blue-100 bg-blue-50/70 px-2.5 py-2 text-[0.9375rem] leading-snug text-[#1C1E21] sm:px-3 sm:py-2.5 sm:text-sm sm:leading-relaxed">
            {RECRUIT_LEAD}
          </p>
          <a
            href={FACEBOOK_MESSENGER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#1877F2] px-4 py-3.5 text-center text-sm font-bold leading-snug text-white shadow-md transition-colors hover:bg-[#166FE5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/50 active:scale-[0.99] sm:min-h-[56px] sm:px-5 sm:text-base sm:leading-snug"
          >
            <FacebookIcon className="h-5 w-5 shrink-0 text-white" />
            Facebookで参謀に立候補する
          </a>
        </article>
      </div>
    </section>
  );
}
