import type { ReactNode } from "react";
import { STRIPE_CUSTOMER_PORTAL_DOCS_URL } from "@/lib/stripeLinks";

export const stripePortalLinkClassName =
  "font-medium text-[#1877F2] underline decoration-[#1877F2]/40 underline-offset-2 hover:decoration-[#1877F2]";

type StripeCustomerPortalLinkProps = {
  className?: string;
  /** 文言: 既定は「Stripeのカスタマーポータル」 */
  children?: ReactNode;
};

/** Stripe カスタマーポータル（公式ドキュメント）へのリンク */
export default function StripeCustomerPortalLink({
  className,
  children = "Stripeのカスタマーポータル",
}: StripeCustomerPortalLinkProps) {
  return (
    <a
      href={STRIPE_CUSTOMER_PORTAL_DOCS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className ?? stripePortalLinkClassName}
    >
      {children}
    </a>
  );
}

/** 購読停止の案内文（リンク埋め込み） */
export function DevlogSubscriptionCancelNote({ className }: { className?: string }) {
  return (
    <p className={className}>
      購読の停止（サブスクリプションの解約）は、
      <StripeCustomerPortalLink className={stripePortalLinkClassName} />
      からいつでもお手続きいただけます。
    </p>
  );
}
