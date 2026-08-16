import { MessageSquare, Search, FileText, Wrench } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const STEPS = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Fale Conosco',
    desc: 'Entre em contato pelo WhatsApp e explique o que você precisa.'
  },
  {
    num: '02',
    icon: Search,
    title: 'Avaliação',
    desc: 'Entendemos o projeto e avaliamos o serviço necessário.'
  },
  {
    num: '03',
    icon: FileText,
    title: 'Orçamento',
    desc: 'Apresentamos uma proposta clara e personalizada.'
  },
  {
    num: '04',
    icon: Wrench,
    title: 'Execução',
    desc: 'Nossa equipe realiza o serviço com organização e atenção aos detalhes.'
  }
];

export default function Process() {
  const { ref, vis } = useReveal(0.08);

  return (
    <section id="como-funciona" className="sec" style={{ background: 'var(--bg-soft)' }} aria-labelledby="proc-title">
      <div className="wrap">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`sec-head${vis ? ' anim-up' : ' hidden-anim'}`}>
          <div className="eyebrow">Etapas Claras</div>
          <h2 id="proc-title" className="sec-title">COMO FUNCIONA</h2>
          <p className="sec-sub">
            Um processo transparente e sem burocracia do primeiro contato até a entrega final.
          </p>
        </div>

        <div className={`proc-grid-4${vis ? ' anim-up d2' : ' hidden-anim'}`}>
          {STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.num} className="proc-card-4">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <span className="proc-num-badge">{s.num}</span>
                  <div style={{ color: 'var(--primary)', opacity: 0.8 }}>
                    <Icon size={22} />
                  </div>
                </div>
                <h3 className="proc-step-title">{s.title}</h3>
                <p className="proc-step-desc">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
