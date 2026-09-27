export interface Service {
  id: number;
  iconType: "residential" | "commercial" | "renovation" | "styling";
  title: string;
  description: string;
}

export const Services: Service[] = [
  {
    id: 1,
    iconType: "residential",
    title: "Residential interiors",
    description:
      "Living rooms, kitchens and bedrooms designed around how you actually live.",
  },
  {
    id: 2,
    iconType: "commercial",
    title: "Commercial spaces",
    description:
      "Cafes, studios and small offices that feel welcoming and work hard.",
  },
  {
    id: 3,
    iconType: "renovation",
    title: "Renovation planning",
    description:
      "Layouts, budgets and schedules sorted before the first wall comes down.",
  },
  {
    id: 4,
    iconType: "styling",
    title: "Custom styling",
    description:
      "Furniture, lighting and finishing touches picked to suit your space.",
  },
];

export default Services;