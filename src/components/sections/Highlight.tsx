import { Check, ArrowRight } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const CHECKS = [
  'Atendimento personalizado',
  'Acabamento profissional',
  'Segurança na execução',
  'Soluções para residências e empresas',
];

export default function Highlight() {
  const { ref: lRef, vis: lVis } = useReveal(0.12);
  const { ref: rRef, vis: rVis } = useReveal(0.12);

  const scrollToContact = () => {
    const el = document.getElementById('contato');
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="sobre" className="sec" aria-labelledby="highlight-title">
      <div className="wrap">
        <div className="highlight-split">
          {/* Imagem Grande e Profissional */}
          <div
            ref={lRef as React.RefObject<HTMLDivElement>}
            className={`highlight-img-box${lVis ? ' anim-left' : ' hidden-anim'}`}
          >
            <img
              src="/images/after-facade.jpg"
              alt="Fachada moderna e revitalizada com acabamento impecável pela NC Construções"
              loading="lazy"
            />
          </div>

          {/* Conteúdo Institucional & Checklist */}
          <div
            ref={rRef as React.RefObject<HTMLDivElement>}
            className={rVis ? 'anim-right' : 'hidden-anim'}
          >
            <div className="eyebrow">Transformação Completa</div>
            <h2 id="highlight-title" className="sec-title" style={{ marginBottom: 18 }}>
              Seu imóvel pode ter<br />uma nova aparência.
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-light)', lineHeight: 1.75 }}>
              Da preparação ao acabamento final, trabalhamos para entregar um resultado visualmente impecável e adequado às necessidades de cada projeto.
            </p>

            {/* Checklist de Diferenciais Conforme Brief */}
            <div className="highlight-checklist">
              {CHECKS.map((item, idx) => (
                <div key={idx} className="check-item">
                  <div style={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Check size={14} className="check-icon" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button className="btn btn-primary btn-lg" onClick={scrollToContact}>
              QUERO SOLICITAR UM ORÇAMENTO
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
