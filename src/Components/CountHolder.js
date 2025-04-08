// components/CountHolder.jsx
import React from 'react';

function CountHolder() {
  const counts = [
    { number: '500+', text: 'Currencies' },
    { number: '1000+', text: 'Users' },
    { number: '50+', text: 'Conversions' },
    { number: '50+', text: 'Happy Clients' },
  ];

  return (
    <div className="count-holder">
      <div className="page-cover">
        <div className="count grid-4x">
          {counts.map((item, index) => (
            <div className="count-item" key={index}>
              <p className="count-number">{item.number}</p>
              <p className="count-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CountHolder;