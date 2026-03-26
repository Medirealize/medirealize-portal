"use client";

const navItems = [
  { href: "#products", label: "プロダクト" },
  { href: "#voice", label: "お問い合わせ" },
  { href: "#profile", label: "プロフィール" },
  { href: "#story", label: "ストーリー" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-blue-100/50 bg-white/80 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="#top"
          className="text-sm font-bold tracking-[0.08em] text-slate-800 transition-colors hover:text-slate-900 sm:text-base"
        >
          メディリアライズ
        </a>

        <nav className="flex items-center gap-4 sm:gap-6" aria-label="主要メニュー">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative pb-0.5 text-xs font-semibold text-slate-800 transition-colors hover:text-slate-900 sm:text-sm"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-slate-800 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

