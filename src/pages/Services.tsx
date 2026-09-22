import "./Pages.css"
import servicesData from "../data/servicesData.js"
import ScrollReveal from "../components/ScrollReveal"

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">

        <ScrollReveal>
          <div className="services-header">
            <h2>What we do</h2>

            <p>
              From a single room to a full renovation, we handle the
              planning, the styling and the details.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="services-grid">
            {servicesData.map((service: any, index: number) => (
              <div className="service-card" key={index}>

                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="#" className="btn btn-primary btn-animated btn-animated-dark">
                  Learn more
                </a>

              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Services;
