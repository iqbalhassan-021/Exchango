import React from 'react';

function ApiDoc() {
  return (
    <div className="api-container">
      <div className="page-cover">
        <div className="api">
          <h2 style={{ color: '#333', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
            📘 API Documentation
          </h2>

          <div className="api-description" style={{ marginTop: '20px' }}>
            <p>
              This API provides the latest exchange rates for various currencies. We're using the endpoint:  
              <strong style={{ color: '#0066cc' }}>https://open.er-api.com/v6/latest/PKR</strong>  
              to retrieve rates based on the <strong>Pakistani Rupee (PKR)</strong>.
            </p>
            <p>
              This data is helpful for building currency converters, financial dashboards, or ecommerce apps that need to convert PKR to other currencies like USD, EUR, GBP, INR, etc.
            </p>
          </div>

          <div className="api-endpoint" style={{ marginTop: '30px' }}>
            <h3 style={{ color: '#444' }}>🌐 API Endpoint</h3>
            <p>
              URL: <a href="https://open.er-api.com/v6/latest/PKR" target="_blank" rel="noopener noreferrer">
                https://open.er-api.com/v6/latest/PKR
              </a>
            </p>
          </div>

          <div style={{ marginTop: '30px' }}>
            <h3 style={{ color: '#444' }}>📦 Example API Response</h3>
            <div 
              className="api-response" 
              id="api-response"
              style={{ 
                backgroundColor: '#272822', 
                color: '#f8f8f2', 
                padding: '20px', 
                borderRadius: '8px', 
                fontFamily: 'monospace', 
                whiteSpace: 'pre-wrap' 
              }}
            >
              {`{
  "result": "success",
  "base_code": "PKR",
  "rates": {
    "USD": 0.0036,
    "EUR": 0.0033,
    "INR": 0.29,
    "GBP": 0.0028
  }
}`}
            </div>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h3 style={{ color: '#444' }}>🧪 How to Use This API</h3>

            <h4>In React (Frontend)</h4>
            <p>Use <code>fetch()</code> or <code>axios</code> to retrieve the exchange rate data:</p>
            <div style={{ 
              backgroundColor: '#f4f4f4', 
              padding: '15px', 
              borderRadius: '6px', 
              fontFamily: 'monospace', 
              fontSize: '14px', 
              overflowX: 'auto' 
            }}>
              <pre>
                {`useEffect(() => {
  fetch("https://open.er-api.com/v6/latest/PKR")
    .then(res => res.json())
    .then(data => {
      const usdRate = data.rates.USD;
      console.log("1 PKR =", usdRate, "USD");
    });
}, []);`}
              </pre>
            </div>

            <h4 style={{ marginTop: '25px' }}>In Laravel (Backend)</h4>
            <p>Use Laravel’s HTTP client to fetch exchange rates from the endpoint:</p>
            <div style={{ 
              backgroundColor: '#f4f4f4', 
              padding: '15px', 
              borderRadius: '6px', 
              fontFamily: 'monospace', 
              fontSize: '14px', 
              overflowX: 'auto' 
            }}>
              <pre>
                {`use Illuminate\\Support\\Facades\\Http;

public function getRates() {
  $response = Http::get('https://open.er-api.com/v6/latest/PKR');

  if ($response->successful()) {
    $data = $response->json();
    return $data['rates']['USD']; // 1 PKR to USD
  }
}`}
              </pre>
            </div>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h3 style={{ color: '#444' }}>🎛️ Filtering the Output</h3>
            <p>You can filter specific currencies from the response to reduce clutter:</p>

            <h4>React / JavaScript Example:</h4>
            <div style={{ 
              backgroundColor: '#f4f4f4', 
              padding: '15px', 
              borderRadius: '6px', 
              fontFamily: 'monospace', 
              fontSize: '14px', 
              overflowX: 'auto' 
            }}>
              <pre>
                {`const wanted = ["USD", "EUR", "INR"];
const filtered = Object.fromEntries(
  Object.entries(data.rates).filter(([key]) => wanted.includes(key))
);`}
              </pre>
            </div>

            <h4>Laravel Example:</h4>
            <div style={{ 
              backgroundColor: '#f4f4f4', 
              padding: '15px', 
              borderRadius: '6px', 
              fontFamily: 'monospace', 
              fontSize: '14px', 
              overflowX: 'auto' 
            }}>
              <pre>
                {`$needed = ['USD', 'EUR', 'GBP'];
$filtered = array_filter($data['rates'], function($key) use ($needed) {
  return in_array($key, $needed);
}, ARRAY_FILTER_USE_KEY);`}
              </pre>
            </div>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h3 style={{ color: '#444' }}>💡 Production Tips</h3>
            <ul style={{ paddingLeft: '20px' }}>
              <li>🧊 <strong>Cache the response</strong> for 12–24 hours to avoid excessive API hits.</li>
              <li>🔐 No API key is required, so it’s easy to use in personal or open-source projects.</li>
              <li>🚫 Be mindful of rate limits — avoid spamming the endpoint.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApiDoc;