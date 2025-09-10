import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo" aria-label="Footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <address>
            3501 E Moreland Dr, Weslaco, TX 78596<br />
            <a href="tel:+19562002628">(956) 200-2628</a><br />
            <a href="mailto:info@tradeconindustries.net">info@tradeconindustries.net</a>
          </address>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} TradeCon Industries. Built with precision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;