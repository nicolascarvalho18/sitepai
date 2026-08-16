export interface DifferentialItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: "ShieldCheck" | "Clock" | "Briefcase" | "Award";
}

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: "qualidade",
    number: "01",
    title: "QUALIDADE",
    description: "Execução cuidadosa e foco no acabamento em todas as superfícies e detalhes.",
    iconName: "Award",
  },
  {
    id: "compromisso",
    number: "02",
    title: "COMPROMISSO",
    description: "Responsabilidade, pontualidade e atenção rigorosa em cada etapa do projeto.",
    iconName: "Clock",
  },
  {
    id: "profissionalismo",
    number: "03",
    title: "PROFISSIONALISMO",
    description: "Atendimento organizado, equipe devidamente uniformizada e execução técnica padronizada.",
    iconName: "Briefcase",
  },
  {
    id: "confianca",
    number: "04",
    title: "CONFIANÇA",
    description: "Transparência total em orçamentos, contratos formais e garantia de entrega.",
    iconName: "ShieldCheck",
  },
];
