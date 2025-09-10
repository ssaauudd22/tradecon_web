
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/TciLogo.png';

const Navbar = ({ toggleDark, darkMode }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef();

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation: close dropdown on Escape
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') setOpenDropdown(null);
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
  <nav className="navbar" ref={navRef} role="navigation" aria-label="Main Navigation">
      <Link to="/">
        <div className="navbar-left" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src={logo} alt="TradeCon Logo" className="navbar-logo" loading="lazy" />
        </div>
      </Link>

      <ul className="navbar-menu">
        <li
          className={`nav-item dropdown${openDropdown === 'new-construction' ? ' open' : ''}`}
          onMouseEnter={() => setOpenDropdown('new-construction')}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <span
            className="nav-link"
            tabIndex={0}
            onClick={() => setOpenDropdown(openDropdown === 'new-construction' ? null : 'new-construction')}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') setOpenDropdown(openDropdown === 'new-construction' ? null : 'new-construction');
            }}
            aria-haspopup="true"
            aria-expanded={openDropdown === 'new-construction'}
          >
            New Construction ▾
          </span>
          <ul className="dropdown-menu" style={{ display: openDropdown === 'new-construction' ? 'block' : undefined }}>
            <li><Link to="/new-construction/portfolio" className="dropdown-link" onClick={() => setOpenDropdown(null)}>View Portfolio</Link></li>
          </ul>
        </li>

        <li className="nav-item">
          <Link to="/multifamily" className="nav-link">Multifamily</Link>
        </li>

        <li
          className={`nav-item dropdown${openDropdown === 'property-management' ? ' open' : ''}`}
          onMouseEnter={() => setOpenDropdown('property-management')}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <span
            className="nav-link"
            tabIndex={0}
            onClick={() => setOpenDropdown(openDropdown === 'property-management' ? null : 'property-management')}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') setOpenDropdown(openDropdown === 'property-management' ? null : 'property-management');
            }}
            aria-haspopup="true"
            aria-expanded={openDropdown === 'property-management'}
          >
            Property Management ▾
          </span>
          <ul className="dropdown-menu" style={{ display: openDropdown === 'property-management' ? 'block' : undefined }}>
            <li><Link to="/owners" className="dropdown-link" onClick={() => setOpenDropdown(null)}>Owners</Link></li>
            <li><Link to="/tenants" className="dropdown-link" onClick={() => setOpenDropdown(null)}>Tenants</Link></li>
            <li><Link to="/listing" className="dropdown-link" onClick={() => setOpenDropdown(null)}>Listing</Link></li>
            <li><Link to="/schedule-consult" className="dropdown-link" onClick={() => setOpenDropdown(null)}>Schedule a Consult</Link></li>
          </ul>
        </li>

        <li className="nav-item">
          <Link to="/careers" className="nav-link">Careers</Link>
        </li>

        <li className="nav-item">
          <Link to="/about" className="nav-link">About Us</Link>
        </li>
      </ul>

      <div className="navbar-right">
        <div className="toggle-container">
          <span className="mode-label" aria-label={darkMode ? "Dark Mode" : "Light Mode"}>
            {darkMode ? '🌙' : '☀️'}
          </span>
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDark}
              aria-checked={darkMode}
              aria-label="Toggle dark mode"
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  toggleDark: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Navbar;