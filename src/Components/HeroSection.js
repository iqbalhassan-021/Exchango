import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="page-cover">
        <div className="hero">
          <div className="hero-text-holder x-half-div">
            <div className="text-container">
              <h1 className="hero-text">
                Making Currency Exchange Simple, Fast, and Reliable
              </h1>
              <p className="hero-subtext">
                From One Currency to Another — Instantly, Securely, Reliably.
              </p>
              <div className="cta-holde">
                <Link to="/convert" className="no-decoration cta-button">
                  <p>Get Started</p>
                </Link>
                <Link to="/api" className="no-decoration cta-button">
                  <p>Get API</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-image-holder x-half-div">
            <img
              src="/Assets/Images/man-holding-phone.webp"
              alt="man-holding-phone"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;