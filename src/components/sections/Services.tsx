import { Droplets, Sparkles, Paintbrush, ArrowRight } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const SERVICES = [
  {
    id: 'lavagem-fachadas',
    icon: Droplets,
    title: 'Lavagem de Fachadas',
    desc: 'Removemos sujeira, poluição, manchas e resíduos, recuperando a aparência da fachada e valorizando o imóvel.',
    img: '/images/service-facade-wash.jpg',
    alt: 'Lavagem profissional de fachada predial com equipamento de alta pressão'
  },
  {
    id: 'polimento-pisos',
    icon: Sparkles,
    title: 'Polimento de Pisos',
    desc: 'Recupere o brilho e o acabamento do seu piso com tratamento profissional para ambientes residenciais e comerciais.',
    img: '/images/service-polishing.jpg',
    alt: 'Polimento profissional de piso com maquinário de alta tecnologia'
  },
  {
    id: 'pintura',
    icon: Paintbrush,
    title: 'Pintura Residencial e Comercial',
    desc: 'Pintura com preparação, acabamento uniforme e atenção aos detalhes para transformar completamente o ambiente.',
    img: '/images/service-building-painting.jpg',
    alt: 'Pintura técnica de alto padrão para edifícios e residências'
  }
];

export default function Services() {
  const { ref, vis } = useReveal(0.08);

  const scrollToContact = () => {
    const el = document.getElementById('contato');
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="servicos" className="sec" style={{ background: 'var(--bg-soft)' }} aria-labelledby="svc-title">
      <div className="wrap">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`sec-head${vis ? ' anim-up' : ' hidden-anim'}`}>
          <div className="eyebrow">Especialidades</div>
          <h2 id="svc-title" className="sec-title">NOSSOS SERVIÇOS</h2>
          <p className="sec-sub">
            Soluções profissionais para renovar, proteger e valorizar seu imóvel.
          </p>
        </div>

        <div className="svc-grid">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            return (
              <article key={s.id} className={`svc-card${vis ? ' anim-up' : ' hidden-anim'} d${idx + 1}`}>
                <div className="svc-img-box">
                  <img src={s.img} alt={s.alt} loading="lazy" />
                  <div className="svc-icon-badge">
                    <Icon size={22} />
                  </div>
                </div>

                <div className="svc-body">
                  <h3 className="svc-title">{s.title}</h3>
                  <p className="svc-desc">{s.desc}</p>
                  
                  <button
                    className="btn btn-outline-blue btn-sm"
                    style={{ width: '100%' }}
                    onClick={scrollToContact}
                  >
                    SAIBA MAIS
                    <ArrowRight size={15} />
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
