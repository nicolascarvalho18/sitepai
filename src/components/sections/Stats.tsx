import { useReveal, useCounter } from '../../hooks/useReveal';

interface CellProps { prefix?: string; end: number; suffix?: string; label: string; desc: string }

function Cell({ prefix = '', end, suffix = '', label, desc }: CellProps) {
  const { ref, vis } = useReveal(0.3);
  const count = useCounter(end, 1800, vis);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`stat-cell${vis ? ' anim-up' : ' hidden-anim'}`}>
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
          <Cell prefix="+" end={100} label="Projetos realizados"         desc="Em residências e empresas" />
          <Cell prefix="+" end={5}   suffix=" anos" label="De experiência"  desc="No mercado de conservação" />
          <Cell           end={100} suffix="%" label="Compromisso com qualidade" desc="Em cada projeto entregue" />
          <Cell label="Atendimento" end={2} desc="Residencial e empresarial"
            prefix="" suffix=" tipos" />
        </div>
      </div>
    </section>
  );
}
