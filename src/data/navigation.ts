export interface NavLink {
  label: string;
  id: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Início",       id: "inicio",       href: "#inicio" },
  { label: "Serviços",     id: "servicos",     href: "#servicos" },
  { label: "Sobre Nós",    id: "sobre",        href: "#sobre" },
  { label: "Projetos",     id: "projetos",     href: "#projetos" },
  { label: "Diferenciais", id: "diferenciais", href: "#diferenciais" },
  { label: "Contato",      id: "contato",      href: "#contato" },
];
