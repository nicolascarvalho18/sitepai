export interface ProjectItem {
  id: string;
  title: string;
  category: "fachadas" | "pisos" | "pintura";
  categoryLabel: string;
  image: string;
  description: string;
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    title: "Lavagem e Hidrofugação de Fachada Corporativa",
    category: "fachadas",
    categoryLabel: "Fachadas",
    image: "/images/after-facade.jpg",
    description: "Remoção de sujidades e aplicação de proteção hidrorrepelente em edifício comercial.",
  },
  {
    id: "p2",
    title: "Restauração e Polimento de Mármore Nobre",
    category: "pisos",
    categoryLabel: "Pisos",
    image: "/images/after-floor.jpg",
    description: "Processo diamantado de nivelamento e cristalização de piso de hall de entrada.",
  },
  {
    id: "p3",
    title: "Pintura e Tratamento de Fachada Predial",
    category: "pintura",
    categoryLabel: "Pintura",
    image: "/images/service-building-painting.jpg",
    description: "Revitalização de alvenaria e pintura externa com tinta acrílica de alta resistência.",
  },
  {
    id: "p4",
    title: "Limpeza de Fachada em Vidro e Pastilha",
    category: "fachadas",
    categoryLabel: "Fachadas",
    image: "/images/service-facade-wash.jpg",
    description: "Limpeza técnica em altura com produtos neutros e acesso por corda certificado.",
  },
  {
    id: "p5",
    title: "Polimento de Piso em Hall Comercial",
    category: "pisos",
    categoryLabel: "Pisos",
    image: "/images/service-polishing.jpg",
    description: "Recuperação do brilho espelhado e remoção de marcas de desgaste em granito.",
  },
  {
    id: "p6",
    title: "Pintura Residencial Fina de Alto Padrão",
    category: "pintura",
    categoryLabel: "Pintura",
    image: "/images/service-residential-painting.jpg",
    description: "Acabamento fosco aveludado e preparação de paredes com massa corrida lisa.",
  },
];
