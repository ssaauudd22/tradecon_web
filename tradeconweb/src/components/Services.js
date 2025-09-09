


import React from 'react';
import Card from './Card';
import newConstruction from '../assets/newconstruction.png';
import MFS from '../assets/MFS.png';
import propertyManagement from '../assets/propertymanagement.png';

const Services = () => {
  const services = [
    {
      icon: newConstruction,
      title: 'New Construction',
      desc: "Our construction services cover both residential and commercial projects, from concept to completion, we’re your partner in creating innovative and functional spaces.",
      link: '/new-construction/portfolio',
    },
    {
      icon: MFS,
      title: 'Multi-Family Service',
      desc: "Our team offers comprehensive services across various industries, committed to achieving customer satisfaction by leveraging our expertise and resources in multiple sectors.",
      link: '/multifamily',
    },
    {
      icon: propertyManagement,
      title: 'Property Management',
      desc: "Tradecon Industries delivers full-spectrum property management solutions through our deep industry knowledge, responsive service, and proven operational strategies.",
      link: '/owners', // Main entry for property management
    },
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-grid">
        {services.map((s, i) => (
          <Card
            key={i}
            to={s.link}
            image={s.icon}
            alt={`${s.title} icon`}
            title={s.title}
            description={s.desc}
            className="service-card"
          />
        ))}
      </div>
    </section>
  );
};

export default Services;