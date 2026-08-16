/**
 * Configuração Central da NC Construções
 * Altere os dados de contato, WhatsApp e informações da empresa neste arquivo.
 */

export const WHATSAPP_NUMBER = "5511999999999"; // Substitua pelo número real com DDD: ex. 5511999999999
export const WHATSAPP_DEFAULT_MESSAGE = "Olá! Gostaria de solicitar um orçamento com a NC Construções.";

export const buildWhatsAppUrl = (message?: string): string => {
  const text = message || WHATSAPP_DEFAULT_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

export const COMPANY = {
  name: "NC Construções",
  tagline: "Qualidade • Compromisso • Confiança",
  description: "Especialistas em lavagem de fachadas, polimento de pisos e pintura profissional para valorizar, proteger e transformar seu imóvel.",
  contact: {
    phone: "(11) 99999-9999", // [INFORMAÇÃO A DEFINIR - Substituir pelo telefone real]
    email: "contato@ncconstrucoes.com.br",
    commercialEmail: "comercial@ncconstrucoes.com.br",
    region: "São Paulo e Grande São Paulo",
    hours: "Segunda a Sexta: 08:00 às 18:00",
  },
  stats: [
    { label: "Projetos Realizados", value: "+500", detail: "Obras e manutenções concluídas" },
    { label: "Clientes Atendidos", value: "+350", detail: "Condomínios, residências e empresas" },
    { label: "Anos de Experiência", value: "10+", detail: "Dedicação e aperfeiçoamento contínuo" },
  ],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
};
