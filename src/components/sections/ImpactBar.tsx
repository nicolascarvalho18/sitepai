import { Award, UserCheck, Shield, HeartHandshake } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const ITEMS = [
  {
    icon: Award,
    title: 'Qualidade no acabamento',
    desc: 'Atenção meticulosa aos detalhes em cada etapa do projeto'
  },
  {
    icon: UserCheck,
    title: 'Atendimento profissional',
    desc: 'Consultoria ágil, transparente e orientada à sua necessidade'
  },
  {
    icon: Shield,
    title: 'Execução segura',
    desc: 'Equipe qualificada com normas rigorosas de segurança'
  },
  {
    icon: HeartHandshake,
    title: 'Compromisso com o cliente',
    desc: 'Pontualidade, respeito e garantia de satisfação na entrega'
  }
];

export default function ImpactBar() {
  const { ref, vis } = useReveal(0.15);

  return (
    <section id="impacto" className="impact-bar" aria-label="Diferenciais de impacto">
      <div className="wrap">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`impact-grid${vis ? ' anim-up' : ' hidden-anim'}`}>
          {ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="impact-item">
                <div className="impact-icon">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="impact-title">{item.title}</h3>
                  <p className="impact-desc">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
