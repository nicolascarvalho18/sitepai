import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const CATEGORIES = ['Todos', 'Fachadas', 'Pisos', 'Pintura'];

const PROJECTS = [
  {
    id: 'p1',
    src: '/images/service-facade-wash.jpg',
    category: 'Fachadas',
    title: 'Lavagem Técnica de Fachada',
    alt: 'Lavagem profissional de fachada predial'
  },
  {
    id: 'p2',
    src: '/images/after-floor.jpg',
    category: 'Pisos',
    title: 'Restauração de Mármore',
    alt: 'Polimento e cristalização de piso'
  },
  {
    id: 'p3',
    src: '/images/service-building-painting.jpg',
    category: 'Pintura',
    title: 'Pintura Predial Completa',
    alt: 'Pintura externa de edifício corporativo'
  },
  {
    id: 'p4',
    src: '/images/gallery-commercial.jpg',
    category: 'Fachadas',
    title: 'Edifício Corporativo',
    alt: 'Conservação e lavagem de vidros e fachada comercial'
  },
  {
    id: 'p5',
    src: '/images/service-polishing.jpg',
    category: 'Pisos',
    title: 'Polimento Industrial',
    alt: 'Tratamento de piso de alto tráfego'
  },
  {
    id: 'p6',
    src: '/images/gallery-residential.jpg',
    category: 'Pintura',
    title: 'Pintura Residencial Fina',
    alt: 'Acabamento premium em residência'
  },
  {
    id: 'p7',
    src: '/images/after-facade.jpg',
    category: 'Fachadas',
    title: 'Revitalização de Condomínio',
    alt: 'Fachada residencial totalmente restaurada'
  },
  {
    id: 'p8',
    src: '/images/service-surface.jpg',
    category: 'Pisos',
    title: 'Tratamento e Selagem de Pisos',
    alt: 'Aplicação de selante e impermeabilizante'
  },
  {
    id: 'p9',
    src: '/images/service-residential-painting.jpg',
    category: 'Pintura',
    title: 'Pintura de Ambientes Internos',
    alt: 'Pintura interna uniforme com cantos perfeitos'
  },
];

export default function Projects() {
  const { ref, vis } = useReveal(0.05);
  const [activeCat, setActiveCat] = useState('Todos');
  const [lightbox, setLightbox] = useState<{ src: string; alt: string; title: string } | null>(null);

  const filtered = activeCat === 'Todos'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCat);

  const openLightbox = (p: typeof PROJECTS[0]) => {
    setLightbox(p);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="projetos" className="sec" aria-labelledby="projects-title">
      <div className="wrap">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`sec-head${vis ? ' anim-up' : ' hidden-anim'}`}>
          <div className="eyebrow">Portfólio</div>
          <h2 id="projects-title" className="sec-title">PROJETOS E RESULTADOS</h2>
          <p className="sec-sub">
            Cada detalhe faz parte do resultado final.
          </p>
        </div>

        {/* Filtros Conforme Brief */}
        <div className={`gal-tabs${vis ? ' anim-up d1' : ' hidden-anim'}`}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`gal-tab${activeCat === cat ? ' active' : ''}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <div className={`gal-grid${vis ? ' anim-up d2' : ' hidden-anim'}`}>
          {filtered.map((item) => (
            <div
              key={item.id}
              className="gal-item"
              onClick={() => openLightbox(item)}
              role="button"
              tabIndex={0}
              aria-label={`Ver projeto: ${item.title}`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(item)}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              
              <div className="gal-overlay">
                <span className="gal-cat">{item.category}</span>
                <h3 className="gal-title">{item.title}</h3>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#60A5FA',
                  marginTop: 8
                }}>
                  <ZoomIn size={14} />
                  Ver projeto
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      {lightbox && (
        <div className="lbox" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Visualização ampliada">
          <button className="lbox-close" onClick={closeLightbox} aria-label="Fechar modal">
            <X size={22} />
          </button>
          <div style={{ textAlign: 'center', maxWidth: '90%' }} onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <div style={{ color: '#fff', marginTop: 14, fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700 }}>
              {lightbox.title}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
