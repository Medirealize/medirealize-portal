import Stripe from "stripe";

const BYPASS_EMAILS = (process.env.DEVLOG_BYPASS_EMAILS ?? "")
  .split(",")
  .map((v) => v.trim().toLowerCase())
  .filter(Boolean);

function isBypassEmail(email: string) {
  return BYPASS_EMAILS.includes(email.toLowerCase());
}

export async function hasDevLogAccess(email: string): Promise<boolean> {
  const normalized = email.trim().toLowerCase();
  if (!normalized) return false;
  if (isBypassEmail(normalized)) return true;

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) return false;

  const stripe = new Stripe(secretKey);

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

