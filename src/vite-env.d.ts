/// <reference types="vite/client" />

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "../data/projectsData.js" {
  interface Project {
    category: string;
    title: string;
    location: string;
  }
  const Projects: Project[];
  export default Projects;
}

declare module "../data/servicesData.js" {
  interface Service {
    icon: string;
    title: string;
    description: string;
  }
  const Services: Service[];
  export default Services;
}
