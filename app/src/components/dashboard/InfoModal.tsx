"use client";

import { useEffect } from "react";

interface InfoModalProps {
  onClose: () => void;
}

export default function InfoModal({ onClose }: InfoModalProps) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[2000] bg-black/85 flex items-start justify-center pt-[100px]"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#0a0a0a] p-8 rounded-xl max-w-[650px] w-full mx-4 border border-white/[0.08]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[#e4e4e7] font-medium text-lg">
            📋 Required CSV Columns
          </h3>
          <button
            onClick={onClose}
            className="text-zinc-500 text-3xl font-light cursor-pointer hover:text-[#e4e4e7] transition-colors leading-none"
          >
            ×
          </button>
        </div>
        <p className="text-zinc-500 leading-relaxed mb-4">
          Your CSV file must contain the following columns for the dashboard to
          work correctly:
        </p>
        <ul className="list-none p-0">
          <li className="py-2.5 border-b border-white/5 text-[#e4e4e7]">
            <span className="text-red-500 font-medium">✓ Activity Date</span> -
            Date of the trade (e.g., 1/16/2026)
          </li>
          <li className="py-2.5 border-b border-white/5 text-[#e4e4e7]">
            <span className="text-red-500 font-medium">✓ Transaction</span> -
            Must be either &quot;Buy&quot; or &quot;Sell&quot;
          </li>
          <li className="py-2.5 border-b border-white/5 text-[#e4e4e7]">
            <span className="text-red-500 font-medium">✓ Amount</span> - Trade
            amount in dollars (numeric)
          </li>
          <li className="py-2.5 border-b border-white/5 text-[#e4e4e7]">
            <span className="text-red-500 font-medium">✓ Commission</span> -
            Commission fee in dollars (numeric)
          </li>
        </ul>

        <h3 className="text-[#e4e4e7] font-medium text-lg mt-5 mb-4">
          📝 Optional Columns
        </h3>
        <p className="text-zinc-500 leading-relaxed mb-4">
          These columns will be displayed in trade details if present:
        </p>
        <ul className="list-none p-0">
          <li className="py-2.5 border-b border-white/5 text-[#e4e4e7]">
            <span className="text-emerald-500 font-medium">○ Quantity</span> -
            Number of contracts
          </li>
          <li className="py-2.5 border-b border-white/5 text-[#e4e4e7]">
            <span className="text-emerald-500 font-medium">○ Description</span>{" "}
            - Trade description
          </li>
          <li className="py-2.5 border-b border-white/5 text-[#e4e4e7]">
            <span className="text-emerald-500 font-medium">
              ○ Activity Time
            </span>{" "}
            - Time of the trade
          </li>
          <li className="py-2.5 text-[#e4e4e7]">
            <span className="text-emerald-500 font-medium">○ Price</span> -
            Price per contract
          </li>
        </ul>

        <p className="mt-5 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-slate-400">
          <strong className="text-blue-400">Note:</strong> The CSV file should
          have a header row with column names. Additional columns will be
          ignored.
        </p>
      </div>
    </div>
  );
}
