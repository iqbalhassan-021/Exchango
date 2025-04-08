import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import Notifications from '../Components/Notifications';

function Terms() {
  return (
    <>
      <div className="page-wrapper">
        <Notifications />
        <NavigationBar />
        <div className="api-container">
          <div className="page-cover center">
            <img src="/Assets/Images/terms.png" alt="terms" className="faq-image" />
            <div className="api">
              <h2 style={{ color: '#333', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
                📜 Terms of Service & Privacy Policy
              </h2>

              <div className="api-description" style={{ marginTop: '20px' }}>
                <h3>1. Acceptance of Terms</h3>
                <p>
                  By accessing and using our website or services, you agree to comply with and be bound by these Terms and our Privacy Policy. If you do not agree, please do not use our platform.
                </p>

                <h3>2. Data Collection & Use</h3>
                <p>
                  We collect minimal data necessary to provide our services, including API usage logs and optional email input for updates. No sensitive personal data is stored.
                </p>

                <h3>3. Cookies</h3>
                <p>
                  Our site may use cookies to enhance user experience and improve performance. You can disable cookies in your browser settings if preferred.
                </p>

                <h3>4. Third-party Links</h3>
                <p>
                  Our service may contain links to third-party websites. We are not responsible for their content, policies, or data handling practices.
                </p>

                <h3>5. API Usage</h3>
                <p>
                  You may use our free API without authentication for personal or limited commercial use. Abuse, scraping, or spamming the service may lead to permanent blocking.
                </p>

                <h3>6. Changes to Terms</h3>
                <p>
                  We may update these terms from time to time. Changes will be reflected on this page with a revised date.
                </p>

                <h3>7. Contact</h3>
                <p>
                  For questions or concerns, reach out via the contact form or support email listed in the footer of our website.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Terms;