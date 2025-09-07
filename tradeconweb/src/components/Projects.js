import React from 'react';
import BlackHouse from '../assets/BlackHouse.png';

const Projects = () => {
  const projects = [
    { title: 'Residential Complex', image: BlackHouse },
    { title: 'Commercial Plaza', image: 'https://via.placeholder.com/300' },
    { title: 'Luxury Villa', image: 'https://via.placeholder.com/300' },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;