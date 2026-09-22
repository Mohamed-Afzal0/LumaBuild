import "./Pages.css";
import ScrollReveal from "../components/ScrollReveal";

const Contact = () => {
  return (
    <>
      <ScrollReveal>
        <section id="contact" className="contact-section">
          <div className="contact-container">
            <h2>Get in touch</h2>

            <p className="contact-subtitle">
              Tell us about your project and we will get back to you within two working days.
            </p>

            <div className="contact-layout">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" placeholder="Your name" />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" type="text" placeholder="What is this about?" />
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={6} placeholder="Tell us about your space..."></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-animated btn-animated-dark">
                  Send message
                </button>
              </form>

              <ScrollReveal delay={200}>
                <div className="contact-details">
                  <div className="detail-block">
                    <h4>Email</h4>
                    <p>hello@lumabuild.example</p>
                  </div>

                  <div className="detail-block">
                    <h4>Phone</h4>
                    <p>+00 000 000 0000</p>
                  </div>

                  <div className="detail-block">
                    <h4>Hours</h4>
                    <p>Mon to Fri, 9:00 to 17:00</p>
                  </div>

                  <div className="detail-block">
                    <h4>Location</h4>
                    <p>Colombo area, by appointment</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <section className="footer-cta">
          <div className="footer-cta-content">
            <h2>
              Ready to plan your
              <br />
              space?
            </h2>

            <a href="#contact" className="btn-animated btn-animated-primary">
              Book a consultation
            </a>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
};

export default Contact;
