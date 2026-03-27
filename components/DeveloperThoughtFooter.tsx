"use client";
import Link from "next/link";

export default function DeveloperThoughtFooter() {
  return (
    <footer className="border-t border-slate-700/60 bg-[#0c1422]">
      <div className="mx-auto w-full max-w-6xl px-4 py-8">
        <div className="mb-6 rounded-2xl border border-slate-600/45 bg-[#151f32]/90 p-4 sm:p-5">
          <p className="text-sm font-medium leading-relaxed text-slate-300 sm:text-base">
            この声が形になるまでの全記録は、開発日誌で公開中（月額300円）
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
            購読後はメール認証で、開発日誌コンテンツを閲覧できます。
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href="https://buy.stripe.com/7sY6oA2lKe2qfdg8NEeEo00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full min-h-[48px] items-center justify-center rounded-xl bg-[#3b5998] px-4 py-3 text-sm font-semibold text-[#F8FAFC] shadow-sm transition-colors hover:bg-[#334d86] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/60 sm:w-auto"
            >
              葛藤ログを購読する（月額300円）
            </a>
            <Link
              href="/dev-log/unlock"
              className="inline-flex w-full min-h-[48px] items-center justify-center rounded-xl border border-slate-600/55 bg-slate-800/70 px-4 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800 sm:w-auto"
            >
              開発日誌を閲覧する
            </Link>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-slate-500">
            ※本決済は寄付ではなく、デジタルコンテンツの閲覧権およびプレミアム機能の利用ライセンス提供に対する対価です。
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-slate-400">
              © 2026 メディリアライズ (Medirealize) | medirealize.jp
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <Link
                href="/dev-log"
                className="text-xs text-slate-500 underline decoration-slate-600 underline-offset-4 transition-colors hover:text-slate-300"
              >
                開発日誌
              </Link>
              <Link
                href="/tokushoho"
                className="text-xs text-slate-500 underline decoration-slate-600 underline-offset-4 transition-colors hover:text-slate-300"
              >
                特定商取引法に基づく表記
              </Link>
              <Link
                href="/terms"
                className="text-xs text-slate-500 underline decoration-slate-600 underline-offset-4 transition-colors hover:text-slate-300"
              >
                利用規約
              </Link>
            </div>
          </div>
          <p className="text-[11px] leading-relaxed text-slate-500">
            ※当サイトの内容は個人の見解であり、所属組織とは一切関係ありません。
          </p>
        </div>
      </div>
    </footer>
  );
}
