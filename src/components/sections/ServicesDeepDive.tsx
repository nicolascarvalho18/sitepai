import { CheckCircle2, ArrowRight, Building, Home } from 'lucide-react';
import { WA_URL } from '../../constants/config';
import { useReveal } from '../../hooks/useReveal';

export default function ServicesDeepDive() {
  const { ref, vis } = useReveal(0.08);

  const scrollToContact = () => {
    const el = document.getElementById('contato');
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 76,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="servicos" className="deep-dive-sec" aria-labelledby="deep-services-title">
      <div className="container">
        {/* Cabeçalho da Seção */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`deep-dive-title-box${vis ? ' anim-up' : ' hidden-anim'}`}>
          <h2 id="deep-services-title" className="deep-dive-h2">
            Nossos Serviços
          </h2>
          <p className="deep-dive-sub">
            Na NC Construções, garantimos integridade estrutural e estética refinada por meio de técnicas avançadas de engenharia, manutenção e restauração.
          </p>
        </div>

        {/* 1. Lavagem de Fachadas */}
        <div className="service-row-split">
          <div>
            <div className="service-side-tag">RESTAURAÇÃO & LIMPEZA</div>
            <h3 className="service-side-title">Lavagem de Fachadas</h3>
            <p className="service-side-text">
              Limpeza técnica de alta pressão e tratamento químico especializado para revitalizar a aparência exterior de edifícios. Removemos anos de fuligem urbana, fungos e intempéries, preservando o substrato e estendendo a durabilidade da estrutura.
            </p>

            <div className="service-checklist-pills">
              <div className="service-chk-item">
                <CheckCircle2 size={18} className="service-chk-icon" />
                <span>Hidrojateamento com pressão controlada</span>
              </div>
              <div className="service-chk-item">
                <CheckCircle2 size={18} className="service-chk-icon" />
                <span>Tratamentos químicos com agentes biodegradáveis</span>
              </div>
              <div className="service-chk-item">
                <CheckCircle2 size={18} className="service-chk-icon" />
                <span>Aplicação de hidrofugantes e selantes de proteção</span>
              </div>
            </div>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid-blue"
            >
              Solicitar Avaliação
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="dual-photo-box">
            <img
              src="/images/service-facade-wash.jpg"
              alt="Hidrojateamento em fachada"
              className="photo-tall"
              loading="lazy"
            />
            <img
              src="/images/service-surface.jpg"
              alt="Limpeza técnica em pedra e vidro"
              className="photo-tall"
              loading="lazy"
            />
          </div>
        </div>

        {/* 2. Pintura Predial e Residencial */}
        <div className="service-row-split reverse">
          <div className="dual-photo-box">
            <img
              src="/images/service-building-painting.jpg"
              alt="Pintores em fachada predial"
              className="photo-tall"
              loading="lazy"
            />
            <img
              src="/images/service-residential-painting.jpg"
              alt="Pintura residencial fina"
              className="photo-tall"
              loading="lazy"
            />
          </div>

          <div>
            <div className="service-side-tag">ACABAMENTO & REVESTIMENTO</div>
            <h3 className="service-side-title">Pintura Predial e Residencial</h3>
            <p className="service-side-text">
              Serviços completos de pintura para grandes edifícios comerciais e residências de alto padrão. Utilizamos tintas de nível industrial, tratamento preventivo contra fissuras e impermeabilização total para garantir beleza duradoura.
            </p>

            <div className="comm-res-card-grid">
              <div className="comm-res-card">
                <Building size={22} className="comm-res-icon" />
                <h4 className="comm-res-title">Comercial</h4>
                <p className="comm-res-desc">
                  Revestimentos externos de alta durabilidade com técnicas de alpinismo e andaimes.
                </p>
              </div>

              <div className="comm-res-card">
                <Home size={22} className="comm-res-icon" />
                <h4 className="comm-res-title">Residencial</h4>
                <p className="comm-res-desc">
                  Acabamento interno e externo de alta precisão com tintas nobres e toque acetinado.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bloco Escuro: Polimento de Pisos */}
        <div className="dark-polishing-block">
          <div>
            <div className="service-side-tag" style={{ color: '#60A5FA' }}>MANUTENÇÃO & RESTAURAÇÃO</div>
            <h3 className="service-side-title" style={{ color: '#fff' }}>Polimento de Pisos</h3>
            <p className="service-side-text" style={{ color: 'rgba(255, 255, 255, 0.78)' }}>
              Serviços profissionais de polimento e restauração de pisos para ambientes corporativos, condomínios e residências. Nosso método diamantado remove riscos, nivela juntas e restaura o brilho espelhado de mármores, granitos e pedras nobres.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
              <span className="impact-pill">Mármore e Granito</span>
              <span className="impact-pill">Polimento Diamantado</span>
              <span className="impact-pill">Tratamento Preventivo</span>
            </div>

            <button
              onClick={scrollToContact}
              className="btn-outline-white"
            >
              Ver Especificações
            </button>
          </div>

          <div>
            <img
              src="/images/service-polishing.jpg"
              alt="Polimento de piso em hall comercial espelhado"
              className="dark-poly-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
