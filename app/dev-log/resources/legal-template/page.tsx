import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const termsTemplate = `第1条（サービスの性質）
本サービスは寄付ではなく、デジタルコンテンツの閲覧権および機能利用ライセンスを有償提供するものです。`;

const tokushohoTemplate = `販売商品：開発日誌（デジタルコンテンツ）の閲覧権および機能利用ライセンス
提供時期：決済完了後、直ちに提供
返品・返金：デジタル特性上、返品返金不可（解約は次回更新停止）`;

export default async function LegalTemplatePage() {
  const cookieStore = await cookies();
  if (cookieStore.get("devlog_access")?.value !== "1") {
    redirect("/dev-log/unlock");
  }

  return (
    <div className="min-h-screen bg-[#F7F8FB] px-4 py-10 sm:py-14">
      <main className="mx-auto w-full max-w-3xl rounded-3xl border border-blue-100 bg-white p-5 shadow-sm sm:p-8">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          規約・特商法テンプレ
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          実運用で使える最小テンプレです。自社サービス向けに編集してご利用ください。
        </p>

        <section className="mt-6">
          <h2 className="text-base font-semibold text-slate-900">利用規約テンプレ（抜粋）</h2>
          <pre className="mt-2 overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs leading-relaxed text-slate-700">
            {termsTemplate}
          </pre>
        </section>

        <section className="mt-5">
          <h2 className="text-base font-semibold text-slate-900">特商法テンプレ（抜粋）</h2>
          <pre className="mt-2 overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs leading-relaxed text-slate-700">
            {tokushohoTemplate}
          </pre>
        </section>

        <div className="mt-7">
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

