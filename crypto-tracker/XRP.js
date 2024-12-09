const apiUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
