import { ArrowUpRight, MessageCircleMore } from "lucide-react";
import FacebookIcon from "@/components/FacebookIcon";
import { SOCIAL_FACEBOOK_URL, SOCIAL_X_URL } from "@/lib/socialLinks";

const NOTE_STORY_URL = "https://note.com/medirealize_note";

const socialCtaBase =
  "inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-[#DADDE1] bg-[#F0F2F5] px-4 py-2.5 text-sm font-semibold text-[#1877F2] transition-colors hover:bg-[#E4E6EB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/40";

const socialCtaRecruit =
  `${socialCtaBase} sm:flex-1 sm:min-w-[min(100%,11rem)] lg:min-w-0`;

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
          <div className="mt-5 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={SOCIAL_X_URL} target="_blank" rel="noopener noreferrer" className={socialCtaRecruit}>
              X（旧Twitter）でDMを送る
              <MessageCircleMore className="h-4 w-4 shrink-0" />
            </a>
            <a
              href={SOCIAL_FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={socialCtaRecruit}
            >
              Facebookでつながる
              <FacebookIcon className="h-4 w-4 shrink-0" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
