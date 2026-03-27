import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL("/dev-log/unlock", request.url);
  const response = NextResponse.redirect(url);
  response.cookies.set("devlog_access", "", { path: "/", maxAge: 0 });
  response.cookies.set("devlog_email", "", { path: "/", maxAge: 0 });
  return response;
}

