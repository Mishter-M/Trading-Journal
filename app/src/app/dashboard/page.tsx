import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signout } from "../login/actions";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-emerald-400"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
            </div>
            <h1 className="text-lg font-semibold tracking-tight">Trading Journal</h1>
          </div>

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
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-lg mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-emerald-400"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" x2="8" y1="13" y2="13" />
              <line x1="16" x2="8" y1="17" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-3">Welcome, {user.user_metadata?.full_name || 'Trader'}!</h2>
          <p className="text-zinc-500 text-sm leading-relaxed mb-8">
            Your dashboard is ready. The full trading dashboard with CSV upload, 
            P/L charts, and calendar will be connected here in the next step.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Phase 1 — Authentication Complete
          </div>
        </div>
      </main>
    </div>
  );
}
