import "./Pages.css";
import heroImage from "../assets/main-page.jpg";
import ScrollReveal from "../components/ScrollReveal";
import Counter from "../components/Counter";

const Home = () => {
  return (
    <section id="home" className="hero-wrapper">
      <div className="hero-container">
        <ScrollReveal direction="up" delay={50} duration={800}>
          <div className="hero-content">
            <div className="hero-badge">Free consultations</div>
            <h1 className="hero-title">Welcome to LumaBuild</h1>
            <p className="hero-description">
              Transform your space with our expert design and build services.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary btn-animated btn-animated-primary">Book a consultation</a>
              <a href="#projects" className="btn btn-secondary btn-animated">View all projects</a>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="fade" delay={200} duration={900}>
          <div className="hero-image">
            <img src={heroImage} alt="LumaBuild project" />
          </div>
        </ScrollReveal>
      </div>

      <div className="stats-section">
        <ScrollReveal delay={100} duration={750}>
          <div className="stat">
            <h2><Counter target={120} suffix="+" duration={2000} /></h2>
            <p>Projects completed</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={220} duration={750}>
          <div className="stat">
            <h2><Counter target={8} suffix=" years" duration={1800} /></h2>
            <p>Of experience</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={340} duration={750}>
          <div className="stat">
            <h2><Counter target={4.9} suffix="/5" decimals={1} duration={2200} /></h2>
            <p>Client rating</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Home;
