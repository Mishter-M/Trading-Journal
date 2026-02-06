"use client";

import { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { DailyPL, TimeRange } from "@/lib/types";
import { getChartDataByTimeRange } from "@/lib/trading";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
);

const TIME_RANGES: TimeRange[] = ["1W", "1M", "3M", "6M", "1Y", "3Y", "YTD"];

interface PLChartProps {
  dailyPL: DailyPL;
}

export default function PLChart({ dailyPL }: PLChartProps) {
  const [range, setRange] = useState<TimeRange>("3M");
  const chartRef = useRef<ChartJS<"line">>(null);
  const chartData = getChartDataByTimeRange(dailyPL, range);

  // Force chart re-render on range change
  useEffect(() => {
    chartRef.current?.update();
  }, [range]);

  return (
    <div className="px-10 py-8">
      <div className="flex justify-between items-center mb-5 flex-wrap gap-4">
        <h2 className="text-[#e4e4e7] font-medium text-xl">
          Cumulative P/L Chart
        </h2>
        <div className="flex gap-0.5 bg-[#18181b] p-[3px] rounded-lg border border-white/[0.08]">
          {TIME_RANGES.map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-3.5 py-1.5 border-none rounded-md cursor-pointer text-[0.85rem] font-medium transition-all font-[Inter] ${
                range === r
                  ? "bg-[#27272a] text-white"
                  : "bg-transparent text-zinc-500 hover:text-[#e4e4e7] hover:bg-white/5"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      <div className="relative h-[400px] bg-[#0a0a0a] border border-white/[0.08] rounded-xl p-6">
        <Line
          ref={chartRef}
          data={{
            labels: chartData.labels,
            datasets: [
              {
                label: "Cumulative P/L",
                data: chartData.values,
                borderColor: "#34d399",
                backgroundColor: (context) => {
                  const chart = context.chart;
                  const { ctx, chartArea } = chart;
                  if (!chartArea) return "transparent";
                  const gradient = ctx.createLinearGradient(
                    0,
                    chartArea.top,
                    0,
                    chartArea.bottom
                  );
                  gradient.addColorStop(0, "rgba(52, 211, 153, 0.3)");
                  gradient.addColorStop(0.5, "rgba(52, 211, 153, 0.1)");
                  gradient.addColorStop(1, "rgba(52, 211, 153, 0.0)");
                  return gradient;
                },
                borderWidth: 2,
                fill: true,
                tension: 0.1,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: "#34d399",
                pointHoverBorderColor: "#fff",
                pointHoverBorderWidth: 2,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            interaction: { intersect: false, mode: "index" },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: "rgba(15, 23, 42, 0.95)",
                titleColor: "#e2e8f0",
                bodyColor: "#94a3b8",
                borderColor: "rgba(255, 255, 255, 0.1)",
                borderWidth: 1,
                padding: 12,
                displayColors: false,
                callbacks: {
                  label: (ctx) => "$" + (ctx.parsed.y ?? 0).toFixed(2),
                },
              },
            },
            scales: {
              x: {
                display: true,
                grid: { display: false },
                ticks: {
                  color: "#64748b",
                  font: { size: 11 },
                  maxRotation: 0,
                  autoSkipPadding: 20,
                },
              },
              y: {
                display: true,
                position: "right",
                grid: { color: "rgba(255, 255, 255, 0.05)" },
                ticks: {
                  color: "#64748b",
                  font: { size: 11 },
                  callback: (value) => "$" + Number(value).toFixed(0),
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}
