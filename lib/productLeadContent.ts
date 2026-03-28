/**
 * Product lead / landing copy — single source for ProductLeadSection + FeatureCard.
 */

export const HERO_MAIN_COPY =
  "届かなかった声を、医療(Medi)の形（Realize）に変える。" as const;

export const HERO_SUB_COPY =
  "診察がひと段落したあと、静かな診察室でキーボードの音だけが続く――その時間に、今プロトタイプが少しずつ形になります。" as const;

export const PHASE_BADGE_SHORT = "Phase 1 · MA · 構築中" as const;
export const PHASE_BADGE_LONG = "Phase 1 · Medical Articulation · 構築中" as const;

export const MEDICAL_DISCLAIMER =
  "※本サービスは非医療機器であり、診察を補助するコミュニケーションツールです。" as const;

export const DEV_IN_PROGRESS_LABEL = "[開発中]" as const;

export const DEVLOG_STRIPE_URL =
  "https://buy.stripe.com/7sY6oA2lKe2qfdg8NEeEo00" as const;

export const DEVLOG_TITLE =
  "Medirealize：医療の未来を、100円から共に育てる「開発サポーター」募集" as const;

export const DEVLOG_BODY =
  "「届かなかった声」を形にする挑戦は、まだ始まったばかりです。月額100円の開発投資は、そのままMedirealizeの血となり、肉となります。一人の医師が現場の課題から理想の診療を再構築するプロセスに、あなたも「サポーター」として並走していただけませんか。" as const;

export const DEVLOG_CTA_LABEL =
  "100円で開発を支援する（開発日誌へのアクセス権付）" as const;

/** CTA 直下の誠実注釈（ランディング・必要に応じて他画面でも使用） */
export const DEVLOG_SUPPORT_USAGE_NOTE =
  "※お預かりした支援金は、すべて本サービスの開発維持費として大切に活用させていただきます。" as const;

/** フッター等で使う短い購読案内（価格は DEVLOG と一致させる） */
export const DEVLOG_PUBLIC_PRICE_NOTE = "月額100円" as const;

export const DEVLOG_BULLETS = [
  "現場の医師の導線とAIの仕様を徹底的に磨き上げた日",
  "医療の未来を見据え、理想の診療フローを呼吸させた日",
  "言葉の責任と、法的な行間まで真摯に向き合った日",
] as const;

export const MA_FOOTNOTE_CHIP =
  "Medical Articulation — 診察のあと、言葉の解像度を上げる実験を続けています" as const;

export type FeatureIconKey = "stethoscope" | "calendar" | "message" | "sparkles";

export type FeatureDefinition = {
  key: string;
  icon: FeatureIconKey;
  catchCopy: string;
  steps: readonly [string, string, string];
  cta: string;
  externalUrl: string;
};

export const FEATURE_DEFINITIONS: readonly FeatureDefinition[] = [
  {
    key: "app-1",
    icon: "stethoscope",
    catchCopy: "これ見せて。",
    steps: [
      "不安や症状を自由に書く",
      "AIが医師に伝わる形に要約",
      "画面を先生に見せて診察開始",
    ],
    cta: "いますぐ整える",
    externalUrl: "https://kiduki-app-v2.vercel.app/",
  },
  {
    key: "app-2",
    icon: "calendar",
    catchCopy: "いつから？に答える。",
    steps: [
      "症状が出た時にサッと記録",
      "AIが経過を一本の線に整理",
      "診察室で「いつから？」に即答",
    ],
    cta: "記録を始める",
    externalUrl: "https://symptomsum-app.vercel.app/",
  },
  {
    key: "app-3",
    icon: "message",
    catchCopy: "先生、本当はね。",
    steps: [
      "言いにくい本音を吐き出す",
      "AIが伝わる「言葉」に翻訳",
      "医師への伝え方を台本化",
    ],
    cta: "本音を言葉にする",
    externalUrl: "https://kiduki-insight-v2.vercel.app/",
  },
  {
    key: "app-4",
    icon: "sparkles",
    catchCopy: "未来処方箋",
    steps: [
      "今の気持ちを日記に記す",
      "AIが小さな「明日の一歩」を提示",
      "なりたい自分へ、言葉を処方",
    ],
    cta: "明日を予約する",
    externalUrl: "https://future-chartv7.vercel.app/login",
  },
] satisfies readonly FeatureDefinition[];
