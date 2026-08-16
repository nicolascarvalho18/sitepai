import { Gem, Users, Wrench, Shield, HeartHandshake, Eye } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const DIFFS = [
  { icon: Gem,            title: 'Qualidade',                    desc: 'Executamos cada serviço com atenção aos detalhes e foco total no acabamento final.' },
  { icon: Users,          title: 'Profissionais especializados',  desc: 'Equipe preparada e treinada para realizar os serviços com segurança e eficiência.' },
  { icon: Wrench,         title: 'Equipamentos profissionais',    desc: 'Utilizamos ferramentas e equipamentos adequados para cada tipo de trabalho.' },
  { icon: Shield,         title: 'Segurança',                    desc: 'Seguimos rigorosamente os procedimentos de segurança durante toda a execução.' },
  { icon: HeartHandshake, title: 'Atendimento personalizado',    desc: 'Cada orçamento é analisado de acordo com as necessidades e realidade do cliente.' },
  { icon: Eye,            title: 'Transparência',                 desc: 'Orçamentos claros e comunicação durante todas as etapas do serviço.' },
];

export default function Differentials() {
  const { ref, vis } = useReveal(0.05);

  return (
    <section id="diferenciais" aria-labelledby="diff-title">
      <div className="sec wrap">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`sec-head${vis ? ' anim-up' : ' hidden-anim'}`}>
          <div className="eyebrow">Por que nos escolher</div>
          <h2 id="diff-title" className="sec-title">Por que escolher nossa equipe?</h2>
          <p className="sec-sub">Diferenciais que garantem a qualidade e a confiança que o seu imóvel merece.</p>
        </div>

        <div className="diff-grid">
          {DIFFS.map((d, i) => {
            const Icon = d.icon;
            return (
              <div key={d.title} className={`diff-card${vis ? ' anim-up' : ' hidden-anim'} d${i}`}>
                <div className="diff-icon"><Icon size={26} /></div>
                <h3 className="diff-title">{d.title}</h3>
                <p className="diff-desc">{d.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
