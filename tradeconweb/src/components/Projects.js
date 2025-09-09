import React, { useEffect, useRef } from 'react';
import BlackHouse from '../assets/BlackHouse.png';
import LuxuryVilla from '../assets/luxuryvilla.png';
import Plaza from '../assets/plaza.png';

const Projects = () => {
  const projects = [
    { title: 'Residential Complex', image: BlackHouse },
    { title: 'Commercial Plaza', image: Plaza },
    { title: 'Luxury Villa', image: LuxuryVilla },
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRefs = cardsRef.current;
    currentRefs.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      currentRefs.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="projects" id="projects">
      <h2>Featured Projects</h2>
      <div className="project-list">
        {projects.map((p, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`project-card vertical ${i % 2 === 0 ? 'left-slide' : 'right-slide'}`}
          >
            <div className="project-image">
              <img src={p.image} alt={p.title} />
            </div>
            <div className="project-text">
              <h3>{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;