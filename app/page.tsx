import DevLogViewerLastUpdatedLabel from "@/components/DevLogViewerLastUpdatedLabel";
import Image from "next/image";
import Link from "next/link";
import {
  CONTACT_GOOGLE_FORM_URL,
  FACEBOOK_MESSENGER_URL,
  SOCIAL_FACEBOOK_URL,
} from "@/lib/socialLinks";
import {
  DEVLOG_ALREADY_SUBSCRIBED_LEAD,
  DEVLOG_BODY,
  DEVLOG_BULLETS,
  DEVLOG_CHECKOUT_PATH,
  DEVLOG_CTA_LABEL,
  DEVLOG_PUBLIC_PRICE_NOTE,
  DEVLOG_SUPPORT_CANCEL_NOTE,
  DEVLOG_SUPPORT_FUND_NOTE,
  DEVLOG_TITLE,
  DEVLOG_UNLOCK_PATH,
  DEVLOG_VIEWER_LOGIN_LABEL,
  FEATURE_DEFINITIONS,
  HERO_MAIN_COPY,
  HERO_SUB_COPY,
  MA_FOOTNOTE_CHIP,
  MEDICAL_DISCLAIMER,
  PHASE_BADGE_LONG,
  PHASE_BADGE_SHORT,
} from "@/lib/productLeadContent";

const NAV_ITEMS = [
  { href: "#products", label: "プロダクト" },
  { href: "#voice", label: "お問い合わせ" },
  { href: "#profile", label: "プロフィール" },
  { href: "#story", label: "ストーリー" },
] as const;

const NOTE_STORY_URL = "https://note.com/medirealize_note";

export default function Home() {
  return (
    <div
      id="top"
      className="flex min-h-screen flex-col bg-[#F0F2F5] text-[#1C1E21]"
    >
      <header className="sticky top-0 z-50 border-b border-[#DADDE1] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06)] backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-3 py-2 md:flex-row md:items-center md:justify-between md:gap-3 md:px-4 md:py-3">
          <a
            href="#top"
            className="inline-flex min-h-[40px] w-fit max-w-full items-center gap-2 text-sm font-bold leading-tight tracking-[0.06em] text-[#050505] transition-colors hover:text-[#1877F2] md:min-h-0 md:gap-2.5 md:text-base md:tracking-[0.08em]"
          >
            <span className="inline-flex h-[1.55em] w-[1.55em] items-center justify-center" aria-hidden>
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
          <div className="flex w-full flex-col items-stretch gap-2 md:w-auto md:flex-row md:items-center md:justify-end md:gap-4 lg:gap-6">
            <span
              className="hidden min-[400px]:flex items-center justify-center gap-1.5 self-center truncate rounded-md border border-[#DADDE1] bg-[#F0F2F5] px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-wide text-[#65676B] md:inline-flex md:text-[11px]"
              title="Medirealize：医療の言語化（Medical Articulation）を実装中。公開アプリは Phase 1 のプロトタイプです。"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#1877F2]" aria-hidden />
              <span className="truncate">
                <span className="md:hidden">MA · P1</span>
                <span className="hidden md:inline">Medical Articulation · Phase 1</span>
              </span>
            </span>
            <nav
              className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 md:w-auto md:flex-nowrap md:justify-end md:gap-6"
              aria-label="主要メニュー"
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative inline-flex min-h-[40px] items-center whitespace-nowrap px-1.5 py-1 text-[15px] font-semibold leading-snug text-[#050505] transition-colors hover:text-[#1877F2] md:min-h-0 md:px-0 md:text-sm md:leading-tight"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-[#1877F2] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-2 sm:pt-3">
        <section id="products">
          <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8">
            <section className="w-full text-center" aria-label="ヒーロー">
              <div className="flex w-full justify-center">
                <div className="w-full max-w-[min(100%,42rem)] rounded-2xl border border-[#E4E6EB] bg-white px-6 py-6 shadow-[0_2px_14px_rgba(0,0,0,0.06)] sm:px-8 sm:py-7 md:px-10 md:py-8">
                  <div className="mx-auto inline-flex max-w-full items-center justify-center gap-2 whitespace-normal rounded-full border border-[#DADDE1] bg-[#F0F2F5] px-3 py-1.5 text-xs font-semibold leading-tight text-[#65676B] sm:whitespace-nowrap md:px-3.5 md:text-[13px]">
                    <span className="inline-flex h-2 w-2 rounded-full bg-[#1877F2]" aria-hidden />
                    <span className="sm:hidden">{PHASE_BADGE_SHORT}</span>
                    <span className="hidden sm:inline">{PHASE_BADGE_LONG}</span>
                  </div>
                  <h1 className="mx-auto mt-6 max-w-full text-center text-lg font-extrabold leading-snug tracking-tight text-[#050505] sm:text-2xl sm:leading-tight md:text-3xl md:leading-[1.2]">
                    {HERO_MAIN_COPY}
                  </h1>
                  <p className="mx-auto mt-5 max-w-[min(100%,40rem)] text-pretty text-center text-[0.9375rem] leading-[1.8] text-[#65676B] sm:text-base sm:leading-[1.78]">
                    {HERO_SUB_COPY}
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-9 sm:mt-10" aria-label="プロダクト導線">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
                {FEATURE_DEFINITIONS.map((f, i) => (
                  <article
                    key={f.key}
                    className="group relative flex h-full flex-col rounded-2xl border border-[#E4E6EB] bg-white px-5 pb-5 pt-7 text-left shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-shadow duration-200 hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] sm:px-6 sm:pb-6 sm:pt-8"
                    aria-label={`${f.catchCopy} のカード`}
                  >
                    <span className="pointer-events-none absolute right-2 top-0 z-20 -translate-y-1/2 rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold leading-none text-red-600 shadow-md sm:right-3 sm:px-3 sm:text-sm">
                      [開発中]
                    </span>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start gap-3">
                        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0F2F5] text-xl text-[#1877F2] ring-1 ring-[#DADDE1]">
                          {i === 0 && "🩺"}
                          {i === 1 && "📅"}
                          {i === 2 && "💬"}
                          {i === 3 && "✨"}
                        </span>
                        <h3 className="pt-0.5 text-[1.0625rem] font-bold leading-snug tracking-tight text-[#050505] sm:text-xl">
                          {f.catchCopy}
                        </h3>
                      </div>

                      <ol className="mt-5 space-y-4 text-left sm:mt-6">
                        {f.steps.map((step, stepIdx) => (
                          <li key={stepIdx} className="grid grid-cols-[auto_1fr] items-start gap-x-2.5 sm:gap-x-3">
                            <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#DADDE1] bg-[#F0F2F5] text-xs font-bold text-[#050505] group-hover:border-[#CCD0D5] group-hover:bg-[#E4E6EB] sm:h-10 sm:w-10 sm:text-sm">
                              {stepIdx === 0 && "①"}
                              {stepIdx === 1 && "②"}
                              {stepIdx === 2 && "③"}
                            </span>
                            <span className="text-sm leading-relaxed text-[#1C1E21] sm:text-[0.9375rem]">
                              {step}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="pt-5 sm:pt-6">
                      <a
                        href={f.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-[48px] w-full items-center justify-center rounded-lg bg-[#1877F2] px-3 py-3 text-center text-sm font-semibold leading-snug text-white shadow-sm transition-colors hover:bg-[#166FE5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/40 active:scale-[0.99] sm:min-h-[50px] sm:px-4 sm:text-base"
                      >
                        {f.cta}
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              <p className="mt-6 w-full text-right text-xs leading-relaxed text-[#65676B] sm:mt-7 sm:text-sm lg:mt-8 lg:text-[0.9375rem]">
                {MEDICAL_DISCLAIMER}
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 border-t border-[#E4E6EB] pt-8 sm:mt-9 sm:pt-9">
                <p className="text-center text-xs font-semibold text-[#65676B] sm:text-sm">{DEVLOG_ALREADY_SUBSCRIBED_LEAD}</p>
                <div className="flex w-full max-w-sm flex-col items-center sm:w-auto sm:max-w-none">
                  <Link
                    href={DEVLOG_UNLOCK_PATH}
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg border border-[#DADDE1] bg-white px-5 py-3 text-sm font-semibold text-[#050505] shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-colors hover:bg-[#F0F2F5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/40 sm:w-auto"
                  >
                    {DEVLOG_VIEWER_LOGIN_LABEL}
                  </Link>
                  <DevLogViewerLastUpdatedLabel className="mt-1.5" />
                </div>
              </div>
            </section>

            <section className="mt-10 w-full sm:mt-11" aria-labelledby="devlog-portal-heading">
              <div className="mx-auto w-full max-w-3xl rounded-2xl border border-[#E4E6EB] bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.06)] lg:p-9 xl:p-10">
                <h2 id="devlog-portal-heading" className="text-balance text-center text-base font-bold leading-snug tracking-tight text-[#050505] sm:text-lg md:text-xl">
                  {DEVLOG_TITLE}
                </h2>
                <ul className="mt-6 list-none space-y-4 text-left text-base leading-relaxed text-[#1C1E21]">
                  {DEVLOG_BULLETS.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="shrink-0 pt-[0.15em] text-[#65676B]" aria-hidden>
                        ・
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-pretty text-left text-base leading-[1.75] text-[#65676B] sm:text-[1.0625rem] sm:leading-relaxed lg:text-center lg:text-lg">
                  {DEVLOG_BODY}
                </p>
                <div className="mx-auto mt-9 flex w-full max-w-lg flex-col items-stretch sm:items-center lg:mt-10">
                  <a
                    href={DEVLOG_CHECKOUT_PATH}
                    className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl bg-[#1877F2] px-4 py-3 text-center text-[0.8125rem] font-semibold leading-snug tracking-tight text-white shadow-md transition-[box-shadow,transform,background-color] hover:bg-[#166FE5] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/45 active:scale-[0.99] sm:min-h-[54px] sm:px-5 sm:text-sm md:min-h-[56px] md:px-6 md:text-base"
                  >
                    {DEVLOG_CTA_LABEL}
                  </a>
                  <div className="mt-3 max-w-2xl text-pretty text-center text-xs leading-[1.65] text-[#65676B] sm:text-[0.8125rem] sm:leading-relaxed">
                    <p>{DEVLOG_SUPPORT_FUND_NOTE}</p>
                    <p className="mt-1.5 text-center">{DEVLOG_SUPPORT_CANCEL_NOTE}</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-10 flex justify-center sm:mt-11">
              <div className="w-fit max-w-[min(100%,calc(100vw-2rem))] rounded-full border border-[#DADDE1] bg-[#F0F2F5] px-4 py-2 text-center text-xs font-medium leading-snug text-[#65676B] shadow-[0_1px_2px_rgba(0,0,0,0.06)] sm:px-5 sm:text-sm md:px-6">
                {MA_FOOTNOTE_CHIP}
              </div>
            </div>
          </div>
        </section>
        <section id="voice">
          <section className="mx-auto flex w-full max-w-6xl justify-center px-3 pb-10 pt-2 sm:px-4 sm:pb-12">
            <div className="w-full max-w-xl rounded-xl border border-[#DADDE1] bg-white px-5 py-6 shadow-[0_1px_2px_rgba(0,0,0,0.08)] sm:px-6 sm:py-7">
              <h3 className="text-center text-base font-bold leading-snug tracking-tight text-[#050505] sm:text-lg">
                あなたの言葉を、聞かせてください。
              </h3>
              <p className="mt-3 text-center text-sm leading-relaxed text-[#65676B] sm:text-[0.9375rem]">
                協業・参謀のご相談は、ページ下部の
                <strong className="font-semibold text-[#050505]"> Recruit </strong>
                から
                <strong className="font-semibold text-[#050505]"> Facebook Messenger </strong>
                へお願いします。Facebook をお持ちでない場合のみ、
                <a
                  href={CONTACT_GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#1877F2] underline decoration-[#1877F2]/35 underline-offset-2 hover:decoration-[#1877F2]"
                >
                  お問い合わせフォーム
                </a>
                からも受け付けています。
              </p>
              <p className="mt-3 text-center text-[11px] leading-relaxed text-[#8A8D91] sm:text-xs">
                ※個別の診療相談にはお答えできません
              </p>
            </div>
          </section>
        </section>
        <section id="profile">
          <section className="border-y border-[#DADDE1] bg-white py-9 sm:py-12" aria-label="Profile">
            <div className="mx-auto max-w-6xl px-3 sm:px-4">
              <div className="grid grid-cols-1 items-start gap-6 sm:gap-8 lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:gap-10">
                <aside className="mx-auto w-full max-w-[14rem] rounded-lg border border-[#DADDE1] bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.08)] lg:mx-0 lg:w-full lg:max-w-none">
                  <div className="relative mx-auto h-[72px] w-[72px] overflow-hidden rounded-full ring-1 ring-[#DADDE1] sm:h-20 sm:w-20">
                    <Image
                      src="/nomura-profile.png"
                      alt="野村信介"
                      fill
                      className="object-cover object-[center_22%]"
                      sizes="(max-width: 1024px) 80px, 80px"
                      priority={false}
                    />
                  </div>
                  <div className="mt-2 flex flex-col gap-0">
                    <h3 className="text-[1.05rem] font-bold leading-none text-[#050505]">野村信介</h3>
                    <p className="mt-px text-xs leading-tight text-[#65676B]">
                      医師 / 医学博士 / Medirealize代表
                    </p>
                  </div>
                  <a
                    href={NOTE_STORY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-xs font-semibold leading-snug text-[#1877F2] no-underline hover:underline"
                  >
                    note：なぜ、外科医がコードを書くのか
                  </a>
                </aside>
                <div className="min-w-0">
                  <h2 className="text-pretty text-lg font-bold leading-snug tracking-tight text-[#050505] sm:text-xl md:text-2xl">
                    プロフィール：医師としての「背骨」と、開発への「想い」
                  </h2>
                  <div className="mt-4 space-y-5 text-[0.9375rem] leading-[1.65] text-[#65676B] sm:space-y-4 sm:text-[0.95rem] sm:leading-relaxed">
                    <section>
                      <h4 className="text-[0.9375rem] font-semibold text-[#050505] sm:text-base">
                        ■ 「現場」を、誰よりも見てきた。
                      </h4>
                      <p className="mt-2 text-pretty text-[#1C1E21]">
                        防衛医科大学校を卒業後、自衛隊医官として活動。国内の基幹病院のみならず、米国ハーバード大学でのリサーチフェロー（医学研究）など、最先端の医療現場と研究の最前線を歩んできました。外科医として、そして医学博士として、数多くの命と向き合ってきた時間が僕の背骨です。
                      </p>
                    </section>
                    <section>
                      <h4 className="text-[0.9375rem] font-semibold text-[#050505] sm:text-base">
                        ■ なぜ今、コードを書くのか。
                      </h4>
                      <p className="mt-2 text-pretty text-[#1C1E21]">
                        2008年に医師免許を取得して以来、これまでの臨床現場で確信したことがあります。それは、
                        <strong className="font-semibold text-[#050505]">
                          「どれだけ優れた医療技術があっても、患者さんと医師の『対話』が詰まっていたら、最高の治療は届けられない」
                        </strong>
                        ということ。
                      </p>
                    </section>
                    <div className="w-full rounded-lg border border-[#DADDE1] bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.05)] lg:max-w-3xl">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1877F2]">Facebook</p>
                      <div className="mt-2 flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                        <a
                          href={FACEBOOK_MESSENGER_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-[#DADDE1] bg-[#F0F2F5] px-4 py-2.5 text-sm font-semibold text-[#1877F2] transition-colors hover:bg-[#E4E6EB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/40 sm:w-auto"
                        >
                          Messenger でメッセージを送る
                        </a>
                        <a
                          href={CONTACT_GOOGLE_FORM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-w-0 flex-1 text-xs font-medium leading-snug text-[#1877F2] underline decoration-[#1877F2]/35 underline-offset-2 hover:decoration-[#1877F2]"
                        >
                          ※FBアカウントをお持ちでない方はこちら（お問い合わせフォーム）
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section id="story">
          <section className="mx-auto w-full max-w-6xl px-3 pb-12 pt-2 sm:px-4 sm:pb-14" aria-label="信頼と共感のストーリー">
            <div className="mx-auto grid w-full max-w-xl grid-cols-1 gap-3 sm:max-w-2xl sm:gap-4 lg:max-w-none lg:grid-cols-2 lg:gap-4">
              <article className="rounded-xl border border-[#DADDE1] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.08)] sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1877F2]">Story</p>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-[#050505]">
                  なぜ、外科医がコードを書くのか
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[#65676B] sm:text-sm sm:leading-relaxed">
                  15年のキャリア、ボストンでの研究、そして宮崎での再挑戦。医療の現場で見えてきた「構造の限界」を乗り越えるために、医師によるプロトタイプ開発を続けています。
                </p>
                <div className="mt-4 flex w-full flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-3">
                  <a
                    href={NOTE_STORY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-[#DADDE1] bg-[#F0F2F5] px-4 py-2.5 text-sm font-semibold text-[#1877F2] transition-colors hover:bg-[#E4E6EB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/40"
                  >
                    noteでストーリーを読む
                  </a>
                  <a
                    href={SOCIAL_FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-[#DADDE1] bg-[#F0F2F5] px-4 py-2.5 text-sm font-semibold text-[#1877F2] transition-colors hover:bg-[#E4E6EB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/40"
                  >
                    Facebookで開発秘話を読む
                  </a>
                </div>
              </article>

              <article className="rounded-xl border border-[#DADDE1] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.08)] sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1877F2]">Recruit</p>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-[#050505]">
                  開発パートナー（技術的右腕）を募集しています
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[#65676B] sm:text-sm sm:leading-relaxed">
                  理想を現実に。医療の構造を共に実装しませんか。医師によるプロトタイプ開発のスピードを、技術で加速できる方との協業を歓迎しています。
                </p>
                <a
                  href={FACEBOOK_MESSENGER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-[52px] w-full items-center justify-center rounded-xl bg-[#1877F2] px-4 py-3.5 text-center text-sm font-bold leading-snug text-white shadow-md transition-colors hover:bg-[#166FE5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/50 active:scale-[0.99] sm:min-h-[56px] sm:px-5 sm:text-base"
                >
                  Facebookで参謀に立候補する
                </a>
              </article>
            </div>
          </section>
        </section>
      </main>

      <footer className="border-t border-[#DADDE1] bg-white">
        <div className="mx-auto w-full max-w-6xl px-3 py-7 sm:px-4 sm:py-8">
          <div className="mb-6 rounded-xl border border-[#DADDE1] bg-[#F0F2F5] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.06)] sm:p-5">
            <p className="text-sm font-semibold leading-relaxed text-[#050505] sm:text-base">
              この声が形になるまでの記録は、開発日誌として{DEVLOG_PUBLIC_PRICE_NOTE}（税込）で購読いただけます。
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#65676B] sm:text-base">
              購読後はメール認証で、開発日誌コンテンツを閲覧できます。
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a
                href={DEVLOG_CHECKOUT_PATH}
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-lg bg-[#1877F2] px-3 py-2.5 text-center text-[0.6875rem] font-semibold leading-snug text-white shadow-md transition-colors hover:bg-[#166FE5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/50 sm:w-auto sm:min-h-[48px] sm:px-4 sm:text-xs md:text-sm"
              >
                {DEVLOG_CTA_LABEL}
              </a>
              <div className="flex w-full flex-col items-center sm:w-auto">
                <Link
                  href={DEVLOG_UNLOCK_PATH}
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg border border-[#DADDE1] bg-white px-4 py-3 text-sm font-semibold text-[#050505] transition-colors hover:bg-[#F0F2F5] sm:w-auto"
                >
                  {DEVLOG_VIEWER_LOGIN_LABEL}
                </Link>
                <DevLogViewerLastUpdatedLabel className="mt-1.5" />
              </div>
            </div>
            <div className="mt-2 text-center text-xs leading-relaxed text-[#65676B]">
              <p>{DEVLOG_SUPPORT_FUND_NOTE}</p>
              <p className="mt-1">{DEVLOG_SUPPORT_CANCEL_NOTE}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-[#65676B]">
                © 2026 メディリアライズ (Medirealize) | medirealize.jp
              </p>
              <nav
                className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-[#8A8D91] sm:text-xs"
                aria-label="法務・ポリシー"
              >
                <Link
                  href="/dev-log"
                  className="font-medium text-[#65676B] no-underline decoration-[#1877F2]/40 underline-offset-2 transition-colors hover:text-[#1877F2] hover:underline"
                >
                  開発日誌
                </Link>
                <span className="text-[#DADDE1]" aria-hidden>
                  ·
                </span>
                <Link
                  href="/tokushoho"
                  className="font-medium text-[#65676B] no-underline decoration-[#1877F2]/40 underline-offset-2 transition-colors hover:text-[#1877F2] hover:underline"
                >
                  特定商取引法に基づく表記
                </Link>
                <span className="text-[#DADDE1]" aria-hidden>
                  ·
                </span>
                <Link
                  href="/terms#subscription-cancellation"
                  className="font-medium text-[#65676B] no-underline decoration-[#1877F2]/40 underline-offset-2 transition-colors hover:text-[#1877F2] hover:underline"
                >
                  利用規約・解約ポリシー
                </Link>
              </nav>
            </div>
            <p className="text-[11px] leading-relaxed text-[#65676B]">
              ※当サイトの内容は個人の見解であり、所属組織とは一切関係ありません。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
