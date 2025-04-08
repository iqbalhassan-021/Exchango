// components/Notifications.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

function Notifications() {
  return (
    <div className="notifications-holder">
      <p>
        Best currency converter for you.{' '}
        <Link to="/convert" style={{ color: 'white' }}>
          Get Started <i className="fa-solid fas fa-rocket"></i>
        </Link>{' '}
        or{' '}
        <Link to="/api" style={{ color: 'white' }}>
          Get API <i className="fa-solid fas fa-globe"></i>
        </Link>
      </p>
    </div>
  );
}

export default Notifications;