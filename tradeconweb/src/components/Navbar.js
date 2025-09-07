import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/TciLogo.png'; // ensure this path is correct

const Navbar = ({ toggleDark, darkMode }) => {
  return (
    <nav className="navbar">
      <Link to='/'>
        <div className="navbar-left">
          <img src={logo} alt="TradeCon Logo" className="navbar-logo" />
        </div>
      </Link>

      <div className="navbar-right">
        <button onClick={toggleDark}>
          {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;