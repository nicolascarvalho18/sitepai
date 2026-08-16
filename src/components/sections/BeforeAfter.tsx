import { useRef, useState, useCallback, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

interface SliderProps { before: string; after: string; ba: string; aa: string; label: string }

function Slider({ before, after, ba, aa, label }: SliderProps) {
  const [pos, setPos] = useState(50);
  const wrap = useRef<HTMLDivElement>(null);
  const drag = useRef(false);

  const update = useCallback((cx: number) => {
    if (!wrap.current) return;
    const r = wrap.current.getBoundingClientRect();
    setPos(Math.min(Math.max(((cx - r.left) / r.width) * 100, 2), 98));
  }, []);

  const onMD = (e: React.MouseEvent) => { e.preventDefault(); drag.current = true; update(e.clientX); };
  const onTS = (e: React.TouchEvent) => { drag.current = true; update(e.touches[0].clientX); };

  useEffect(() => {
    const mm = (e: MouseEvent)  => { if (drag.current) update(e.clientX); };
    const tm = (e: TouchEvent)  => { if (drag.current) update(e.touches[0].clientX); };
    const end = () => { drag.current = false; };
    window.addEventListener('mousemove', mm);
    window.addEventListener('mouseup', end);
    window.addEventListener('touchmove', tm, { passive: true });
    window.addEventListener('touchend', end);
    return () => {
      window.removeEventListener('mousemove', mm);
      window.removeEventListener('mouseup', end);
      window.removeEventListener('touchmove', tm);
      window.removeEventListener('touchend', end);
    };
  }, [update]);

  return (
    <div className="ba-card">
      <div className="ba-slider" ref={wrap} onMouseDown={onMD} onTouchStart={onTS}
        role="img" aria-label={`Comparação antes e depois: ${label}`}>
        <img className="ba-img" src={after} alt={aa} loading="lazy" />
        <div className="ba-clip" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img className="ba-img" src={before} alt={ba} loading="lazy" />
        </div>
        <div className="ba-line" style={{ left: `${pos}%` }}>
          <div className="ba-handle">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M8 9l-4 3 4 3M16 9l4 3-4 3"/>
            </svg>
          </div>
        </div>
        <span className="ba-lbl ba-lbl-before">ANTES</span>
        <span className="ba-lbl ba-lbl-after">DEPOIS</span>
      </div>
      <div className="ba-foot">
        <div className="ba-foot-title">{label}</div>
        <div className="ba-foot-hint">Arraste para comparar</div>
      </div>
    </div>
  );
}

const COMPS = [
  { id:'f1', label:'Lavagem de fachada',    before:'/images/before-facade.jpg', after:'/images/after-facade.jpg',                ba:'Fachada suja antes da limpeza', aa:'Fachada limpa após lavagem profissional' },
  { id:'f2', label:'Polimento de piso',     before:'/images/before-floor.jpg',  after:'/images/after-floor.jpg',                 ba:'Piso desgastado antes do polimento', aa:'Piso polido com alto brilho' },
  { id:'f3', label:'Revitalização predial', before:'/images/before-facade.jpg', after:'/images/gallery-transformation.jpg',      ba:'Edifício antes da manutenção', aa:'Edifício renovado após serviço' },
  { id:'f4', label:'Pintura de fachada',    before:'/images/before-facade.jpg', after:'/images/service-building-painting.jpg',   ba:'Fachada desgastada antes da pintura', aa:'Fachada recém-pintada com acabamento premium' },
];

export default function BeforeAfter() {
  const { ref, vis } = useReveal(0.05);

  const goContact = () => {
    const el = document.getElementById('contato');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <section id="antes-depois" aria-labelledby="ba-title">
      <div className="sec wrap">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`sec-head${vis ? ' anim-up' : ' hidden-anim'}`}>
          <div className="eyebrow">Resultados reais</div>
          <h2 id="ba-title" className="sec-title">Veja a diferença que um trabalho<br />profissional faz.</h2>
          <p className="sec-sub">
            Arraste o comparador para ver a transformação real que nossos serviços proporcionam.
          </p>
        </div>

        <div className={`ba-grid${vis ? ' anim-up d2' : ' hidden-anim'}`}>
          {COMPS.map(c => (
            <Slider key={c.id} label={c.label} before={c.before} after={c.after} ba={c.ba} aa={c.aa} />
          ))}
        </div>

        <div className="ba-cta">
          <button className="btn btn-primary btn-lg" onClick={goContact}>
            Quero transformar meu imóvel
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
    </section>
  );
}
