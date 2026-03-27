"use client";

const navItems = [
  { href: "#products", label: "プロダクト" },
  { href: "#voice", label: "お問い合わせ" },
  { href: "#profile", label: "プロフィール" },
  { href: "#story", label: "ストーリー" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-700/60 bg-[#0F172A]/92 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <a
          href="#top"
          className="shrink-0 text-sm font-bold tracking-[0.08em] text-[#F8FAFC] transition-colors hover:text-slate-200 sm:text-base"
        >
          メディリアライズ
        </a>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-4">
          <span
            className="inline-flex max-w-[min(100%,13rem)] items-center gap-1.5 truncate rounded-md border border-slate-600/55 bg-slate-800/60 px-1.5 py-1 font-mono text-[9px] font-medium uppercase tracking-wide text-slate-400 sm:max-w-none sm:px-2 sm:text-[11px]"
            title="Medirealize：医療の言語化（Medical Articulation）を実装中。公開アプリは Phase 1 のプロトタイプです。"
          >
            <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" aria-hidden />
            <span className="truncate sm:whitespace-normal">
              <span className="sm:hidden">MA · P1</span>
              <span className="hidden sm:inline">Medical Articulation · Phase 1</span>
            </span>
          </span>

          <nav className="flex shrink-0 items-center gap-3 sm:gap-6" aria-label="主要メニュー">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative pb-0.5 text-xs font-semibold text-slate-300 transition-colors hover:text-[#F8FAFC] sm:text-sm"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-slate-300 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
