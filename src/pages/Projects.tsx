import "./Pages.css"
import projectsData from "../data/projectsData.js"

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Featured projects</h2>

          <p>
            A few sample projects to show how the studio's work
            would be presented.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project: any, index: number) => (
            <div className="project-card" key={index}>
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

        <div className="projects-button">
          <button>View all projects</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;