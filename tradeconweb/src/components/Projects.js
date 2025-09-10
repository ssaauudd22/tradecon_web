
import React, { useEffect, useRef } from 'react';
import Card from './Card';
import BlackHouse from '../assets/BlackHouse.png';
import Rental from '../assets/rental.png';
import Plaza from '../assets/plaza.png';

const Projects = () => {
  const projects = [
    { title: 'Residential Complex', image: BlackHouse, link: '/projects/residential-complex' },
    { title: 'Rental Properties', image: Rental, link: '/projects/rental-properties' },
    { title: 'Renovations', image: Plaza, link: '/projects/renovations' },
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