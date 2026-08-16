// ================================================================
// NC CONSTRUÇÕES — Config Central
// ================================================================
export const COMPANY = {
  name:     'NC Construções',
  tagline:  'Qualidade • Compromisso • Confiança',
  desc:     'Soluções profissionais em limpeza, conservação, polimento de pisos e pintura para imóveis residenciais e comerciais.',
  whatsapp: { number: '5511999999999', msg: 'Olá! Gostaria de solicitar um orçamento. Pode me ajudar?' },
  contact: {
    phone:  '(11) 99999-9999',
    email:  'contato@ncconstrucoes.com.br',
    region: 'Grande São Paulo e região',
    address:'São Paulo — SP',
  },
  social: {
    instagram: 'https://instagram.com/ncconstrucoes',
    facebook:  'https://facebook.com/ncconstrucoes',
    linkedin:  'https://linkedin.com/company/ncconstrucoes',
  },
  services: ['Lavagem de fachada','Polimento de piso','Pintura residencial','Pintura comercial','Pintura predial','Limpeza predial','Tratamento de piso','Manutenção e conservação','Outro'],
  propertyTypes: ['Residencial','Condomínio','Comercial','Industrial','Institucional','Outro'],
};

export const WA_URL = `https://wa.me/${COMPANY.whatsapp.number}?text=${encodeURIComponent(COMPANY.whatsapp.msg)}`;
