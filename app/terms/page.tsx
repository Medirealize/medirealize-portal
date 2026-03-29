import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約 | Medirealize",
  description: "Medirealize の利用規約です。",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FB] px-4 py-10 sm:py-14">
      <main className="mx-auto w-full max-w-4xl rounded-3xl border border-blue-100 bg-white p-5 shadow-sm sm:p-8">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          利用規約
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          本規約は、Medirealize が提供する開発日誌および関連機能の利用条件を定めるものです。
        </p>

        <div className="mt-6 space-y-5 text-sm leading-relaxed text-slate-700">
          <section>
            <h2 className="text-base font-semibold text-slate-900">第1条（サービスの性質）</h2>
            <p className="mt-1">
              本サービスは、寄付・募金を目的とするものではなく、開発日誌等のデジタルコンテンツの閲覧権およびプレミアム機能の利用ライセンスを有償で提供するサービスです。
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900">第2条（利用料金と決済）</h2>
            <p className="mt-1">
              利用料金は各販売ページに記載します。決済は Stripe を通じたクレジットカード決済により行われます。決済完了後、直ちにコンテンツ閲覧権が付与されます。
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900">第3条（返品・返金）</h2>
            <p className="mt-1">
              デジタルコンテンツの特性上、購入後の返品・返金には応じられません。定期購読の解約はいつでも可能であり、次回請求日以降の自動更新を停止します。解約手続きの詳細は、下記「定期購読の解約・キャンセル」および特定商取引法に基づく表記に従います。
            </p>
          </section>

          <section id="subscription-cancellation" className="scroll-mt-8">
            <h2 className="text-base font-semibold text-slate-900">
              定期購読の解約・キャンセル（Stripe）
            </h2>
            <p className="mt-1">
              本サービスの月額購読（サブスクリプション）の解約・お支払い方法の変更は、決済代行である
              Stripe が提供するカスタマーポータルから、利用者ご自身のタイミングでいつでも手続きいただけます。
            </p>
            <p className="mt-2">
              解約手続き完了後も、当該請求期間の終了日までは既にお支払い済みの範囲でコンテンツをご利用いただけます。日割り計算による返金および過去に請求済みの料金の返金は行いません。
            </p>
            <p className="mt-2 text-sm text-slate-600">
              特定商取引法に基づく表記・商品代金等の詳細は
              <Link href="/tokushoho" className="font-medium text-blue-700 underline-offset-2 hover:underline">
                こちら
              </Link>
              をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900">第4条（禁止事項）</h2>
            <p className="mt-1">
              コンテンツの無断転載、再配布、逆コンパイル等、運営が不適切と判断する行為を禁止します。
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900">第5条（免責）</h2>
            <p className="mt-1">
              本サービス上の情報は開発中の内容を含み、特定の医療機関や所属組織の公式見解を示すものではありません。
            </p>
          </section>
        </div>

        <div className="mt-7 flex flex-col gap-3 border-t border-slate-100 pt-6">
          <p className="text-xs leading-relaxed text-slate-500">
            <Link
              href="#subscription-cancellation"
              className="font-medium text-blue-700 underline-offset-2 hover:underline"
            >
              定期購読の解約・キャンセル（Stripe）
            </Link>
            については本文の該当箇所をご確認ください。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/tokushoho"
              className="inline-flex items-center rounded-xl border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100"
            >
              特定商取引法に基づく表記
            </Link>
            <Link
              href="/"
              className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              ポータルへ戻る
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

