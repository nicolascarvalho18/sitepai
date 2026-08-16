import { ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { buildWhatsAppUrl } from '../../data/company';

export default function Services() {
  return (
    <section id="servicos" className="sec-pad" style={{ background: '#FFFFFF' }} aria-labelledby="servicos-heading">
      <div className="container">
        {/* Cabeçalho da Seção */}
        <div className="sec-head">
          <div className="eyebrow">NOSSAS ESPECIALIDADES</div>
          <h2 id="servicos-heading" className="sec-title">
            SOLUÇÕES PARA VALORIZAR O SEU IMÓVEL
          </h2>
          <p className="sec-subtitle">
            Tratamentos técnicos de alto padrão para edifícios comerciais, condomínios e residências.
          </p>
        </div>

        {/* 3 Cards Premium */}
        <div className="services-grid">
          {SERVICES.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-card-img-box">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card-img"
                  loading="lazy"
                />
              </div>

              <div className="service-card-body">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.shortDesc}</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 22 }}>
                  {service.highlights.slice(0, 3).map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--grafite-light)' }}>
                      <Check size={14} color="var(--primary)" style={{ flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={buildWhatsAppUrl(`Olá! Gostaria de um orçamento para o serviço de ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                  style={{ width: '100%', textDecoration: 'none' }}
                >
                  {service.ctaText}
                  <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
