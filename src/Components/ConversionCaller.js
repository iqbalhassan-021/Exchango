import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

function ConversionCaller() {
  return (
    <div className="convertion-caller">
      <div className="page-cover">
        <div className="convertion-inner">
          <img
            src="/Assets/Images/Currency-amico.png"
            alt="Currency-amico"
            className="faq-image"
          />
          <h1>
            From One Currency to Another — <span className="colored">Instantly</span>, Securely,
            Reliably.
          </h1>
          <div className="primary-button-holder">
            <Link to="/convert" className="primary-button no-decoration">
              Get Started
            </Link>
            <Link to="/api" className="primary-button no-decoration">
              Get API
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConversionCaller;