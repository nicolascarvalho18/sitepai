import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { PORTFOLIO_PROJECTS, type ProjectItem } from '../../data/projects';

const CATEGORIES = [
  { id: 'todos',    label: 'Todos' },
  { id: 'fachadas', label: 'Fachadas' },
  { id: 'pisos',    label: 'Pisos' },
  { id: 'pintura',  label: 'Pintura' },
];

export default function Portfolio() {
  const [selectedCat, setSelectedCat] = useState<string>('todos');
  const [lightboxProject, setLightboxProject] = useState<ProjectItem | null>(null);

  const filteredProjects = selectedCat === 'todos'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCat);

  return (
    <section id="projetos" className="sec-pad" style={{ background: '#FFFFFF' }} aria-labelledby="portfolio-heading">
      <div className="container">
        {/* Cabeçalho */}
        <div className="sec-head">
          <div className="eyebrow">PORTFÓLIO DE RESULTADOS</div>
          <h2 id="portfolio-heading" className="sec-title">
            PROJETOS E RESULTADOS
          </h2>
          <p className="sec-subtitle">
            Conheça algumas das intervenções e obras executadas com a assinatura de excelência da NC Construções.
          </p>
        </div>

        {/* Filtros em Pílula */}
        <div className="portfolio-tabs" role="tablist" aria-label="Filtro de projetos">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={selectedCat === cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`portfolio-tab-btn${selectedCat === cat.id ? ' active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de Imagens */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="portfolio-card"
              onClick={() => setLightboxProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setLightboxProject(project); }}
              aria-label={`Ver detalhes de ${project.title}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="portfolio-card-img"
                loading="lazy"
              />

              <div className="portfolio-overlay">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="portfolio-cat-badge">{project.categoryLabel}</span>
                  <ZoomIn size={18} color="#93C5FD" />
                </div>
                <h3 className="portfolio-card-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      {lightboxProject && (
        <div
          className="lightbox-backdrop"
          onClick={() => setLightboxProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxProject.title}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setLightboxProject(null)}
              aria-label="Fechar visualização ampliada"
            >
              <X size={22} />
            </button>

            <img
              src={lightboxProject.image}
              alt={lightboxProject.title}
              className="lightbox-img"
            />

            <div style={{ background: 'var(--primary-dark)', padding: '16px 20px', borderRadius: '0 0 12px 12px', color: '#fff' }}>
              <span className="portfolio-cat-badge">{lightboxProject.categoryLabel}</span>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 800, marginTop: 4 }}>
                {lightboxProject.title}
              </h4>
              <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.8)', marginTop: 4 }}>
                {lightboxProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
