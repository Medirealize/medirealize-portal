import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const checks = [
  { item: "主要CTAは1画面1目的か", scoreGuide: "Yesで1点" },
  { item: "親指で届く位置にCTAがあるか", scoreGuide: "Yesで1点" },
  { item: "文言が5秒で理解できるか", scoreGuide: "Yesで1点" },
  { item: "未購読/購読済み導線が分離されているか", scoreGuide: "Yesで1点" },
  { item: "エラー時に次の行動が示されるか", scoreGuide: "Yesで1点" },
];

export default async function MobileUxSheetPage() {
  const cookieStore = await cookies();
  if (cookieStore.get("devlog_access")?.value !== "1") {
    redirect("/dev-log/unlock");
  }

  return (
    <div className="min-h-screen bg-[#F7F8FB] px-4 py-10 sm:py-14">
      <main className="mx-auto w-full max-w-3xl rounded-3xl border border-blue-100 bg-white p-5 shadow-sm sm:p-8">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          モバイル導線診断シート（5分版）
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          体調不良のユーザーでも迷わないかを短時間で点検するための、実戦向けシートです。
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-3 py-2 font-semibold text-slate-800">チェック項目</th>
                <th className="px-3 py-2 font-semibold text-slate-800">判定基準</th>
              </tr>
            </thead>
            <tbody>
              {checks.map((row) => (
                <tr key={row.item} className="border-t border-slate-200">
                  <td className="px-3 py-2 text-slate-700">{row.item}</td>
                  <td className="px-3 py-2 text-slate-600">{row.scoreGuide}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-slate-500">
          合計4点以上なら実運用水準、3点以下なら導線再設計を推奨。
        </p>

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

