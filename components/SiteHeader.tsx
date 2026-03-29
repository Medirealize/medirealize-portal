"use client";

const navItems = [
  { href: "#products", label: "プロダクト" },
  { href: "#voice", label: "お問い合わせ" },
  { href: "#profile", label: "プロフィール" },
  { href: "#story", label: "ストーリー" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#DADDE1] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3">
        <a
          href="#top"
          className="inline-flex min-h-[44px] min-w-0 shrink-0 items-center text-sm font-bold leading-tight tracking-[0.06em] text-[#050505] transition-colors hover:text-[#1877F2] sm:min-h-0 sm:text-base sm:tracking-[0.08em]"
        >
          メディリアライズ
        </a>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-1.5 sm:gap-4">
          <span
            className="hidden min-[400px]:inline-flex max-w-[min(100%,13rem)] items-center gap-1.5 truncate rounded-md border border-[#DADDE1] bg-[#F0F2F5] px-1.5 py-1 font-mono text-[9px] font-medium uppercase tracking-wide text-[#65676B] sm:max-w-none sm:px-2 sm:text-[11px]"
            title="Medirealize：医療の言語化（Medical Articulation）を実装中。公開アプリは Phase 1 のプロトタイプです。"
          >
            <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#1877F2]" aria-hidden />
            <span className="truncate sm:whitespace-normal">
              <span className="sm:hidden">MA · P1</span>
              <span className="hidden sm:inline">Medical Articulation · Phase 1</span>
            </span>
          </span>

          <nav className="flex shrink-0 items-center gap-3 md:gap-6" aria-label="主要メニュー">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative inline-flex min-h-[44px] min-w-0 items-center px-1 py-0.5 text-[15px] font-semibold leading-snug text-[#050505] transition-colors hover:text-[#1877F2] md:min-h-0 md:px-0 md:text-sm md:leading-tight"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#1877F2] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
