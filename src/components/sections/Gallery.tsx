import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const CATS = ['Todos', 'Fachadas', 'Pisos', 'Pintura', 'Residencial', 'Comercial', 'Predial'];

const ITEMS = [
  { id:'g1', src:'/images/service-facade-wash.jpg',         cat:'Fachadas',   label:'Lavagem de Fachada',        alt:'Profissional lavando fachada com alta pressão' },
  { id:'g2', src:'/images/after-floor.jpg',                 cat:'Pisos',      label:'Piso Polido',               alt:'Piso de mármore polido com alto brilho' },
  { id:'g3', src:'/images/service-building-painting.jpg',   cat:'Pintura',    label:'Pintura Predial',           alt:'Fachada de prédio recém-pintada' },
  { id:'g4', src:'/images/gallery-residential.jpg',         cat:'Residencial',label:'Casa Residencial',          alt:'Casa moderna com fachada limpa e pintada' },
  { id:'g5', src:'/images/gallery-commercial.jpg',          cat:'Comercial',  label:'Edifício Comercial',        alt:'Edifício comercial com fachada impecável' },
  { id:'g6', src:'/images/after-facade.jpg',                cat:'Fachadas',   label:'Fachada Restaurada',        alt:'Fachada de condomínio após lavagem profissional' },
  { id:'g7', src:'/images/service-polishing.jpg',           cat:'Pisos',      label:'Polimento Profissional',    alt:'Máquina de polimento em piso comercial' },
  { id:'g8', src:'/images/service-residential-painting.jpg',cat:'Pintura',    label:'Pintura Residencial',       alt:'Ambiente interno com pintura fresca' },
  { id:'g9', src:'/images/gallery-transformation.jpg',      cat:'Predial',    label:'Transformação Predial',     alt:'Edifício completamente renovado' },
];

export default function Gallery() {
  const { ref, vis } = useReveal(0.04);
  const [cat, setCat]       = useState('Todos');
  const [lbox, setLbox]     = useState<{ src: string; alt: string } | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filtered = cat === 'Todos' ? ITEMS : ITEMS.filter(i => i.cat === cat);
  const shown = showAll ? filtered : filtered.slice(0, 9);

  const open = (src: string, alt: string) => { setLbox({ src, alt }); document.body.style.overflow = 'hidden'; };
  const close = () => { setLbox(null); document.body.style.overflow = ''; };

  return (
    <section style={{ background: 'var(--bg-soft)' }} aria-labelledby="gal-title">
      <div className="sec wrap">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`sec-head${vis ? ' anim-up' : ' hidden-anim'}`}>
          <div className="eyebrow">Portfólio</div>
          <h2 id="gal-title" className="sec-title">Resultados que falam por nós.</h2>
          <p className="sec-sub">Conheça projetos realizados com excelência, dedicação e alto padrão de qualidade.</p>
        </div>

        {/* Category tabs */}
        <div className={`gal-tabs${vis ? ' anim-up d1' : ' hidden-anim'}`}>
          {CATS.map(c => (
            <button key={c} className={`gal-tab${cat === c ? ' active' : ''}`} onClick={() => { setCat(c); setShowAll(false); }}>
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={`gal-grid${vis ? ' anim-scale d2' : ' hidden-anim'}`}>
          {shown.map((item) => (
            <button key={item.id} className="gal-item" onClick={() => open(item.src, item.alt)}
              aria-label={`Ver: ${item.label}`}>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="gal-overlay">
                <div className="gal-cat">{item.cat}</div>
                <div className="gal-name">{item.label}</div>
              </div>
              <div className="gal-zoom"><ZoomIn size={15} /></div>
            </button>
          ))}
        </div>

        {filtered.length > 9 && (
          <div className="gal-more">
            <button className="btn btn-ghost" onClick={() => setShowAll(v => !v)}>
              {showAll ? 'Ver menos' : 'Ver todos os projetos'}
            </button>
          </div>
        )}
      </div>

      {lbox && (
        <div className="lbox" onClick={close} role="dialog" aria-modal="true" aria-label="Imagem ampliada">
          <button className="lbox-close" onClick={close} aria-label="Fechar"><X size={19} /></button>
          <img src={lbox.src} alt={lbox.alt} onClick={e => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
