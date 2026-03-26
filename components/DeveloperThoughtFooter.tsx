"use client";

export default function DeveloperThoughtFooter() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-8">
        <div className="mb-6 rounded-2xl border border-blue-100 bg-white p-4 sm:p-5">
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            月額300円から、医療を言葉にする活動のサポーターになりませんか？
          </p>
          <a
            href="https://buy.stripe.com/7sY6oA2lKe2qfdg8NEeEo00"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/80 sm:w-auto"
          >
            メディリアライズを応援する
          </a>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-sm font-medium text-slate-700">
            © 2026 メディリアライズ (Medirealize) | medirealize.jp
          </p>
          <p className="text-[11px] leading-relaxed text-slate-500">
            ※当サイトの内容は個人の見解であり、所属組織とは一切関係ありません。
          </p>
        </div>
      </div>
    </footer>
  );
}

