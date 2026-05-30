import { createHmac, timingSafeEqual } from "node:crypto";
import { serverEnv } from "@/lib/serverEnv";

export const DASHBOARD_COOKIE_NAME = "lp_dashboard_session" as const;

const SESSION_SALT = "medirealize-lp-dashboard-v1";

function sessionToken(): string | null {
  const password = serverEnv("LP_DASHBOARD_PASSWORD");
  if (!password) return null;
  return createHmac("sha256", password).update(SESSION_SALT).digest("hex");
}

export function isDashboardConfigured(): boolean {
  return Boolean(serverEnv("LP_DASHBOARD_PASSWORD"));
}

export function verifyDashboardPassword(input: string): boolean {
  const password = serverEnv("LP_DASHBOARD_PASSWORD");
  if (!password) return false;

  const provided = Buffer.from(input);
  const expected = Buffer.from(password);
  if (provided.length !== expected.length) return false;

  return timingSafeEqual(provided, expected);
}

export function createDashboardSessionValue(): string | null {
  return sessionToken();
}

export function isValidDashboardSession(cookieValue: string | undefined): boolean {
  const expected = sessionToken();
  if (!expected || !cookieValue) return false;

  const provided = Buffer.from(cookieValue);
  const expectedBuf = Buffer.from(expected);
  if (provided.length !== expectedBuf.length) return false;

  return timingSafeEqual(provided, expectedBuf);
}

export const DASHBOARD_SESSION_MAX_AGE = 60 * 60 * 24 * 14;
