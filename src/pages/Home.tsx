// src/pages/Home.tsx

import "./Pages.css";
import heroImage from "../assets/main-page.jpg";

const Home = () => {
  return (
    <section id="home" className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">Free</div>
          <h1 className="hero-title">Welcome to Lumabuild</h1>
          <p className="hero-description">
            Transform your space with our expert design and build services.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Book a consultation</a>
            <a href="#projects" className="btn btn-secondary">View all projects</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="LumaBuild project" />
        </div>
      </div>

      <div className="stats-section">
        <div className="stat">
          <h2>120+</h2>
          <p>Projects completed</p>
        </div>

        <div className="stat">
          <h2>8 years</h2>
          <p>Of experience</p>
        </div>

        <div className="stat">
          <h2>4.9/5</h2>
          <p>Client rating</p>
        </div>
      </div>
    </section>
  );
};

export default Home;