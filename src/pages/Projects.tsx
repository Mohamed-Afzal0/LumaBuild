import { useState } from "react";
import "./Pages.css";
import projectsData from "../data/projectsData.js";
import ScrollReveal from "../components/ScrollReveal";
import Lightbox from "../components/Lightbox";

const Projects = () => {
  const [lightboxImage, setLightboxImage] = useState<{ image: string; title: string } | null>(null);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <ScrollReveal>
          <div className="projects-header">
            <h2>Featured projects</h2>

            <p>
              A few sample projects to show how the studio work
              would be presented.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="projects-grid">
            {projectsData.map((project: any, index: number) => (
              <div
                className="project-card"
                key={index}
                onClick={() => setLightboxImage({ image: project.image, title: project.title })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setLightboxImage({ image: project.image, title: project.title });
                  }
                }}
                aria-label={"View " + project.title}
              >
                <div className="project-image">
                  {project.image && <img src={project.image} alt={project.title} />}
                </div>

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.location}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="projects-button">
            <button className="btn-animated btn-animated-dark">View all projects</button>
          </div>
        </ScrollReveal>
      </div>

      {lightboxImage && (
        <Lightbox
          image={lightboxImage.image}
          title={lightboxImage.title}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </section>
  );
};

export default Projects;
