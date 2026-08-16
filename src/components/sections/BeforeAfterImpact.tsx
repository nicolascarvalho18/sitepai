import { useRef, useState, useCallback, useEffect } from 'react';
import { useReveal } from '../../hooks/useReveal';

interface ImpactSliderProps {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}

function ImpactSlider({ before, after, beforeAlt, afterAlt }: ImpactSliderProps) {
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
    if (e.touches[0]) update(e.touches[0].clientX);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => { if (drag.current) update(e.clientX); };
    const onTouchMove = (e: TouchEvent) => {
      if (drag.current && e.touches[0]) {
        update(e.touches[0].clientX);
      }
    };
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
    <div
      className="impact-slider-box"
      ref={wrap}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      role="img"
      aria-label="Comparação de antes e depois"
    >
      <img className="islider-img" src={after} alt={afterAlt} loading="lazy" />
      <div className="islider-clip" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img className="islider-img" src={before} alt={beforeAlt} loading="lazy" />
      </div>

      <div className="islider-bar" style={{ left: `${pos}%` }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: '#0D5DFD',
          border: '2px solid #fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
          </svg>
        </div>
      </div>

      <span className="islider-tag depois">DEPOIS</span>
      <span className="islider-tag antes">ANTES</span>
    </div>
  );
}

export default function BeforeAfterImpact() {
  const { ref, vis } = useReveal(0.08);

  return (
    <section id="galeria" className="impact-dark-sec" aria-labelledby="impact-title">
      <div className="container">
        {/* Header Centralizado Conforme Screen 1 */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`impact-head${vis ? ' anim-up' : ' hidden-anim'}`}>
          <div className="impact-tag">RESULTADOS COMPROVADOS</div>
          <h2 id="impact-title" className="impact-title">
            O Impacto da Nossa Intervenção
          </h2>
          <p className="impact-sub">
            Arraste o cursor para comparar o estado das estruturas antes e após os nossos serviços de revitalização técnica.
          </p>
        </div>

        {/* Linha 1: Revitalização de Fachada */}
        <div className="impact-showcase-row">
          <div className="impact-meta-col">
            <div className="impact-meta-badge">NC</div>
            <h3 className="impact-meta-title">Revitalização de Fachada</h3>
            <p className="impact-meta-text">
              Correção profunda de patologias arquitetônicas e manchas biológicas. O tratamento incluiu selagem hidrorrepelente para prolongar a vida útil do revestimento e prevenir futuras infiltrações.
            </p>
            <div className="impact-tag-pills">
              <span className="impact-pill">Limpeza</span>
              <span className="impact-pill">Impermeabilização</span>
            </div>
          </div>

          <ImpactSlider
            after="/images/after-facade.jpg"
            before="/images/before-facade.jpg"
            afterAlt="Fachada limpa e revitalizada pela NC Construções"
            beforeAlt="Fachada deteriorada e com sujeira antes da obra"
          />
        </div>

        {/* Linha 2: Restauração de Piso (Reverse) */}
        <div className="impact-showcase-row reverse" style={{ marginBottom: 20 }}>
          <ImpactSlider
            after="/images/after-floor.jpg"
            before="/images/before-floor.jpg"
            afterAlt="Piso de mármore brilhante e espelhado após polimento"
            beforeAlt="Piso desgastado e sem brilho antes do tratamento"
          />

          <div className="impact-meta-col">
            <div className="impact-meta-badge">NC</div>
            <h3 className="impact-meta-title">Restauração de Piso</h3>
            <p className="impact-meta-text">
              Desbaste, polimento diamantado e cristalização de piso em mármore. O processo eliminou riscos profundos, nivelou as placas e devolveu o brilho natural da pedra, melhorando a luminosidade do ambiente.
            </p>
            <div className="impact-tag-pills">
              <span className="impact-pill">Polimento</span>
              <span className="impact-pill">Cristalização</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
