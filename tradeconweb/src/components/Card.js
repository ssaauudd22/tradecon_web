import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = React.forwardRef(({ to, image, alt, title, description, className = '', children, ...props }, ref) => (
  <Link
    to={to}
    className={className}
    tabIndex={0}
    aria-label={title}
    ref={ref}
    {...props}
  >
    {image && className.includes('project-card') ? (
      <div className="project-image">
        <img src={image} alt={alt || title} loading="lazy" />
      </div>
    ) : image ? (
      <img src={image} alt={alt || title} className={className.includes('service-card') ? 'service-icon' : 'card-image'} loading="lazy" />
    ) : null}
    <div className={className.includes('project-card') ? 'project-text' : 'card-content'}>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {children}
    </div>
  </Link>
));

Card.propTypes = {
  to: PropTypes.string.isRequired,
  image: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
