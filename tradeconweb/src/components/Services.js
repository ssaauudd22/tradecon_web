import React from 'react';
import newConstruction from '../assets/newconstruction.png';
import MFS from '../assets/MFS.png';
import propertyManagement from '../assets/propertymanagement.png';

const Services = () => {
  const services = [
    { icon: newConstruction, title: 'New Construction', desc: 'Our construction services cover both residential and commercial projects, from concept to completion, we’re your partner in creating innovative and functional spaces.' },
    { icon: MFS, title: 'Multi-Family Service', desc: 'Our team offers comprehensive services across various industries, committed to achieving customer satisfaction by leveraging our expertise and resources in multiple sectors.' },
    { icon: propertyManagement, title: 'Property Management', desc: 'Tradecon Industries delivers full-spectrum property management solutions through our deep industry knowledge, responsive service, and proven operational strategies.' },
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <img src={s.icon} alt={`${s.title} icon`} className="service-icon" />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;