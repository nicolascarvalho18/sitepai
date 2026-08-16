import { ArrowRight, ShieldCheck, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react';
import { WA_URL } from '../../constants/config';

function WaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="hero" aria-label="Seção principal">
      {/* Background realista */}
      <div className="hero-bg">
        <img
          src="/images/hero.jpg"
          alt="Fachada moderna sendo revitalizada pela NC Construções"
          loading="eager"
        />
        <div className="hero-overlay" />
      </div>

      {/* Grid Asimétrica de Revista / Estúdio de Arquitetura */}
      <div className="hero-grid-2">
        {/* Lado Esquerdo: Tese & CTAs */}
        <div className="anim-up">
          <div className="hero-badge-tag">
            <ShieldCheck size={16} color="#60A5FA" />
            <span>Engenharia, Conservação & Pintura Predial</span>
          </div>

          <h1 className="hero-title">
            TRANSFORMAMOS ESPAÇOS.<br />
            <span>VALORIZAMOS SEU IMÓVEL.</span>
          </h1>

          <p className="hero-sub">
            Soluções profissionais em lavagem de fachadas, polimento de pisos e pintura para ambientes residenciais e comerciais.
          </p>

          <div className="hero-btns">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa btn-lg"
              id="hero-btn-orcamento"
            >
              <WaIcon />
              SOLICITAR ORÇAMENTO
            </a>

            <button
              className="btn btn-outline-white btn-lg"
              onClick={() => scrollTo('servicos')}
              id="hero-btn-servicos"
            >
              CONHECER SERVIÇOS
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Tagline de Credibilidade */}
          <div style={{ marginTop: 24 }}>
            <div className="hero-tagline">
              <span>Qualidade</span>
              <span className="hero-tagline-dot" />
              <span>Compromisso</span>
              <span className="hero-tagline-dot" />
              <span>Confiança</span>
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
              color: 'rgba(255,255,255,0.72)',
              fontSize: 13,
              fontWeight: 600,
              marginTop: 14
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle2 size={15} color="#00D084" />
                <span>Grande SP e Região</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle2 size={15} color="#00D084" />
                <span>Normas NR-35 / NR-18</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle2 size={15} color="#00D084" />
                <span>Orçamento Sem Compromisso</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito: Ficha Técnica Flutuante de Estúdio */}
        <div className="hero-spec-card anim-right d2">
          <div className="hero-spec-header">
            <div className="hero-spec-title">
              Ficha Técnica de Execução
            </div>
            <div className="hero-spec-live">
              <span className="live-pulse" />
              Padrão NC
            </div>
          </div>

          <img
            src="/images/after-facade.jpg"
            alt="Revitalização de Fachada Predial Concluída"
            className="hero-spec-preview-img"
          />

          <div className="hero-spec-row">
            <span className="hero-spec-lbl">Especialidade</span>
            <span className="hero-spec-val">Lavagem Técnica & Restauração</span>
          </div>
          <div className="hero-spec-row">
            <span className="hero-spec-lbl">Segurança Operacional</span>
            <span className="hero-spec-val" style={{ color: '#00D084' }}>Certificado NR-35 (Em Altura)</span>
          </div>
          <div className="hero-spec-row">
            <span className="hero-spec-lbl">Equipamentos</span>
            <span className="hero-spec-val">Hidrojato Industrial + EPIs</span>
          </div>
          <div className="hero-spec-row">
            <span className="hero-spec-lbl">Garantia</span>
            <span className="hero-spec-val">Termo Formal em Contrato</span>
          </div>

          <div style={{
            marginTop: 18,
            padding: '12px 14px',
            borderRadius: 10,
            background: 'rgba(43, 102, 255, 0.15)',
            border: '1px solid rgba(43, 102, 255, 0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontSize: 12.5,
            color: '#93C5FD'
          }}>
            <Sparkles size={16} color="#60A5FA" style={{ flexShrink: 0 }} />
            <span>Resultado visualmente impecável e valorização imediata do patrimônio.</span>
          </div>
        </div>
      </div>

      {/* Botão sutil de rolagem */}
      <button
        onClick={() => scrollTo('impacto')}
        aria-label="Rolar para baixo"
        style={{
          position: 'absolute',
          bottom: 18,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          color: 'rgba(255,255,255,0.4)',
          background: 'none',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        <ChevronDown size={20} className="anim-bounce" />
      </button>
    </section>
  );
}
