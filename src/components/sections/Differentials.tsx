import { Award, Clock, Briefcase, ShieldCheck } from 'lucide-react';
import { DIFFERENTIALS } from '../../data/differentials';

const ICON_MAP = {
  Award: Award,
  Clock: Clock,
  Briefcase: Briefcase,
  ShieldCheck: ShieldCheck,
};

export default function Differentials() {
  return (
    <section id="diferenciais" className="sec-pad" style={{ background: 'var(--cinza-claro)' }} aria-labelledby="diff-heading">
      <div className="container">
        <div className="sec-head">
          <div className="eyebrow">POR QUE ESCOLHER A NC</div>
          <h2 id="diff-heading" className="sec-title">
            NOSSOS PILARES DE ATUAÇÃO
          </h2>
          <p className="sec-subtitle">
            Compromisso inegociável com a segurança, padrão técnico e satisfação de cada cliente.
          </p>
        </div>

        <div className="diff-grid">
          {DIFFERENTIALS.map((diff) => {
            const Icon = ICON_MAP[diff.iconName];
            return (
              <div key={diff.id} className="diff-card">
                <span className="diff-num">{diff.number}</span>
                <div className="diff-icon-box">
                  <Icon size={24} />
                </div>
                <h3 className="diff-title">{diff.title}</h3>
                <p className="diff-desc">{diff.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
