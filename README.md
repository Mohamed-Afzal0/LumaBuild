# LumaBuild

### Architectural Interiors & Renovation Studio Concept

A modern, high-performance concept website designed for an architectural interior design and renovation studio. Built with **React 19**, **TypeScript**, and **Vite**, this project exemplifies responsive design systems, accessible UI patterns, and component-driven architecture.

---

<!-- Technology Badges -->
<div align="center">

[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646C99?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7.18-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![CSS3](https://img.shields.io/badge/CSS3-Design_System-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Linter](https://img.shields.io/badge/Linter-Oxlint-F28D1A?style=for-the-badge&logo=oxlint&logoColor=white)](https://oxc.rs/)

<br />

<!-- Live Demo Buttons -->
[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Website-2ea44f?style=for-the-badge&logo=vercel)](https://luma-build-snowy.vercel.app/)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/Mohamed-Afzal0/LumaBuild)

</div>

---

## 📸 Preview

![LumaBuild Home Preview](./src/assets/ScreenShots/home_page.png)

---

## ⚠️ Fictional Project Disclaimer

> [!NOTE]
> **This website is a fictional front-end concept and portfolio demonstration project.**
>
> - **Brand Identity**: "LumaBuild" is an entirely conceptual studio name created for demonstration and skill exhibition purposes.
> - **Demonstration Contact Form**: The contact and consultation form operates in **front-end demonstration mode**. It validates input in real time and simulates submission state locally; **no emails or inquiries are delivered to an active inbox**. If live messaging is required in the future, the form can be connected to a form service or server API.
> - **Content & Metrics**: All photography, architectural project case studies, client reviews, studio metrics, addresses, and phone numbers are fictional demonstration materials.

---

## ✨ Feature Overview

- **Fluid Single-Page Navigation**: Smooth section scrolling between `#home`, `#services`, `#projects`, `#about`, and `#contact`, accompanied by a mobile slide-out navigation panel and desktop CTA triggers.
- **Interactive Project Lightbox**: High-resolution gallery view enabling users to inspect portfolio projects, read design notes, view metadata, and navigate via keyboard or mouse.
- **Validated Demonstration Contact Form**: Multi-field inquiry form (`Name`, `Email`, `Project Type`, `Budget`, `Message`) with client-side field validation, instant error feedback, and demonstration submission confirmation.
- **Scroll-Triggered Reveal Animations**: Lightweight, dependency-free Intersection Observer component orchestrating staggered fade-in and slide-up transitions.
- **Dynamic Animated Counters**: Intersection-aware counter component for highlighting studio metrics (projects completed, client satisfaction rate, and awards).
- **Single Source of Truth (`siteConfig`)**: Centralized data configuration powering studio details, contact info, working hours, and social channels across the Header, Contact section, and Footer without duplicate records.
- **Architectural Design System**: Custom CSS variables orchestrating deep architectural oceanic teal (`#16393e`), warm brushed brass (`#d49a3d`), warm alabaster backgrounds (`#faf8f5`), and refined typography.

---

## 📑 Page List & Section Guide

The application is structured around a continuous editorial flow that guides prospective clients through the studio's philosophy, expertise, and portfolio:

1. **Home (`#home`)**:
   - Hero statement: *"Calm, practical spaces designed around how you actually live."*
   - Featured architectural hero imagery.
   - Dual action triggers: *Explore our work* and *Book a consultation*.
2. **Services (`#services`)**:
   - Four specialized architectural & interior offerings: *Residential interiors*, *Commercial spaces*, *Renovation planning*, and *Custom styling*.
   - Architectural vector iconography and comprehensive service scope summaries.
3. **Projects (`#projects`)**:
   - Curated portfolio gallery showcasing living spaces, kitchen layouts, and commercial designs.
   - Interactive Lightbox modal for fullscreen previews, detailed client scopes, and design briefs.
4. **About (`#about`)**:
   - The studio's 4-stage process: *Initial consultation*, *Concept & space planning*, *Detailing & sourcing*, and *Execution & handover*.
   - Animated statistical benchmarks highlighting studio accomplishments.
5. **Contact (`#contact`)**:
   - Multi-input project inquiry form with validation (Name, Email, Project Type, Budget, Message).
   - Clear portfolio demonstration handling and simulated confirmation screen.
   - Synchronized contact card (Email, Phone, Operating Hours, Studio Location, and Notice) powered by `siteConfig`.
   - Bottom consultation banner CTA.
6. **404 Not Found (`NotFound.tsx`)**:
   - Graceful fallback view for invalid route requests with quick return navigation.

---

## 📁 Project Structure & Architectural Rationale

### Directory Layout

```
LumaBuild/
├── public/                     # Public static assets & favicon
├── src/
│   ├── assets/                 # Brand logos, photography & previews
│   │   ├── ScreenShots/        # UI preview screenshots
│   │   ├── hero.png            # Hero section photography
│   │   ├── logo.svg            # Studio SVG brandmark
│   │   └── p1.jpg, p2.jpg, ... # Project portfolio imagery
│   ├── components/             # Modular UI components
│   │   ├── Counter.tsx         # Animated numerical metric counter
│   │   ├── Footer.tsx          # Comprehensive footer with siteConfig data
│   │   ├── Footer.css          # Footer layout & social button styling
│   │   ├── GoTop.tsx           # Floating scroll-to-top button
│   │   ├── Header.tsx          # Desktop navigation & mobile off-canvas drawer
│   │   ├── Lightbox.tsx        # Accessible fullscreen modal lightbox
│   │   ├── Lightbox.css        # Lightbox transitions & responsive modal
│   │   ├── LoadingScreen.tsx   # Initial branded loading splash screen
│   │   ├── ScrollReveal.tsx    # Intersection Observer animation wrapper
│   │   └── components.css      # Shared component styles
│   ├── data/                   # Centralized data sources
│   │   ├── projectsData.ts     # Project items, metadata & gallery sources
│   │   ├── servicesData.ts     # Studio service offerings & descriptions
│   │   └── siteConfig.ts       # Central source of truth for studio details
│   ├── pages/                  # Page-level section modules
│   │   ├── About.tsx           # Studio methodology, workflow & stats
│   │   ├── Contact.tsx         # Validated demo inquiry form & details card
│   │   ├── Home.tsx            # Landing hero & studio introduction
│   │   ├── NotFound.tsx        # 404 error page
│   │   ├── Pages.css           # Core styling for page sections & forms
│   │   ├── Projects.tsx        # Portfolio showcase & lightbox trigger
│   │   └── Services.tsx        # Studio services grid
│   ├── App.tsx                 # Root layout composer
│   ├── App.css                 # Application-level layout styles
│   ├── index.css               # Global CSS variables, reset & typography
│   └── main.tsx                # React DOM entry point
├── Dockerfile                  # Multi-stage production Nginx container
├── Dockerfile.dev              # Hot-reloading development container
├── docker-compose.yml          # Production Docker compose orchestration
├── docker-compose.dev.yml      # Development Docker compose orchestration
├── nginx.conf                  # Nginx production reverse proxy & gzip config
├── package.json                # Project dependencies & scripts
└── tsconfig.json               # TypeScript compiler configuration
```

### Architectural Rationale: Why This Page Structure?

1. **Continuous Editorial Scrolling with Section Anchor Navigation**:
   High-end design studios benefit from an unbroken storytelling narrative. Rather than requiring users to click between disconnected routes, the layout allows visitors to flow seamlessly from the hero story to services, visual evidence (portfolio), methodology, and finally consultation booking.
2. **Encapsulated Section Components in `src/pages/`**:
   Although composed within `App.tsx` for single-page harmony, each major section lives in its own dedicated component in `src/pages/`. This strict separation of concerns allows any section to be maintained, refactored, or isolated into standalone routes in `react-router-dom` in the future without breaking layout coupling.
3. **Centralized Configuration via `siteConfig.ts`**:
   Contact details (email, phone, address, operating hours), social links, and navigation items are unified in `siteConfig.ts`. This guarantees complete data consistency across the Header, Contact section, and Footer, eliminating the risk of mismatched information.
4. **Decoupled Data Sets in `src/data/`**:
   Project showcases and service cards are separated into strongly typed TypeScript data files (`projectsData.ts`, `servicesData.ts`). This mirrors headless CMS data models and enables effortless content editing without modifying JSX markup.

---

## 🎨 Design Decisions

### Color Palette

The color system is engineered around an architectural, material-inspired moodboard:

| Swatch | Variable | Hex | Purpose |
| :--- | :--- | :--- | :--- |
| ![#16393e](https://via.placeholder.com/15/16393e/000000?text=+) | `--color-primary` | `#16393e` | Deep architectural oceanic teal for structure, headings, and primary buttons |
| ![#10272b](https://via.placeholder.com/15/10272b/000000?text=+) | `--color-primary-dark` | `#10272b` | Deep shadow tone for hover states and dark accents |
| ![#d49a3d](https://via.placeholder.com/15/d49a3d/000000?text=+) | `--color-accent` | `#d49a3d` | Warm brushed brass / gold for badges, highlights, and subtle borders |
| ![#faf8f5](https://via.placeholder.com/15/faf8f5/000000?text=+) | `--color-background` | `#faf8f5` | Warm linen alabaster providing a softer canvas than stark white |
| ![#f3efe8](https://via.placeholder.com/15/f3efe8/000000?text=+) | `--color-background-alt` | `#f3efe8` | Travertine surface contrast for alternating sections |
| ![#060911](https://via.placeholder.com/15/060911/000000?text=+) | `--color-footer-bg` | `#060911` | Obsidian dark background for grounding the footer |

### Typography

- **Headlines & Editorial Statements**: `Playfair Display` (serif) brings editorial elegance, craftsmanship, and architectural distinction.
- **Body, UI & Form Elements**: `DM Sans` (sans-serif) offers geometric balance, clear character distinction, and readability at micro sizes.
- **Fluid Sizing**: Utilizes CSS `clamp()` functions to ensure typography scales smoothly across small mobile displays up to ultrawide desktop monitors without sudden breakpoint jumps.

---

## ♿ Accessibility & Responsive Design

### Accessibility Standards (a11y)

- **Semantic Landmarks**: Strict HTML5 structure using `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, `<figure>`, and `<figcaption>`.
- **Form Accessibility**:
  - Explicit `<label htmlFor="...">` bindings on all inputs, selects, and textareas.
  - Dynamic `aria-required="true"`, `aria-invalid`, and `aria-describedby` error bindings for assistive screen readers.
  - Error messages and submission status utilize `role="alert"` and `role="status"` live regions.
- **Keyboard Navigation**:
  - Full keyboard accessibility across navigation menus, modal dialogs, and interactive buttons.
  - Modal Lightbox supports `Escape` to close, keyboard arrows (`ArrowLeft` / `ArrowRight`) to cycle projects, and active focus trapping.
  - Visible, high-contrast `:focus-visible` outlines on all interactive elements.
- **Motion Accessibility**: Scroll-triggered animations respect `prefers-reduced-motion` settings.

### Responsive Breakpoints

The responsive layout is optimized and verified across standard device viewports:

- **Mobile**: `320px` – `480px` (fluid column stacking, accessible touch targets $\ge 44\text{px}$, mobile navigation drawer).
- **Tablet**: `768px` – `991px` (2-column grids for services, about steps, and portfolio items).
- **Laptop & Desktop**: `1024px` – `1440px+` (balanced multi-column architectural compositions).

---

## 🛠 Installation & Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (version `20.x` or higher recommended)
- `npm` (version `10.x` or higher)

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mohamed-Afzal0/LumaBuild.git
   cd LumaBuild
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with Hot Module Replacement (HMR).

---

## 📜 Available Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| **Development** | `npm run dev` | Launches Vite dev server with hot module replacement at `localhost:5173` |
| **Production Build** | `npm run build` | Runs TypeScript compilation (`tsc -b`) and generates optimized production bundle in `dist/` |
| **Preview Build** | `npm run preview` | Locally serves the compiled production files from `dist/` |
| **Lint Codebase** | `npm run lint` | Runs [Oxlint](https://oxc.rs/) for ultra-fast static code inspection |

---

## 🐳 Docker Setup

### Development (Hot-Reloading)

```bash
docker compose -f docker-compose.dev.yml up --build
```
Access at [http://localhost:5173](http://localhost:5173).

### Production Build & Container

```bash
docker build -t lumabuild:latest .
docker run -d -p 80:80 --name lumabuild lumabuild:latest
```
Access at [http://localhost:80](http://localhost:80).

> For advanced Docker configuration and multi-stage build documentation, see [DOCKER_SETUP.md](./DOCKER_SETUP.md).

---

## 📬 Contact & Author

Created by **Mohamed Afzal**

- **Portfolio**: [mohamed-afzal-lovat.vercel.app](https://mohamed-afzal-lovat.vercel.app/)
- **GitHub**: [@Mohamed-Afzal0](https://github.com/Mohamed-Afzal0)
- **Repository**: [LumaBuild on GitHub](https://github.com/Mohamed-Afzal0/LumaBuild)

---

## License

This project was created for educational and portfolio purposes.

You may use the structure as a learning reference, but do not copy the brand identity, project content, images, or written material and present them as your own commercial client work.