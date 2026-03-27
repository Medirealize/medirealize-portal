import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function loadTip(slug: string) {
  const filePath = path.join(process.cwd(), "content", "dev-log", "tips", `${slug}.md`);
  try {
    return await fs.readFile(filePath, "utf-8");
  } catch {
    return null;
  }
}

export default async function DevLogTipPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const cookieStore = await cookies();
  if (cookieStore.get("devlog_access")?.value !== "1") {
    redirect("/dev-log/unlock");
  }

  const { slug } = await params;
  const markdown = await loadTip(slug);
  if (!markdown) {
    redirect("/dev-log");
  }

  return (
    <div className="min-h-screen bg-[#F7F8FB] px-4 py-10 sm:py-14">
      <main className="mx-auto w-full max-w-3xl rounded-3xl border border-blue-100 bg-white p-5 shadow-sm sm:p-8">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          実践Tips
        </h1>
        <pre className="mt-6 whitespace-pre-wrap rounded-2xl border border-slate-200 bg-slate-50/60 p-4 text-sm leading-relaxed text-slate-700">
          {markdown}
        </pre>
        <div className="mt-6">
          <Link
            href="/dev-log"
            className="inline-flex items-center rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100"
          >
            開発日誌へ戻る
          </Link>
        </div>
      </main>
    </div>
  );
}

