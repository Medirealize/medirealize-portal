import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { readDevLogEntries } from "@/lib/dev-log";

export const metadata: Metadata = {
  title: "開発日誌 | Medirealize",
  description: "Medirealize の開発日誌（デジタルコンテンツ）ページです。",
};

export default async function DevLogPage() {
  const cookieStore = await cookies();
  if (cookieStore.get("devlog_access")?.value !== "1") {
    redirect("/dev-log/unlock");
  }
  const logs = await readDevLogEntries();

  return (
    <div className="min-h-screen bg-[#F7F8FB] px-4 py-10 sm:py-14">
      <main className="mx-auto w-full max-w-4xl rounded-3xl border border-blue-100 bg-white p-5 shadow-sm sm:p-8">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          開発日誌（デジタルコンテンツ）
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          診察室の課題を、どのように実装へ落とし込んでいるか。開発の舞台裏を記録しています。
        </p>

        <section className="mt-6 space-y-4" aria-label="開発ログ一覧">
          {logs.map((log) => (
            <article key={log.date + log.title} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <p className="text-xs font-medium text-slate-500">{log.date}</p>
              <h2 className="mt-1 text-base font-semibold text-slate-900">{log.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{log.body}</p>
              {log.valueLink && (
                <Link
                  href={log.valueLink.href}
                  className="mt-3 inline-flex items-center rounded-lg border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 transition-colors hover:bg-blue-100"
                >
                  {log.valueLink.label}
                </Link>
              )}
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
