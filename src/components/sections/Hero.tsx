import { ArrowRight } from 'lucide-react';
import { WA_URL } from '../../constants/config';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 76,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="hero-sec" aria-label="Seção Principal">
      {/* Background Media */}
      <div className="hero-bg-media">
        <img
          src="/images/hero.jpg"
          alt="Técnico de alpinismo industrial em lavagem de fachada em edifício de alto padrão"
          loading="eager"
        />
        <div className="hero-bg-gradient" />
      </div>

      <div className="container" style={{ width: '100%' }}>
        <div className="hero-text-block anim-up">
          {/* Tagline */}
          <div className="hero-blue-tag">
            EXCELÊNCIA EM MANUTENÇÃO
          </div>

          {/* Título Principal Fiel ao Design */}
          <h1 className="hero-h1">
            Qualidade,<br />
            Compromisso e<br />
            Confiança em cada<br />
            detalhe.
          </h1>

          {/* Subtítulo Fiel ao Design */}
          <p className="hero-desc">
            Especialistas em manutenção predial de alta performance. Elevamos o padrão de sua estrutura com precisão técnica e segurança sustentável.
          </p>

          {/* Botões Fiéis ao Design */}
          <div className="hero-btn-row">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid-blue"
              id="hero-solicitar-orcamento"
            >
              SOLICITAR ORÇAMENTO
              <ArrowRight size={16} />
            </a>

            <button
              className="btn-outline-white"
              onClick={() => scrollTo('servicos')}
              id="hero-nossos-servicos"
            >
              NOSSOS SERVIÇOS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
