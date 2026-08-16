export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  highlights: string[];
  ctaText: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "lavagem-fachadas",
    title: "Lavagem de Fachadas",
    shortDesc: "Limpeza profissional para recuperar a aparência e valorizar a fachada do imóvel.",
    fullDesc: "Remoção técnica de sujidades, fuligem urbana, eflorescências e manchas biológicas. Execução com equipamentos de hidrojateamento de pressão controlada e técnicas seguras de acesso por corda e andaimes.",
    image: "/images/service-facade-wash.jpg",
    highlights: [
      "Hidrojateamento com pressão regulada",
      "Produtos específicos biodegradáveis",
      "Acesso por alpinismo industrial certificado",
      "Preservação do revestimento e vidros",
    ],
    ctaText: "Solicitar Orçamento",
  },
  {
    id: "polimento-pisos",
    title: "Polimento de Pisos",
    shortDesc: "Tratamento profissional para melhorar o acabamento e aparência dos pisos.",
    fullDesc: "Restauração e polimento de pisos em mármore, granito, pedras naturais e concreto. Processo abrasivo diamantado que elimina riscos, nivela juntas e devolve o brilho espelhado e a resistência da superfície.",
    image: "/images/service-polishing.jpg",
    highlights: [
      "Polimento diamantado de alta precisão",
      "Cristalização e selagem protetora",
      "Nivelamento de desníveis e trincas",
      "Manutenção da luminosidade natural",
    ],
    ctaText: "Solicitar Orçamento",
  },
  {
    id: "pintura",
    title: "Pintura",
    shortDesc: "Serviços de pintura com foco em acabamento, proteção e valorização do imóvel.",
    fullDesc: "Pintura predial, comercial e residencial de alto padrão. Tratamento prévio de trincas, impermeabilização contra infiltrações e aplicação de tintas nobres com durabilidade e acabamento impecável.",
    image: "/images/service-building-painting.jpg",
    highlights: [
      "Pintura predial externa e interna",
      "Tratamento de trincas e fissuras",
      "Impermeabilização preventiva",
      "Acabamento fino e padronizado",
    ],
    ctaText: "Solicitar Orçamento",
  },
];
