import React from 'react';
import './Partners.css';
import naaLogo from '../assets/naa.png';
import texasHousingLogo from '../assets/tha.png';
import taaLogo from '../assets/taa.png';

const partners = [
  {
    name: 'National Apartment Association',
    img: naaLogo,
    url: 'https://www.naahq.org/',
  },
  {
    name: 'Texas Housing Association',
    img: texasHousingLogo,
    url: 'https://www.txhousing.org/',
  },
  {
    name: 'Texas Apartment Association',
    img: taaLogo,
    url: 'https://www.taa.org/',
  },
];

const Partners = () => {
  return (
    <section className="partners">
      <h2>Our Partners</h2>
      <p className="partners-subtitle">We proudly collaborate with leading industry organizations.</p>
      
      <div className="partners-logos">
        {partners.map((partner, idx) => (
          <div key={idx} className="partner-entry">
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-link"
            >
              <img
                src={partner.img}
                alt={`${partner.name} Logo`}
                className="partner-logo"
              />
            </a>
            <p className="partner-name">{partner.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;