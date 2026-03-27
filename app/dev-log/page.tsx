import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "開発日誌 | Medirealize",
  description: "Medirealize の開発日誌（デジタルコンテンツ）ページです。",
};

const sampleLogs = [
  {
    date: "2026-03-25",
    title: "ボストンの夜みたいに、仕様をもう一度呼吸させた日",
    body:
      "Stripe審査の画面を見ながら、研究室で徹夜していた頃の緊張感を思い出した。寄付ではなく、開発日誌というデジタルコンテンツ販売として筋を通すため、文言・法務導線・規約を一気に再設計。購読者向けには今回使った『審査通過チェックリスト10項目』をそのまま再利用できる形で公開。次の決済導線を作る時に、そのまま工数を短縮できる内容にした。",
    valueLink: {
      href: "/dev-log/resources/stripe-checklist",
      label: "審査通過チェックリスト10項目を見る",
    },
  },
  {
    date: "2026-03-24",
    title: "言葉の責任を、法務の行間まで揃えた日",
    body:
      "特商法ページと利用規約を磨き込み、提供時期・返品不可・解約条件・ライセンス範囲を明文化。単なるチェックボックス対応ではなく、ユーザーに誤解なく伝わる順番まで整えた。購読者には、実際に使っている『規約ひな型（条文テンプレ）』と『特商法の記載順テンプレ』を共有。法務ページをゼロから作る負担を、ここで確実に減らせるようにした。",
    valueLink: {
      href: "/dev-log/resources/legal-template",
      label: "規約・特商法テンプレを見る",
    },
  },
  {
    date: "2026-03-23",
    title: "迷いを1タップ減らすために、画面の温度を上げた日",
    body:
      "4プロダクト導線をスマホ起点で再設計。ボタン順、タップ領域、遷移導線を細かく見直し、視認性と遷移確度を最優先に調整した。購読者向けには、今回の改善で使った『モバイル導線診断シート（5分で詰まりを特定）』を配布。体調が悪いユーザーでも迷わないUIを作るための実践ノウハウを、そのまま自分のサービスに移植できる形で残した。",
    valueLink: {
      href: "/dev-log/resources/mobile-ux-sheet",
      label: "モバイル導線診断シートを見る",
    },
  },
];

export default async function DevLogPage() {
  const cookieStore = await cookies();
  if (cookieStore.get("devlog_access")?.value !== "1") {
    redirect("/dev-log/unlock");
  }

  return (
    <div className="min-h-screen bg-[#F7F8FB] px-4 py-10 sm:py-14">
      <main className="mx-auto w-full max-w-4xl rounded-3xl border border-blue-100 bg-white p-5 shadow-sm sm:p-8">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          開発日誌（デジタルコンテンツ）
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          診察室の課題を、どのように実装へ落とし込んでいるか。開発の舞台裏を記録しています。
        </p>
        <Link
          href="/dev-log/logs/latest"
          className="mt-4 inline-flex items-center rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100"
        >
          最新の葛藤ログを読む
        </Link>

        <section className="mt-6 space-y-4" aria-label="開発ログ一覧">
          {sampleLogs.map((log) => (
            <article key={log.date + log.title} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <p className="text-xs font-medium text-slate-500">{log.date}</p>
              <h2 className="mt-1 text-base font-semibold text-slate-900">{log.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{log.body}</p>
              <Link
                href={log.valueLink.href}
                className="mt-3 inline-flex items-center rounded-lg border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 transition-colors hover:bg-blue-100"
              >
                {log.valueLink.label}
              </Link>
            </article>
          ))}
        </section>

        <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50/50 p-4">
          <p className="text-sm leading-relaxed text-slate-700">
            本ページは購読者向けのデジタルコンテンツです。決済完了後、継続的に更新される開発記録の閲覧権と、プレミアム機能の利用ライセンスを提供します。
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100"
          >
            ポータルへ戻る
          </Link>
          <a
            href="/api/dev-log/logout"
            className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            ログアウト
          </a>
        </div>
      </main>
    </div>
  );
}

