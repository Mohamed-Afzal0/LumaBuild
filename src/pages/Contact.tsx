import { useState, type FormEvent } from "react";
import "./Pages.css";
import ScrollReveal from "../components/ScrollReveal";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        break;
      case "email": {
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Please enter a valid email address";
        break;
      }
      case "subject":
        if (!value.trim()) return "Subject is required";
        if (value.trim().length < 3) return "Subject must be at least 3 characters";
        break;
      case "message":
        if (value.trim() && value.trim().length < 10) {
          return "Message must be at least 10 characters";
        }
        break;
    }
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (["name", "email", "subject"] as Array<keyof FormData>).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    if (formData.message.trim()) {
      const error = validateField("message", formData.message);
      if (error) {
        newErrors.message = error;
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });

    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
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
              Tell us about your project and we will get back to you within two working days.
            </p>

            <div className="contact-layout">
              {isSubmitted ? (
                <div className="form-success" role="alert">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent Successfully!</h3>
                  <p>
                    Thank you for reaching out. We have received your inquiry and 
                    will get back to you within two working days.
                  </p>
                  <p className="success-note">
                    Note: This is a demo form. No actual message was sent.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary btn-animated"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
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
                        className={errors.name && touched.name ? "input-error" : ""}
                      />
                      {errors.name && touched.name && (
                        <span className="form-error">{errors.name}</span>
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
                        placeholder="Enter your email (e.g. name@example.com)"
                        className={errors.email && touched.email ? "input-error" : ""}
                      />
                      {errors.email && touched.email && (
                        <span className="form-error">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="subject">
                      Subject <span className="required">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter project type or subject"
                      className={errors.subject && touched.subject ? "input-error" : ""}
                    />
                    {errors.subject && touched.subject && (
                      <span className="form-error">{errors.subject}</span>
                    )}
                  </div>

                  <div className="form-field">
                    <label htmlFor="message">
                      Message <span className="optional">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={6}
                      placeholder="Tell us about your space, your vision, timeline, and what you're hoping to achieve..."
                      className={errors.message && touched.message ? "input-error" : ""}
                    />
                    {errors.message && touched.message && (
                      <span className="form-error">{errors.message}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-animated"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send message"}
                  </button>
                </form>
              )}

              <ScrollReveal delay={200}>
                <div className="contact-details">
                  <div className="detail-block">
                    <h4>Email</h4>
                    <p>hello@lumabuild.example</p>
                  </div>

                  <div className="detail-block">
                    <h4>Phone</h4>
                    <p>+94 777 123 456</p>
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
