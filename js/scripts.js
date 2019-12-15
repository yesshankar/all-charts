let wrapper = document.getElementById("wrapper");
let containers = [];
let container;
let tvScript;
let widthOffset = 5;
let heightOffset = 2;

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

charts.forEach((chart, i) => {
  container = document.createElement("div");
  container.className = "chart-container";
  wrapper.appendChild(container);
  containers.push(container);

  container.innerHTML = `
          <!-- TradingView Widget BEGIN -->
          <div class="tradingview-widget-container">
              <div id="tradingview_">${i + 1}</div>
          </div>
          <!-- TradingView Widget END -->
      `;
});

containers.forEach((chartContainer, i) => {
  let width = chartContainer.clientWidth - widthOffset;
  let height = Math.round(width / 2) - heightOffset;

  populateChart(chartContainer, charts[i], width, height);
});

function populateChart(elem, chart, width, height) {
  elem.innerHTML = `
        <!-- TradingView Widget BEGIN -->
        <div class="tradingview-widget-container">
            <div id="tradingview_${chart.id}"></div>
        </div>
        <!-- TradingView Widget END -->
    `;

  tvScript = document.createElement("script");
  tvScript.textContent = `
        new TradingView.widget(
            {
                "width": ${width},
                "height": ${height},
                "symbol": "${chart.symbol}",
                "interval": "5",
                "timezone": "Etc/UTC",
                "theme": "Dark",
                "style": "1",
                "locale": "en",
                "toolbar_bg": "#f1f3f6",
                "enable_publishing": false,
                "allow_symbol_change": true,
                "container_id": "tradingview_${chart.id}"
            }
        );
    `;

  elem.children[0].appendChild(tvScript);
}

function resizeCharts() {
  let iframes = document.querySelectorAll("iframe");

  containers.forEach((container, i) => {
    let width = container.clientWidth - widthOffset;
    let height = Math.round(width / 2) - heightOffset;
    let iframeParent = iframes[i].parentElement;

    container.style.height = height + "px";
    iframeParent.parentElement.style.width = width + "px";
    iframeParent.parentElement.style.height = height + "px";
    iframeParent.style.width = width + "px";
    iframeParent.style.height = height + "px";
  });
}

window.addEventListener("resize", resizeCharts);
