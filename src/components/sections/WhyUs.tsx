import { Gem, HeartHandshake, Briefcase, Shield, UserCheck, Sparkles } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const DIFFERENTIALS = [
  {
    num: '01',
    icon: Gem,
    title: 'Qualidade',
    desc: 'Atenção aos detalhes em todas as etapas do serviço.'
  },
  {
    num: '02',
    icon: HeartHandshake,
    title: 'Compromisso',
    desc: 'Comprometimento com cada projeto e com cada cliente.'
  },
  {
    num: '03',
    icon: Briefcase,
    title: 'Profissionalismo',
    desc: 'Execução organizada e foco em um resultado de qualidade.'
  },
  {
    num: '04',
    icon: Shield,
    title: 'Segurança',
    desc: 'Cuidado com pessoas, ambientes e patrimônio durante a execução.'
  },
  {
    num: '05',
    icon: UserCheck,
    title: 'Atendimento personalizado',
    desc: 'Cada projeto recebe uma solução adequada às suas necessidades.'
  },
  {
    num: '06',
    icon: Sparkles,
    title: 'Acabamento',
    desc: 'Foco em entregar um resultado visual limpo, moderno e profissional.'
  },
];

export default function WhyUs() {
  const { ref, vis } = useReveal(0.08);

  return (
    <section id="diferenciais" className="sec why-sec" aria-labelledby="why-title">
      <div className="wrap">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`sec-head${vis ? ' anim-up' : ' hidden-anim'}`}>
          <div className="eyebrow light">Pilares da Empresa</div>
          <h2 id="why-title" className="sec-title light">POR QUE ESCOLHER A NC CONSTRUÇÕES?</h2>
          <p className="sec-sub light">
            Trabalhamos com seriedade, rigor técnico e excelência para garantir a melhor experiência para o seu imóvel.
          </p>
        </div>

        <div className="why-grid">
          {DIFFERENTIALS.map((d, idx) => {
            const Icon = d.icon;
            return (
              <div
                key={d.num}
                className={`why-card${vis ? ' anim-up' : ' hidden-anim'} d${(idx % 3) + 1}`}
              >
                <span className="why-num">{d.num}</span>
                <div className="why-icon">
                  <Icon size={24} />
                </div>
                <h3 className="why-title">{d.title}</h3>
                <p className="why-desc">{d.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
