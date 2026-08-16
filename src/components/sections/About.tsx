import { Users, Clock, Award, Shield, Star, HeartHandshake, CheckSquare, Gem } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const FEATS = [
  { icon: Users,         title: 'Profissionais qualificados',    desc: 'Equipe treinada para cada serviço.' },
  { icon: Award,         title: 'Atendimento personalizado',     desc: 'Consultivo desde o primeiro contato.' },
  { icon: Clock,         title: 'Cumprimento de prazos',         desc: 'Planejamento para entrega no prazo.' },
  { icon: Gem,           title: 'Acabamento de qualidade',       desc: 'Padrão elevado em cada etapa.' },
  { icon: Shield,        title: 'Segurança na execução',         desc: 'EPIs e protocolos rigorosamente.' },
  { icon: CheckSquare,   title: 'Transparência no orçamento',    desc: 'Proposta clara sem surpresas.' },
  { icon: HeartHandshake,title: 'Respeito ao seu patrimônio',    desc: 'Cuidado máximo durante o serviço.' },
  { icon: Star,          title: 'Resultados comprovados',        desc: 'Satisfação garantida dos clientes.' },
];

export default function About() {
  const { ref: lRef, vis: lVis } = useReveal(0.15);
  const { ref: rRef, vis: rVis } = useReveal(0.15);

  return (
    <section id="sobre" aria-labelledby="sobre-title">
      <div className="sec wrap">
        <div className="about-grid">
          {/* Image */}
          <div ref={lRef as React.RefObject<HTMLDivElement>} className={`about-img-wrap${lVis ? ' anim-left' : ' hidden-anim'}`}>
            <div className="about-img-deco" />
            <div className="about-img-main">
              <img src="/images/team.jpg" alt="Equipe NC Construções trabalhando profissionalmente" loading="lazy" />
            </div>
            <div className="about-badge-float">
              <div className="about-badge-num">+100</div>
              <div className="about-badge-txt">Projetos entregues</div>
            </div>
          </div>

          {/* Text */}
          <div ref={rRef as React.RefObject<HTMLDivElement>} className={rVis ? 'anim-right' : 'hidden-anim'}>
            <div className="eyebrow">Sobre a empresa</div>
            <h2 id="sobre-title" className="sec-title" style={{ marginBottom: 20 }}>
              Cuidamos da aparência e<br />
              <span className="hl">conservação do seu imóvel</span><br />
              como se fosse nosso.
            </h2>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: 12 }}>
              Somos uma empresa especializada em serviços de <strong style={{ color: 'var(--text)' }}>limpeza, conservação, tratamento de superfícies e pintura</strong>. Trabalhamos com profissionais capacitados, equipamentos adequados e processos cuidadosamente planejados.
            </p>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: 34 }}>
              Nossa missão é entregar resultados que realmente fazem diferença — imóveis mais limpos, conservados e valorizados, com atendimento que supera expectativas.
            </p>

            <div className="about-feats">
              {FEATS.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="about-feat">
                    <div className="about-feat-icon"><Icon size={17} /></div>
                    <div>
                      <div className="about-feat-title">{f.title}</div>
                      <div className="about-feat-desc">{f.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: 32 }}>
              <button className="btn btn-primary" onClick={() => { const el = document.getElementById('diferenciais'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }); }}>
                Conheça nossa empresa
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
