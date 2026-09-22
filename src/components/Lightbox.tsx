import { useEffect, type ReactNode } from "react";
import "./Lightbox.css";

interface LightboxProps {
  image: string;
  title: string;
  onClose: () => void;
  children?: ReactNode;
}

const Lightbox = ({ image, title, onClose, children }: LightboxProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="lightbox-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <div className="lightbox-image-wrapper">
          <img src={image} alt={title} />
        </div>
        <p className="lightbox-caption">{title}</p>
        {children}
      </div>
    </div>
  );
};

export default Lightbox;
