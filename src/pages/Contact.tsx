import "./Pages.css";

const Contact = () => {
  const testimonials = [
    {
      quote:
        "They turned a cramped flat into somewhere we actually want to be. Clear communication the whole way.",
      name: "Nadeesha P.",
      role: "Homeowner",
    },
    {
      quote:
        "Our cafe fit-out finished on schedule and the layout works far better for the staff.",
      name: "Rohan F.",
      role: "Cafe owner",
    },
    {
      quote:
        "The planning stage saved us from expensive mistakes. We knew the cost before we started.",
      name: "Ishara and Kavin",
      role: "First-time renovators",
    },
  ];

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>What clients say</h2>

        <p className="contact-subtitle">
          Sample reviews for a fictional studio.
        </p>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-text">
                {item.quote}
              </p>

              <div className="testimonial-user">
                <div className="avatar"></div>

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;