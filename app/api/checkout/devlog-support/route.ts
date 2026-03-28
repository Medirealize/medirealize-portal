/**
 * 開発日誌の月額購読（Stripe Checkout / Subscription）
 */
import { NextRequest, NextResponse } from "next/server";
import { DEVLOG_STRIPE_PRICE_ID } from "@/lib/devlogStripe";
import { serverEnv } from "@/lib/serverEnv";
import { getStripeServer, stripeMisconfigurationBody } from "@/lib/stripeServer";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function publicOrigin(request: NextRequest): string {
  const fromEnv = serverEnv("NEXT_PUBLIC_SITE_URL")?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  const forwardedHost = request.headers.get("x-forwarded-host");
  const host = forwardedHost ?? request.headers.get("host");
  if (host) {
    const forwardedProto = request.headers.get("x-forwarded-proto");
    const proto =
      forwardedProto ??
      (host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https");
    return `${proto}://${host}`;
  }

  return request.nextUrl.origin;
}

function resolveDevlogPriceId(): string | undefined {
  const raw = serverEnv("STRIPE_DEVLOG_PRICE_ID");
  const fromEnv = raw?.replace(/^["']|["']$/g, "");
  if (fromEnv) return fromEnv;
  return DEVLOG_STRIPE_PRICE_ID;
}

export async function GET(request: NextRequest) {
  const stripe = getStripeServer();
  if (!stripe) {
    return NextResponse.json(stripeMisconfigurationBody(), { status: 503 });
  }

  const priceId = resolveDevlogPriceId();
  if (!priceId) {
    return NextResponse.json(
      {
        error: "開発日誌用の Stripe Price ID が設定されていません",
        code: "STRIPE_PRICE_MISSING",
        hint:
          process.env["NODE_ENV"] === "development"
            ? "STRIPE_DEVLOG_PRICE_ID を .env.local に設定するか、lib/devlogStripe.ts の DEVLOG_STRIPE_PRICE_ID を更新してください。"
            : "ご利用の Stripe アカウントで作成したサブスクリプション用 price_... を STRIPE_DEVLOG_PRICE_ID に設定してください。",
      },
      { status: 500 },
    );
  }

  const origin = publicOrigin(request);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      locale: "ja",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/dev-log/unlock?checkout=success`,
      cancel_url: `${origin}/dev-log/unlock?checkout=cancel`,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Checkout URL を取得できませんでした" },
        { status: 500 },
      );
    }
    return NextResponse.redirect(session.url);
  } catch (err) {
    console.error("[checkout/devlog-support]", err);
    return NextResponse.json({ error: "Checkout の開始に失敗しました" }, { status: 500 });
  }
}
