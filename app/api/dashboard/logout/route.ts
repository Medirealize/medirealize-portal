import { NextResponse } from "next/server";
import { DASHBOARD_COOKIE_NAME } from "@/lib/dashboard-auth";

export async function GET(request: Request) {
  const url = new URL("/dashboard/login", request.url);
  const response = NextResponse.redirect(url);
  response.cookies.set(DASHBOARD_COOKIE_NAME, "", { path: "/", maxAge: 0 });
  return response;
}
