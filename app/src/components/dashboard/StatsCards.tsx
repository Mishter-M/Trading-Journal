"use client";

interface StatsCardsProps {
  totalPL: number;
  totalTrades: number;
  winRate: string;
  avgPL: number;
}

export default function StatsCards({
  totalPL,
  totalTrades,
  winRate,
  avgPL,
}: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10 py-8">
      <div className="text-center">
        <h3 className="text-zinc-500 text-xs uppercase tracking-widest font-medium mb-3">
          Total P/L
        </h3>
        <div
          className={`text-[2.5rem] font-semibold tracking-tight ${
            totalPL >= 0 ? "text-emerald-500" : "text-red-500"
          }`}
        >
          ${totalPL.toFixed(2)}
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-zinc-500 text-xs uppercase tracking-widest font-medium mb-3">
          Total Trades
        </h3>
        <div className="text-[2.5rem] font-semibold tracking-tight text-[#e4e4e7]">
          {totalTrades}
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-zinc-500 text-xs uppercase tracking-widest font-medium mb-3">
          Win Rate
        </h3>
        <div className="text-[2.5rem] font-semibold tracking-tight text-[#e4e4e7]">
          {winRate}%
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-zinc-500 text-xs uppercase tracking-widest font-medium mb-3">
          Avg P/L per Day
        </h3>
        <div
          className={`text-[2.5rem] font-semibold tracking-tight ${
            avgPL >= 0 ? "text-emerald-500" : "text-red-500"
          }`}
        >
          ${avgPL.toFixed(2)}
        </div>
      </div>
    </div>
  );
}
