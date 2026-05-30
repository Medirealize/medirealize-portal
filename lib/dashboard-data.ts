import { readDevLogEntries } from "@/lib/dev-log";
import { DEVLOG_STRIPE_PRICE_ID } from "@/lib/devlogStripe";
import { isDashboardConfigured } from "@/lib/dashboard-auth";
import {
  DEVLOG_VIEWER_LAST_UPDATED,
  FEATURE_DEFINITIONS,
  FIELD_TOOL_APP_NAME,
  FIELD_TOOL_EXTERNAL_URL,
  FIELD_TOOL_STATUS_BADGE,
} from "@/lib/productLeadContent";
import { isStripeConfigured, getStripeServer } from "@/lib/stripeServer";
import { serverEnv } from "@/lib/serverEnv";

export type DashboardProductRow = {
  key: string;
  name: string;
  category: "診察前 · 言語化" | "診察後 · 現場ツール";
  status: "開発中" | "無料公開" | "公開中";
  url: string;
  cta: string;
};

export type DashboardSnapshot = {
  generatedAt: string;
  siteUrl: string;
  products: DashboardProductRow[];
  devLog: {
    entryCount: number;
    lastUpdatedLabel: string;
    latestTitle: string | null;
    latestDate: string | null;
  };
  subscriptions: {
    active: number;
    trialing: number;
    configured: boolean;
  } | null;
  system: {
    dashboardConfigured: boolean;
    stripeConfigured: boolean;
    vercelEnv: string | null;
    nodeEnv: string;
  };
};

const PRODUCT_STATUS: Record<string, DashboardProductRow["status"]> = {
  "app-1": "開発中",
  "app-2": "開発中",
  "app-3": "無料公開",
  "app-4": "開発中",
};

async function readSubscriptionStats(): Promise<DashboardSnapshot["subscriptions"]> {
  const stripe = getStripeServer();
  if (!stripe) return null;

  const priceId = serverEnv("STRIPE_DEVLOG_PRICE_ID") ?? DEVLOG_STRIPE_PRICE_ID;

  try {
    const [activeSubs, trialingSubs] = await Promise.all([
      stripe.subscriptions.list({ status: "active", limit: 100 }),
      stripe.subscriptions.list({ status: "trialing", limit: 100 }),
    ]);

    const matchesPrice = (sub: (typeof activeSubs.data)[number]) =>
      sub.items.data.some((item) => item.price?.id === priceId);

    return {
      active: activeSubs.data.filter(matchesPrice).length,
      trialing: trialingSubs.data.filter(matchesPrice).length,
      configured: true,
    };
  } catch {
    return { active: 0, trialing: 0, configured: true };
  }
}

export async function getDashboardSnapshot(): Promise<DashboardSnapshot> {
  const entries = await readDevLogEntries();
  const latest = entries[0] ?? null;

  const coreProducts: DashboardProductRow[] = FEATURE_DEFINITIONS.map((product) => ({
    key: product.key,
    name: product.catchCopy,
    category: "診察前 · 言語化",
    status: PRODUCT_STATUS[product.key] ?? "開発中",
    url: product.externalUrl,
    cta: product.cta,
  }));

  const fieldTool: DashboardProductRow = {
    key: "field-tool",
    name: FIELD_TOOL_APP_NAME,
    category: "診察後 · 現場ツール",
    status: "公開中",
    url: FIELD_TOOL_EXTERNAL_URL,
    cta: FIELD_TOOL_STATUS_BADGE,
  };

  const subscriptions = isStripeConfigured() ? await readSubscriptionStats() : null;

  return {
    generatedAt: new Date().toISOString(),
    siteUrl: "https://www.medirealize.jp",
    products: [...coreProducts, fieldTool],
    devLog: {
      entryCount: entries.length,
      lastUpdatedLabel: DEVLOG_VIEWER_LAST_UPDATED,
      latestTitle: latest?.title ?? null,
      latestDate: latest?.date ?? null,
    },
    subscriptions,
    system: {
      dashboardConfigured: isDashboardConfigured(),
      stripeConfigured: isStripeConfigured(),
      vercelEnv: serverEnv("VERCEL_ENV") ?? null,
      nodeEnv: process.env.NODE_ENV ?? "development",
    },
  };
}
