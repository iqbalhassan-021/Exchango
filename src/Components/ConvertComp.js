import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Adjust path based on your structure
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

function ConvertComp() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('PKR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [result, setResult] = useState(null);
  const [rates, setRates] = useState({});
  const [allCurrencies, setAllCurrencies] = useState([]);
  const [lastUpdate, setLastUpdate] = useState('');
  const [loading, setLoading] = useState(true);
  const [clickCount, setClickCount] = useState(0);

  // Fetch currency rates on mount
  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/PKR`)
      .then(response => response.json())
      .then(data => {
        if (data.result === 'success') {
          setRates(data.rates);
          setAllCurrencies(Object.keys(data.rates));
          setLastUpdate(data.time_last_update_utc);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Error fetching currency data:', error);
        setLoading(false);
      });

    // Fetch initial click count
    const fetchClickCount = async () => {
      try {
        const clicksRef = doc(db, 'Clicks', 'counter');
        const clicksSnap = await getDoc(clicksRef);
        
        if (clicksSnap.exists()) {
          setClickCount(clicksSnap.data().count || 0);
        }
      } catch (err) {
        console.error('Error fetching click count:', err);
      }
    };

    fetchClickCount();
  }, []);

  const handleConvert = async (e) => {
    e.preventDefault();

    // Currency conversion logic
    if (!amount || amount <= 0) {
      setResult('Please enter a valid amount');
      return;
    }

    const fromRate = rates[fromCurrency];
    const toRate = rates[toCurrency];

    if (!fromRate || !toRate) {
      setResult('Rates not available');
      return;
    }

    const convertedAmount = (amount / fromRate) * toRate;
    setResult(convertedAmount.toFixed(2));

    // Update click count in Firestore
    try {
      const clicksRef = doc(db, 'Clicks', 'counter');
      const clicksSnap = await getDoc(clicksRef);

      if (clicksSnap.exists()) {
        const currentCount = clicksSnap.data().count || 0;
        const newCount = currentCount + 1;
        await updateDoc(clicksRef, { count: newCount });
        setClickCount(newCount);
      } else {
        await setDoc(clicksRef, { count: 1 });
        setClickCount(1);
      }
    } catch (err) {
      console.error('Error updating click count:', err);
    }
  };

  return (
    <div className="api-container">
      <div className="page-cover center">
        <img src="/Assets/Images/Currency-bro.png" alt="terms" className="faq-image" />
        <div className="exchange">
          <div className="go">
            <div className="input-holder">
              <input 
                type="number" 
                id="amount" 
                placeholder="Enter amount" 
                required 
                className="form-input"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="input-holder">
              <select 
                name="from" 
                id="from" 
                required
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                {loading ? (
                  <option>Loading currencies...</option>
                ) : (
                  allCurrencies.map(currency => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))
                )}
              </select>
              <select 
                name="to" 
                id="to" 
                required
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                {loading ? (
                  <option>Loading currencies...</option>
                ) : (
                  allCurrencies.map(currency => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))
                )}
              </select>
            </div>
            <div className="input-holder">
              <button 
                id="convert" 
                className="primary-button"
                onClick={handleConvert}
                type="button"
                disabled={loading}
              >
                Convert
              </button>
            </div>
            <br />
            {result && !loading && (
              <div className="input-holder center" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                <h1 style={{ fontSize: '34px' }}>{toCurrency}.{result}</h1>
                <div className="table-responsive" style={{ overflowX: 'auto', marginTop: '20px' }}>
                  <table 
                    style={{ 
                      width: '100%', 
                      borderCollapse: 'collapse',
                      minWidth: '600px'
                    }}
                  >
                    <thead>
                      <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Amount</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>From</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>To</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Result</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Rate</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Last Updated</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Total Clicks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>{amount}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>{fromCurrency}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>{toCurrency}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>{result}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>
                          {(rates[toCurrency] / rates[fromCurrency]).toFixed(4)}
                        </td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>
                          {new Date(lastUpdate).toLocaleDateString()}
                        </td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>
                          {clickCount}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Inline CSS for responsiveness */}
      <style jsx>{`
        @media (max-width: 650px) {
          .table-responsive {
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }

          table {
            display: block;
            width: 100%;
          }

          thead, tbody, tr {
            display: block;
            width: 100%;
          }

          th, td {
            display: block;
            box-sizing: border-box;
            text-align: left !important;
            position: relative;
          }
        }

        @media (min-width: 650px) {
          .table-responsive {
            overflow-x: visible;
          }
        }
      `}</style>
    </div>
  );
}

export default ConvertComp;