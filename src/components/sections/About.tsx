import { COMPANY, buildWhatsAppUrl } from '../../data/company';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="sec-pad" style={{ background: '#FFFFFF' }} aria-labelledby="sobre-heading">
      <div className="container">
        <div className="about-grid">
          {/* Imagem da Equipe / Obra */}
          <div className="about-img-box">
            <img
              src="/images/team.jpg"
              alt="Equipe técnica da NC Construções em execução de obra de manutenção"
              className="about-img"
              loading="lazy"
            />
          </div>

          {/* Conteúdo Institucional */}
          <div>
            <div className="eyebrow">SOBRE A NC CONSTRUÇÕES</div>
            
            <h2 id="sobre-heading" className="sec-title" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)' }}>
              QUALIDADE EM CADA DETALHE
            </h2>

            <p style={{ fontSize: '15px', color: 'var(--grafite-light)', lineHeight: '1.75', marginTop: 16 }}>
              A <strong>NC Construções</strong> nasceu com o compromisso de transformar a manutenção e revitalização predial em uma experiência de absoluta segurança, pontualidade e excelência em acabamento.
            </p>

            <p style={{ fontSize: '15px', color: 'var(--grafite-light)', lineHeight: '1.75', marginTop: 12 }}>
              Atuamos com foco específico em <strong>lavagem técnica de fachadas, restauração e polimento de pisos nobres e pintura predial de alta durabilidade</strong>. Cada projeto é planejado com rigor técnico, utilizando maquinário moderno, equipamentos de proteção certificados e mão de obra qualificada.
            </p>

            {/* Grid de Indicadores Configuráveis */}
            <div className="about-stats-grid">
              {COMPANY.stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="stat-item-val">{stat.value}</div>
                  <div className="stat-item-lbl">{stat.label}</div>
                  <div className="stat-item-sub">{stat.detail}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32 }}>
              <a
                href={buildWhatsAppUrl("Olá! Gostaria de conversar com a equipe da NC Construções.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-fluid-mob"
              >
                Falar com Nossos Especialistas
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
