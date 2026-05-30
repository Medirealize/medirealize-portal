import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  LayoutDashboard,
  LogOut,
  RefreshCw,
} from "lucide-react";
import { getDashboardSnapshot, type DashboardProductRow } from "@/lib/dashboard-data";

export const metadata: Metadata = {
  title: "LP ダッシュボード",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

function StatusBadge({ status }: { status: DashboardProductRow["status"] }) {
  const styles =
    status === "公開中"
      ? "border-emerald-500/40 bg-emerald-500/15 text-emerald-200"
      : status === "無料公開"
        ? "border-green-500/40 bg-green-500/15 text-green-200"
        : "border-amber-500/40 bg-amber-500/15 text-amber-200";

  return (
    <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold ${styles}`}>
      {status}
    </span>
  );
}

function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string | number;
  hint?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 p-4">
      <p className="text-xs font-medium uppercase tracking-wider text-slate-400">{label}</p>
      <p className="mt-2 text-2xl font-bold tabular-nums text-white">{value}</p>
      {hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
    </div>
  );
}

export default async function DashboardPage() {
  const snapshot = await getDashboardSnapshot();
  const coreCount = snapshot.products.filter((p) => p.category === "診察前 · 言語化").length;
  const fieldCount = snapshot.products.filter((p) => p.category === "診察後 · 現場ツール").length;
  const liveCount = snapshot.products.filter((p) => p.status !== "開発中").length;

  const generatedLabel = new Intl.DateTimeFormat("ja-JP", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Tokyo",
  }).format(new Date(snapshot.generatedAt));

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600/20 text-sky-400 ring-1 ring-sky-500/30">
              <LayoutDashboard className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Medirealize · Owner Dashboard
              </p>
              <h1 className="text-lg font-bold text-white sm:text-xl">LP ダッシュボード</h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800"
            >
              公開 LP
              <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden />
            </Link>
            <a
              href="/api/dashboard/logout"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800"
            >
              <LogOut className="h-3.5 w-3.5 opacity-70" aria-hidden />
              ログアウト
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-slate-400">ポータル全体の公開状況を一覧できます。</p>
            <p className="mt-1 text-xs text-slate-500">
              最終更新: {generatedLabel}
              <RefreshCw className="ml-1 inline h-3 w-3 opacity-60" aria-hidden />
            </p>
          </div>
          <a
            href={snapshot.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-sky-400 hover:text-sky-300"
          >
            {snapshot.siteUrl}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>

        <section className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4" aria-label="概要">
          <StatCard label="コアプロダクト" value={coreCount} hint="診察前 · 言語化" />
          <StatCard label="現場ツール" value={fieldCount} hint="診察後 · 案内" />
          <StatCard label="公開・無料" value={liveCount} hint={`全 ${snapshot.products.length} 件中`} />
          <StatCard
            label="開発日誌エントリ"
            value={snapshot.devLog.entryCount}
            hint={`最終 ${snapshot.devLog.lastUpdatedLabel}`}
          />
        </section>

        {snapshot.subscriptions && (
          <section
            className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4"
            aria-label="購読状況"
          >
            <StatCard label="有効購読" value={snapshot.subscriptions.active} hint="開発日誌" />
            <StatCard label="トライアル" value={snapshot.subscriptions.trialing} hint="開発日誌" />
          </section>
        )}

        <section className="mt-10" aria-labelledby="products-heading">
          <h2 id="products-heading" className="text-base font-bold text-white">
            プロダクトポートフォリオ
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            LP に掲載中のアプリとリンク先。患者さん・医療機関向けの導線をここから確認できます。
          </p>

          <div className="mt-4 overflow-hidden rounded-xl border border-slate-800">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="border-b border-slate-800 bg-slate-900/80 text-xs uppercase tracking-wider text-slate-400">
                  <tr>
                    <th className="px-4 py-3 font-semibold">名前</th>
                    <th className="px-4 py-3 font-semibold">カテゴリ</th>
                    <th className="px-4 py-3 font-semibold">状態</th>
                    <th className="px-4 py-3 font-semibold">URL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {snapshot.products.map((product) => (
                    <tr key={product.key} className="bg-slate-950/40 hover:bg-slate-900/60">
                      <td className="px-4 py-3 font-medium text-white">{product.name}</td>
                      <td className="px-4 py-3 text-slate-400">{product.category}</td>
                      <td className="px-4 py-3">
                        <StatusBadge status={product.status} />
                      </td>
                      <td className="px-4 py-3">
                        <a
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex max-w-[14rem] items-center gap-1 truncate font-medium text-sky-400 hover:text-sky-300 sm:max-w-xs"
                        >
                          <span className="truncate">{product.url.replace(/^https?:\/\//, "")}</span>
                          <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <section
            className="rounded-xl border border-slate-800 bg-slate-900/50 p-5"
            aria-labelledby="devlog-heading"
          >
            <h2 id="devlog-heading" className="text-base font-bold text-white">
              開発日誌
            </h2>
            {snapshot.devLog.latestTitle ? (
              <>
                <p className="mt-2 text-sm text-slate-400">最新エントリ</p>
                <p className="mt-1 font-medium text-slate-200">{snapshot.devLog.latestTitle}</p>
                <p className="mt-0.5 text-xs text-slate-500">{snapshot.devLog.latestDate}</p>
              </>
            ) : (
              <p className="mt-2 text-sm text-slate-400">エントリがありません。</p>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/dev-log"
                className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-700"
              >
                開発日誌を開く
              </Link>
              <Link
                href="/dev-log/unlock"
                className="inline-flex items-center rounded-lg border border-slate-700 px-3 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800"
              >
                購読者ログイン画面
              </Link>
            </div>
          </section>

          <section
            className="rounded-xl border border-slate-800 bg-slate-900/50 p-5"
            aria-labelledby="system-heading"
          >
            <h2 id="system-heading" className="text-base font-bold text-white">
              システム状態
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center justify-between gap-4">
                <span className="text-slate-400">ダッシュボード認証</span>
                <span className={snapshot.system.dashboardConfigured ? "text-emerald-400" : "text-amber-400"}>
                  {snapshot.system.dashboardConfigured ? "設定済み" : "未設定"}
                </span>
              </li>
              <li className="flex items-center justify-between gap-4">
                <span className="text-slate-400">Stripe</span>
                <span className={snapshot.system.stripeConfigured ? "text-emerald-400" : "text-amber-400"}>
                  {snapshot.system.stripeConfigured ? "接続済み" : "未設定"}
                </span>
              </li>
              <li className="flex items-center justify-between gap-4">
                <span className="text-slate-400">実行環境</span>
                <span className="font-mono text-xs text-slate-300">
                  {snapshot.system.vercelEnv ?? snapshot.system.nodeEnv}
                </span>
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="/api/checkout/devlog-support"
                className="inline-flex items-center rounded-lg border border-slate-700 px-3 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800"
              >
                購読 Checkout
              </a>
              <Link
                href="/tokushoho"
                className="inline-flex items-center rounded-lg border border-slate-700 px-3 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800"
              >
                特商法表記
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
