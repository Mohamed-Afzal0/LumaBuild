import "./Pages.css";

const NotFound = () => {
  return (
    <section className="not-found-section">
      <div className="not-found-container">
        <h1>404</h1>
        <h2>This space does not exist</h2>
        <p>
          The page you're looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <div className="not-found-actions">
          <a href="/" className="btn btn-primary btn-animated btn-animated-primary">
            Back to home
          </a>
          <a href="#projects" className="btn btn-secondary btn-animated">
            View projects
          </a>
          <a href="#contact" className="btn btn-secondary btn-animated">
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
