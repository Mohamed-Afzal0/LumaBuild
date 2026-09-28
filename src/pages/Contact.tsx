import { useState, type FormEvent } from "react";
import "./Pages.css";
import ScrollReveal from "../components/ScrollReveal";
import { siteConfig } from "../data/siteConfig";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  budget?: string;
  message?: string;
}

const PROJECT_TYPES = [
  "Residential Interior",
  "Commercial Space",
  "Renovation Planning",
  "Custom Styling & Decor",
  "Full Architecture & Build",
  "General Consultation",
];

const BUDGET_RANGES = [
  "Under $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
  "Flexible / To be discussed",
];

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Please enter your name";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        break;
      case "email": {
        if (!value.trim()) return "Please enter your email address";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) {
          return "Please enter a valid email address (e.g. name@example.com)";
        }
        break;
      }
      case "projectType":
        if (!value.trim()) return "Please select a project type";
        break;
      case "budget":
        if (!value.trim()) return "Please select an estimated budget range";
        break;
      case "message":
        if (!value.trim()) return "Please share details about your project";
        if (value.trim().length < 10) {
          return "Message must be at least 10 characters";
        }
        break;
    }
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (["name", "email", "projectType", "budget", "message"] as Array<keyof FormData>).forEach(
      (field) => {
        const error = validateField(field, formData[field]);
        if (error) {
          newErrors[field] = error;
          isValid = false;
        }
      }
    );

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      projectType: true,
      budget: true,
      message: true,
    });

    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate front-end demonstration submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      projectType: "",
      budget: "",
      message: "",
    });
    setTouched({});
    setErrors({});
  };

  return (
    <>
      <ScrollReveal>
        <section id="contact" className="contact-section">
          <div className="contact-container">
            <h2>Get in touch</h2>

            <p className="contact-subtitle">
              Have a vision for your space? Share your ideas, estimated timeline, and project scope below.
            </p>

            <div className="contact-layout">
              {isSubmitted ? (
                <div className="form-success" role="status" aria-live="polite">
                  <div className="success-icon" aria-hidden="true">✓</div>
                  <h3>Demonstration Received</h3>
                  <p className="success-demo-message">
                    Thank you for your message. This form is currently a portfolio demonstration.
                  </p>
                  <p className="success-note">
                    No message was delivered to an active inbox. To enable live client submissions,
                    this front-end component can be connected to a form service (e.g. Formspree, Resend)
                    or a dedicated backend endpoint.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary btn-animated"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send another demonstration message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-demo-badge" aria-hidden="true">
                    <span>Portfolio Demonstration Mode</span>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="name">
                        Name <span className="required">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your name"
                        aria-required="true"
                        aria-invalid={!!(errors.name && touched.name)}
                        aria-describedby={errors.name && touched.name ? "name-error" : undefined}
                        className={errors.name && touched.name ? "input-error" : ""}
                      />
                      {errors.name && touched.name && (
                        <span id="name-error" className="form-error" role="alert">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="form-field">
                      <label htmlFor="email">
                        Email <span className="required">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. name@example.com"
                        aria-required="true"
                        aria-invalid={!!(errors.email && touched.email)}
                        aria-describedby={errors.email && touched.email ? "email-error" : undefined}
                        className={errors.email && touched.email ? "input-error" : ""}
                      />
                      {errors.email && touched.email && (
                        <span id="email-error" className="form-error" role="alert">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="projectType">
                        Project type <span className="required">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-required="true"
                        aria-invalid={!!(errors.projectType && touched.projectType)}
                        aria-describedby={
                          errors.projectType && touched.projectType
                            ? "projectType-error"
                            : undefined
                        }
                        className={
                          errors.projectType && touched.projectType
                            ? "input-error select-input"
                            : "select-input"
                        }
                      >
                        <option value="">Select project type...</option>
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.projectType && touched.projectType && (
                        <span id="projectType-error" className="form-error" role="alert">
                          {errors.projectType}
                        </span>
                      )}
                    </div>

                    <div className="form-field">
                      <label htmlFor="budget">
                        Budget <span className="required">*</span>
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-required="true"
                        aria-invalid={!!(errors.budget && touched.budget)}
                        aria-describedby={
                          errors.budget && touched.budget ? "budget-error" : undefined
                        }
                        className={
                          errors.budget && touched.budget
                            ? "input-error select-input"
                            : "select-input"
                        }
                      >
                        <option value="">Select budget range...</option>
                        {BUDGET_RANGES.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                      {errors.budget && touched.budget && (
                        <span id="budget-error" className="form-error" role="alert">
                          {errors.budget}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="message">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={5}
                      placeholder="Tell us about your space, your vision, timeline, and what you're hoping to achieve..."
                      aria-required="true"
                      aria-invalid={!!(errors.message && touched.message)}
                      aria-describedby={
                        errors.message && touched.message ? "message-error" : undefined
                      }
                      className={errors.message && touched.message ? "input-error" : ""}
                    />
                    {errors.message && touched.message && (
                      <span id="message-error" className="form-error" role="alert">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-animated"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing Demo..." : "Submit Inquiry (Demo)"}
                  </button>

                  <p className="form-notice">
                    Note: This is a front-end demonstration form. Submissions are processed locally.
                  </p>
                </form>
              )}

              <ScrollReveal delay={200}>
                <div className="contact-details">
                  <div className="detail-block">
                    <h4>Email</h4>
                    <p>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="contact-detail-link"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </p>
                  </div>

                  <div className="detail-block">
                    <h4>Phone</h4>
                    <p>
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}
                        className="contact-detail-link"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </p>
                  </div>

                  <div className="detail-block">
                    <h4>Opening Hours</h4>
                    <p>{siteConfig.contact.hours}</p>
                  </div>

                  <div className="detail-block">
                    <h4>Location</h4>
                    <p>
                      {siteConfig.contact.location}
                      <span className="contact-detail-sub">
                        ({siteConfig.contact.locationDetails})
                      </span>
                    </p>
                  </div>

                  <div className="detail-block detail-notice-block">
                    <h4>Studio Notice</h4>
                    <p className="detail-notice-text">
                      {siteConfig.practiceNotice}
                    </p>
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
