# Trading Journal 📊

A modern, browser-based trading journal dashboard for tracking and analyzing your options trading performance. Built with vanilla JavaScript, HTML5, and Chart.js - **no server required!**

## Features

### 📈 Performance Analytics
- **Cumulative P/L Chart**: Interactive line chart showing your trading performance over time
- **Key Statistics**: Total P/L, total trades, win rate, and average daily P/L
- **Visual Trends**: Identify winning and losing streaks at a glance

### 📅 Monthly Trading Calendar
- **Interactive Calendar View**: See daily P/L for each trading day
- **Color-Coded Days**: Green for profitable days, red for losses
- **Trade Count**: Quick view of number of trades per day
- **Click for Details**: Tap any day to see complete trade breakdown

### 💼 Trade Details Modal
- **Daily Summary**: Buy total, sell total, and commission breakdown
- **Individual Trades**: Complete list of all trades with timestamps
- **Transaction Details**: Price, quantity, amount, and commission for each trade

### 🎨 Modern Design
- Dark theme with glass-morphism effects
- Smooth animations and transitions
- Responsive layout (works on desktop, tablet, mobile)
- Professional blue/purple color scheme

## Quick Start

### 1. Open the Dashboard

Simply open `trading_dashboard.html` in your web browser - **no server setup required!**

```bash
# Option 1: Double-click the file
# Option 2: Right-click → Open With → Your preferred browser
# Option 3: Drag and drop into browser window
```

### 2. Upload Your CSV File

1. Click the **"📁 Upload CSV File"** button in the header
2. Select your trading data CSV file from your computer
3. The dashboard will automatically parse and display your data

**Tip:** Click the **ℹ️ icon** next to the upload button to see CSV format requirements.

## CSV File Format

### Required Columns

Your CSV file **must** include these columns:

| Column Name | Description | Example |
|-------------|-------------|---------|
| **Activity Date** | Trade date (M/D/YYYY format) | `1/16/2026` |
| **Transaction** | Must be "Buy" or "Sell" | `Sell` |
| **Amount** | Total transaction amount (dollars) | `167.97` |
| **Commission** | Commission fees (dollars) | `0.03` |

### Optional Columns

These columns enhance your trade details view but are not required:

| Column Name | Description | Example |
|-------------|-------------|---------|
| Quantity | Number of contracts | `200` |
| Description | Trade description | `PUT SPY 693.0000 20260116` |
| Activity Time | Timestamp of trade | `1/16/2026 09:46:19:593` |
| Price | Price per contract | `0.84` |
| Symbol | Option symbol | `SPY260116P693` |
| CallPut | CALL or PUT | `PUT` |
| StrikePrice | Strike price | `693.0000` |

### Example CSV

```csv
Activity Date,Transaction,Quantity,Amount,Commission,Description,Activity Time,Price
1/16/2026,Sell,200,167.97,0.03,PUT SPY 693.0000,1/16/2026 09:46:19,0.84
1/16/2026,Buy,200,160.02,0.02,PUT SPY 693.0000,1/16/2026 09:45:48,0.80
1/15/2026,Sell,400,87.94,0.06,CALL SPY 696.0000,1/15/2026 11:35:04,0.22
1/15/2026,Buy,500,145.06,0.06,CALL SPY 696.0000,1/15/2026 11:45:47,0.29
```

**Note**: Most broker exports (TD Ameritrade, E-Trade, etc.) will include all necessary columns automatically.

## How to Use

### Step 1: Export Your Trading Data

Export your trades from your broker in CSV format. Most brokers provide this feature:
- **TD Ameritrade**: My Account → History & Statements → Transaction History
- **E-Trade**: Accounts → Transactions → Download
- **Interactive Brokers**: Account Management → Reports → Flex Queries
- **Robinhood**: Account → Menu → History → Export

### Step 2: Upload to Dashboard

1. Open `trading_dashboard.html` in your browser
2. Click the **"📁 Upload CSV File"** button
3. Select your exported CSV file
4. Your data will load automatically

### Step 3: Explore Your Performance

**View Statistics**
- Check your Total P/L, Win Rate, and Average Daily P/L in the stat cards

**Analyze Trends**
- Review the cumulative P/L chart to see your performance trajectory
- Hover over points for detailed values

**Review Trading Days**
- Navigate through months using ◀ ▶ buttons
- Click any day with trades to see detailed breakdown
- Green days = profitable, Red days = losses

### Updating Your Data

Simply upload a new CSV file whenever you want to update your data. The dashboard will:
- Clear previous data
- Parse the new file
- Refresh all statistics and charts automatically

## Dashboard Navigation

**Statistics Cards**
- View overall trading performance metrics at the top
- Colors indicate positive (green) or negative (red) performance

**P/L Chart**
- Shows cumulative profit/loss over time
- Hover over points to see exact values
- Smooth line indicates trend direction

**Calendar**
- Navigate months using arrow buttons ◀ ▶
- Click any colored day to view detailed trades
- Empty days indicate no trading activity

**Trade Details**
- Click any calendar day with trades
- View complete breakdown of all transactions
- See buy/sell totals and commission costs
- Close modal by clicking the × or clicking outside

## Project Structure

```
Trading-Journal/
├── trading_dashboard.html    # Main dashboard application
├── Orders_Data/
│   └── Orders_data.csv       # Your trading data
└── README.md                 # This file
```

## Technical Details

### Technologies Used
- **HTML5/CSS3**: Modern, responsive design
- **JavaScript**: Dynamic data processing and interactivity
- **Chart.js**: Beautiful, interactive charts
- **No dependencies**: All libraries loaded from CDN

### Browser Compatibility
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Any modern browser with JavaScript enabled

### Data Privacy
- **100% Local**: All data processing happens in your browser
- **No Server Required**: Works completely offline (after initial load)
- **No Data Upload**: Your trading data never leaves your computer

## Calculations

### Daily P/L
```
Daily P/L = (Sell Total - Sell Commissions) - (Buy Total + Buy Commissions)
```

### Win Rate
```
Win Rate = (Number of Profitable Days / Total Trading Days) × 100
```

### Average P/L
```
Average P/L = Total P/L / Number of Trading Days
```

## Customization

### Changing Colors
Edit the CSS in `trading_dashboard.html`:
- Line ~12: Background gradient
- Line ~115: Positive color (default: green)
- Line ~119: Negative color (default: red)

### Modifying Chart Style
Edit Chart.js configuration around line ~580:
- Change `borderColor` for line color
- Adjust `tension` for curve smoothness
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