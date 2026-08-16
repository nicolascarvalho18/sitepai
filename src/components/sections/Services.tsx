import { Droplets, Sparkles, Building2, Home, PaintBucket, Building, Layers, Wrench, ArrowRight } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const SVCS = [
  { id:'lavagem',   icon:Droplets,   title:'Lavagem de Fachadas',       desc:'Limpeza profissional para remover sujeira, poluição, manchas e resíduos, recuperando a aparência da fachada.',         img:'/images/service-facade-wash.jpg',         alt:'Lavagem profissional de fachada com equipamento de alta pressão', grad:'linear-gradient(135deg,#1a6cd4,#0f4490)' },
  { id:'polimento', icon:Sparkles,   title:'Polimento de Pisos',         desc:'Tratamento e polimento profissional para devolver brilho, acabamento e aparência renovada ao piso.',               img:'/images/service-polishing.jpg',           alt:'Profissional polindo piso de mármore com máquina industrial', grad:'linear-gradient(135deg,#6366f1,#4338ca)' },
  { id:'predial',   icon:Building2,  title:'Pintura Predial',            desc:'Pintura profissional para prédios, condomínios e estabelecimentos comerciais com acabamento de alto padrão.',         img:'/images/service-building-painting.jpg',   alt:'Pintores profissionais em andaime pintando fachada de prédio', grad:'linear-gradient(135deg,#374151,#1f2937)' },
  { id:'residencial',icon:Home,      title:'Pintura Residencial',        desc:'Renovação de ambientes internos e externos com preparação adequada e acabamento profissional duradouro.',           img:'/images/service-residential-painting.jpg',alt:'Profissional pintando parede interna de residência', grad:'linear-gradient(135deg,#1B3A8C,#2952CC)' },
  { id:'fachada',   icon:PaintBucket,title:'Pintura de Fachadas',        desc:'Revitalização da fachada para melhorar a aparência, proteger a estrutura e valorizar o imóvel.',                   img:'/images/after-facade.jpg',                alt:'Fachada de edifício recém-pintada impecável', grad:'linear-gradient(135deg,#0891b2,#0e7490)' },
  { id:'limpeza',   icon:Building,   title:'Limpeza Predial',            desc:'Serviços de limpeza e conservação para empresas, condomínios e estabelecimentos.',                                   img:'/images/service-maintenance.jpg',         alt:'Equipe realizando limpeza técnica de área predial', grad:'linear-gradient(135deg,#059669,#047857)' },
  { id:'trat-piso', icon:Layers,     title:'Tratamento de Pisos',        desc:'Limpeza profunda, recuperação, proteção e conservação de diferentes tipos de pisos com técnicas especializadas.',   img:'/images/service-surface.jpg',             alt:'Aplicação de tratamento protetor em piso', grad:'linear-gradient(135deg,#d97706,#b45309)' },
  { id:'manut',     icon:Wrench,     title:'Manutenção e Conservação',   desc:'Soluções para manter imóveis limpos, conservados e visualmente valorizados com serviços preventivos.',             img:'/images/gallery-transformation.jpg',      alt:'Equipe de manutenção conservando fachada predial', grad:'linear-gradient(135deg,#dc2626,#b91c1c)' },
];

export default function Services() {
  const { ref, vis } = useReveal(0.05);

  const goContact = () => {
    const el = document.getElementById('contato');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <section id="servicos" style={{ background: 'var(--bg-soft)' }} aria-labelledby="svc-title">
      <div className="sec wrap">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`sec-head${vis ? ' anim-up' : ' hidden-anim'}`}>
          <div className="eyebrow">O que fazemos</div>
          <h2 id="svc-title" className="sec-title">Soluções completas para renovar<br />e conservar seu imóvel.</h2>
          <p className="sec-sub">
            Serviços especializados em limpeza, conservação, tratamento de superfícies e pintura com qualidade profissional.
          </p>
        </div>

        <div className="svc-grid">
          {SVCS.map((s, i) => {
            const Icon = s.icon;
            return (
              <article key={s.id} className={`svc-card${vis ? ' anim-up' : ' hidden-anim'} d${Math.min(i, 8)}`}>
                <div className="svc-img">
                  <img src={s.img} alt={s.alt} loading="lazy" />
                  <div className="svc-img-overlay" />
                  <div className="svc-icon" style={{ background: s.grad }}>
                    <Icon size={21} />
                  </div>
                </div>
                <div className="svc-body">
                  <h3 className="svc-title">{s.title}</h3>
                  <p className="svc-desc">{s.desc}</p>
                  <button className="svc-link" onClick={goContact} aria-label={`Saiba mais sobre ${s.title}`}>
                    Solicitar orçamento
                    <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
