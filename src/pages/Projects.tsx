import "./Pages.css";

const Projects = () => {
  const projects = [
    {
      category: "Residential",
      title: "Harbour View Apartment",
      location: "Colombo",
    },
    {
      category: "Commercial",
      title: "Studio Loft Office",
      location: "Kandy",
    },
    {
      category: "Renovation",
      title: "Garden House Refresh",
      location: "Galle",
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Featured projects</h2>

          <p>
            A few sample projects to show how the studio's work
            would be presented.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                Project image
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