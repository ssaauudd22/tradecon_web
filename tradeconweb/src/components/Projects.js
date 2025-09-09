
import React, { useEffect, useRef } from 'react';
import Card from './Card';
import BlackHouse from '../assets/BlackHouse.png';
import LuxuryVilla from '../assets/luxuryvilla.png';
import Plaza from '../assets/plaza.png';

const Projects = () => {
  const projects = [
    { title: 'Residential Complex', image: BlackHouse, link: '/projects/residential-complex' },
    { title: 'Commercial Plaza', image: Plaza, link: '/projects/commercial-plaza' },
    { title: 'Luxury Villa', image: LuxuryVilla, link: '/projects/luxury-villa' },
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
          <Card
            key={i}
            to={p.link}
            image={p.image}
            alt={p.title}
            title={p.title}
            className={`project-card vertical ${i % 2 === 0 ? 'left-slide' : 'right-slide'}`}
            ref={(el) => (cardsRef.current[i] = el)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;