import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/TciLogo.png';

const Navbar = ({ toggleDark, darkMode }) => {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="navbar-left" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src={logo} alt="TradeCon Logo" className="navbar-logo" />
        </div>
      </Link>


      <ul className="navbar-menu">
        <li className="nav-item dropdown">
          <span className="nav-link">New Construction ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="/portfolio" className="dropdown-link">View Portfolio</Link></li>
          </ul>
        </li>

        <li className="nav-item">
          <Link to="/multifamily" className="nav-link">Multifamily</Link>
        </li>

        <li className="nav-item dropdown">
          <span className="nav-link">Property Management ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="/owners" className="dropdown-link">Owners</Link></li>
            <li><Link to="/tenants" className="dropdown-link">Tenants</Link></li>
            <li><Link to="/listing" className="dropdown-link">Listing</Link></li>
            <li><Link to="/schedule-consult" className="dropdown-link">Schedule a Consult</Link></li>
          </ul>
        </li>

        <li className="nav-item">
          <Link to="/careers" className="nav-link">Careers</Link>
        </li>

        <li className="nav-item">
          <Link to="/about-us" className="nav-link">About Us</Link>
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

export default Navbar;