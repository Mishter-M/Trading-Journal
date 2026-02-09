# Trading Journal 📊

A modern trading journal web app for tracking and analyzing your options trading performance. Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Supabase Auth**, and **Chart.js** — deployed on **Vercel**.

## Architecture

```
Trading-Journal/
├── app/                    # Next.js application
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx           # Public landing page
│   │   │   ├── login/             # Auth pages (signup/login)
│   │   │   ├── dashboard/         # Protected trading dashboard
│   │   │   └── auth/callback/     # OAuth callback handler
│   │   ├── components/
│   │   │   ├── dashboard/         # Dashboard components
│   │   │   │   ├── TradingDashboard.tsx
│   │   │   │   ├── CSVUpload.tsx
│   │   │   │   ├── StatsCards.tsx
│   │   │   │   ├── PLChart.tsx
│   │   │   │   ├── TradingCalendar.tsx
│   │   │   │   ├── TradeModal.tsx
│   │   │   │   └── InfoModal.tsx
│   │   │   └── ui/               # shadcn/ui components
│   │   ├── lib/
│   │   │   ├── supabase/         # Supabase client/server/middleware
│   │   │   ├── trading.ts        # CSV parsing & P/L calculations
│   │   │   └── types.ts          # TypeScript types
│   │   └── middleware.ts         # Route protection
│   └── .env.local               # Supabase credentials (not committed)
├── index.html                    # Original standalone dashboard (legacy)
└── Orders_Data/                  # Sample CSV data
```

## Features

### � Authentication
- Email/password signup & login via Supabase Auth
- Protected dashboard route with middleware
- Session management with cookie-based auth

### �📈 Performance Analytics
- **Cumulative P/L Chart**: Interactive chart with time range filters (1W, 1M, 3M, 6M, 1Y, 3Y, YTD)
- **Key Statistics**: Total P/L, total trades, win rate, and average daily P/L
- **Visual Trends**: Identify winning and losing streaks at a glance

### 📅 Monthly Trading Calendar
- **Interactive Calendar View**: See daily P/L for each trading day
- **Color-Coded Days**: Green for profitable days, red for losses
- **Click for Details**: Tap any day to see complete trade breakdown

### 💼 Trade Details Modal
- **Daily Summary**: Buy total, sell total, and commission breakdown
- **Individual Trades**: Complete list of all trades with timestamps

### 🎨 Modern Design
- Pure black theme (#000000) with subtle borders
- Responsive layout (desktop, tablet, mobile)
- shadcn/ui component library

## Quick Start

### Prerequisites
- Node.js 18+
- A Supabase project ([supabase.com](https://supabase.com))

### 1. Install Dependencies

```bash
cd app
npm install
```

### 2. Configure Environment

Create `app/.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 3. Run Development Server

```bash
cd app
npm run dev
```

### 4. Upload Your CSV File

1. Sign up or log in
2. Click **"📁 Upload CSV File"** in the dashboard
3. Select your trading data CSV file
4. Dashboard displays stats, chart, and calendar instantly

## CSV File Format

### Required Columns

## CSV File Format

### Required Columns

| Column Name | Description | Example |
|-------------|-------------|---------|
| **Activity Date** | Trade date (M/D/YYYY format) | `1/16/2026` |
| **Transaction** | Must be "Buy" or "Sell" | `Sell` |
| **Amount** | Total transaction amount (dollars) | `167.97` |
| **Commission** | Commission fees (dollars) | `0.03` |

### Optional Columns

| Column Name | Description | Example |
|-------------|-------------|---------|
| Quantity | Number of contracts | `200` |
| Description | Trade description | `PUT SPY 693.0000 20260116` |
| Activity Time | Timestamp of trade | `1/16/2026 09:46:19:593` |
| Price | Price per contract | `0.84` |

### Example CSV

```csv
Activity Date,Transaction,Quantity,Amount,Commission,Description,Activity Time,Price
1/16/2026,Sell,200,167.97,0.03,PUT SPY 693.0000,1/16/2026 09:46:19,0.84
1/16/2026,Buy,200,160.02,0.02,PUT SPY 693.0000,1/16/2026 09:45:48,0.80
```

**Note**: Most broker exports (TD Ameritrade, E-Trade, etc.) will include all necessary columns automatically.

## Deployment

Hosted on **Vercel** with automatic deployments from GitHub.

- **Production**: Deploys from `main` branch
- **Preview**: Deploys from feature branches

### Environment Variables (Vercel)

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key |

## Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS + shadcn/ui
- **Auth**: Supabase Auth (email/password)
- **Charts**: Chart.js + react-chartjs-2
- **Hosting**: Vercel
- **Database**: Supabase (PostgreSQL)
- Modify `pointRadius` for point size

## Troubleshooting

### Dashboard shows no data
- ✅ Check that `Orders_data.csv` exists in `Orders_Data/` folder
- ✅ Verify CSV file path in HTML matches actual file location
- ✅ Open browser console (F12) to check for errors

### Calendar shows wrong month
- Use arrow buttons to navigate to the correct month
- Data will only appear for months with trading activity

### Trades not grouping correctly
- Ensure `Activity Date` column format is consistent (M/D/YYYY)
- Check for extra spaces or special characters in dates

### Charts not displaying
- Check internet connection (Chart.js loads from CDN)
- Try refreshing the page
- Clear browser cache if issues persist

## Future Enhancements

Potential features for future versions:
- [ ] Multiple timeframe views (weekly, monthly, yearly)
- [ ] Trade filtering by symbol, type, or strategy
- [ ] Export reports to PDF
- [ ] Strategy performance comparison
- [ ] Risk metrics (Sharpe ratio, max drawdown)
- [ ] Import data from multiple brokers

## Support

For issues or questions:
1. Check this README for solutions
2. Review the browser console for errors
3. Verify your CSV file format matches requirements

## License

This project is open source and available for personal use.

---

**Happy Trading! 🚀**

*Track your performance, improve your strategy, and grow your portfolio.*