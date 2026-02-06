export interface Trade {
  "Activity Date": string;
  Transaction: string;
  Amount: string;
  Commission: string;
  Quantity?: string;
  Description?: string;
  "Activity Time"?: string;
  Price?: string;
  [key: string]: string | undefined;
}

export interface DayData {
  totalPL: number;
  trades: Trade[];
  buyTotal: number;
  sellTotal: number;
  commissions: number;
}

export type DailyPL = Record<string, DayData>;

export type TimeRange = "1W" | "1M" | "3M" | "6M" | "1Y" | "3Y" | "YTD";
