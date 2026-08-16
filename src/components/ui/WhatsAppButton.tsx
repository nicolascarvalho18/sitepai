import { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { WA_URL } from '../../constants/config';

export default function WhatsAppButton() {
  const [show, setShow]     = useState(false);
  const [tip, setTip]       = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShow(true), 1800);
    const t2 = setTimeout(() => setTip(true), 3500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="wa-fab" style={{ opacity: show ? 1 : 0, transition: 'opacity .5s ease' }} aria-live="polite">
      {tip && (
        <div className="wa-tooltip">
          <button className="wa-tt-close" onClick={() => setTip(false)} aria-label="Fechar"><X size={13} /></button>
          <div className="wa-tt-title">💬 Fale conosco agora</div>
          <div className="wa-tt-sub">Tire dúvidas e solicite seu orçamento pelo WhatsApp.</div>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="wa-tt-btn" onClick={() => setTip(false)}>
            Iniciar conversa
          </a>
          <div className="wa-tt-arrow" />
        </div>
      )}
      <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="wa-btn"
        id="wa-float" aria-label="Falar pelo WhatsApp" onClick={() => setTip(false)}>
        <div className="wa-pulse" aria-hidden="true" />
        <MessageCircle size={27} />
      </a>
    </div>
  );
}
