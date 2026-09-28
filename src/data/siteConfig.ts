export interface SocialLink {
  name: string;
  url: string;
  icon: "instagram" | "facebook" | "linkedin" | "github";
}

export interface NavLink {
  label: string;
  href: string;
  num?: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  description: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    locationDetails: string;
    hours: string;
  };
  socialLinks: SocialLink[];
  navLinks: NavLink[];
  links: {
    consultation: string;
    projects: string;
    services: string;
  };
  practiceNotice: string;
  author: {
    name: string;
    url: string;
  };
}

export const siteConfig: SiteConfig = {
  brandName: "LumaBuild",
  tagline: "Thoughtful spaces for modern living",
  description:
    "Calm, practical interiors and renovation planning. A concept studio created as a practice portfolio project demonstrating modern web architecture.",

  contact: {
    email: "hello@lumabuild.example",
    phone: "+94 77 123 4567",
    location: "Colombo, Sri Lanka",
    locationDetails: "Colombo area, by appointment",
    hours: "Monday–Friday, 9:00 AM–5:00 PM",
  },

  socialLinks: [
    {
      name: "Instagram",
      url: "https://instagram.com/lumabuild.demo",
      icon: "instagram",
    },
    {
      name: "Facebook",
      url: "https://facebook.com/lumabuild.demo",
      icon: "facebook",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/lumabuild-demo",
      icon: "linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/Mohamed-Afzal0/LumaBuild",
      icon: "github",
    },
  ],

  navLinks: [
    { label: "Home", href: "#home", num: "01" },
    { label: "Services", href: "#services", num: "02" },
    { label: "Projects", href: "#projects", num: "03" },
    { label: "About", href: "#about", num: "04" },
    { label: "Contact", href: "#contact", num: "05" },
  ],

  links: {
    consultation: "#contact",
    projects: "#projects",
    services: "#services",
  },

  practiceNotice:
    "Practice project. All studio names, projects, reviews and numbers are fictional demonstration content.",

  author: {
    name: "Mohamed Afzal",
    url: "https://mohamed-afzal-lovat.vercel.app/",
  },
};