"use client";

import { useState } from "react";
import CSVUpload from "./CSVUpload";
import StatsCards from "./StatsCards";
import PLChart from "./PLChart";
import TradingCalendar from "./TradingCalendar";
import InfoModal from "./InfoModal";
import { parseCSV, calculateDailyPL, calculateStats } from "@/lib/trading";
import type { DailyPL } from "@/lib/types";

export default function TradingDashboard() {
  const [dailyPL, setDailyPL] = useState<DailyPL>({});
  const [stats, setStats] = useState({
    totalPL: 0,
    totalTrades: 0,
    winRate: "0",
    avgPL: 0,
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const hasData = Object.keys(dailyPL).length > 0;

  function handleFileLoaded(csvText: string, name: string) {
    const trades = parseCSV(csvText);
    const pl = calculateDailyPL(trades);
    const s = calculateStats(pl);
    setDailyPL(pl);
    setStats(s);
    setFileName(name);
  }

  return (
    <>
      {/* Upload Section */}
      <div className="px-10 py-8 text-center border-b border-white/5">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <CSVUpload onFileLoaded={handleFileLoaded} fileName={fileName} />
          <button
            onClick={() => setShowInfo(true)}
            className="inline-flex items-center justify-center w-7 h-7 bg-[#18181b] text-zinc-500 border border-white/[0.08] rounded-full text-sm font-medium cursor-pointer hover:bg-[#27272a] hover:text-[#e4e4e7] hover:border-white/[0.15] transition-all"
            title="CSV Format Requirements"
          >
            ⓘ
          </button>
        </div>
      </div>

      {/* Stats */}
      <StatsCards
        totalPL={stats.totalPL}
        totalTrades={stats.totalTrades}
        winRate={stats.winRate}
        avgPL={stats.avgPL}
      />

      {/* Chart */}
      {hasData && <PLChart dailyPL={dailyPL} />}

      {/* Calendar */}
      {hasData && <TradingCalendar dailyPL={dailyPL} />}

      {/* Info Modal */}
      {showInfo && <InfoModal onClose={() => setShowInfo(false)} />}
    </>
  );
}
