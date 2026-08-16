import { ShieldCheck, Sparkles, Clock, Award, Building2, FileCheck } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const DIFFS = [
  {
    icon: ShieldCheck,
    title: 'Segurança & Certificações NR-35/NR-18',
    desc: 'Equipe 100% qualificada com EPIs homologados, trabalho em altura com ancoragem certificada e análise de risco preventiva.'
  },
  {
    icon: Sparkles,
    title: 'Insumos de Alta Performance',
    desc: 'Utilizamos produtos e tintas de padrão premium (impermeabilizantes elastoméricos, hidrofugantes e abrasivos industriais).'
  },
  {
    icon: Clock,
    title: 'Cronograma Rígido & Pontualidade',
    desc: 'Planejamento detalhado de execução com alinhamento constante e compromisso absoluto de cumprimento dos prazos acordados.'
  },
  {
    icon: Award,
    title: 'Garantia Técnica Formal',
    desc: 'Segurança jurídica e tranquilidade para o seu condomínio ou empresa com termo formal de garantia emitido na entrega.'
  },
  {
    icon: Building2,
    title: 'Preservação & Limpeza Pós-Obra',
    desc: 'Isolamento preventivo de áreas comuns, proteção de vidros e esquadrias e entrega dos ambientes 100% limpos e organizados.'
  },
  {
    icon: FileCheck,
    title: 'Diagnóstico & Orçamento Transparente',
    desc: 'Visita técnica consultiva sem compromisso com memorial descritivo completo, detalhado e sem taxas ocultas.'
  },
];

export default function Differentials() {
  const { ref, vis } = useReveal(0.05);

  return (
    <section id="diferenciais" aria-labelledby="diff-title">
      <div className="sec wrap">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`sec-head${vis ? ' anim-up' : ' hidden-anim'}`}>
          <div className="eyebrow">Padrão de Excelência</div>
          <h2 id="diff-title" className="sec-title">Por que grandes condomínios e empresas<br />escolhem a NC Construções?</h2>
          <p className="sec-sub">Pilares de engenharia e gestão que asseguram durabilidade, segurança e o mais alto nível de acabamento.</p>
        </div>

        <div className="diff-grid">
          {DIFFS.map((d, i) => {
            const Icon = d.icon;
            return (
              <div key={d.title} className={`diff-card${vis ? ' anim-up' : ' hidden-anim'} d${i}`}>
                <div className="diff-icon"><Icon size={24} /></div>
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
