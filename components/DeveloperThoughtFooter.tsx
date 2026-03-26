"use client";

export default function DeveloperThoughtFooter() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-8">
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

