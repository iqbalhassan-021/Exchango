import React from 'react'

function ConvertComp() {
  return (
    <div class="api-container">
    <div class="page-cover center">
      <img src="/Assets/Images/Currency-bro.png" alt="terms" class="faq-image" />
      <div class="exchange">
        <div class="go">
            <div class="input-holder">
  
                <input type="number" id="amount" placeholder="Enter amount" required class="form-input" />
            </div>
            <div class="input-holder">
              <select name="from" id="from"required>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
              </select>
              <select name="to" id="to"required>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
              </select>
            </div>
            <div class="input-holder">
                <button id="convert" class="primary-button">Convert</button>
            </div>
            <br></br>
            <div class="input-holder center">
                <p class="results">
                    00.00
                </p>
            </div>
            <div class="input-holder center">
                <p>
                  selected currency rate is 1.00 and 1.00 b
                  ased on 2023-10-01.
                </p>
            </div>
        </div>
        
      </div>
    </div>
</div>
  )
}

export default ConvertComp