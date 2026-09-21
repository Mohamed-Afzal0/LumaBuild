import "./Pages.css";

const Home = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">Free consultation</span>

          <h1 className="hero-title">
            Spaces designed
            <br />
            for the way you
            <br />
            live.
          </h1>

          <p className="hero-description">
            LumaBuild is a fictional interior-design and renovation studio.
            We plan, style and deliver calm, practical spaces for homes and
            small businesses.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">
              Book a consultation
            </button>

            <button className="btn btn-secondary">
              View our projects
            </button>
          </div>
        </div>

        <div className="hero-image">
          <span>Hero image</span>
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