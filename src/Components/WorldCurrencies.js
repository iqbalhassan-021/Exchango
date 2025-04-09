// components/WorldCurrencies.jsx
import React, { useState, useEffect } from 'react';

function WorldCurrencies() {
  const [selectedCurrency, setSelectedCurrency] = useState('PKR');
  const [rates, setRates] = useState({});
  const [currenciesData, setCurrenciesData] = useState([]);
  const [allCurrencies, setAllCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10; // Changed to 10 for demonstration; set to 100 if preferred

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${selectedCurrency}`)
      .then(response => response.json())
      .then(data => {
        if (data.result === 'success') {
          setRates(data.rates);
          const currencyCodes = Object.keys(data.rates);
          setAllCurrencies(currencyCodes);
          
          const tableData = currencyCodes.map(code => {
            const rate = data.rates[code];
            const baseRate = data.rates[selectedCurrency];
            const downValue = rate > baseRate ? (rate - baseRate).toFixed(4) : '0.0000';
            const moreValue = rate < baseRate ? (baseRate - rate).toFixed(4) : '0.0000';
            
            return {
              code,
              price: rate.toFixed(2),
              down: downValue,
              more: moreValue
            };
          });
          
          setCurrenciesData(tableData);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Error fetching currency data:', error);
        setLoading(false);
      });
  }, [selectedCurrency]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newCurrency = formData.get('currencies');
    setSelectedCurrency(newCurrency);
    setCurrentPage(1); // Reset to first page when currency changes
  };

  // Pagination logic
  const totalPages = Math.ceil(currenciesData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = currenciesData.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // Generate page numbers (showing 10 pages at a time)
  const getPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(1, currentPage - 5);
    const endPage = Math.min(totalPages, startPage + 9);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="world-currencies">
      <div className="page-cover">
        <div className="world-currencies-holder">
          <img src="/Assets/Images/map.png" alt="map" />
          <div className="currencies-selector">
            <form className="currency-form" onSubmit={handleSubmit}>
              <select 
                name="currencies" 
                id="currencies" 
                className="currency-select"
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
              >
                {allCurrencies.map((currency) => (
                  <option value={currency} key={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              <button type="submit" className="cta-button">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>
          </div>
          <div className="table" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center' , 
            flexDirection: 'column'
            }}>
            {loading ? (
              <p>Loading currencies...</p>
            ) : (
              <>
                <table>
                  <thead>
                    <tr>
                      <th>Currencies</th>
                      <th>Current Price</th>
                      <th>Down the {selectedCurrency}</th>
                      <th>More Than {selectedCurrency}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.map((currency) => (
                      <tr key={currency.code}>
                        <td>{currency.code}</td>
                        <td>{currency.price}</td>
                        <td>{currency.down}</td>
                        <td>{currency.more}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="pagination" style={{ marginTop: '20px', textAlign: 'center' }}>
                  <button 
                    onClick={handlePrevious} 
                    disabled={currentPage === 1}
                    style={{ 
                      margin: '0 5px', 
                      padding: '5px 10px' , 
                      cursor: 'pointer',
                      border: '1px solid #ccc',
                    }}
                  >
                    <i class="fa-solid fa-arrow-left"></i>
                  </button>
                  {getPageNumbers().map(page => (
                    <button
                      key={page}
                      onClick={() => handlePageClick(page)}
                      style={{
                        margin: '0 5px',
                        padding: '5px 10px',
                        backgroundColor: currentPage === page ? '#013024' : 'transparent',
                        color: currentPage === page ? '#fff' : '#000',
                        cursor: 'pointer',
                        border: '1px solid #ccc',

                      }}
                    >
                      {page}
                    </button>
                  ))}
                  <button 
                    onClick={handleNext} 
                    disabled={currentPage === totalPages}
                    style={{ 
                      margin: '0 5px', 
                      padding: '5px 10px', 
                      cursor: 'pointer',
                      border: '1px solid #ccc',
                    }}
                    
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                  <p style={{ marginTop: '10px' }}>
                    Page {currentPage} of {totalPages}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldCurrencies;