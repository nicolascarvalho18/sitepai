import { useReveal } from '../../hooks/useReveal';

const StarSVG = () => (
  <svg className="test-star" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);
const QuoteSVG = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor" className="test-quote">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
  </svg>
);

const ITEMS = [
  { id:'t1', init:'CM', color:'#1a6cd4', name:'Carlos Mendes',    role:'Síndico — Condomínio Vila Nova',    stars:5, text:'Excelente atendimento e resultado impecável. Nossa fachada ficou completamente diferente. Equipe pontual, organizada e muito profissional.' },
  { id:'t2', init:'AR', color:'#7c3aed', name:'Ana Rodrigues',    role:'Proprietária — Residência em SP',   stars:5, text:'Contratei para polimento dos pisos de mármore e ficou simplesmente perfeito. O brilho voltou como se fosse novo. Recomendo muito!' },
  { id:'t3', init:'RS', color:'#059669', name:'Ricardo Souza',    role:'Gestor — Empresa Comercial',        stars:5, text:'Desde o orçamento até a finalização, fomos muito bem atendidos. Trabalho de alto padrão, cumprimento de prazo e acabamento excepcional.' },
  { id:'t4', init:'FL', color:'#dc2626', name:'Fernanda Lima',    role:'Síndica — Edifício Central',        stars:5, text:'Realizaram a pintura completa da fachada e manutenção geral do edifício. Serviço seguro, organizado e com ótimo acabamento.' },
  { id:'t5', init:'MO', color:'#d97706', name:'Marcos Oliveira',  role:'Proprietário — Casa Residencial',   stars:5, text:'Lavagem da fachada ficou incrível! Removeram anos de sujeira e manchas. Preço justo, atendimento rápido e resultado garantido.' },
  { id:'t6', init:'PC', color:'#0891b2', name:'Patricia Costa',   role:'Administradora — Condomínio',       stars:5, text:'Excelente equipe! Realizaram limpeza predial e tratamento de superfícies com qualidade. Os moradores ficaram muito satisfeitos.' },
];

export default function Testimonials() {
  const { ref, vis } = useReveal(0.05);

  return (
    <section id="depoimentos" aria-labelledby="test-title">
      <div className="sec wrap">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`sec-head${vis ? ' anim-up' : ' hidden-anim'}`}>
          <div className="eyebrow">Clientes satisfeitos</div>
          <h2 id="test-title" className="sec-title">A satisfação dos nossos clientes<br />é o nosso melhor resultado.</h2>
          <p className="sec-sub">Veja o que dizem quem já confiou no trabalho da NC Construções.</p>
        </div>

        <div className="test-grid">
          {ITEMS.map((t, i) => (
            <article key={t.id} className={`test-card${vis ? ' anim-up' : ' hidden-anim'} d${Math.min(i, 8)}`}>
              <QuoteSVG />
              <div className="test-stars">{Array.from({ length: t.stars }).map((_, k) => <StarSVG key={k} />)}</div>
              <p className="test-text">"{t.text}"</p>
              <div className="test-author">
                <div className="test-avatar" style={{ background: t.color }}>{t.init}</div>
                <div>
                  <div className="test-name">{t.name}</div>
                  <div className="test-role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
