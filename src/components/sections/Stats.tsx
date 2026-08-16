import { Building2, Award, ShieldCheck, ThumbsUp } from 'lucide-react';
import { useReveal, useCounter } from '../../hooks/useReveal';

interface CellProps {
  icon: React.ElementType;
  prefix?: string;
  end: number;
  suffix?: string;
  label: string;
  desc: string;
}

function Cell({ icon: Icon, prefix = '', end, suffix = '', label, desc }: CellProps) {
  const { ref, vis } = useReveal(0.2);
  const count = useCounter(end, 1800, vis);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`stat-cell${vis ? ' anim-up' : ' hidden-anim'}`}>
      <div className="stat-icon-wrap">
        <Icon size={22} className="stat-cell-icon" />
      </div>
      <div className="stat-num">
        <span className="stat-accent">{prefix}</span>
        {count}
        <span className="stat-accent">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-desc">{desc}</div>
      <div className="stat-line" />
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="stats-sec" aria-label="Números da empresa">
      <div className="stats-glow1" /><div className="stats-glow2" />
      <div className="wrap">
        <div className="stats-grid">
          <Cell icon={Building2} prefix="+" end={500} label="Obras e manutenções" desc="Entregues em SP e região" />
          <Cell icon={Award} prefix="+" end={10} suffix=" anos" label="Experiência comprovada" desc="Equipe técnica especializada" />
          <Cell icon={ShieldCheck} end={100} suffix="%" label="Conformidade e segurança" desc="Normas NR-35 e NR-18" />
          <Cell icon={ThumbsUp} end={98} suffix="%" label="Índice de satisfação" desc="Avaliações positivas de clientes" />
        </div>
      </div>
    </section>
  );
}
