# Trading Journal Dashboard 📊

A comprehensive web-based dashboard for analyzing and visualizing options trading data. This interactive tool helps traders track their performance, analyze profit/loss patterns, and review daily trading activity.

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

## Quick Start

### 1. View the Dashboard

**Option A: Using Python (Recommended)**
```bash
# Navigate to the project directory
cd Trading-Journal

# Start a local web server
python3 -m http.server 8000

# Open your browser and go to:
# http://localhost:8000/trading_dashboard.html
```

**Option B: Direct File Access**
Simply double-click `trading_dashboard.html` to open it in your default browser.

### 2. Add Your Trading Data

1. **Export your trades** from your broker in CSV format
2. **Replace or update** the file `Orders_Data/Orders_data.CSV`
3. **Refresh** the browser page to see updated analytics

## CSV File Format

Your CSV file must include these columns:

| Column Name | Description | Example |
|-------------|-------------|---------|
| Activity Date | Trade date | 1/16/2026 |
| Transaction | Buy or Sell | Sell |
| Quantity | Number of contracts | 200 |
| Amount | Total transaction amount | 167.97 |
| Commission | Commission fees | 0.03 |
| Description | Trade description | PUT SPY 693.0000 20260116 |
| Activity Time | Timestamp | 1/16/2026 09:46:19:593 |
| Symbol | Option symbol | SPY260116P693 |
| CallPut | CALL or PUT | PUT |
| StrikePrice | Strike price | 693.0000 |

**Note**: Most broker exports will include all necessary columns automatically.

## How to Use

### Adding New Data

**Method 1: Append to Existing File**
```bash
# Add new trades to the existing CSV file
cat new_trades.csv >> Orders_Data/Orders_data.CSV
```

**Method 2: Replace the File**
1. Export new data from your broker
2. Save it as `Orders_data.CSV`
3. Place it in the `Orders_Data/` folder
4. Refresh your browser

### Changing the Data Source

To use a different CSV file:

1. Open `trading_dashboard.html`
2. Find line ~196: `const CSV_FILE_PATH = 'Orders_Data/Orders_data.CSV';`
3. Change to your file path: `const CSV_FILE_PATH = 'Orders_Data/your_file.csv';`
4. Save and refresh the browser

### Navigating the Dashboard

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
│   └── Orders_data.CSV       # Your trading data
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
- ✅ Check that `Orders_data.CSV` exists in `Orders_Data/` folder
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