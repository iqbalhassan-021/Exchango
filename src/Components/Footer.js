import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

function Footer() {
  return (
    <div className="footer-container">
      <div className="page-cover">
        <div className="footer grid-4x">
          <div className="footer-item">
            <Link to="/" className="no-decoration">
              <img src="/Assets/Images/footer_logo.png" alt="Logo" className="footer-logo" />
            </Link>
          </div>
          <div className="footer-item">
            <h1>Pages</h1>
            <Link to="/" className="no-decoration">Home</Link>
            <Link to="/about" className="no-decoration">About</Link>
            <Link to="/contact" className="no-decoration">Contact</Link>
            <Link to="/convert" className="no-decoration">Convert</Link>
            <Link to="/news" className="no-decoration">Blogs</Link>
            <Link to="/admin" className="no-decoration">Admin</Link> {/* Note: Add /admin route in App.js if needed */}
          </div>
          <div className="footer-item">
            <h1>Help</h1>
            <Link to="/faqs" className="no-decoration">FAQ</Link>
            <Link to="/support" className="no-decoration">Support</Link>
            <Link to="/contact" className="no-decoration">Contact</Link>
            <Link to="/privacy" className="no-decoration">Privacy Policy</Link> {/* Note: Add /privacy route if needed */}
            <Link to="/terms" className="no-decoration">Terms of Service</Link>
          </div>
          <div className="footer-item">
            <h1>Developer</h1>
            <Link to="/api" className="no-decoration">API</Link>
            <a href="/git" className="no-decoration">Git</a> {/* Note: Add /git route if needed */}
            <Link to="/api" className="no-decoration">Documentation</Link> {/* Note: Add /docs route if needed */}
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Exchango. All rights reserved.</p>
          <div className="social-icons">
            {/* Social links kept as <a> since they likely go to external sites */}
            <a href="https://facebook.com" className="no-decoration"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://instagram.com" className="no-decoration"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://linkedin.com" className="no-decoration"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;