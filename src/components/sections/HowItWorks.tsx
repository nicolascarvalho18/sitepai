import { MessageSquare, Search, Cog, CheckSquare } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const STEPS = [
  { n: '01', icon: MessageSquare, title: 'Solicitação de orçamento',  desc: 'Entre em contato pelo formulário, WhatsApp ou telefone. Respondemos rapidamente.' },
  { n: '02', icon: Search,        title: 'Avaliação do serviço',       desc: 'Realizamos visita técnica para avaliar as condições e necessidades do seu imóvel.' },
  { n: '03', icon: Cog,           title: 'Planejamento e execução',    desc: 'Planejamos cada etapa com precisão e executamos com os melhores equipamentos.' },
  { n: '04', icon: CheckSquare,   title: 'Entrega do projeto',         desc: 'Entregamos dentro do prazo, com inspeção de qualidade e garantia do serviço.' },
];

export default function HowItWorks() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section style={{ background: 'var(--bg-light)' }} aria-labelledby="hiw-title">
      <div className="section container">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`section-header ${isVisible ? 'anim-fade-up' : 'will-animate'}`}
        >
          <div className="section-badge">Processo</div>
          <h2 id="hiw-title" className="section-title">Como funciona</h2>
          <p className="section-subtitle" style={{ marginTop: 16 }}>
            Do primeiro contato à entrega final, garantimos transparência e excelência em cada etapa.
          </p>
        </div>

        <div className="hiw-grid">
          {/* Connecting line */}
          <div className="hiw-connector" />

          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.n}
                className={`hiw-step ${isVisible ? 'anim-fade-up' : 'will-animate'}`}
                style={{ animationDelay: `${i * 130}ms` }}
              >
                <div className="hiw-icon-wrap">
                  <div className="hiw-icon-bg">
                    <Icon size={30} />
                  </div>
                  <div className="hiw-number">{s.n}</div>
                </div>
                <h3 className="hiw-title">{s.title}</h3>
                <p className="hiw-desc">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
