import './objects.css';

const Header = () => {
  return (
    <header className="header">
      <a className="logo" href="/" aria-label="LumaBuild home">
        LumaBuild
      </a>
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