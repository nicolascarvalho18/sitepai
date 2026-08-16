import { Building2, PaintBucket, Sparkles } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const CARDS = [
  {
    icon: Building2,
    title: 'Limpeza de Fachadas',
    desc: 'Remoção de sujidades, poluição e eflorescências, restaurando a estética original e valorizando o imóvel. Técnicas de alpinismo industrial para acesso seguro.'
  },
  {
    icon: PaintBucket,
    title: 'Pintura e Restauro',
    desc: 'Tratamento de trincas, impermeabilização e pintura de alta durabilidade. Utilizamos sistemas de revestimento adequados para cada tipo de substrato.'
  },
  {
    icon: Sparkles,
    title: 'Polimento de Pisos',
    desc: 'Recuperação e polimento de mármores, granitos e pedras naturais. Processo abrasivo diamantado que devolve o brilho e a resistência da superfície.'
  }
];

export default function ServicesIntro() {
  const { ref, vis } = useReveal(0.08);

  return (
    <section className="sec-p" style={{ background: '#FFFFFF' }} aria-labelledby="especialidades-title">
      <div className="container">
        {/* Header com 2 Colunas conforme o Mockup 1 */}
        <div className="serv-intro-head">
          <div>
            <div className="serv-tag">ESPECIALIDADES</div>
            <h2 id="especialidades-title" className="serv-title">
              Soluções Completas para<br />Manutenção Predial
            </h2>
          </div>

          <p className="serv-head-desc">
            Nossa equipe técnica é rigorosamente treinada para executar serviços complexos com eficiência, utilizando tecnologia de ponta e materiais de primeira linha.
          </p>
        </div>

        {/* Grid com 3 Cards Premium conforme o Mockup 1 */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`cards-3-grid${vis ? ' anim-up' : ' hidden-anim'}`}>
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="card-spec-item">
                <div className="card-black-icon">
                  <Icon size={22} />
                </div>
                <h3 className="card-item-title">{card.title}</h3>
                <p className="card-item-desc">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
