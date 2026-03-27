"use client";

import { useMemo } from "react";
import {
  CalendarClock,
  MessageSquare,
  Stethoscope,
  Sparkles,
} from "lucide-react";
import FadeInUpOnScroll from "@/components/FadeInUpOnScroll";

type Product = {
  key: string;
  catchCopy: string;
  steps: [string, string, string];
  cta: string;
  icon: React.ReactNode;
  externalUrl: string;
};

export default function ProductLeadSection() {
  // URLは必ずカードのリンクとして成立するよう直書き（.env.local は通常コミットされないため）
  const KIDUKI2_URL = "https://kiduki-app-v2.vercel.app/";
  const SYMPTOMSUM_URL = "https://symptomsum-app.vercel.app/";
  const PREFLECTION_URL = "https://kiduki-insight-v2.vercel.app/";
  const FUTURECHART_URL = "https://future-chartv7.vercel.app/login";
  const DEVLOG_STRIPE_URL = "https://buy.stripe.com/7sY6oA2lKe2qfdg8NEeEo00";

  const products = useMemo<Product[]>(
    () => [
      {
        key: "app-1",
        catchCopy: "これ見せて。",
        steps: [
          "不安や症状を自由に書く",
          "AIが医師に伝わる形に要約",
          "画面を先生に見せて診察開始",
        ],
        cta: "いますぐ整える",
        icon: <Stethoscope className="h-5 w-5" />,
        externalUrl: KIDUKI2_URL,
      },
      {
        key: "app-2",
        catchCopy: "いつから？に答える。",
        steps: [
          "症状が出た時にサッと記録",
          "AIが経過を一本の線に整理",
          "診察室で「いつから？」に即答",
        ],
        cta: "記録を始める",
        icon: <CalendarClock className="h-5 w-5" />,
        externalUrl: SYMPTOMSUM_URL,
      },
      {
        key: "app-3",
        catchCopy: "先生、本当はね。",
        steps: ["言いにくい本音を吐き出す", "AIが伝わる「言葉」に翻訳", "医師への伝え方を台本化"],
        cta: "本音を言葉にする",
        icon: <MessageSquare className="h-5 w-5" />,
        externalUrl: PREFLECTION_URL,
      },
      {
        key: "app-4",
        catchCopy: "未来処方箋",
        steps: ["今の気持ちを日記に記す", "AIが小さな「明日の一歩」を提示", "なりたい自分へ、言葉を処方"],
        cta: "明日を予約する",
        icon: <Sparkles className="h-5 w-5" />,
        externalUrl: FUTURECHART_URL,
      },
    ],
    [KIDUKI2_URL, SYMPTOMSUM_URL, PREFLECTION_URL, FUTURECHART_URL],
  );

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-24 pt-6 sm:pt-10">
      <section className="text-center">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b1220] via-[#111827] to-[#0c1829] px-5 py-10 shadow-[0_24px_80px_-20px_rgba(15,23,42,0.65)] ring-1 ring-white/10 sm:rounded-3xl sm:px-10 sm:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_100%_0%,rgba(239,68,68,0.14),transparent_55%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_0%_100%,rgba(59,130,246,0.12),transparent_50%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_12px)] opacity-40 mix-blend-overlay"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-8 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-red-500/10 blur-3xl"
          />

          <div className="relative mx-auto inline-flex items-center gap-2 rounded-full border border-[#EF4444]/45 bg-[#0f172a]/80 px-3 py-1.5 text-[11px] font-bold text-red-100 shadow-[0_0_0_1px_rgba(239,68,68,0.2)] backdrop-blur-sm sm:text-xs">
            <span className="inline-flex h-2 w-2 animate-heartbeat-dot rounded-full bg-[#EF4444]" aria-hidden />
            構築中 · Phase 1 · Medical Articulation
          </div>

          <h1 className="relative mt-6 text-left text-[1.35rem] font-extrabold leading-snug tracking-tight text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.35)] sm:text-center sm:text-3xl md:text-4xl lg:text-[2.65rem] lg:leading-[1.2]">
            届かなかった声を、
            <br className="sm:hidden" />
            医療の形（Realize）に変える。
          </h1>

          <p className="relative mt-5 text-left text-sm leading-relaxed text-slate-300 sm:text-center sm:text-base">
            患者さんの背中に残された「言葉にならない思い」を構造化し、対話の質を劇的に変える。
          </p>
          <p className="relative mt-4 text-left text-sm leading-relaxed text-slate-200 sm:text-center sm:text-[1.05rem]">
            Medirealizeは、
            <strong className="font-bold text-white">
              「医療の言語化（Medical Articulation）」
            </strong>
            を通じて、理想の診察を現実のものにします。
          </p>
          <p className="relative mt-5 border-t border-white/10 pt-4 text-left text-xs leading-relaxed text-slate-400 sm:text-center sm:text-sm">
            コードは熱を帯び、画面の向こうでは診察の静けさが続いている——その狭間で、いまプロトタイプが動いています。
          </p>
        </div>
      </section>

      <section className="mt-10" aria-label="プロダクト導線">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, index) => {
            const cardClassName = [
              "group relative flex w-full min-h-[340px] flex-col overflow-hidden rounded-4xl sm:rounded-3xl border border-blue-100 bg-white/80 p-5 text-left shadow-sm backdrop-blur transition-all duration-300",
              "hover:-translate-y-1 hover:shadow-md active:-translate-y-0.5 active:shadow-md",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/80",
              "[touch-action:manipulation]",
            ].join(" ");

            const cardInner = (
              <>
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-0 top-0 h-1 w-full rounded-t-3xl bg-gradient-to-r from-blue-500 to-sky-500 opacity-60"
                />

                <div
                  aria-hidden
                  className="pointer-events-none absolute right-0 top-0 z-20 h-[4.25rem] w-[11rem] overflow-hidden sm:w-[11.5rem]"
                >
                  <div className="absolute right-[-48%] top-3 w-[165%] rotate-45 bg-[#EF4444] py-1.5 text-center text-[8px] font-bold uppercase tracking-wide text-white shadow-md ring-1 ring-black/10 sm:text-[9px]">
                    <span className="inline-flex items-baseline justify-center gap-0.5 whitespace-nowrap">
                      <span>Under Development</span>
                      <span className="animate-heartbeat-dot inline-block translate-y-px text-[10px] leading-none text-white sm:text-[11px]">
                        ●
                      </span>
                    </span>
                  </div>
                </div>

                <div className="relative pr-[4.5rem] sm:pr-20">
                  <div className="flex items-center gap-2">
                    {/* 視線を吸い込むアイコン（アクセントブルーで統一） */}
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-[0_8px_18px_rgba(37,99,235,0.20)] ring-1 ring-blue-700/20">
                      {p.icon}
                    </span>
                    <h3 className="min-w-0 text-base font-bold tracking-tight text-slate-900 sm:text-lg">{p.catchCopy}</h3>
                  </div>
                </div>

                <ol className="mt-4 space-y-2.5">
                  {p.steps.map((step, stepIdx) => (
                    <li key={stepIdx} className="flex gap-3">
                      <span
                        className={[
                          "mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold",
                          "border-blue-700 bg-blue-600 text-white transition-colors duration-250",
                          stepIdx === 0 ? "border-blue-500" : "",
                          "group-hover:bg-white group-hover:text-blue-600 group-hover:border-blue-300",
                        ].join(" ")}
                      >
                        {(["①", "②", "③"] as const)[stepIdx]}
                      </span>
                      <span className="text-sm leading-relaxed text-slate-800">{step}</span>
                    </li>
                  ))}
                </ol>

                {/* ボタンは各アプリの外部リンク */}
                <div className="mt-auto pt-5">
                  <a
                    href={p.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:ring-4 hover:ring-blue-200/30 active:scale-[0.99]"
                  >
                    {p.cta}
                  </a>
                  <div className="mt-4 rounded-xl border border-dashed border-slate-300/90 bg-slate-50/80 px-3 py-3 text-left">
                    <p className="text-[11px] leading-relaxed text-slate-600 sm:text-xs">
                      この声が形になるまでの全記録は、開発日誌で公開中（月額300円）
                    </p>
                    <a
                      href={DEVLOG_STRIPE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex w-full items-center justify-center rounded-xl border border-[#EF4444]/40 bg-[#EF4444]/[0.08] px-3 py-2.5 text-center text-xs font-bold text-[#B91C1C] shadow-sm transition-all hover:bg-[#EF4444]/15 hover:ring-2 hover:ring-[#EF4444]/25 active:scale-[0.99]"
                    >
                      開発の裏側（日誌）を覗く
                    </a>
                  </div>
                </div>

                <span className="sr-only">product {index + 1}</span>
              </>
            );

            return (
              <div key={p.key} className={cardClassName} aria-label={`${p.catchCopy} のカード`}>
                {cardInner}
              </div>
            );
          })}
        </div>
      </section>

      <div className="mt-12 flex justify-center">
        <FadeInUpOnScroll>
          <div className="max-w-lg rounded-full border border-slate-200 bg-white/90 px-5 py-2.5 text-center text-xs font-semibold leading-snug text-slate-700 shadow-sm sm:text-sm">
            Medical Articulation — いま、ここで、対話の質を書き換える実験を進行中
          </div>
        </FadeInUpOnScroll>
      </div>
    </div>
  );
}

