"use client";
import Link from "next/link";
import {
  DEVLOG_CHECKOUT_PATH,
  DEVLOG_CTA_LABEL,
  DEVLOG_PUBLIC_PRICE_NOTE,
  DEVLOG_SUPPORT_USAGE_NOTE,
} from "@/lib/productLeadContent";

export default function DeveloperThoughtFooter() {
  return (
    <footer className="border-t border-[#DADDE1] bg-white">
      <div className="mx-auto w-full max-w-6xl px-3 py-7 sm:px-4 sm:py-8">
        <div className="mb-6 rounded-xl border border-[#DADDE1] bg-[#F0F2F5] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.06)] sm:p-5">
          <p className="text-sm font-semibold leading-relaxed text-[#050505] sm:text-base">
            この声が形になるまでの記録は、開発日誌として{DEVLOG_PUBLIC_PRICE_NOTE}でご購読いただけます。
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[#65676B] sm:text-base">
            購読後はメール認証で、開発日誌コンテンツを閲覧できます。解約は Stripe のカスタマーポータルからいつでも可能です。
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href={DEVLOG_CHECKOUT_PATH}
              className="inline-flex w-full min-h-[52px] items-center justify-center rounded-lg bg-[#1877F2] px-3 py-3 text-center text-xs font-semibold leading-snug text-white shadow-md transition-colors hover:bg-[#166FE5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/50 sm:min-h-[48px] sm:px-4 sm:text-sm sm:leading-normal md:text-base md:leading-snug sm:w-auto"
            >
              {DEVLOG_CTA_LABEL}
            </a>
            <Link
              href="/dev-log/unlock"
              className="inline-flex w-full min-h-[48px] items-center justify-center rounded-lg border border-[#DADDE1] bg-white px-4 py-3 text-sm font-semibold text-[#050505] transition-colors hover:bg-[#F0F2F5] sm:w-auto"
            >
              開発日誌を閲覧する
            </Link>
          </div>
          <p className="mt-2 text-center text-xs leading-relaxed text-[#65676B]">
            {DEVLOG_SUPPORT_USAGE_NOTE}
          </p>
          <p className="mt-3 text-xs leading-relaxed text-[#65676B]">
            ※本決済は寄付ではなく、デジタルコンテンツの閲覧権およびプレミアム機能の利用ライセンス提供に対する対価です。
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-[#65676B]">
              © 2026 メディリアライズ (Medirealize) | medirealize.jp
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <Link
                href="/dev-log"
                className="text-xs font-medium text-[#1877F2] no-underline hover:underline"
              >
                開発日誌
              </Link>
              <Link
                href="/tokushoho"
                className="text-xs font-medium text-[#1877F2] no-underline hover:underline"
              >
                特定商取引法に基づく表記
              </Link>
              <Link
                href="/terms"
                className="text-xs font-medium text-[#1877F2] no-underline hover:underline"
              >
                利用規約
              </Link>
            </div>
          </div>
          <p className="text-[11px] leading-relaxed text-[#65676B]">
            ※当サイトの内容は個人の見解であり、所属組織とは一切関係ありません。
          </p>
        </div>
      </div>
    </footer>
  );
}
