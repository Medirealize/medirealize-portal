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
  const KIDUKI2_URL = process.env.NEXT_PUBLIC_KIDUKI2_VERCEL_URL ?? "";
  const SYMPTOMSUM_URL = process.env.NEXT_PUBLIC_SYMPTOMSUM_VERCEL_URL ?? "";
  const PREFLECTION_URL = process.env.NEXT_PUBLIC_PREFLECTION_VERCEL_URL ?? "";
  const FUTURECHART_URL = process.env.NEXT_PUBLIC_FUTURECHART_VERCEL_URL ?? "";

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
    <div className="mx-auto w-full max-w-6xl px-4 pb-24 pt-10">
      <section className="text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-[0.08em] text-slate-900 sm:text-4xl sm:tracking-[0.10em]">
            医療を、もっと言葉に。
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            不安を「伝わる言葉」に整えて、診察室で迷わないための導線です。
          </p>
        </div>
      </section>

      <section className="mt-10" aria-label="プロダクト導線">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, index) => {
            const href = p.externalUrl || "";
            const cardClassName = [
              "group relative flex h-full flex-col rounded-4xl sm:rounded-3xl border border-blue-100 bg-white/80 p-5 text-left shadow-sm backdrop-blur transition-all duration-300",
              "hover:-translate-y-1 hover:shadow-md active:-translate-y-0.5 active:shadow-md",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/80",
            ].join(" ");

            const cardInner = (
              <>
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-0 top-0 h-1 w-full rounded-t-3xl bg-gradient-to-r from-blue-500 to-sky-500 opacity-60"
                />

                <div className="relative">
                  <div className="flex items-center gap-2">
                    {/* 視線を吸い込むアイコン（アクセントブルーで統一） */}
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-[0_8px_18px_rgba(37,99,235,0.20)] ring-1 ring-blue-700/20">
                      {p.icon}
                    </span>
                    <h3 className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">{p.catchCopy}</h3>
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

                {/* ボタンは1つだけ：カード全体が導線なので、ここは文言の強調 */}
                <div className="mt-auto pt-5">
                  <div className="rounded-2xl bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm transition-all group-hover:bg-blue-700 group-hover:ring-4 group-hover:ring-blue-200/30 active:scale-[0.99]">
                    {p.cta}
                  </div>
                </div>

                <span className="sr-only">product {index + 1}</span>
              </>
            );

            if (!href) {
              return (
                <div key={p.key} className={cardClassName} aria-label={`${p.catchCopy} を使ってみる`}>
                  {cardInner}
                </div>
              );
            }

            return (
              <a
                key={p.key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClassName}
                aria-label={`${p.catchCopy} を使ってみる`}
              >
                {cardInner}
              </a>
            );
          })}
        </div>
      </section>

      <div className="mt-12 flex justify-center">
        <FadeInUpOnScroll>
          <div className="rounded-full border border-blue-100 bg-white/70 px-6 py-2 text-sm font-semibold text-slate-700 shadow-sm">
            医療を、もっと言葉に。
          </div>
        </FadeInUpOnScroll>
      </div>
    </div>
  );
}

