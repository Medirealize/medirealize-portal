import Stripe from "stripe";
import { serverEnv } from "@/lib/serverEnv";

/**
 * Next.js / Vercel は起動時に process.env へ注入する。
 * @next/env の loadEnvConfig はここでは使わない（二重読み込みやマージの副作用を避ける）。
 */

function normalizeSecretKey(raw: string | undefined): string | undefined {
  if (raw == null) return undefined;
  const t = raw.trim().replace(/^["']|["']$/g, "");
  return t.length > 0 ? t : undefined;
}

/** 先頭から順に試す（Vercel の名前ミス・別テンプレート対策） */
export const STRIPE_SECRET_ENV_NAMES = [
  "STRIPE_SECRET_KEY",
  "STRIPE_API_KEY",
  "STRIPE_KEY",
] as const;

/**
 * Stripe シークレットキー（サーバー専用）。
 * 複数の変数名を試す。空・引用符のみは未定義扱い。
 */
export function resolveStripeSecretKey(): string | undefined {
  for (const name of STRIPE_SECRET_ENV_NAMES) {
    const v = normalizeSecretKey(serverEnv(name));
    if (v) return v;
  }
  return undefined;
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

/** Vercel に一時的に STRIPE_SETUP_DEBUG=1 を入れると、秘密は出さず診断用フィールドが付く */
function stripeSetupDebugPayload(): Record<string, unknown> | undefined {
  if (serverEnv("STRIPE_SETUP_DEBUG") !== "1") return undefined;
  const stripeRelatedEnvKeyNames = Object.keys(process.env).filter((k) =>
    k.toUpperCase().includes("STRIPE"),
  );
  const secretCandidateLengths = Object.fromEntries(
    STRIPE_SECRET_ENV_NAMES.map((n) => [n, process.env[n]?.length ?? 0]),
  );
  return {
    stripeRelatedEnvKeyNames: stripeRelatedEnvKeyNames.sort(),
    secretCandidateLengths,
    vercel: process.env["VERCEL"],
    vercelEnv: process.env["VERCEL_ENV"],
    nodeEnv: process.env["NODE_ENV"],
    readme:
      "secretCandidateLengths がすべて 0 かつ stripeRelatedEnvKeyNames が空に近い → この Vercel Project に STRIPE_SECRET_KEY が届いていません。名前の typo・Production/Preview の適用・別 Project への登録を確認。確認後は STRIPE_SETUP_DEBUG を削除。",
  };
}

export function stripeMisconfigurationBody(): Record<string, unknown> {
  const isDev = process.env["NODE_ENV"] === "development";
  const debug = stripeSetupDebugPayload();

  const base: Record<string, unknown> = {
    error: isDev
      ? "Stripe のシークレットキーが読み込めていません"
      : "決済の開始に必要な設定が完了していません",
    code: "STRIPE_NOT_CONFIGURED",
    hint: isDev
      ? ".env.local に STRIPE_SECRET_KEY を設定して開発サーバーを再起動するか、Vercel の Environment Variables に登録して再デプロイしてください。"
      : "サーバーに STRIPE_SECRET_KEY（sk_ で始まる Stripe シークレット）が届いていません。ホスティングの環境変数と再デプロイを確認してください。",
  };

  if (debug) {
    base.debug = debug;
  }

  return base;
}
