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

const DEVLOG_STRIPE_URL = "https://buy.stripe.com/7sY6oA2lKe2qfdg8NEeEo00";

const DEVLOG_BULLETS = [
  "現場の医師の導線とAIの仕様を徹底的に磨き上げた日",
  "医療の未来を見据え、理想の診療フローを呼吸させた日",
  "言葉の責任と、法的な行間まで真摯に向き合った日",
];

export default function ProductLeadSection() {
  const KIDUKI2_URL = "https://kiduki-app-v2.vercel.app/";
  const SYMPTOMSUM_URL = "https://symptomsum-app.vercel.app/";
  const PREFLECTION_URL = "https://kiduki-insight-v2.vercel.app/";
  const FUTURECHART_URL = "https://future-chartv7.vercel.app/login";

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
        catchCopy: "いつから？にお答え。",
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
        catchCopy: "先生、本当は話したいこと。",
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
    <div className="mx-auto w-full max-w-6xl px-3 pb-16 pt-5 sm:px-4 sm:pb-20 sm:pt-8">
      <section className="text-center">
        <div className="relative mx-auto max-w-5xl overflow-visible rounded-xl border border-[#DADDE1] bg-white px-3 py-7 shadow-[0_1px_2px_rgba(0,0,0,0.08)] sm:rounded-2xl sm:px-8 sm:py-9">
          <div className="relative mx-auto inline-flex max-w-[96%] flex-wrap items-center justify-center gap-x-1.5 gap-y-1 rounded-full border border-[#DADDE1] bg-[#F0F2F5] px-2.5 py-1.5 text-center text-[10px] font-semibold leading-tight text-[#65676B] sm:max-w-none sm:gap-2 sm:px-3 sm:py-1 sm:text-xs">
            <span className="inline-flex h-2 w-2 shrink-0 rounded-full bg-[#1877F2]" aria-hidden />
            <span className="sm:hidden">Phase 1 · MA · 構築中</span>
            <span className="hidden sm:inline">Phase 1 · Medical Articulation · 構築中</span>
          </div>

          <h1 className="relative mx-auto mt-4 max-w-full text-balance text-center text-lg font-extrabold leading-[1.45] tracking-tight text-[#050505] sm:mt-5 sm:text-2xl md:text-3xl md:leading-[1.25] lg:text-4xl xl:whitespace-nowrap xl:text-[clamp(1.75rem,2.2vw,2.5rem)]">
            届かなかった声を、医療(Medi)の形（Realize）に変える。
          </h1>

          <p className="relative mx-auto mt-4 max-w-full text-pretty text-center text-sm font-normal leading-[1.65] text-[#65676B] sm:mt-5 sm:text-base md:mt-6 xl:whitespace-nowrap xl:text-[0.9375rem]">
            診察がひと段落したあと、静かな診察室でキーボードの音だけが続く――その時間に、今プロトタイプが少しずつ形になります。
          </p>
        </div>
      </section>

      <section className="mt-8 sm:mt-9" aria-label="プロダクト導線">
        <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, index) => {
            const cardClassName = [
              "group relative flex w-full min-h-0 flex-col overflow-visible rounded-xl border border-[#DADDE1] bg-white p-4 pb-5 pt-5 text-left shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition-all duration-200 sm:min-h-[280px] sm:p-5 sm:pt-6",
              "hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] active:translate-y-0",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/40",
              "[touch-action:manipulation]",
            ].join(" ");

            const cardInner = (
              <>
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-px -top-px z-10 rounded-bl-md rounded-tr-[11px] border border-[#DADDE1] bg-[#F0F2F5] px-2 py-1 text-[10px] font-medium leading-none text-[#65676B] shadow-sm sm:-right-1.5 sm:-top-1.5 sm:rounded-md sm:rounded-br-md sm:rounded-tl-none sm:rounded-tr-md sm:px-2 sm:py-0.5"
                >
                  [開発中]
                </span>

                <div className="relative flex min-w-0 items-start gap-3 pr-1 sm:pr-0">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F0F2F5] text-[#1877F2] ring-1 ring-[#DADDE1] sm:h-9 sm:w-9">
                    {p.icon}
                  </span>
                  <h3 className="min-w-0 flex-1 text-pretty text-left text-base font-bold leading-snug tracking-tight text-[#050505] sm:text-[17px]">
                    {p.catchCopy}
                  </h3>
                </div>

                <ol className="mt-4 space-y-3 sm:space-y-2.5">
                  {p.steps.map((step, stepIdx) => (
                    <li key={stepIdx} className="flex gap-3">
                      <span
                        className={[
                          "mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold sm:h-7 sm:w-7",
                          "border-[#DADDE1] bg-[#F0F2F5] text-[#050505]",
                          "group-hover:border-[#CCD0D5] group-hover:bg-[#E4E6EB]",
                        ].join(" ")}
                      >
                        {(["①", "②", "③"] as const)[stepIdx]}
                      </span>
                      <span className="min-w-0 text-[0.9375rem] leading-[1.65] text-[#1C1E21] sm:text-sm sm:leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>

                <div className="mt-auto pt-4 sm:pt-5">
                  <a
                    href={p.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[48px] items-center justify-center rounded-lg bg-[#1877F2] px-3 py-3 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#166FE5] active:scale-[0.99] sm:min-h-0 sm:py-2.5 sm:text-sm"
                  >
                    {p.cta}
                  </a>
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

      <section
        className="mt-8 rounded-xl border border-[#DADDE1] bg-white px-4 py-6 shadow-[0_1px_2px_rgba(0,0,0,0.08)] sm:mt-9 sm:px-8 sm:py-8"
        aria-labelledby="devlog-portal-heading"
      >
        <h2
          id="devlog-portal-heading"
          className="text-pretty text-center text-base font-bold leading-snug tracking-tight text-[#050505] sm:text-lg md:text-xl"
        >
          Medirealize：開発の軌跡～医療とAIの現場から～
        </h2>
        <ul className="mx-auto mt-4 max-w-2xl list-none space-y-3 text-left text-[0.9375rem] leading-[1.65] text-[#1C1E21] sm:mt-5 sm:space-y-2.5 sm:text-sm sm:leading-relaxed">
          {DEVLOG_BULLETS.map((line) => (
            <li key={line} className="flex gap-2 pl-0">
              <span className="shrink-0 pt-[0.15em] text-[#65676B]" aria-hidden>
                ・
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-left text-sm leading-[1.65] text-[#65676B] sm:mt-6 sm:text-center sm:text-sm sm:leading-relaxed">
          患者さんの届かなかった声を、医療の形に変えるまでの泥臭い試行錯誤を、月額300円の「開発日誌」として公開しています。一人の医師がキーボードを叩いて医療を再構築（Constructionism）する、その現在進行形のプロセスに並走していただけませんか。
        </p>
        <div className="mt-6 flex justify-center sm:mt-7">
          <a
            href={DEVLOG_STRIPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] w-full max-w-md items-center justify-center rounded-lg bg-[#1877F2] px-5 py-3.5 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#166FE5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/50 active:scale-[0.99] sm:w-auto sm:py-3 sm:text-sm"
          >
            葛藤ログを購読する（月額300円）
          </a>
        </div>
      </section>

      <div className="mt-8 flex justify-center px-1 sm:mt-10">
        <FadeInUpOnScroll>
          <div className="max-w-lg rounded-2xl border border-[#DADDE1] bg-white px-4 py-3 text-center text-sm font-medium leading-relaxed text-[#65676B] shadow-[0_1px_2px_rgba(0,0,0,0.06)] sm:rounded-full sm:px-5 sm:py-2.5 sm:text-sm">
            Medical Articulation — 診察のあと、言葉の解像度を上げる実験を続けています
          </div>
        </FadeInUpOnScroll>
      </div>
    </div>
  );
}
