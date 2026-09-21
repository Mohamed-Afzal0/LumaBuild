import "./Pages.css";

const Services = () => {
  const services = [
    {
      icon: "🏠",
      title: "Residential interiors",
      description:
        "Living rooms, kitchens and bedrooms designed around how you actually live.",
    },
    {
      icon: "🏢",
      title: "Commercial spaces",
      description:
        "Cafes, studios and small offices that feel welcoming and work hard.",
    },
    {
      icon: "📐",
      title: "Renovation planning",
      description:
        "Layouts, budgets and schedules sorted before the first wall comes down.",
    },
    {
      icon: "⭐",
      title: "Custom styling",
      description:
        "Furniture, lighting and finishing touches picked to suit your space.",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">

        <div className="services-header">
          <h2>What we do</h2>

          <p>
            From a single room to a full renovation, we handle the
            planning, the styling and the details.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#" className="btn btn-primary">
                Learn more
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;