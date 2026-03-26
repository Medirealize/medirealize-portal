import Image from "next/image";
import { ExternalLink } from "lucide-react";
const NOTE_STORY_URL = "https://note.com/medirealize_note";

export default function DeveloperProfileSection() {
  return (
    <section className="border-y border-gray-200 bg-white py-14 sm:py-16" aria-label="Profile">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] lg:gap-10">
          <aside className="rounded-3xl border border-gray-200 bg-gray-50/70 p-5">
            <div className="relative h-20 w-20 overflow-hidden rounded-full ring-1 ring-gray-200">
              <Image
                src="/nomura-profile.png"
                alt="野村信介"
                fill
                className="object-cover object-[center_25%]"
                sizes="80px"
                priority={false}
              />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">野村信介</h3>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              医師 / 医学博士 / Medirealize代表
            </p>
            <a
              href={NOTE_STORY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-blue-700 underline decoration-blue-400 underline-offset-4 transition-colors hover:text-blue-800"
            >
              note：なぜ、外科医がコードを書くのか
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </aside>

          <div className="min-w-0">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              プロフィール：医師としての「背骨」と、開発への「想い」
            </h2>

            <div className="mt-6 space-y-6 text-sm leading-relaxed text-gray-600 sm:text-[0.95rem]">
              <section>
                <h4 className="text-base font-semibold text-gray-900">■ 「現場」を、誰よりも見てきた。</h4>
                <p className="mt-2">
                  防衛医科大学校を卒業後、自衛隊の衛生官として活動。国内の基幹病院のみならず、米国ハーバード大学でのリサーチフェロー（医学研究）など、最先端の医療現場と研究の最前線を歩んできました。外科医として、そして医学博士として、数多くの命と向き合ってきた時間が僕の背骨です。
                </p>
              </section>

              <section>
                <h4 className="text-base font-semibold text-gray-900">■ なぜ今、コードを書くのか。</h4>
                <p className="mt-2">
                  虎の門病院やマサチューセッツ総合病院といった「超」がつくほどの現場で確信したことがあります。それは、
                  <strong className="text-gray-800">
                    「どれだけ優れた医療技術があっても、患者さんと医師の『対話』が詰まっていたら、最高の治療は届けられない」
                  </strong>
                  ということ。
                </p>
                <p className="mt-2">
                  診察室で飲み込まれた本音。断片的な記憶。その「言葉の詰まり」を解消するために、現場を一番知る医師自らが、AIという武器を手に取りました。
                </p>
              </section>

              <section className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4">
                <h4 className="text-base font-semibold text-gray-900">■ 略歴</h4>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>防衛医科大学校 卒業 / 同大学院 博士課程修了（医学博士）</li>
                  <li>元 自衛隊熊本病院 外科部長 兼 健康管理センター長</li>
                  <li>元 ハーバード大学医学部 リサーチフェロー</li>
                  <li>日本外科学会、日本消化器外科学会、日本食道学会に所属</li>
                </ul>

                <div className="mt-4 border-t border-gray-200 pt-3">
                  <a
                    href="https://researchmap.jp/shinsuke_nomura"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 underline decoration-gray-400 underline-offset-4 transition-colors hover:text-gray-900"
                  >
                    研究・論文実績（researchmap）
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">
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
