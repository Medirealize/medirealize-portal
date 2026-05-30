import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  DASHBOARD_COOKIE_NAME,
  isValidDashboardSession,
} from "@/lib/dashboard-auth";

export default async function ProtectedDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const session = cookieStore.get(DASHBOARD_COOKIE_NAME)?.value;
  if (!isValidDashboardSession(session)) {
    redirect("/dashboard/login");
  }

  return children;
}
