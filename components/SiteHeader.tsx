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
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-3 py-2 md:flex-row md:items-center md:justify-between md:gap-3 md:px-4 md:py-3">
        <a
          href="#top"
          className="inline-flex min-h-[40px] w-fit max-w-full shrink-0 items-center gap-2 text-sm font-bold leading-tight tracking-[0.06em] text-[#050505] transition-colors hover:text-[#1877F2] md:min-h-0 md:gap-2.5 md:text-base md:tracking-[0.08em]"
        >
          <span
            className="inline-flex h-[1.15em] w-[1.15em] shrink-0 items-center justify-center"
            aria-hidden
          >
            <img
              src="/medirealize-mark.png"
              alt=""
              width={332}
              height={308}
              decoding="async"
              className="pointer-events-none h-full w-full select-none object-contain"
            />
          </span>
          メディリアライズ
        </a>

        <div className="flex min-w-0 w-full flex-col items-stretch gap-2 md:w-auto md:flex-row md:items-center md:justify-end md:gap-4 lg:gap-6">
          <span
            className="hidden min-[400px]:flex max-w-full min-w-0 items-center justify-center gap-1.5 self-center truncate rounded-md border border-[#DADDE1] bg-[#F0F2F5] px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-wide text-[#65676B] md:inline-flex md:max-w-none md:shrink-0 md:px-2 md:text-[11px]"
            title="Medirealize：医療の言語化（Medical Articulation）を実装中。公開アプリは Phase 1 のプロトタイプです。"
          >
            <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#1877F2]" aria-hidden />
            <span className="truncate md:whitespace-normal">
              <span className="md:hidden">MA · P1</span>
              <span className="hidden md:inline">Medical Articulation · Phase 1</span>
            </span>
          </span>

          <nav
            className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 md:w-auto md:flex-nowrap md:justify-end md:gap-6"
            aria-label="主要メニュー"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative inline-flex min-h-[40px] shrink-0 items-center whitespace-nowrap px-1.5 py-1 text-[15px] font-semibold leading-snug text-[#050505] transition-colors hover:text-[#1877F2] md:min-h-0 md:px-0 md:text-sm md:leading-tight"
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
