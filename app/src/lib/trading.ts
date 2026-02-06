import { Trade, DailyPL, TimeRange } from "./types";

export function parseCSV(csvText: string): Trade[] {
  const lines = csvText.trim().split("\n");
  const headers = lines[0].split(",").map((h) => h.trim());
  const trades: Trade[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",");
    if (values.length > 1) {
      const trade: Record<string, string> = {};
      headers.forEach((header, index) => {
        trade[header] = values[index]?.trim() || "";
      });
      trades.push(trade as unknown as Trade);
    }
  }

  return trades;
}

export function calculateDailyPL(trades: Trade[]): DailyPL {
  const dailyPL: DailyPL = {};

  trades.forEach((trade) => {
    const date = trade["Activity Date"];
    const transaction = trade["Transaction"];
    const amount = parseFloat(trade["Amount"]) || 0;
    const commission = parseFloat(trade["Commission"]) || 0;

    if (!dailyPL[date]) {
      dailyPL[date] = {
        totalPL: 0,
        trades: [],
        buyTotal: 0,
        sellTotal: 0,
        commissions: 0,
      };
    }

    dailyPL[date].trades.push(trade);
    dailyPL[date].commissions += commission;

    if (transaction === "Buy") {
      dailyPL[date].buyTotal += amount;
      dailyPL[date].totalPL -= amount + commission;
    } else if (transaction === "Sell") {
      dailyPL[date].sellTotal += amount;
      dailyPL[date].totalPL += amount - commission;
    }
  });

  return dailyPL;
}

export function calculateStats(dailyPL: DailyPL) {
  let totalPL = 0;
  let winningDays = 0;
  const tradingDays = Object.keys(dailyPL).length;
  let totalTrades = 0;

  Object.values(dailyPL).forEach((day) => {
    totalPL += day.totalPL;
    if (day.totalPL > 0) winningDays++;
    totalTrades += day.trades.length;
  });

  const winRate =
    tradingDays > 0 ? ((winningDays / tradingDays) * 100).toFixed(1) : "0";
  const avgPL = tradingDays > 0 ? (totalPL / tradingDays).toFixed(2) : "0.00";

  return { totalPL, totalTrades, winRate, avgPL: parseFloat(avgPL) };
}

export function getChartDataByTimeRange(
  dailyPL: DailyPL,
  range: TimeRange
): { labels: string[]; values: number[] } {
  const sortedDates = Object.keys(dailyPL).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  if (sortedDates.length === 0) {
    return { labels: [], values: [] };
  }

  const today = new Date();
  let startDate = new Date(sortedDates[0]);

  switch (range) {
    case "1W":
      startDate = new Date(today);
      startDate.setDate(today.getDate() - 7);
      break;
    case "1M":
      startDate = new Date(today);
      startDate.setMonth(today.getMonth() - 1);
      break;
    case "3M":
      startDate = new Date(today);
      startDate.setMonth(today.getMonth() - 3);
      break;
    case "6M":
      startDate = new Date(today);
      startDate.setMonth(today.getMonth() - 6);
      break;
    case "1Y":
      startDate = new Date(today);
      startDate.setFullYear(today.getFullYear() - 1);
      break;
    case "3Y":
      startDate = new Date(today);
      startDate.setFullYear(today.getFullYear() - 3);
      break;
    case "YTD":
      startDate = new Date(today.getFullYear(), 0, 1);
      break;
  }

  const filteredDates = sortedDates.filter(
    (date) => new Date(date) >= startDate
  );

  let cumulative = 0;
  const labels: string[] = [];
  const values: number[] = [];

  filteredDates.forEach((date) => {
    cumulative += dailyPL[date].totalPL;
    labels.push(formatDateForChart(date, range));
    values.push(cumulative);
  });

  return { labels, values };
}

function formatDateForChart(dateStr: string, range: TimeRange): string {
  const date = new Date(dateStr);
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  if (range === "1W" || range === "1M" || range === "3M" || range === "6M") {
    return `${month} ${day}`;
  }
  return `${month} ${day}, ${year}`;
}
