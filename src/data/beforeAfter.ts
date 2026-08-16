export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  description: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  tags: string[];
}

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: "fachada-restauro",
    title: "Revitalização de Fachada Predial",
    category: "Fachadas",
    description: "Correção profunda de patologias arquitetônicas, remoção de fungos e sujidades acumuladas. O tratamento incluiu selagem hidrorrepelente para prolongar a vida útil do revestimento e prevenir futuras infiltrações.",
    before: "/images/before-facade.jpg",
    after: "/images/after-facade.jpg",
    beforeAlt: "Fachada deteriorada e manchada antes da intervenção",
    afterAlt: "Fachada limpa e restaurada após intervenção da NC Construções",
    tags: ["Limpeza Técnica", "Impermeabilização", "Norma NR-35"],
  },
  {
    id: "piso-polimento",
    title: "Restauração e Polimento de Mármore",
    category: "Pisos",
    description: "Desbaste diamantado, polimento e cristalização completa de piso nobre. O processo eliminou riscos profundos, nivelou o rejunte e devolveu o brilho natural e a claridade ao ambiente.",
    before: "/images/before-floor.jpg",
    after: "/images/after-floor.jpg",
    beforeAlt: "Piso de mármore desgastado e sem brilho antes do polimento",
    afterAlt: "Piso de mármore brilhante e espelhado após polimento da NC Construções",
    tags: ["Polimento Diamantado", "Cristalização", "Alto Brilho"],
  },
];
