import React from 'react';
import './AboutUs.css';

const MapIcon = () => (
  <svg className="location-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
  </svg>
);

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-container">
        <h1>About Tradecon Industries</h1>
        <p>
          TRADECON INDUSTRIES operates in the RGV and South Carolina regions, specializing in construction and property improvement services. 
          Our comprehensive services include renovation, remodeling, restoration, and upcoming single home construction projects. 
          We have a strong track record in talent acquisition, connecting companies with the most suitable candidates. 
          Our goal is to continually provide innovation and excellence, guaranteeing the highest level of client satisfaction.
        </p>

        <div className="location-grid">
          {/* RGV Location */}
          <div className="location-card">
            <div className="location-title">
              <MapIcon />
              Rio Grande Valley Headquarters
            </div>
            <div className="location-details">
              <p><strong>Address:</strong><br/>3501 E Moreland Dr, Weslaco, TX 78596</p>
              <p><strong>Phone:</strong><br/>(956) 200-2628</p>
            </div>
            <div className="map-container">
              <iframe
                title="RGV Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1798.0824607077933!2d-97.954726!3d26.1712586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866fd78c2829f7cf%3A0xd9d03cd7b56dc4e2!2s3501%20E%20Moreland%20Dr%2C%20Weslaco%2C%20TX%2078596!5e0!3m2!1sen!2sus!4v1694171234567"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* South Carolina Location */}
          <div className="location-card">
            <div className="location-title">
              <MapIcon />
              South Carolina Office
            </div>
            <div className="location-details">
              <p><strong>Address:</strong><br/>1670 Dry Dock Ave. #200, North Charleston, SC 29405</p>
              <p><strong>Phone:</strong><br/>(843) 308-8000</p>
            </div>
            <div className="map-container">
              <iframe
                title="South Carolina Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.4550571722045!2d-79.98239348478338!3d32.86815498094586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7b0141df83a3%3A0x68a3c2501d19d748!2s1670%20Dry%20Dock%20Ave%20%23200%2C%20North%20Charleston%2C%20SC%2029405!5e0!3m2!1sen!2sus!4v1694174567890"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
