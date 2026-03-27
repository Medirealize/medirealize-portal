import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function StripeChecklistPage() {
  const cookieStore = await cookies();
  if (cookieStore.get("devlog_access")?.value !== "1") {
    redirect("/dev-log/unlock");
  }

  const items = [
    "販売商品名を『デジタルコンテンツ』として明記する",
    "寄付・募金・応援という表現を決済導線から除外する",
    "特定商取引法ページに販売価格・提供時期・返品不可を明記する",
    "利用規約に『閲覧権/ライセンス販売』を明記する",
    "決済後リダイレクト先を購読者ログインページへ設定する",
    "メールアドレス照合による購読者判定フローを用意する",
    "解約導線（次回更新停止）をユーザーが認識できる位置に置く",
    "販売者情報（屋号・責任者・連絡先）を公開する",
    "FAQに『返金不可の理由』をデジタル特性として記載する",
    "公開前に審査員目線で導線テスト（未購読/購読済み）を行う",
  ];

  return (
    <div className="min-h-screen bg-[#F7F8FB] px-4 py-10 sm:py-14">
      <main className="mx-auto w-full max-w-3xl rounded-3xl border border-blue-100 bg-white p-5 shadow-sm sm:p-8">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          審査通過チェックリスト10項目
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Stripe審査時に実際に使っている、公開前チェック項目です。コピペしてそのまま運用に使えます。
        </p>

        <ol className="mt-6 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>

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

