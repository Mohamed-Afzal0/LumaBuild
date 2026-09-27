import { useState, useEffect } from "react";
import "./components.css";

const GoTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button once user scrolls down 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`Btn ${visible ? "Btn--visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to Top"
      title="Back to Top"
    >
      <svg
        height="1.2em"
        className="arrow"
        viewBox="0 0 512 512"
        aria-hidden="true"
      >
        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
      </svg>
      <span className="text">Back to Top</span>
    </button>
  );
};

export default GoTop;
