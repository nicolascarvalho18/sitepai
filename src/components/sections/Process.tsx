import { MessageCircle, Search, FileText, CalendarCheck, Cog, CheckSquare } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const STEPS = [
  { icon: MessageCircle, n:'01', title:'Fale conosco',           desc:'Envie suas informações pelo formulário, WhatsApp ou telefone. Respondemos rapidamente.' },
  { icon: Search,        n:'02', title:'Avaliamos o serviço',    desc:'Analisamos o imóvel, superfície e necessidades do projeto para propor a melhor solução.' },
  { icon: FileText,      n:'03', title:'Elaboramos o orçamento', desc:'Você recebe uma proposta clara, detalhada e personalizada para o seu projeto.' },
  { icon: CalendarCheck, n:'04', title:'Agendamos o serviço',    desc:'Definimos a melhor data e planejamos a execução para minimizar impactos.' },
  { icon: Cog,           n:'05', title:'Executamos',             desc:'Nossa equipe realiza o serviço com segurança, qualidade e respeito ao seu imóvel.' },
  { icon: CheckSquare,   n:'06', title:'Entregamos o resultado', desc:'Seu imóvel renovado, limpo e valorizado — exatamente como você merece.' },
];

export default function Process() {
  const { ref, vis } = useReveal(0.05);

  return (
    <section className="proc-sec" id="processo" aria-labelledby="proc-title">
      <div className="sec wrap">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`sec-head${vis ? ' anim-up' : ' hidden-anim'}`} style={{ textAlign: 'center' }}>
          <div className="badge" style={{ justifyContent: 'center', margin: '0 auto 20px' }}>
            <CheckSquare size={14} /> NOSSO PROCESSO
          </div>
          <h2 id="proc-title" className="sec-title" style={{ maxWidth: 800, margin: '0 auto 16px' }}>Do primeiro contato ao resultado final.</h2>
          <p className="sec-sub" style={{ margin: '0 auto' }}>Um processo simples, transparente e pensado para a melhor experiência.</p>
        </div>

        <div className="proc-grid">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            
            // Setas desktop: 0->1(right), 1->2(right), 2->5(down), 5->4(left), 4->3(left)
            // Lembre que o DOM order é 0,1,2, 3(04),4(05),5(06)
            // Visually we want:
            // 0  1  2
            // 5  4  3
            let arrClass = '';
            if (i === 0 || i === 1) arrClass = 'arr-r'; 
            if (i === 2) arrClass = 'arr-d'; 
            if (i === 3 || i === 4) arrClass = 'arr-l'; // 3 points left to 4, 4 points left to 5

            // Visual order:
            // index 0 -> order 0
            // index 1 -> order 1
            // index 2 -> order 2
            // index 3 -> order 5
            // index 4 -> order 4
            // index 5 -> order 3
            const visualOrder = i > 2 ? 8 - i : i;

            return (
              <div key={s.n} className={`proc-step${vis ? ' anim-up' : ' hidden-anim'} d${i} ${arrClass}`} style={{ order: visualOrder }}>
                <div className="proc-n">{s.n}</div>
                <div className="proc-icon-bg"><Icon size={24} /></div>
                <h3 className="proc-title">{s.title}</h3>
                <p className="proc-desc">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
