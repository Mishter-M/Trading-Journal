import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
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
            <span className="text-lg font-semibold tracking-tight">
              Trading Journal
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm text-zinc-400 hover:text-white px-4 py-2 rounded-lg hover:bg-white/[0.05] transition-all"
            >
              Sign In
            </Link>
            <Link
              href="/login"
              className="text-sm bg-white text-black font-medium px-5 py-2 rounded-lg hover:bg-zinc-200 transition-colors"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/[0.04] rounded-full blur-[150px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 pt-28 pb-20 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Free to use — No credit card required
          </div>
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
            Track your trades.
            <br />
            <span className="text-zinc-500">Improve your edge.</span>
          </h1>
          <p className="text-lg text-zinc-500 max-w-xl mx-auto mb-10 leading-relaxed">
            Upload your trading data and get instant analytics — P/L tracking,
            win rate, daily calendar view, and cumulative performance charts.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/login"
              className="bg-white text-black font-medium px-8 py-3 rounded-lg hover:bg-zinc-200 transition-colors text-base"
            >
              Start Journaling →
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-[#0a0a0a] border border-white/[0.08] rounded-2xl p-8">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-emerald-400"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <h3 className="text-white font-medium text-lg mb-2">
              CSV Upload
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Simply upload your broker&apos;s CSV export. We parse it instantly and
              show your performance — no manual data entry needed.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#0a0a0a] border border-white/[0.08] rounded-2xl p-8">
            <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-blue-400"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
            </div>
            <h3 className="text-white font-medium text-lg mb-2">
              P/L Analytics
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Cumulative P/L charts with time range filters (1W to 3Y). See your
              total P/L, win rate, and average daily performance at a glance.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#0a0a0a] border border-white/[0.08] rounded-2xl p-8">
            <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-purple-400"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
            </div>
            <h3 className="text-white font-medium text-lg mb-2">
              Trading Calendar
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Visual monthly calendar showing daily P/L. Click any day to see
              individual trade details, summaries, and breakdowns.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
          <span className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Trading Journal
          </span>
          <span className="text-zinc-700 text-xs">
            Your data stays private. 100% secure with Supabase Auth.
          </span>
        </div>
      </footer>
    </div>
  );
}
