import React, { useState } from 'react';

const Binance = require('binance-api-node').default;

const client = Binance();

// Connect to the WebSocket stream for the ticker symbol
const ws = client.ws.ticker('BTCUSDT', (ticker) => {
  console.log(ticker);
});


function Ticker() {
  const [tickerValue, setTickerValue] = useState('');

  // WebSocket connection code goes here

  return (
    <div>
      <h1>BTCUSDT: {tickerValue}</h1>
    </div>
  );
}

export default Ticker;