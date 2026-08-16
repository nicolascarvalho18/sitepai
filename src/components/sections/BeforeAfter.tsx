import { useState, useRef, useCallback, useEffect } from 'react';
import { BEFORE_AFTER_ITEMS, type BeforeAfterItem } from '../../data/beforeAfter';
import { buildWhatsAppUrl } from '../../data/company';

interface SliderProps {
  item: BeforeAfterItem;
}

function ComparisonSlider({ item }: SliderProps) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const percent = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(Math.max(percent, 2), 98));
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    updatePosition(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    if (e.touches[0]) {
      updatePosition(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) updatePosition(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging.current && e.touches[0]) {
        updatePosition(e.touches[0].clientX);
      }
    };
    const handleStop = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleStop);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleStop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleStop);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleStop);
    };
  }, [updatePosition]);

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      className="ba-slider-container"
      role="region"
      aria-label={`Comparação de antes e depois: ${item.title}`}
    >
      {/* Imagem DEPOIS (Fundo) */}
      <img
        src={item.after}
        alt={item.afterAlt}
        className="ba-image"
        loading="lazy"
      />

      {/* Imagem ANTES (Sobreposta com Clip) */}
      <div className="ba-clip-box" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img
          src={item.before}
          alt={item.beforeAlt}
          className="ba-image"
          loading="lazy"
        />
      </div>

      {/* Divisor com Linha e Botão */}
      <div className="ba-divider-line" style={{ left: `${pos}%` }}>
        <div className="ba-handle-circle">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
          </svg>
        </div>
      </div>

      {/* Etiquetas */}
      <span className="ba-label-pill depois">DEPOIS</span>
      <span className="ba-label-pill antes">ANTES</span>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="antes-depois" className="sec-pad ba-section" aria-labelledby="ba-heading">
      <div className="container">
        <div className="sec-head">
          <div className="eyebrow">RESULTADOS COMPROVADOS</div>
          <h2 id="ba-heading" className="sec-title">
            O IMPACTO DA NOSSA INTERVENÇÃO
          </h2>
          <p className="sec-subtitle">
            Arraste a barra para comparar o estado das estruturas antes e após a execução dos nossos serviços técnicos.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {BEFORE_AFTER_ITEMS.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 32,
                alignItems: 'center',
                background: 'var(--branco)',
                padding: 'clamp(20px, 3.5vw, 36px)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--sh-sm)',
                border: '1px solid var(--cinza-border)',
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 11,
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        color: 'var(--primary)',
                        background: 'rgba(7, 87, 184, 0.08)',
                        padding: '4px 10px',
                        borderRadius: 4,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 900, color: 'var(--grafite)', marginBottom: 12 }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: 14.5, color: 'var(--grafite-muted)', lineHeight: 1.75, marginBottom: 20 }}>
                  {item.description}
                </p>

                <a
                  href={buildWhatsAppUrl(`Olá! Vi o resultado de ${item.title} no site e gostaria de solicitar um orçamento semelhante.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-fluid-mob"
                >
                  Quero um resultado assim
                </a>
              </div>

              <ComparisonSlider item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
