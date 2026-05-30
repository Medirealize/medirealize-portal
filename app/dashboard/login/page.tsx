import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  createDashboardSessionValue,
  DASHBOARD_COOKIE_NAME,
  DASHBOARD_SESSION_MAX_AGE,
  isDashboardConfigured,
  isValidDashboardSession,
  verifyDashboardPassword,
} from "@/lib/dashboard-auth";

export const metadata: Metadata = {
  title: "LP ダッシュボード · ログイン",
  robots: { index: false, follow: false },
};

async function loginAction(formData: FormData) {
  "use server";

  if (!isDashboardConfigured()) {
    redirect("/dashboard/login?error=setup");
  }

  const password = String(formData.get("password") ?? "");
  const nextPath = String(formData.get("next") ?? "/dashboard");

  if (!verifyDashboardPassword(password)) {
    redirect(`/dashboard/login?error=1&next=${encodeURIComponent(nextPath)}`);
  }

  const token = createDashboardSessionValue();
  if (!token) {
    redirect("/dashboard/login?error=setup");
  }

  const cookieStore = await cookies();
  cookieStore.set(DASHBOARD_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: DASHBOARD_SESSION_MAX_AGE,
  });

  const safeNext = nextPath.startsWith("/dashboard") ? nextPath : "/dashboard";
  redirect(safeNext);
}

export default async function DashboardLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const params = await searchParams;
  const cookieStore = await cookies();
  const session = cookieStore.get(DASHBOARD_COOKIE_NAME)?.value;
  if (isValidDashboardSession(session)) {
    redirect("/dashboard");
  }

  const configured = isDashboardConfigured();
  const hasError = params.error === "1";
  const needsSetup = params.error === "setup" || !configured;
  const nextPath = params.next?.startsWith("/dashboard") ? params.next : "/dashboard";

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f172a] px-4 py-10">
      <main className="w-full max-w-md rounded-2xl border border-slate-700/80 bg-slate-900 p-6 shadow-2xl sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Owner Only
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-white">LP ダッシュボード</h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Medirealize ポータルの管理画面です。代表者のみがアクセスできます。
        </p>

        {needsSetup && (
          <div className="mt-5 rounded-xl border border-amber-500/40 bg-amber-950/40 px-4 py-3 text-sm leading-relaxed text-amber-100">
            <p className="font-semibold">初期設定が必要です</p>
            <p className="mt-1 text-amber-200/90">
              Vercel または <code className="rounded bg-slate-800 px-1 py-0.5 text-xs">.env.local</code>{" "}
              に <code className="rounded bg-slate-800 px-1 py-0.5 text-xs">LP_DASHBOARD_PASSWORD</code>{" "}
              を設定し、再デプロイまたは開発サーバーを再起動してください。
            </p>
          </div>
        )}

        {hasError && (
          <p className="mt-5 rounded-xl border border-red-500/40 bg-red-950/40 px-4 py-3 text-sm text-red-100">
            パスワードが正しくありません。
          </p>
        )}

        <form action={loginAction} className="mt-6 space-y-4">
          <input type="hidden" name="next" value={nextPath} />
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-300">
              パスワード
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              disabled={!configured}
              className="mt-1.5 w-full rounded-xl border border-slate-600 bg-slate-800 px-3 py-2.5 text-sm text-white outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 disabled:opacity-50"
              placeholder="LP_DASHBOARD_PASSWORD"
            />
          </div>
          <button
            type="submit"
            disabled={!configured}
            className="inline-flex w-full items-center justify-center rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            ログイン
          </button>
        </form>

        <Link
          href="/"
          className="mt-6 inline-flex text-sm font-medium text-slate-400 transition-colors hover:text-slate-200"
        >
          ← 公開 LP へ戻る
        </Link>
      </main>
    </div>
  );
}
