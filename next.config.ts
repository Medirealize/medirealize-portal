import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Stripe SDK をサーバーバンドルから外し、ランタイム解決を安定させる
  serverExternalPackages: ["stripe"],
};

export default nextConfig;
