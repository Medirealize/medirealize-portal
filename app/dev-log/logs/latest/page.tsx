import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function loadLogMarkdown() {
  const logPath = path.join(process.cwd(), "development_log.md");
  try {
    return await fs.readFile(logPath, "utf-8");
  } catch {
    return "# 開発日誌\n\nまだ公開されていません。";
  }
}

export default async function LatestDevLogPage() {
  const cookieStore = await cookies();
  if (cookieStore.get("devlog_access")?.value !== "1") {
    redirect("/dev-log/unlock");
  }

  const markdown = await loadLogMarkdown();

  return (
    <div className="min-h-screen bg-[#F7F8FB] px-4 py-10 sm:py-14">
      <main className="mx-auto w-full max-w-4xl rounded-3xl border border-blue-100 bg-white p-5 shadow-sm sm:p-8">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          開発日誌（最新エピソード）
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          購読者限定で、当日の葛藤ログを公開しています。
        </p>

        <article className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
          <pre className="whitespace-pre-wrap text-sm leading-relaxed text-slate-700">{markdown}</pre>
        </article>

        <div className="mt-6">
          <Link
            href="/dev-log"
            className="inline-flex items-center rounded-xl border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100"
          >
            開発日誌トップへ戻る
          </Link>
        </div>
      </main>
    </div>
  );
}

