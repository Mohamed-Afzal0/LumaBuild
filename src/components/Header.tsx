import { useState, useEffect } from 'react';
import './components.css';
import logo from '../assets/logo.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Auto-close menu if resized to desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      {/* Mobile Floating Hamburger Menu in Top-Left Corner */}
      <div className="hamburger" aria-label="Toggle navigation menu">
        <input
          className="checkbox"
          type="checkbox"
          checked={menuOpen}
          onChange={(e) => setMenuOpen(e.target.checked)}
          aria-expanded={menuOpen}
          aria-label="Navigation menu checkbox"
        />
        <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
          <path
            className="lineTop line"
            strokeLinecap="round"
            strokeWidth="4"
            stroke="white"
            d="M6 11L44 11"
          />
          <path
            strokeLinecap="round"
            strokeWidth="4"
            stroke="white"
            d="M6 24H43"
            className="lineMid line"
          />
          <path
            strokeLinecap="round"
            strokeWidth="4"
            stroke="white"
            d="M6 37H43"
            className="lineBottom line"
          />
        </svg>
      </div>

      {/* Brand Logo & Name - Stays fixed in header */}
      <div className="logo-container">
        <a className="logo" href="/" aria-label="LumaBuild home">
          <img src={logo} alt="LumaBuild" height="30" width="30" />
        </a>
        <span className="logo-text">LumaBuild</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="nav desktop-nav">
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

      {/* Desktop Consultation Button */}
      <a href="#contact" className="consultation-button desktop-cta">
        Book a consultation
      </a>

      {/* Mobile Slide-Out Panel / Window from Left */}
      <div 
        className={`mobile-nav-panel ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-nav-content">
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <a href="#home" className="mobile-nav-link" onClick={closeMenu}>
                <span className="mobile-nav-num">01</span>
                <span className="mobile-nav-label">Home</span>
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#services" className="mobile-nav-link" onClick={closeMenu}>
                <span className="mobile-nav-num">02</span>
                <span className="mobile-nav-label">Services</span>
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#projects" className="mobile-nav-link" onClick={closeMenu}>
                <span className="mobile-nav-num">03</span>
                <span className="mobile-nav-label">Projects</span>
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#about" className="mobile-nav-link" onClick={closeMenu}>
                <span className="mobile-nav-num">04</span>
                <span className="mobile-nav-label">About</span>
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>
                <span className="mobile-nav-num">05</span>
                <span className="mobile-nav-label">Contact</span>
              </a>
            </li>
          </ul>

          <div className="mobile-nav-footer">
            <a
              href="#contact"
              className="btn-animated btn-animated-primary mobile-menu-cta"
              onClick={closeMenu}
            >
              Book a consultation
            </a>
            <div className="mobile-contact-info">
              <p className="mobile-contact-email">hello@lumabuild.example</p>
              <p className="mobile-contact-meta">Mon to Fri, 9:00 - 17:00</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
