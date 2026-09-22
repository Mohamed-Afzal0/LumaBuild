import "./Pages.css";
import ScrollReveal from "../components/ScrollReveal";

const About = () => {
  const steps = [
    {
      number: "1",
      title: "Consultation",
      description:
        "We listen, visit the space and agree what you want to achieve.",
    },
    {
      number: "2",
      title: "Concept and plan",
      description:
        "Layouts, materials and a clear budget for you to approve.",
    },
    {
      number: "3",
      title: "Build and style",
      description:
        "We manage the work and bring in the furniture and finishes.",
    },
    {
      number: "4",
      title: "Handover",
      description:
        "A final walkthrough to make sure every detail is right.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <ScrollReveal>
          <h2>How it works</h2>

          <p className="about-subtitle">
            Four clear steps, so you always know what happens next.
          </p>
        </ScrollReveal>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 150}>
              <div className="step-card">
                <span>{step.number}</span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
