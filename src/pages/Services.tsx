import "./Pages.css";
import servicesData from "../data/servicesData";
import type { Service } from "../data/servicesData";
import ScrollReveal from "../components/ScrollReveal";

const renderServiceIcon = (type: Service["iconType"]) => {
  switch (type) {
    case "residential":
      return (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1F4A28"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.5z" />
          <path d="M9 21v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7" />
        </svg>
      );
    case "commercial":
      return (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1F4A28"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M8 10h.01" />
          <path d="M16 10h.01" />
          <path d="M8 14h.01" />
          <path d="M16 14h.01" />
        </svg>
      );
    case "renovation":
      return (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1F4A28"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 21H3L21 3v18z" />
          <path d="M8 21v-3" />
          <path d="M12 21v-2" />
          <path d="M16 21v-3" />
          <path d="M21 8h-3" />
          <path d="M21 12h-2" />
          <path d="M21 16h-3" />
        </svg>
      );
    case "styling":
      return (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1F4A28"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m12 3 1.912 5.885a2 2 0 0 0 1.272 1.272L21 12l-5.816 1.843a2 2 0 0 0-1.272 1.272L12 21l-1.912-5.885a2 2 0 0 0-1.272-1.272L3 12l5.816-1.843a2 2 0 0 0 1.272-1.272L12 3z" />
          <path d="M19 3v4" />
          <path d="M21 5h-4" />
        </svg>
      );
    default:
      return null;
  }
};

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <ScrollReveal>
          <div className="services-header">
            <h2>What we do</h2>
            <p>
              Transform your space with thoughtful interior design and renovation planning.
              From a single room to a full renovation, we handle the
              planning, the styling and the details.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="services-grid">
            {servicesData.map((service: Service) => (
              <div className="service-card" key={service.id}>
                <div className="service-icon">
                  {renderServiceIcon(service.iconType)}
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <button
                  type="button"
                  className="learn-more"
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Learn More</span>
                </button>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
