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
      <nav className="navigation" aria-label="Main navigation">
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="consultation-button" type="button">
        Book a consultation
      </button>
    </header>
  );
};

export default Header;
