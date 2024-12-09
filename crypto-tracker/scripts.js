const apiUrl = 'https://api.binance.com/api/v3/ticker/price'; // Binance API Endpoint

async function fetchPrices() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  // Filter BTC and XRP
  const cryptos = data.filter(crypto => ['BTCUSDT', 'XRPUSDT'].includes(crypto.symbol));
  const container = document.getElementById('crypto-container');

  container.innerHTML = ''; // Clear previous data
  cryptos.forEach(crypto => {
    const element = document.createElement('div');
    element.className = 'crypto';
    element.innerHTML = `
      <h2>${crypto.symbol.replace('USDT', '')}</h2>
      <p class="price">$${parseFloat(crypto.price).toFixed(2)}</p>
    `;
    container.appendChild(element);
  });
}

// Refresh prices every 10 seconds
setInterval(fetchPrices, 10000);
fetchPrices();
