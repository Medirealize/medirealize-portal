import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | Medirealize",
  description: "Medirealize の特定商取引法に基づく表記です。",
};

const rows = [
  { label: "販売業者", value: "メディリアライズ" },
  { label: "運営責任者", value: "野村 信介" },
  {
    label: "所在地・電話番号",
    value:
      "所在地・電話番号については、請求をいただいた場合、遅滞なく電子メール等にて提供いたします。",
  },
  { label: "メールアドレス", value: "info@medirealize.jp" },
  {
    label: "販売商品",
    value: "開発日誌（デジタルコンテンツ）の閲覧権およびプレミアム機能の利用ライセンス",
  },
  {
    label: "販売価格",
    value: "各商品ページ（決済リンク先）に表示された金額 100円（税込）",
  },
  {
    label: "商品代金以外の費用",
    value: "インターネット接続料金その他の電気通信回線の通信に関する費用",
  },
  {
    label: "代金の支払い時期",
    value: "初回は決済時。次月以降は毎月同日に決済。",
  },
  { label: "代金の支払い方法", value: "クレジットカード（Stripe）" },
  { label: "提供時期", value: "決済完了後、直ちにご利用いただけます。" },
  {
    label: "返品・キャンセル",
    value:
      "デジタルコンテンツの特性上、返品・返金はできません。サブスクリプションの解約は Stripe のカスタマーポータルからいつでも可能です。解約後も当該請求期間終了までは閲覧できます。日割り計算による返金は行いません。",
  },
];

export default function TokushohoPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FB] px-4 py-10 sm:py-14">
      <main className="mx-auto w-full max-w-4xl rounded-3xl border border-blue-100 bg-white p-5 shadow-sm sm:p-8">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          特定商取引法に基づく表記
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Medirealizeのデジタルコンテンツ販売に関する表記です。
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <dl className="divide-y divide-slate-200">
            {rows.map((row) => (
              <div key={row.label} className="grid grid-cols-1 gap-2 px-4 py-4 sm:grid-cols-[220px_1fr] sm:gap-4">
                <dt className="text-sm font-semibold text-slate-800">{row.label}</dt>
                <dd className="text-sm leading-relaxed text-slate-600">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-6">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/terms"
              className="inline-flex items-center rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100"
            >
              利用規約
            </Link>
            <Link
              href="/terms#subscription-cancellation"
              className="inline-flex items-center rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100"
            >
              解約・キャンセル
            </Link>
            <Link
              href="/dev-log"
              className="inline-flex items-center rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100"
            >
              開発日誌
            </Link>
            <Link
              href="/"
              className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              ポータルへ戻る
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

