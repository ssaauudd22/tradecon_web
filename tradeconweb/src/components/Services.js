import React from 'react';

const Services = () => {
  const services = [
    { icon: '🏗️', title: 'General Contracting', desc: 'End-to-end project execution.' },
    { icon: '🛠️', title: 'Renovation', desc: 'Modernizing existing spaces.' },
    { icon: '🏘️', title: 'Custom Builds', desc: 'Tailored construction solutions.' },
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <span className="icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;