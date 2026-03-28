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
  };
}

export function stripeMisconfigurationBody(): Record<string, unknown> {
  const isDev = process.env["NODE_ENV"] === "development";
  const base: Record<string, unknown> = {
    error: isDev
      ? "Stripe のシークレットキーが読み込めていません"
      : "決済の開始に必要な設定が完了していません",
    code: "STRIPE_NOT_CONFIGURED",
    hint: isDev
      ? "プロジェクト直下の .env.local に STRIPE_SECRET_KEY=sk_test_... を記述し、開発サーバーを再起動してください。Vercel では Environment Variables に同じ名前で登録し、再デプロイしてください。"
      : [
          "Vercel → 該当 Project → Settings → Environment Variables で名前が正確に STRIPE_SECRET_KEY か確認（末尾スペース・全角記号なし）。値は sk_live_ または sk_test_ で始まる 1 行のみ。",
          "試している URL が本番ドメインなら Production に、*.vercel.app のプレビューなら Preview にチェックが入っているか確認。",
          "別チーム・別 Project にキーを入れていないか、Git 連携しているリポジトリがこのアプリか確認。",
          "保存後は Redeploy（キャッシュなし推奨）を実行。",
          "原因切り分け: Vercel に STRIPE_SETUP_DEBUG=1 を追加して再デプロイし、同じ URL を開くと debug オブジェクトに「どの STRIPE_* 名がサーバーに見えているか」（値は出ません）が返ります。確認後は STRIPE_SETUP_DEBUG を削除してください。",
        ].join(" "),
  };
  const debug = stripeSetupDebugPayload();
  if (debug) {
    base.debug = debug;
  }
  return base;
}
