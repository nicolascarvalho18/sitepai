import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppUrl } from '../../data/company';

export default function Hero() {
  const scrollToServices = () => {
    const el = document.getElementById('servicos');
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 74;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero-section" aria-label="Apresentação principal">
      {/* Imagem de Fundo Realista */}
      <div className="hero-bg-wrapper">
        <img
          src="/images/hero.jpg"
          alt="Limpeza profissional de fachada em altura realizada pela NC Construções"
          className="hero-bg-img"
          loading="eager"
        />
        <div className="hero-overlay" />
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="eyebrow light">
            QUALIDADE • COMPROMISSO • CONFIANÇA
          </div>

          <h1 className="hero-title">
            CUIDAMOS DA IMAGEM E DO ACABAMENTO DO SEU IMÓVEL
          </h1>

          <p className="hero-desc">
            Lavagem de fachadas, polimento de pisos e pintura profissional para valorizar, proteger e transformar seu imóvel.
          </p>

          <div className="hero-actions">
            <a
              href={buildWhatsAppUrl("Olá! Gostaria de solicitar um orçamento com a NC Construções.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-fluid-mob"
              id="hero-cta-orcamento"
            >
              SOLICITAR ORÇAMENTO
              <ArrowRight size={16} />
            </a>

            <button
              onClick={scrollToServices}
              className="btn btn-outline-white btn-fluid-mob"
              id="hero-cta-servicos"
            >
              CONHECER NOSSOS SERVIÇOS
            </button>
          </div>

          {/* Indicadores de Credibilidade */}
          <div className="hero-indicators">
            <div className="hero-indicator-item">
              <CheckCircle2 size={16} color="#93C5FD" />
              <span>Atendimento profissional</span>
            </div>
            <div className="hero-indicator-item">
              <CheckCircle2 size={16} color="#93C5FD" />
              <span>Equipe especializada</span>
            </div>
            <div className="hero-indicator-item">
              <CheckCircle2 size={16} color="#93C5FD" />
              <span>Orçamento personalizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
