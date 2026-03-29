import Image from "next/image";
import { ExternalLink } from "lucide-react";

const NOTE_STORY_URL = "https://note.com/medirealize_note";

export default function DeveloperProfileSection() {
  return (
    <section className="border-y border-[#DADDE1] bg-white py-9 sm:py-12" aria-label="Profile">
      <div className="mx-auto max-w-6xl px-3 sm:px-4">
        <div className="grid grid-cols-1 items-start gap-6 sm:gap-8 lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[14rem_minmax(0,1fr)]">
          <aside className="mx-auto w-full max-w-[14rem] shrink-0 rounded-lg border border-[#DADDE1] bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.08)] lg:mx-0 lg:w-full lg:max-w-none lg:self-start">
            <div className="relative mx-auto h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full ring-1 ring-[#DADDE1] sm:h-20 sm:w-20">
              <Image
                src="/nomura-profile.png"
                alt="野村信介"
                fill
                className="object-cover object-[center_22%]"
                sizes="(max-width: 1024px) 80px, 80px"
                priority={false}
              />
            </div>
            <div className="mt-2 flex flex-col gap-0">
              <h3 className="text-[1.05rem] font-bold leading-none text-[#050505]">野村信介</h3>
              <p className="mt-px text-xs leading-tight text-[#65676B]">
                医師 / 医学博士 / Medirealize代表
              </p>
            </div>
            <a
              href={NOTE_STORY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-xs font-semibold leading-snug text-[#1877F2] no-underline hover:underline"
            >
              <span className="inline-flex items-center gap-1">
                note：なぜ、外科医がコードを書くのか
                <ExternalLink className="h-3 w-3 shrink-0 opacity-90" aria-hidden />
              </span>
            </a>
          </aside>

          <div className="min-w-0">
            <h2 className="text-pretty text-lg font-bold leading-snug tracking-tight text-[#050505] sm:text-xl md:text-2xl">
              プロフィール：医師としての「背骨」と、開発への「想い」
            </h2>

            <div className="mt-4 space-y-5 text-[0.9375rem] leading-[1.65] text-[#65676B] sm:mt-3 sm:space-y-4 sm:text-[0.95rem] sm:leading-relaxed">
              <section>
                <h4 className="text-[0.9375rem] font-semibold text-[#050505] sm:text-base">
                  ■ 「現場」を、誰よりも見てきた。
                </h4>
                <p className="mt-2 text-pretty text-[#1C1E21]">
                  防衛医科大学校を卒業後、自衛隊医官として活動。国内の基幹病院のみならず、米国ハーバード大学でのリサーチフェロー（医学研究）など、最先端の医療現場と研究の最前線を歩んできました。外科医として、そして医学博士として、数多くの命と向き合ってきた時間が僕の背骨です。
                </p>
              </section>

              <section>
                <h4 className="text-[0.9375rem] font-semibold text-[#050505] sm:text-base">
                  ■ なぜ今、コードを書くのか。
                </h4>
                <p className="mt-2 text-pretty text-[#1C1E21]">
                  2008年に医師免許を取得して以来、これまでの臨床現場で確信したことがあります。それは、
                  <strong className="font-semibold text-[#050505]">
                    「どれだけ優れた医療技術があっても、患者さんと医師の『対話』が詰まっていたら、最高の治療は届けられない」
                  </strong>
                  ということ。
                </p>
                <p className="mt-2 text-pretty text-[#1C1E21]">
                  診察室で飲み込まれた本音。断片的な記憶。その「言葉の詰まり」を解消するために、現場を一番知る医師自らが、AIという武器を手に取りました。
                </p>
              </section>

              <section className="w-full min-w-0 rounded-lg border border-[#DADDE1] bg-[#F0F2F5] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.05)] sm:p-4 lg:max-w-3xl">
                <h4 className="text-[0.9375rem] font-semibold text-[#050505] sm:text-base">■ 略歴</h4>
                <ul className="mt-2 w-full min-w-0 space-y-2 text-left text-[#1C1E21] sm:space-y-1.5">
                  <li className="text-pretty sm:whitespace-nowrap">
                    防衛医科大学校 卒業 / 同大学院 博士課程修了（医学博士）
                  </li>
                  <li className="text-pretty sm:whitespace-nowrap">
                    元 自衛隊熊本病院 外科部長 兼 健康管理センター長
                  </li>
                  <li className="text-pretty sm:whitespace-nowrap">
                    元 ハーバード大学医学部 リサーチフェロー
                  </li>
                  <li className="text-pretty sm:whitespace-nowrap">
                    日本外科学会、日本消化器外科学会、日本食道学会に所属
                  </li>
                </ul>

                <div className="mt-3 border-t border-[#DADDE1] pt-3">
                  <a
                    href="https://researchmap.jp/shinsuke_nomura"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1877F2] no-underline hover:underline"
                  >
                    研究・論文実績（researchmap）
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  </a>
                  <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-[#65676B] sm:text-xs">
                    医学的知見に基づいたプロダクト開発のため、継続的な研究活動を行っています。
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
