"use client";

import { useState } from "react";
import type { DailyPL } from "@/lib/types";
import TradeModal from "./TradeModal";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface TradingCalendarProps {
  dailyPL: DailyPL;
}

export default function TradingCalendar({ dailyPL }: TradingCalendarProps) {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  function previousMonth() {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }

  function nextMonth() {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  }

  return (
    <div className="px-10 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h2 className="text-[#e4e4e7] font-medium text-xl">
          Monthly Trading Calendar
        </h2>
        <div className="flex gap-2 items-center">
          <button
            onClick={previousMonth}
            className="px-4 py-2 bg-[#18181b] text-[#e4e4e7] border border-white/[0.08] rounded-lg cursor-pointer text-[0.95rem] font-medium hover:bg-[#27272a] hover:border-white/[0.12] transition-all"
          >
            ◀
          </button>
          <span className="px-4 py-2 bg-[#18181b] text-[#e4e4e7] border border-white/[0.08] rounded-lg text-[0.95rem] font-medium min-w-[160px] text-center">
            {MONTHS[month]} {year}
          </span>
          <button
            onClick={nextMonth}
            className="px-4 py-2 bg-[#18181b] text-[#e4e4e7] border border-white/[0.08] rounded-lg cursor-pointer text-[0.95rem] font-medium hover:bg-[#27272a] hover:border-white/[0.12] transition-all"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 bg-[#0a0a0a] p-5 rounded-xl border border-white/[0.08]">
        {/* Day headers */}
        {DAYS_OF_WEEK.map((day) => (
          <div
            key={day}
            className="text-center font-medium py-2.5 text-zinc-500 text-xs uppercase tracking-wider"
          >
            {day}
          </div>
        ))}

        {/* Empty cells before first day */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <div
            key={`empty-${i}`}
            className="aspect-square border border-white/[0.03] rounded-lg bg-transparent"
          />
        ))}

        {/* Day cells */}
        {Array.from({ length: totalDays }).map((_, i) => {
          const day = i + 1;
          const dateStr = `${month + 1}/${day}/${year}`;
          const dayData = dailyPL[dateStr];
          const hasTrades = !!dayData;

          return (
            <div
              key={day}
              onClick={() => hasTrades && setSelectedDate(dateStr)}
              className={`aspect-square border border-white/[0.08] rounded-lg p-2.5 flex flex-col justify-between bg-[#18181b] transition-all hover:bg-[#1c1c1f] hover:border-white/[0.15] ${
                hasTrades ? "cursor-pointer" : ""
              }`}
            >
              <div className="font-medium text-[#e4e4e7] text-sm">{day}</div>
              {dayData && (
                <>
                  <div
                    className={`text-[0.85rem] font-semibold mt-1.5 ${
                      dayData.totalPL >= 0
                        ? "text-emerald-500"
                        : "text-red-500"
                    }`}
                  >
                    ${dayData.totalPL.toFixed(2)}
                  </div>
                  <div className="text-[0.7rem] text-zinc-500 mt-1">
                    {dayData.trades.length} trades
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Trade Detail Modal */}
      {selectedDate && dailyPL[selectedDate] && (
        <TradeModal
          date={selectedDate}
          dayData={dailyPL[selectedDate]}
          onClose={() => setSelectedDate(null)}
        />
      )}
    </div>
  );
}
