"use client";
import Link from "next/link";

export default function DeveloperThoughtFooter() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-8">
        <div className="mb-6 rounded-2xl border border-dashed border-slate-300/90 bg-[repeating-linear-gradient(135deg,transparent,transparent_12px,rgba(148,163,184,0.07)_12px,rgba(148,163,184,0.07)_13px)] p-4 sm:p-5">
          <p className="text-sm font-medium leading-relaxed text-slate-800 sm:text-base">
            この声が形になるまでの全記録は、開発日誌で公開中（月額300円）
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
            月額300円から、開発日誌（デジタルコンテンツ）の購読者になりませんか？
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href="https://buy.stripe.com/7sY6oA2lKe2qfdg8NEeEo00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/80 sm:w-auto"
            >
              開発の裏側（日誌）を覗く
            </a>
            <Link
              href="/dev-log/unlock"
              className="inline-flex w-full items-center justify-center rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100 sm:w-auto"
            >
              開発日誌を閲覧する
            </Link>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-slate-500">
            ※本決済は寄付ではなく、デジタルコンテンツの閲覧権およびプレミアム機能の利用ライセンス提供に対する対価です。
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-slate-700">
              © 2026 メディリアライズ (Medirealize) | medirealize.jp
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <Link
                href="/dev-log"
                className="text-xs text-slate-600 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-slate-800"
              >
                開発日誌
              </Link>
              <Link
                href="/tokushoho"
                className="text-xs text-slate-600 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-slate-800"
              >
                特定商取引法に基づく表記
              </Link>
              <Link
                href="/terms"
                className="text-xs text-slate-600 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-slate-800"
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

