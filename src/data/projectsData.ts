import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";

export interface Project {
  id: number;
  image: string;
  category: string;
  title: string;
  location: string;
}

export const Projects: Project[] = [
  {
    id: 1,
    image: p1,
    category: "Residential",
    title: "Harbour View Apartment",
    location: "Colombo",
  },
  {
    id: 2,
    image: p2,
    category: "Commercial",
    title: "Studio Loft Office",
    location: "Kandy",
  },
  {
    id: 3,
    image: p3,
    category: "Renovation",
    title: "Garden House Refresh",
    location: "Galle",
  },
];

export default Projects;