import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const FAQS = [
  { q: 'Quanto custa uma lavagem de fachada?',
    a: 'O valor varia conforme o tamanho da fachada, tipo de superfície, grau de sujidade e localização. Por isso trabalhamos com orçamentos personalizados — entre em contato para receber uma proposta específica para o seu imóvel.' },
  { q: 'Vocês fazem avaliação no local?',
    a: 'Sim. Para projetos maiores ou mais complexos, podemos agendar uma visita técnica para avaliar as condições do imóvel e apresentar a melhor solução. Para orçamentos iniciais, também trabalhamos com avaliação por fotos e informações fornecidas.' },
  { q: 'Atendem empresas e condomínios?',
    a: 'Sim! Atendemos imóveis residenciais, condomínios, empresas, estabelecimentos comerciais e industriais. Temos experiência com projetos de diferentes portes e segmentos.' },
  { q: 'Vocês realizam polimento de todos os tipos de piso?',
    a: 'Trabalhamos com os principais tipos de pisos: mármore, granito, porcelanato, cimentado e outros. O tratamento é adequado conforme o material e o estado de conservação do piso.' },
  { q: 'Trabalham com pintura interna e externa?',
    a: 'Sim. Realizamos pintura residencial e comercial em ambientes internos e externos, incluindo fachadas, lajes, muros, áreas comuns e quartos.' },
  { q: 'Quanto tempo demora o serviço?',
    a: 'O prazo depende do tipo e porte do serviço. Uma lavagem de fachada simples pode ser concluída em um dia, enquanto um projeto de pintura predial pode levar alguns dias. Informamos o prazo exato no orçamento.' },
  { q: 'Atendem minha cidade?',
    a: 'Atendemos a Grande São Paulo e região. Entre em contato para verificar a disponibilidade para a sua cidade.' },
  { q: 'É possível solicitar orçamento pelo WhatsApp?',
    a: 'Sim! O WhatsApp é um dos nossos principais canais de atendimento. Basta clicar no botão "Falar pelo WhatsApp" e enviar fotos e detalhes do serviço para agilizarmos o orçamento.' },
];

export default function FAQ() {
  const { ref, vis } = useReveal(0.05);
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background: 'var(--bg-soft)' }} aria-labelledby="faq-title">
      <div className="sec wrap">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`sec-head${vis ? ' anim-up' : ' hidden-anim'}`}>
          <div className="eyebrow">Dúvidas frequentes</div>
          <h2 id="faq-title" className="sec-title">Dúvidas frequentes</h2>
          <p className="sec-sub">Respondemos as perguntas mais comuns dos nossos clientes.</p>
        </div>

        <div className={`faq-wrap${vis ? ' anim-up d2' : ' hidden-anim'}`} role="list">
          {FAQS.map((f, i) => (
            <div key={i} className={`faq-item${open === i ? ' open' : ''}`} role="listitem">
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-a-${i}`}
                id={`faq-q-${i}`}
              >
                <span className="faq-q-text">{f.q}</span>
                <div className="faq-q-icon" aria-hidden="true"><Plus size={15} /></div>
              </button>
              <div className="faq-a" id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
