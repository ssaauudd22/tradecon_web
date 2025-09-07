import React, { useState } from 'react';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    audience: '',
    companyName: '',
    phone: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Quote request submitted!');
  };

  return (
    <section className="hero-with-form">
      <div className="hero-container">
        <div className="hero">
          <h2>The Company That's Building RGV</h2>
          <p>Your Vision. Built to Last.</p>
          <a href="#projects" className="btn">See Our Work</a>
        </div>

        <form className="quote-form" onSubmit={handleSubmit}>
          <h3>Get a Free Quote</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <select
            name="audience"
            required
            value={formData.audience}
            onChange={handleChange}
          >
            <option value="">Who is this for?</option>
            <option value="Company">Company</option>
            <option value="Residential">Residential</option>
          </select>

          {formData.audience === 'Company' && (
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              required
              value={formData.companyName}
              onChange={handleChange}
            />
          )}

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Project Description"
            required
            value={formData.description}
            onChange={handleChange}
          />

          <button type="submit">Get a Quote</button>
        </form>
      </div>
    </section>
  );
};

export default Hero;