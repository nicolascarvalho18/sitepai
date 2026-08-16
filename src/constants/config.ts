// ================================================================
// NC CONSTRUÇÕES — Configuração da Empresa
// ================================================================
export const COMPANY = {
  name:     'NC Construções',
  tagline:  'Qualidade • Compromisso • Confiança',
  desc:     'Soluções profissionais em lavagem de fachadas, polimento de pisos e pintura para ambientes residenciais e comerciais.',
  whatsapp: { 
    number: '5511999999999', 
    msg: 'Olá! Gostaria de solicitar um orçamento com a NC Construções.' 
  },
  contact: {
    phone:  '(11) 99999-9999',
    email:  'contato@ncconstrucoes.com.br',
    region: 'São Paulo e Região Metropolitana',
    address:'São Paulo — SP',
  },
  social: {
    instagram: 'https://instagram.com/ncconstrucoes',
    facebook:  'https://facebook.com/ncconstrucoes',
    linkedin:  'https://linkedin.com/company/ncconstrucoes',
  },
  services: [
    'Lavagem de Fachada',
    'Polimento de Piso',
    'Pintura',
    'Pintura Residencial e Comercial',
    'Outro'
  ],
};

export const WA_URL = `https://wa.me/${COMPANY.whatsapp.number}?text=${encodeURIComponent(COMPANY.whatsapp.msg)}`;
