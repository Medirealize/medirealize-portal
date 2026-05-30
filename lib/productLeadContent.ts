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
export const DEVLOG_VIEWER_LAST_UPDATED = "2026.05.08" as const;

/** `<time dateTime>` 用（DEVLOG_VIEWER_LAST_UPDATED と同日であること） */
export const DEVLOG_VIEWER_LAST_UPDATED_ISO = "2026-05-08" as const;

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

/** 4コアプロダクト群の見出しラベル */
export const MA_PRODUCTS_SECTION_LABEL = "診察前 · 言葉を整える" as const;

/** 現場ツール「どこ近？」 */
export const FIELD_TOOL_SECTION_LABEL = "診察後 · 次の一歩を迷わない" as const;

export const FIELD_TOOL_EYEBROW = "現場ツール · Field Tool" as const;

export const FIELD_TOOL_APP_NAME = "どこ近？" as const;

export const FIELD_TOOL_TAGLINE =
  "近い場所を、距離レーダーで比べよう" as const;

export const FIELD_TOOL_HEADLINE =
  "診察が終わっても、帰り道の不安が残る——その「次にどこへ行くか」を、迷わず選べるように。" as const;

export const FIELD_TOOL_LEAD =
  "休日当番の診察室で、何度も耳にしてきた言葉があります。「近くで薬がもらえるところはどこですか？」診断は終わったのに、患者さんの足元に不安が残る。現場の医師が、その迷いを減らすためにつくったのが、当番表をAIで読み取り、距離と方向をレーダー表示する参照ツールです。" as const;

export const FIELD_TOOL_ORIGIN_NOTE =
  "休日・夜間の当番医・当番薬局の案内から生まれたアプリを、患者さんと医療機関の双方が使える形で公開しています。" as const;

export const FIELD_TOOL_EXTERNAL_URL = "https://toban-compass.vercel.app/" as const;

export const FIELD_TOOL_CTA_LABEL = "どこ近？を開く（無料）" as const;

export const FIELD_TOOL_HOWTO_LABEL = "使い方を見る" as const;

export const FIELD_TOOL_HOWTO_URL = "https://toban-compass.vercel.app/howto" as const;

export const FIELD_TOOL_STATUS_BADGE = "公開中 · 無料" as const;

export const FIELD_TOOL_DISCLAIMER =
  "※「どこ近？」はAIを活用した施設位置の参照支援ツールです。表示情報は参考目的であり、医療上の判断・診断の根拠にはなりません。必ず公式サイト・電話等の一次情報でご確認ください。緊急時は119番または最寄りの医療機関へ。" as const;

export type FieldToolAudienceCard = {
  key: "patient" | "clinic";
  icon: string;
  title: string;
  lead: string;
  bullets: readonly string[];
};

export const FIELD_TOOL_AUDIENCE_CARDS = [
  {
    key: "patient",
    icon: "🧭",
    title: "患者さん・ご家族のために",
    lead: "帰宅後の不安を、一人で抱え込まなくてよいように。",
    bullets: [
      "当番表のスクショを貼るだけ。AIが開いている病院・薬局を一覧化",
      "お住まいのエリアから、近い順に距離と方向をレーダーで確認",
      "「ここへのルート」からGoogleマップへ。帰る途中でも迷わない",
    ],
  },
  {
    key: "clinic",
    icon: "🏥",
    title: "病院・クリニックのために",
    lead: "口頭説明だけでは伝わりにくい案内を、画面で共有できるように。",
    bullets: [
      "診察後の「近くの当番薬局は？」に、口頭だけで終わらない",
      "休日・夜間の当番医・当番薬局を、患者さんのスマホ画面で渡せる",
      "受付・コンシェルジュは「患者宅から」「ここから」の2視点で比較可能",
    ],
  },
] satisfies readonly FieldToolAudienceCard[];

export const FIELD_TOOL_STEPS = [
  {
    label: "当番表や施設リストを貼り付け",
    detail: "画像・PDF・テキストに対応。休日当番表のスクショもそのまま使えます",
  },
  {
    label: "AIが施設名と位置を自動読み取り",
    detail: "施設名と電話番号が混在していても解析。手動追加も可能です",
  },
  {
    label: "レーダーで最寄りを比較し、ルートへ",
    detail: "距離・方向を一覧表示。タップで詳細、Googleマップでナビ開始",
  },
] as const;

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
    catchCopy: "ほんね。",
    steps: [
      "言えない気持ちを書き出す",
      "AIが本音を言語化する",
      "誰かへの伝え方が見つかる",
    ],
    cta: "本音を言葉にする",
    externalUrl: "https://insight.medirealize.jp/",
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
    externalUrl: "https://future-chart.vercel.app/login",
  },
] satisfies readonly FeatureDefinition[];
