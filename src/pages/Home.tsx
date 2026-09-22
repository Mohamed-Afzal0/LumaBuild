// src/pages/Home.tsx

import "./Pages.css";
import heroImage from "../assets/main-page.jpg";
import ScrollReveal from "../components/ScrollReveal";
import Counter from "../components/Counter";

const Home = () => {
  return (
    <section id="home" className="hero-wrapper">
      <ScrollReveal>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">Free</div>
            <h1 className="hero-title">Welcome to Lumabuild</h1>
            <p className="hero-description">
              Transform your space with our expert design and build services.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary btn-animated btn-animated-dark">Book a consultation</a>
              <a href="#projects" className="btn btn-secondary btn-animated">View all projects</a>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="LumaBuild project" />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="stats-section">
          <div className="stat">
            <h2><Counter target={120} suffix="+" duration={2000} /></h2>
            <p>Projects completed</p>
          </div>

          <div className="stat">
            <h2><Counter target={8} suffix=" years" duration={1800} /></h2>
            <p>Of experience</p>
          </div>

          <div className="stat">
            <h2><Counter target={4.9} suffix="/5" decimals={1} duration={2200} /></h2>
            <p>Client rating</p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Home;
