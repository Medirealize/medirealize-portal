/**
 * Stripe Customer Portal セッションを発行し、ポータル URL へリダイレクトする。
 */
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { resolveStripeCustomerIdForPortal } from "@/lib/subscription-access";
import { serverEnv } from "@/lib/serverEnv";
import { getStripeServer, stripeMisconfigurationBody } from "@/lib/stripeServer";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const NO_STORE = { "Cache-Control": "no-store, max-age=0" } as const;

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

function portalReturnUrl(request: NextRequest, origin: string): string {
  const fromEnv = serverEnv("STRIPE_RETURN_URL")?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  return `${origin}/dev-log`;
}

export async function GET(request: NextRequest) {
  const stripe = getStripeServer();
  if (!stripe) {
    return NextResponse.json(stripeMisconfigurationBody(), {
      status: 503,
      headers: NO_STORE,
    });
  }

  const origin = publicOrigin(request);
  const cookieStore = await cookies();
  if (cookieStore.get("devlog_access")?.value !== "1") {
    return NextResponse.redirect(new URL("/dev-log/unlock?portal=login", origin));
  }

  const email = cookieStore.get("devlog_email")?.value?.trim();
  if (!email) {
    return NextResponse.redirect(new URL("/dev-log/unlock?portal=login", origin));
  }

  const customerId = await resolveStripeCustomerIdForPortal(email);
  if (!customerId) {
    return NextResponse.redirect(new URL("/dev-log/unlock?portal=no-customer", origin));
  }

  const returnUrl = portalReturnUrl(request, origin);

  try {
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "ポータル URL を取得できませんでした" },
        { status: 500, headers: NO_STORE },
      );
    }
    return NextResponse.redirect(session.url);
  } catch (err) {
    console.error("[api/portal]", err);
    return NextResponse.json(
      { error: "カスタマーポータルの開始に失敗しました" },
      { status: 500, headers: NO_STORE },
    );
  }
}
