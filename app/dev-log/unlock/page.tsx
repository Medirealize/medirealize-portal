import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { hasDevLogAccess } from "@/lib/subscription-access";
import {
  DEVLOG_CHECKOUT_PATH,
  DEVLOG_CTA_LABEL,
  DEVLOG_STRIPE_BILLING_LOGIN_LABEL,
  DEVLOG_STRIPE_BILLING_LOGIN_URL,
  DEVLOG_SUPPORT_USAGE_NOTE,
  DEVLOG_UNLOCK_CHECKOUT_LEAD,
} from "@/lib/productLeadContent";

export const metadata: Metadata = {
  title: "購読者ログイン | 開発日誌",
  description: "開発日誌（デジタルコンテンツ）購読者向けログインページです。",
};

async function unlockAction(formData: FormData) {
  "use server";
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  if (!email) {
    redirect("/dev-log/unlock?error=1");
  }

  const allowed = await hasDevLogAccess(email);
  if (!allowed) {
    redirect("/dev-log/unlock?error=1");
  }

  const cookieStore = await cookies();
  cookieStore.set("devlog_access", "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  cookieStore.set("devlog_email", email, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect("/dev-log");
}

export default async function DevLogUnlockPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; checkout?: string; portal?: string }>;
}) {
  const params = await searchParams;
  const hasError = params.error === "1";
  const checkoutSuccess = params.checkout === "success";
  const checkoutCancel = params.checkout === "cancel";
  const portalLogin = params.portal === "login";
  const portalNoCustomer = params.portal === "no-customer";

  return (
    <div className="min-h-screen bg-[#F7F8FB] px-4 py-10 sm:py-14">
      <main className="mx-auto w-full max-w-xl rounded-3xl border border-blue-100 bg-white p-5 shadow-sm sm:p-8">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          開発日誌 購読者ログイン
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          決済時に使用したメールアドレスで確認します。購読中の方のみ開発日誌を閲覧できます。
        </p>

        {checkoutSuccess && (
          <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm leading-relaxed text-emerald-900">
            お支払いありがとうございます。Stripe の処理が反映されるまで少し時間がかかる場合があります。数分後に、決済時のメールアドレスで再度ログインをお試しください。
          </p>
        )}
        {checkoutCancel && (
          <p className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm leading-relaxed text-slate-700">
            決済は完了していません。購読をご希望の場合は、もう一度お手続きください。
          </p>
        )}
        {portalLogin && (
          <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-relaxed text-amber-950">
            サイト経由のポータルには、先に下のフォームから開発日誌へログインしてください。ログインなしで手続きする場合は、ページ下部の「Stripe
            の顧客ページで支払いを管理する」からお進みください。
          </p>
        )}
        {portalNoCustomer && (
          <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-relaxed text-amber-950">
            このメールアドレスに紐づく Stripe の顧客情報を確認できませんでした。決済時のメールアドレスでログインしているかご確認ください。
          </p>
        )}
        <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50/60 p-4">
          <p className="text-sm font-medium text-slate-800">まだ購読されていない方</p>
          <p className="mt-1 text-xs leading-relaxed text-slate-600">{DEVLOG_UNLOCK_CHECKOUT_LEAD}</p>
          <a
            href={DEVLOG_CHECKOUT_PATH}
            className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {DEVLOG_CTA_LABEL}
          </a>
          <p className="mt-2 text-center text-[11px] leading-relaxed text-slate-600">{DEVLOG_SUPPORT_USAGE_NOTE}</p>
        </div>

        <form action={unlockAction} className="mt-6 space-y-3">
          <label className="block text-sm font-medium text-slate-700" htmlFor="email">
            メールアドレス
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
            placeholder="info@medirealize.jp"
          />

          {hasError && (
            <p className="text-sm text-red-600">
              購読情報を確認できませんでした。決済時のメールアドレスをご確認ください。
            </p>
          )}

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            購読状況を確認してログイン
          </button>
        </form>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
          <p className="text-sm font-medium text-slate-800">購読のお支払い・解約（Stripe）</p>
          <p className="mt-1 text-xs leading-relaxed text-slate-600">
            開発日誌にログインしなくても、決済時のメールアドレスから Stripe の顧客ページへ進めます。
          </p>
          <a
            href={DEVLOG_STRIPE_BILLING_LOGIN_URL}
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-violet-200 bg-violet-50 px-4 py-2.5 text-sm font-semibold text-violet-900 transition-colors hover:bg-violet-100"
          >
            {DEVLOG_STRIPE_BILLING_LOGIN_LABEL}
          </a>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            ポータルへ戻る
          </Link>
        </div>
      </main>
    </div>
  );
}

