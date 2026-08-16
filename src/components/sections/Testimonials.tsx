import { Star } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Carlos Mendes',
    role: 'Síndico Profissional — Condomínio Residencial',
    init: 'CM',
    stars: 5,
    text: 'A lavagem e restauração da nossa fachada foi impecável. Equipe pontual, organizada e que cumpriu rigorosamente todas as normas de segurança. Moradores muito satisfeitos.'
  },
  {
    id: 't2',
    name: 'Ana Paula Rodrigues',
    role: 'Proprietária Residencial',
    init: 'AR',
    stars: 5,
    text: 'Contratei a NC Construções para o polimento e revitalização dos pisos de mármore. O brilho e a limpeza voltaram como se fossem novos. Trabalho de alto padrão!'
  },
  {
    id: 't3',
    name: 'Ricardo Silveira',
    role: 'Gestor de Facilities — Edifício Comercial',
    init: 'RS',
    stars: 5,
    text: 'Profissionalismo do orçamento à entrega final. A pintura predial e a conservação foram executadas sem transtornos para as empresas do condomínio. Excelente empresa.'
  }
];

export default function Testimonials() {
  const { ref, vis } = useReveal(0.08);

  return (
    <section id="depoimentos" className="sec" aria-labelledby="test-title">
      <div className="wrap">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`sec-head${vis ? ' anim-up' : ' hidden-anim'}`}>
          <div className="eyebrow">Avaliações</div>
          <h2 id="test-title" className="sec-title">O QUE NOSSOS CLIENTES DIZEM</h2>
          <p className="sec-sub">
            A satisfação e a confiança dos nossos clientes são o reflexo do nosso compromisso diário.
          </p>
        </div>

        <div className="test-grid">
          {TESTIMONIALS.map((t, idx) => (
            <article key={t.id} className={`test-card${vis ? ' anim-up' : ' hidden-anim'} d${idx + 1}`}>
              <div className="test-stars">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={17} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              <p className="test-text">"{t.text}"</p>

              <div className="test-author">
                <div className="test-avatar">{t.init}</div>
                <div>
                  <h3 className="test-name">{t.name}</h3>
                  <p className="test-role">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
