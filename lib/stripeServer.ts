import { loadEnvConfig } from "@next/env";
import Stripe from "stripe";

let envTouched = false;

/** API ルートやサーバー関数で、.env / .env.local が未反映のケースを減らす */
function ensureProjectEnvLoaded() {
  if (envTouched) return;
  loadEnvConfig(process.cwd());
  envTouched = true;
}

function normalizeSecretKey(raw: string | undefined): string | undefined {
  if (raw == null) return undefined;
  const t = raw.trim().replace(/^["']|["']$/g, "");
  return t.length > 0 ? t : undefined;
}

/**
 * Stripe シークレットキー（サーバー専用）。
 * `STRIPE_SECRET_KEY` を優先。空・引用符のみは未定義扱い。
 */
export function resolveStripeSecretKey(): string | undefined {
  ensureProjectEnvLoaded();
  return normalizeSecretKey(process.env.STRIPE_SECRET_KEY);
}

let stripeClient: Stripe | null = null;
let cachedSecretKey: string | undefined;

/**
 * キーが無い場合は null（モジュール読み込み時には throw しない）。
 */
export function getStripeServer(): Stripe | null {
  const secretKey = resolveStripeSecretKey();
  if (!secretKey) {
    stripeClient = null;
    cachedSecretKey = undefined;
    return null;
  }
  if (stripeClient && cachedSecretKey === secretKey) {
    return stripeClient;
  }
  stripeClient = new Stripe(secretKey);
  cachedSecretKey = secretKey;
  return stripeClient;
}

export function isStripeConfigured(): boolean {
  return resolveStripeSecretKey() !== undefined;
}

export function stripeMisconfigurationBody(): {
  error: string;
  code: string;
  hint?: string;
} {
  const isDev = process.env.NODE_ENV === "development";
  return {
    error: isDev
      ? "Stripe のシークレットキーが読み込めていません"
      : "決済の開始に必要な設定が完了していません",
    code: "STRIPE_NOT_CONFIGURED",
    ...(isDev
      ? {
          hint:
            "プロジェクト直下の .env.local に STRIPE_SECRET_KEY=sk_test_... を記述し、開発サーバーを再起動してください。Vercel では Environment Variables に同じ名前で登録します。",
        }
      : {}),
  };
}
