import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signout } from "../login/actions";
import TradingDashboard from "@/components/dashboard/TradingDashboard";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-black text-[#e2e8f0] font-[Inter]">
      <div className="max-w-[1600px] mx-auto bg-[#0a0a0a] border border-white/[0.08] rounded-2xl overflow-hidden my-5 mx-5">
        {/* Header */}
        <div className="bg-transparent border-b border-white/5 text-white px-10 pt-12 pb-8 text-center">
          <div className="flex justify-end mb-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-zinc-500">{user.email}</span>
              <form action={signout}>
                <button
                  type="submit"
                  className="text-sm text-zinc-500 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/[0.05] border border-transparent hover:border-white/[0.08] transition-all cursor-pointer"
                >
                  Sign Out
                </button>
              </form>
            </div>
          </div>
          <h1 className="text-[2.2em] font-semibold mb-2 text-white tracking-tight">
            Trading Journal
          </h1>
          <p className="text-zinc-500 text-[0.95rem] font-normal">
            Track your trading performance with real-time analytics
          </p>
        </div>

        {/* Trading Dashboard (Client Component) */}
        <TradingDashboard />
      </div>
    </div>
  );
}
