import { getStripeServer } from "@/lib/stripeServer";
import { serverEnv } from "@/lib/serverEnv";

function bypassEmails(): string[] {
  return (serverEnv("DEVLOG_BYPASS_EMAILS") ?? "")
    .split(",")
    .map((v) => v.trim().toLowerCase())
    .filter(Boolean);
}

function isBypassEmail(email: string) {
  return bypassEmails().includes(email.toLowerCase());
}

export async function hasDevLogAccess(email: string): Promise<boolean> {
  const normalized = email.trim().toLowerCase();
  if (!normalized) return false;
  if (isBypassEmail(normalized)) return true;

  const stripe = getStripeServer();
  if (!stripe) return false;

  const customers = await stripe.customers.list({ email: normalized, limit: 10 });
  if (!customers.data.length) return false;

  for (const customer of customers.data) {
    if (!customer.id) continue;
    const subs = await stripe.subscriptions.list({
      customer: customer.id,
      status: "all",
      limit: 100,
    });
    const hasActive = subs.data.some((s) => s.status === "active" || s.status === "trialing");
    if (hasActive) return true;
  }

  return false;
}

/**
 * Billing Portal 用。メールに紐づく Stripe Customer を 1 件に絞る。
 * アクティブ／トライアル優先、その後はいずれかのサブスク履歴あり、最後は先頭の Customer。
 */
export async function resolveStripeCustomerIdForPortal(email: string): Promise<string | null> {
  const normalized = email.trim().toLowerCase();
  if (!normalized) return null;
  if (isBypassEmail(normalized)) return null;

  const stripe = getStripeServer();
  if (!stripe) return null;

  const { data: customers } = await stripe.customers.list({ email: normalized, limit: 100 });
  if (!customers.length) return null;

  for (const c of customers) {
    if (!c.id) continue;
    const { data: subs } = await stripe.subscriptions.list({
      customer: c.id,
      status: "all",
      limit: 100,
    });
    const hasActive = subs.some((s) => s.status === "active" || s.status === "trialing");
    if (hasActive) return c.id;
  }

  for (const c of customers) {
    if (!c.id) continue;
    const { data: subs } = await stripe.subscriptions.list({ customer: c.id, limit: 1 });
    if (subs.length > 0) return c.id;
  }

  return customers[0]?.id ?? null;
}

