/**
 * サーバー専用環境変数のランタイム読み取り。
 * `process.env.FOO` の直参照はビルド時に値が固定され、Vercel 本番で
 * ダッシュボード設定の STRIPE_* が反映されないことがあるため、
 * ブラケット形式で参照する。
 */
export function serverEnv(name: string): string | undefined {
  const raw = process.env[name];
  if (raw === undefined) return undefined;
  const t = raw.trim();
  return t.length > 0 ? t : undefined;
}
