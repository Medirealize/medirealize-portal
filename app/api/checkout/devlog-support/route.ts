/**
 * 開発日誌の月額購読（Stripe Checkout / Subscription）
 */
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { DEVLOG_STRIPE_PRICE_ID } from "@/lib/devlogStripe";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ error: "Stripe は未設定です" }, { status: 500 });
  }

  const priceId = process.env.STRIPE_DEVLOG_PRICE_ID ?? DEVLOG_STRIPE_PRICE_ID;
  const stripe = new Stripe(secretKey);
  const origin = request.headers.get("origin") ?? request.nextUrl.origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/dev-log/unlock?checkout=success`,
      cancel_url: `${origin}/?from=checkout#products`,
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
