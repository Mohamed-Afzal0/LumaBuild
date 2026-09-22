import "./objects.css";
import logo from "../assets/logo.svg";
import ScrollReveal from "../components/ScrollReveal";

const Footer = () => {
  return (
    <>
      <ScrollReveal>
        <footer className="footer">
          <div className="footer-content">
            <ScrollReveal>
              <div className="footer-brand">
                <div className="footer-logo">
                  <img src={logo} alt="LumaBuild" height="60" width="60" />
                </div>
                <h3>LumaBuild</h3>
                <p>
                  Calm, practical interiors and renovations.
                  A fictional studio created for a practice project.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="footer-links">
                <h4>Pages</h4>
                <ul>
                  <li>
                    <a href="#home" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="nav-link">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="nav-link">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="nav-link">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="footer-contact">
                <h4>Get in touch</h4>

                <p>hello@lumabuild.example</p>
                <p>+00 000 000 0000</p>
                <p>Mon to Fri, 9:00 to 17:00</p>
                <p>Colombo area, by appointment</p>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="footer-bottom">
            Practice project. All studio names, projects,
            reviews and numbers are fictional demonstration content.
          </div>
        </footer>
      </ScrollReveal>
    </>
  );
};

export default Footer;
