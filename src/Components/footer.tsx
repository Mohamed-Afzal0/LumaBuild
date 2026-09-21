import "./objects.css"

const Footer = () => {
  return (
    <>
      <section className="footer-cta">
        <div className="footer-cta-content">
          <h2>
            Ready to plan your
            <br />
            space?
          </h2>

          <button>Book a consultation</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">

          <div className="footer-brand">
            <div className="footer-logo">
              L
            </div>

            <h3>LumaBuild</h3>

            <p>
              Calm, practical interiors and renovations.
              A fictional studio created for a practice project.
            </p>
          </div>

          <div className="footer-links">
            <h4>Pages</h4>

            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Get in touch</h4>

            <p>hello@lumabuild.example</p>
            <p>+00 000 000 0000</p>
            <p>Mon to Fri, 9:00 to 17:00</p>
            <p>Colombo area, by appointment</p>
          </div>
        </div>

        <div className="footer-bottom">
          Practice project. All studio names, projects,
          reviews and numbers are fictional demonstration content.
        </div>
      </footer>
    </>
  );
};

export default Footer;