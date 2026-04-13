/**
 * Product lead / landing copy — single source for ProductLeadSection + FeatureCard.
 */

export const HERO_MAIN_COPY =
  "届かなかった声を、医療(Medi)の形（Realize）に変える。" as const;

export const HERO_SUB_COPY =
  "診察がひと段落したあと、静かな診察室でキーボードの音だけが続く――その時間に、今\u200bプロトタイプが少しずつ形になります。" as const;

export const PHASE_BADGE_SHORT = "Phase 1 · MA · 構築中" as const;
export const PHASE_BADGE_LONG = "Phase 1 · Medical Articulation · 構築中" as const;

export const MEDICAL_DISCLAIMER =
  "※本サービスは非医療機器であり、診察を補助するコミュニケーションツールです。" as const;

export const DEV_IN_PROGRESS_LABEL = "[開発中]" as const;

/** 開発日誌の購読決済（Stripe Checkout Session を発行してリダイレクト） */
export const DEVLOG_CHECKOUT_PATH = "/api/checkout/devlog-support" as const;

/** 購読済みユーザー向けログイン（メールで閲覧権を確認） */
export const DEVLOG_UNLOCK_PATH = "/dev-log/unlock" as const;

export const DEVLOG_VIEWER_LOGIN_LABEL = "開発日誌を閲覧する" as const;

/** 「開発日誌を閲覧する」周辺の最終更新表示（YYYY.MM.DD）。UI のラベルと揃える */
export const DEVLOG_VIEWER_LAST_UPDATED = "2026.04.13" as const;

/** `<time dateTime>` 用（DEVLOG_VIEWER_LAST_UPDATED と同日であること） */
export const DEVLOG_VIEWER_LAST_UPDATED_ISO = "2026-04-13" as const;

/** ランディング中盤など・購読者向けの見出し */
export const DEVLOG_ALREADY_SUBSCRIBED_LEAD = "既に購読中の方" as const;

/** 開発日誌の案内から遷移する Stripe のメールログイン（支払い・解約）URL */
export const DEVLOG_STRIPE_BILLING_LOGIN_URL =
  "https://billing.stripe.com/p/login/7sY6oA2lKe2qfdg8NEeEo00" as const;

export const DEVLOG_STRIPE_BILLING_LOGIN_LABEL =
  "メールでログインして支払い・解約を行う" as const;

export const DEVLOG_TITLE =
  "Medirealize：開発の軌跡 ～現場の医師による開発日誌～" as const;

export const DEVLOG_BODY =
  "「届かなかった声」を形にする挑戦のプロセスを、月額100円の「開発日誌（葛藤ログ）」として公開しています。一人の医師が現場の課題に向き合い、コードを書き進める現在進行形のドキュメントを、購読という形でぜひ見守ってください。" as const;

export const DEVLOG_CTA_LABEL = "開発日誌（葛藤ログ）を覗いてみる（月額100円）" as const;

/** 購読料の用途（Stripe 審査上「デジタルコンテンツの対価」に整合） */
export const DEVLOG_SUPPORT_FUND_NOTE =
  "※購読料は、開発日誌（デジタルコンテンツ）の提供および関連機能の維持に使用いたします。" as const;

export const DEVLOG_SUPPORT_CANCEL_NOTE =
  "購読の停止（サブスクリプションの解約）は、開発日誌（購読者向けページ）内の案内からいつでもお手続きいただけます。" as const;

/** 開発日誌（ログイン後）ページ内の支払い・解約の案内 */
export const DEVLOG_PAYMENT_MANAGE_ON_PAGE_NOTE =
  "お支払い方法の変更や解約は、本ページ内の案内（下のボタン・リンク）からいつでもお手続きいただけます。" as const;

/** 購読者ログイン画面の「支払い・解約」ブロック */
export const DEVLOG_PAYMENT_MANAGE_UNLOCK_SECTION_TITLE = "購読のお支払い・解約" as const;

export const DEVLOG_PAYMENT_MANAGE_UNLOCK_SECTION_BODY =
  "開発日誌（購読者向けページ）の案内に沿って、お支払いの確認や解約を行えます。ログイン後は開発日誌本体のボタンから、未ログインの場合は下のボタンからメールで認証のうえお進みください。" as const;

/** `/api/portal` 未ログイン時など：ログイン後の案内を促す */
export const DEVLOG_PORTAL_REQUIRES_LOGIN_HINT =
  "開発日誌にログイン後、ページ内の案内（ボタン）からお支払いの管理へ進んでください。ログイン前に手続きする場合は、ページ下部の案内からお進みください。" as const;

/** 利用規約「定期購読の解約・キャンセル」第1段落 */
export const TERMS_SUBSCRIPTION_CANCEL_PRIMARY =
  "本サービスの月額購読（サブスクリプション）の解約およびお支払い方法の変更は、開発日誌（購読者向けページ）内の案内に従い、利用者ご自身のタイミングでいつでも手続きいただけます。当該手続きは決済代行である Stripe を通じて行われます。" as const;

/** 特定商取引法「返品・キャンセル」欄の本文 */
export const TOKUSHOHO_SUBSCRIPTION_CANCEL_BODY =
  "デジタルコンテンツの特性上、返品・返金はできません。サブスクリプションの解約は、開発日誌（購読者向けページ）内の案内に従いいつでも可能です。解約後も当該請求期間終了までは閲覧できます。日割り計算による返金は行いません。" as const;

/** 1 行で使う場合（ログインページ等） */
export const DEVLOG_SUPPORT_USAGE_NOTE =
  `${DEVLOG_SUPPORT_FUND_NOTE}${DEVLOG_SUPPORT_CANCEL_NOTE}`;

/** フッター等の価格表記 */
export const DEVLOG_PUBLIC_PRICE_NOTE = "月額100円" as const;

/** 購読者ログイン周りのリード */
export const DEVLOG_UNLOCK_CHECKOUT_LEAD =
  "Stripe の安全な決済ページへ進み、月額100円（税込）で開発日誌（デジタルコンテンツ）を購読いただけます。" as const;

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
