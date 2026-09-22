import './objects.css';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <a className="logo" href="/" aria-label="LumaBuild home">
          <img src={logo} alt="LumaBuild" height="30" width="30" />
        </a>
        <span className="logo-text">LumaBuild</span>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <a href='#contact' className="consultation-button" type="button">
        Book a consultation
      </a>
    </header>
  );
};

export default Header;
