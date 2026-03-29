/**
 * 開発日誌（月額購読）用 Stripe Price ID（100円サブスク）。
 *
 * ダッシュボードで新しい Price を発行したら、下記を更新するか
 * 環境変数 `STRIPE_DEVLOG_PRICE_ID` を設定してください（API ルートで優先）。
 */
export const DEVLOG_STRIPE_PRICE_ID = "price_1TFleT2YjksTX5SsI8Bnf3x0" as const;
