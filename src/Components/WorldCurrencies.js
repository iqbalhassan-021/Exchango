// components/WorldCurrencies.jsx
import React from 'react';

function WorldCurrencies() {
  const currencies = [
    { code: 'USD', price: '1.00', down: 'No', more: 'No' },
    { code: 'AUE', price: '3.67', down: 'No', more: 'Yes' },
    { code: 'PKR', price: '280.50', down: 'Yes', more: 'No' },
    { code: 'EUR', price: '1.09', down: 'No', more: 'Yes' },
  ];

  return (
    <div className="world-currencies">
      <div className="page-cover">
        <div className="world-currencies-holder">
          <img src="/Assets/Images/map.png" alt="map" />
          <div className="currencies-selector">
            <form className="currency-form">
              <select name="currencies" id="currencies" className="currency-select">
                {['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD', 'MXN'].map((currency) => (
                  <option value={currency} key={currency}>{currency}</option>
                ))}
              </select>
              <button type="submit" className="cta-button">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>
          </div>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Currencies</th>
                  <th>Current Price</th>
                  <th>Down the USD</th>
                  <th>More Than USD</th>
                </tr>
              </thead>
              <tbody>
                {currencies.map((currency) => (
                  <tr key={currency.code}>
                    <td>{currency.code}</td>
                    <td>{currency.price}</td>
                    <td>{currency.down}</td>
                    <td>{currency.more}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldCurrencies;