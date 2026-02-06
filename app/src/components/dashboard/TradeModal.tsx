"use client";

import { useEffect } from "react";
import type { DayData } from "@/lib/types";

interface TradeModalProps {
  date: string;
  dayData: DayData;
  onClose: () => void;
}

export default function TradeModal({ date, dayData, onClose }: TradeModalProps) {
  // Close on escape key
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/85 flex items-start justify-center pt-[50px] overflow-y-auto"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#0a0a0a] p-8 rounded-xl max-w-[900px] w-full mx-4 border border-white/[0.08] max-h-[85vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-[#e4e4e7] font-medium text-xl">
            Trades for {date}
          </h2>
          <button
            onClick={onClose}
            className="text-zinc-500 text-3xl font-light cursor-pointer hover:text-[#e4e4e7] transition-colors leading-none"
          >
            ×
          </button>
        </div>

        {/* Daily Summary */}
        <div className="mb-5 p-5 bg-[rgba(30,41,59,0.6)] border border-white/10 rounded-xl">
          <h3 className="text-blue-400 mb-4 text-[1.1rem] font-medium">
            Daily Summary
          </h3>
          <p className="text-[#e2e8f0] mb-2">
            <strong>Total P/L:</strong>{" "}
            <span
              className={`text-lg ${
                dayData.totalPL >= 0 ? "text-emerald-500" : "text-red-500"
              }`}
            >
              ${dayData.totalPL.toFixed(2)}
            </span>
          </p>
          <p className="text-[#94a3b8] mb-1.5">
            <strong className="text-[#e2e8f0]">Buy Total:</strong> $
            {dayData.buyTotal.toFixed(2)}
          </p>
          <p className="text-[#94a3b8] mb-1.5">
            <strong className="text-[#e2e8f0]">Sell Total:</strong> $
            {dayData.sellTotal.toFixed(2)}
          </p>
          <p className="text-[#94a3b8]">
            <strong className="text-[#e2e8f0]">Total Commissions:</strong> $
            {dayData.commissions.toFixed(2)}
          </p>
        </div>

        {/* Individual Trades */}
        {dayData.trades.map((trade, i) => (
          <div
            key={i}
            className={`p-4 mb-2.5 bg-[#18181b] rounded-lg border-l-[3px] hover:bg-[#1c1c1f] transition-colors ${
              trade.Transaction?.toLowerCase() === "buy"
                ? "border-l-red-500"
                : trade.Transaction?.toLowerCase() === "sell"
                ? "border-l-emerald-500"
                : "border-l-zinc-500"
            }`}
          >
            <strong className="text-[#e4e4e7]">{trade.Transaction}</strong>{" "}
            {trade.Quantity} {trade.Description}
            <br />
            <small className="text-zinc-500">
              Time: {trade["Activity Time"] || "N/A"}
            </small>
            <br />
            <small className="text-zinc-500">
              Price: ${trade.Price || "N/A"} | Amount: ${trade.Amount} |
              Commission: ${trade.Commission}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
