let wrapper = document.getElementById("wrapper");
let containerWidth = 500;
let container;
let tvScript;

const charts = [
  { id: "428e7", symbol: "COINBASE:BTCUSD" },
  { id: "f3d40", symbol: "COINBASE:ETHUSD" },
  { id: "428f7", symbol: "COINBASE:XRPUSD" },
  { id: "f2e40", symbol: "COINBASE:BCHUSD" },
  { id: "f3d41", symbol: "COINBASE:LTCUSD" },
  { id: "429f7", symbol: "COINBASE:EOSUSD" },
  { id: "f3e40", symbol: "BINANCE:BNBUSDT" },
  { id: "f2d40", symbol: "HUOBI:BSVUSDT" },
  { id: "f4e40", symbol: "COINBASE:XLMUSD" }
];

charts.forEach((value, index) => {
  container = document.createElement("div");
  container.className = "chart-container";
  wrapper.appendChild(container);

  container.innerHTML = `
        <!-- TradingView Widget BEGIN -->
        <div class="tradingview-widget-container">
            <div id="tradingview_${charts[index].id}"></div>
        </div>
        <!-- TradingView Widget END -->
    `;

  tvScript = document.createElement("script");
  tvScript.textContent = `
        new TradingView.widget(
            {
                "width": ${containerWidth},
                "height": 280,
                "symbol": "${charts[index].symbol}",
                "interval": "5",
                "timezone": "Etc/UTC",
                "theme": "Dark",
                "style": "1",
                "locale": "en",
                "toolbar_bg": "#f1f3f6",
                "enable_publishing": false,
                "allow_symbol_change": true,
                "container_id": "tradingview_${charts[index].id}"
            }
        );
    `;

  container.children[0].appendChild(tvScript);
});
