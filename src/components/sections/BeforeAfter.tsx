import { useRef, useState, useCallback, useEffect } from 'react';
import { useReveal } from '../../hooks/useReveal';

interface SliderProps {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  label: string;
}

function Slider({ before, after, beforeAlt, afterAlt, label }: SliderProps) {
  const [pos, setPos] = useState(50);
  const wrap = useRef<HTMLDivElement>(null);
  const drag = useRef(false);

  const update = useCallback((clientX: number) => {
    if (!wrap.current) return;
    const rect = wrap.current.getBoundingClientRect();
    const percent = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(Math.max(percent, 2), 98));
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    drag.current = true;
    update(e.clientX);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    drag.current = true;
    update(e.touches[0].clientX);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => { if (drag.current) update(e.clientX); };
    const onTouchMove = (e: TouchEvent) => { if (drag.current) update(e.touches[0].clientX); };
    const onEnd = () => { drag.current = false; };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onEnd);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, [update]);

  return (
    <div className="ba-card">
      <div
        className="ba-slider"
        ref={wrap}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        role="img"
        aria-label={`Comparador Antes e Depois: ${label}`}
      >
        <img className="ba-img" src={after} alt={afterAlt} loading="lazy" />
        <div className="ba-clip" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img className="ba-img" src={before} alt={beforeAlt} loading="lazy" />
        </div>

        <div className="ba-line" style={{ left: `${pos}%` }}>
          <div className="ba-handle">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
            </svg>
          </div>
        </div>

        <span className="ba-badge before">ANTES</span>
        <span className="ba-badge after">DEPOIS</span>
      </div>

      <div className="ba-card-foot">
        <div className="ba-card-title">{label}</div>
        <div className="ba-card-hint">Arraste para comparar ↔</div>
      </div>
    </div>
  );
}

const COMPARISONS = [
  {
    id: 'fachada',
    label: 'Lavagem de Fachada Predial',
    before: '/images/before-facade.jpg',
    after: '/images/after-facade.jpg',
    beforeAlt: 'Fachada suja com poluição antes da limpeza',
    afterAlt: 'Fachada limpa e revitalizada após lavagem técnica'
  },
  {
    id: 'piso',
    label: 'Polimento e Restauração de Piso',
    before: '/images/before-floor.jpg',
    after: '/images/after-floor.jpg',
    beforeAlt: 'Piso opaco e desgastado antes do polimento',
    afterAlt: 'Piso espelhado com brilho profundo após tratamento'
  },
  {
    id: 'pintura',
    label: 'Pintura e Renovação Predial',
    before: '/images/before-facade.jpg',
    after: '/images/service-building-painting.jpg',
    beforeAlt: 'Pintura antiga e desgastada pelo tempo',
    afterAlt: 'Pintura nova com acabamento uniforme de alto padrão'
  }
];

export default function BeforeAfter() {
  const { ref, vis } = useReveal(0.08);

  return (
    <section id="antes-depois" className="sec" style={{ background: 'var(--bg-soft)' }} aria-labelledby="ba-title">
      <div className="wrap">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`sec-head${vis ? ' anim-up' : ' hidden-anim'}`}>
          <div className="eyebrow">Resultados Visíveis</div>
          <h2 id="ba-title" className="sec-title">A TRANSFORMAÇÃO FALA POR SI</h2>
          <p className="sec-sub">
            Veja a diferença que um serviço profissional pode fazer.
          </p>
        </div>

        <div className={`ba-grid${vis ? ' anim-up d2' : ' hidden-anim'}`}>
          {COMPARISONS.map((c) => (
            <Slider
              key={c.id}
              label={c.label}
              before={c.before}
              after={c.after}
              beforeAlt={c.beforeAlt}
              afterAlt={c.afterAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
