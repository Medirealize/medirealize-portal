import { loadEnvConfig } from "@next/env";
import Stripe from "stripe";
import { serverEnv } from "@/lib/serverEnv";

let envTouched = false;

function isRunningOnVercel(): boolean {
  return process.env["VERCEL"] === "1";
}

/**
 * ローカルでは .env / .env.local を読み込む。
 * Vercel ではダッシュボード注入の process.env のみ使う（loadEnvConfig が
 * スナップショットと .env をマージする過程で、注入済みのキーが欠落する事例を避ける）。
 */
function ensureProjectEnvLoaded() {
  if (envTouched) return;
  if (!isRunningOnVercel()) {
    loadEnvConfig(process.cwd());
  }
  envTouched = true;
}

function normalizeSecretKey(raw: string | undefined): string | undefined {
  if (raw == null) return undefined;
  const t = raw.trim().replace(/^["']|["']$/g, "");
  return t.length > 0 ? t : undefined;
}

/** 先頭から順に試す（Vercel の名前ミス・別テンプレート対策） */
const STRIPE_SECRET_ENV_NAMES = [
  "STRIPE_SECRET_KEY",
  "STRIPE_API_KEY",
  "STRIPE_KEY",
] as const;

/**
 * Stripe シークレットキー（サーバー専用）。
 * 複数の変数名を試す。空・引用符のみは未定義扱い。
 */
export function resolveStripeSecretKey(): string | undefined {
  ensureProjectEnvLoaded();
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

export function stripeMisconfigurationBody(): {
  error: string;
  code: string;
  hint?: string;
} {
  const isDev = process.env["NODE_ENV"] === "development";
  return {
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
        ].join(" "),
  };
}
