import { useState } from 'react';
import { UserCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY, WA_URL } from '../../constants/config';

export default function QuickContactModal() {
  const [contact, setContact] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.trim()) return;
    setSent(true);
  };

  return (
    <section className="sec-p" style={{ background: '#F8FAFC', paddingBottom: 60, paddingTop: 40 }}>
      <div className="container">
        <div className="floating-inquiry-box">
          <div className="floating-inquiry-icon">
            <UserCheck size={26} />
          </div>

          <h3 className="floating-inquiry-title">
            Pronto para elevar o padrão do seu projeto?
          </h3>

          <p className="floating-inquiry-desc">
            Agende uma visita técnica. Nossos especialistas avaliarão as necessidades da sua estrutura e apresentarão uma proposta detalhada, sem compromisso.
          </p>

          {sent ? (
            <div style={{ padding: '20px 0', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontWeight: 700 }}>
              <CheckCircle2 size={22} />
              <span>Recebemos seu contato! Retornaremos em instantes.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="inquiry-form-row">
              <input
                type="text"
                required
                placeholder="Insira seu melhor e-mail ou WhatsApp..."
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="inquiry-input"
              />
              <button type="submit" className="btn-solid-blue" style={{ width: '100%' }}>
                SOLICITAR CONTATO
                <ArrowRight size={16} />
              </button>
            </form>
          )}

          <div style={{ fontSize: 13, color: 'var(--text-light)', marginTop: 14 }}>
            Ou ligue diretamente:{' '}
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 800, color: 'var(--primary-blue)' }}>
              {COMPANY.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
