import { ArrowRight, Shield, Award, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl } from '../../data/company';

export default function HighlightFacade() {
  return (
    <section className="sec-pad" style={{ background: 'var(--cinza-claro)' }} aria-labelledby="highlight-heading">
      <div className="container">
        <div className="highlight-split-grid">
          {/* Coluna Esquerda: Imagem Ampla */}
          <div className="highlight-img-container">
            <img
              src="/images/service-surface.jpg"
              alt="Técnico realizando lavagem especializada de fachada de alto padrão"
              className="highlight-img"
              loading="lazy"
            />
          </div>

          {/* Coluna Direita: Conteúdo Comercial e CTA */}
          <div>
            <div className="eyebrow">RESTAURAÇÃO & PROTEÇÃO</div>
            
            <h2 id="highlight-heading" className="sec-title" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)' }}>
              UMA FACHADA LIMPA VALORIZA O SEU IMÓVEL
            </h2>

            <p style={{ fontSize: '15px', color: 'var(--grafite-light)', lineHeight: '1.75', marginTop: 14 }}>
              A fachada é o principal cartão de visitas de qualquer edifício. Com o tempo, a poluição, intempéries e micro-organismos causam deterioração precoce do revestimento e desvalorização patrimonial.
            </p>

            <p style={{ fontSize: '15px', color: 'var(--grafite-light)', lineHeight: '1.75', marginTop: 10 }}>
              Na <strong>NC Construções</strong>, aplicamos hidrojateamento de precisão com agentes biodegradáveis e selagem hidrorrepelente, devolvendo a beleza original e prolongando a vida útil da sua edificação com máxima segurança.
            </p>

            <div className="highlight-feature-list">
              <div className="highlight-feature-item">
                <Shield size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span>Conformidade com a Norma NR-35 (Trabalho em Altura)</span>
              </div>
              <div className="highlight-feature-item">
                <Award size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span>Técnicas que preservam pastilhas, vidros e alvenaria</span>
              </div>
              <div className="highlight-feature-item">
                <Sparkles size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span>Valorização imediata e durabilidade comprovada</span>
              </div>
            </div>

            <a
              href={buildWhatsAppUrl("Olá! Gostaria de solicitar uma avaliação técnica para a fachada do meu imóvel.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-fluid-mob"
              id="highlight-cta-avaliacao"
            >
              SOLICITAR AVALIAÇÃO
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
