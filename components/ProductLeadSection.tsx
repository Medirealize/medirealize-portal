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

const FALLBACK_LOG_TITLES = [
  "Stripe審査対応：寄付からコンテンツ販売へ",
  "医療を構造化する覚悟",
  "導線と仕様を縫い直した日",
];

type Props = {
  devLogPreviewTitles: string[];
};

export default function ProductLeadSection({ devLogPreviewTitles }: Props) {
  const KIDUKI2_URL = "https://kiduki-app-v2.vercel.app/";
  const SYMPTOMSUM_URL = "https://symptomsum-app.vercel.app/";
  const PREFLECTION_URL = "https://kiduki-insight-v2.vercel.app/";
  const FUTURECHART_URL = "https://future-chartv7.vercel.app/login";

  const previewTitles =
    devLogPreviewTitles.length > 0 ? devLogPreviewTitles : FALLBACK_LOG_TITLES;

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
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-600/35 bg-gradient-to-br from-[#111c2e] via-[#0f172a] to-[#0c1524] px-5 py-10 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.55)] ring-1 ring-slate-700/30 sm:rounded-3xl sm:px-10 sm:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_100%_0%,rgba(100,116,139,0.18),transparent_58%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_45%_at_0%_100%,rgba(71,85,105,0.14),transparent_52%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(180deg,rgba(248,250,252,0.02)_0,rgba(248,250,252,0.02)_1px,transparent_1px,transparent_14px)] opacity-50"
          />

          <div className="relative mx-auto inline-flex items-center gap-2 rounded-full border border-slate-500/45 bg-slate-900/55 px-3 py-1.5 text-[11px] font-medium text-slate-300 backdrop-blur-sm sm:text-xs">
            <span className="inline-flex h-2 w-2 rounded-full bg-slate-400 shadow-[0_0_0_3px_rgba(148,163,184,0.25)]" aria-hidden />
            Phase 1 · Medical Articulation · 構築中
          </div>

          <h1 className="relative mt-6 text-left text-[1.35rem] font-extrabold leading-snug tracking-tight text-[#F8FAFC] sm:text-center sm:text-3xl md:text-4xl lg:text-[2.65rem] lg:leading-[1.2]">
            届かなかった声を、
            <br className="sm:hidden" />
            医療の形（Realize）に変える。
          </h1>

          <p className="relative mt-5 text-left text-sm leading-relaxed text-slate-300 sm:text-center sm:text-base">
            患者さんの背中に残された「言葉にならない思い」を構造化し、対話の質を劇的に変える。
          </p>
          <p className="relative mt-4 text-left text-sm leading-relaxed text-slate-200 sm:text-center sm:text-[1.05rem]">
            Medirealizeは、
            <strong className="font-bold text-[#F8FAFC]">
              「医療の言語化（Medical Articulation）」
            </strong>
            を通じて、理想の診察を現実のものにします。
          </p>
          <p className="relative mt-5 border-t border-slate-600/40 pt-4 text-left text-xs leading-relaxed text-slate-400 sm:text-center sm:text-sm">
            診察がひと段落したあと、静かな診察室でキーボードの音だけが続く——その時間に、いまプロトタイプが少しずつ形になります。
          </p>
        </div>
      </section>

      <section className="mt-10" aria-label="プロダクト導線">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, index) => {
            const cardClassName = [
              "group relative flex w-full min-h-[300px] flex-col overflow-hidden rounded-4xl sm:rounded-3xl border border-slate-600/40 bg-[#1e293b]/75 p-5 text-left shadow-md backdrop-blur-sm transition-all duration-300",
              "hover:-translate-y-0.5 hover:border-slate-500/55 hover:shadow-lg active:translate-y-0",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/50",
              "[touch-action:manipulation]",
            ].join(" ");

            const cardInner = (
              <>
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-0 top-0 h-1 w-full rounded-t-3xl bg-gradient-to-r from-slate-500/80 to-slate-400/50 opacity-70"
                />

                <div className="relative flex min-w-0 items-start gap-2">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-slate-700/90 text-[#F8FAFC] shadow-inner ring-1 ring-slate-500/40">
                    {p.icon}
                  </span>
                  <div className="flex min-w-0 flex-1 items-center gap-2">
                    <h3 className="min-w-0 flex-1 truncate text-left text-base font-bold tracking-tight text-[#F8FAFC] sm:text-lg">
                      {p.catchCopy}
                    </h3>
                    <span className="shrink-0 rounded border border-slate-500/55 bg-slate-800/80 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-slate-400">
                      [開発中]
                    </span>
                  </div>
                </div>

                <ol className="mt-4 space-y-2.5">
                  {p.steps.map((step, stepIdx) => (
                    <li key={stepIdx} className="flex gap-3">
                      <span
                        className={[
                          "mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold",
                          "border-slate-500 bg-slate-700/90 text-[#F8FAFC] transition-colors duration-200",
                          "group-hover:border-slate-400 group-hover:bg-slate-600/90",
                        ].join(" ")}
                      >
                        {(["①", "②", "③"] as const)[stepIdx]}
                      </span>
                      <span className="text-sm leading-relaxed text-slate-300">{step}</span>
                    </li>
                  ))}
                </ol>

                <div className="mt-auto pt-5">
                  <a
                    href={p.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl bg-[#475569] px-3 py-2 text-center text-sm font-semibold text-[#F8FAFC] shadow-sm transition-all hover:bg-[#52647a] active:scale-[0.99]"
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
        className="mt-10 rounded-2xl border border-slate-600/45 bg-[#151f32]/90 px-5 py-7 shadow-inner sm:px-8 sm:py-9"
        aria-labelledby="devlog-portal-heading"
      >
        <h2
          id="devlog-portal-heading"
          className="text-center text-lg font-bold tracking-tight text-[#F8FAFC] sm:text-xl"
        >
          Medirealize：開発の裏側〜葛藤ログ〜
        </h2>
        <ul className="mx-auto mt-5 max-w-xl list-disc space-y-2 pl-5 text-left text-sm leading-relaxed text-slate-300 sm:pl-6">
          {previewTitles.map((title) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-slate-400">
          患者さんの届かなかった声を、医療の形に変えるまでの泥臭い試行錯誤を、月額300円の「開発日誌」として公開しています。一人の医師がキーボードを叩いて医療を再構築（Constructionism）する、その現在進行形のプロセスに並走していただけませんか。
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href={DEVLOG_STRIPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] w-full max-w-md items-center justify-center rounded-xl bg-[#3b5998] px-6 py-3 text-center text-sm font-semibold text-[#F8FAFC] shadow-md transition-colors hover:bg-[#334d86] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 active:scale-[0.99] sm:w-auto"
          >
            葛藤ログを購読する（月額300円）
          </a>
        </div>
      </section>

      <div className="mt-12 flex justify-center">
        <FadeInUpOnScroll>
          <div className="max-w-lg rounded-full border border-slate-600/50 bg-slate-800/40 px-5 py-2.5 text-center text-xs font-medium leading-snug text-slate-400 shadow-sm sm:text-sm">
            Medical Articulation — 診察のあと、言葉の解像度を上げる実験を続けています
          </div>
        </FadeInUpOnScroll>
      </div>
    </div>
  );
}
