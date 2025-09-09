import React from 'react';

const Footer = () => {
  return (
  <footer className="footer" role="contentinfo" aria-label="Footer">
      <p>© {new Date().getFullYear()} TradeCon Industries. Built with precision.</p>
    </footer>
  );
};

export default Footer;