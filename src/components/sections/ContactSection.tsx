import { useState } from 'react';
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { COMPANY, WA_URL } from '../../constants/config';

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Lavagem de Fachadas',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contato" aria-labelledby="contact-heading">
      {/* Banner Superior com Fundo Escuro Conforme Screen 3 */}
      <div className="contact-hero-banner">
        <div className="contact-hero-overlay" />
        <div className="container">
          <div className="contact-hero-content">
            <h2 id="contact-heading" className="contact-hero-h1">
              Fale Conosco
            </h2>
            <p className="contact-hero-sub">
              Estamos prontos para transformar seu projeto em realidade. Entre em contato com nossa equipe de especialistas para discutir sua próxima grande obra.
            </p>
          </div>
        </div>
      </div>

      {/* Grid com 2 Cards Flutuantes em Fundo Claro Conforme Screen 3 */}
      <div style={{ background: '#F8FAFC', paddingBottom: 80 }}>
        <div className="container">
          <div className="contact-cards-wrap">
            {/* Card Esquerdo: Nossos Contatos */}
            <div className="contact-info-card">
              <h3 className="contact-info-h3">Nossos Contatos</h3>
              <p className="contact-info-p">
                Seja para esclarecer dúvidas, solicitar um orçamento ou agendar uma visita técnica, nossa equipe está à disposição.
              </p>

              {/* Sede */}
              <div className="contact-detail-row">
                <div className="contact-detail-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="contact-detail-lbl">SEDE ADMINISTRATIVA</div>
                  <div className="contact-detail-val">
                    São Paulo e Grande SP — Atendimento Presencial e Obras
                  </div>
                </div>
              </div>

              {/* Telefone */}
              <div className="contact-detail-row">
                <div className="contact-detail-icon">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="contact-detail-lbl">TELEFONE & WHATSAPP</div>
                  <div className="contact-detail-val">
                    {COMPANY.contact.phone}<br />
                    Seg - Sex: 08:00 às 18:00
                  </div>
                </div>
              </div>

              {/* E-mail */}
              <div className="contact-detail-row">
                <div className="contact-detail-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="contact-detail-lbl">E-MAIL CORPORATIVO</div>
                  <div className="contact-detail-val">
                    {COMPANY.contact.email}<br />
                    comercial@ncconstrucoes.com.br
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div style={{ display: 'flex', gap: 10, marginTop: 32 }}>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="impact-pill"
                  style={{ background: '#0B132B', color: '#fff', textDecoration: 'none' }}
                >
                  WhatsApp
                </a>
                <a
                  href={COMPANY.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="impact-pill"
                  style={{ background: '#0B132B', color: '#fff', textDecoration: 'none' }}
                >
                  Instagram
                </a>
                <a
                  href={COMPANY.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="impact-pill"
                  style={{ background: '#0B132B', color: '#fff', textDecoration: 'none' }}
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Card Direito: Formulário "Envie uma Mensagem" */}
            <div className="contact-form-card">
              <h3 className="contact-form-h3">Envie uma Mensagem</h3>

              {sent ? (
                <div style={{ textAlign: 'center', padding: '48px 10px' }}>
                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.14)',
                    color: '#10B981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, marginBottom: 8 }}>
                    Mensagem Enviada!
                  </h4>
                  <p style={{ color: 'var(--text-light)', fontSize: 14, maxWidth: 360, margin: '0 auto 20px' }}>
                    Obrigado pelo contato, <strong>{formData.name}</strong>. Nossa equipe técnica retornará com sua proposta o mais breve possível.
                  </p>
                  <button
                    className="btn-solid-blue"
                    onClick={() => {
                      setSent(false);
                      setFormData({ name: '', email: '', phone: '', service: 'Lavagem de Fachadas', message: '' });
                    }}
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-field-grid">
                    <div>
                      <label className="f-label" htmlFor="msg-name">Nome Completo</label>
                      <input
                        id="msg-name"
                        type="text"
                        required
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="f-input"
                      />
                    </div>

                    <div>
                      <label className="f-label" htmlFor="msg-email">E-mail</label>
                      <input
                        id="msg-email"
                        type="email"
                        required
                        placeholder="seuemail@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="f-input"
                      />
                    </div>
                  </div>

                  <div className="form-field-grid">
                    <div>
                      <label className="f-label" htmlFor="msg-phone">Telefone</label>
                      <input
                        id="msg-phone"
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="f-input"
                      />
                    </div>

                    <div>
                      <label className="f-label" htmlFor="msg-service">Tipo de Serviço</label>
                      <select
                        id="msg-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="f-select"
                      >
                        <option value="Lavagem de Fachadas">Lavagem de Fachadas</option>
                        <option value="Pintura e Restauro">Pintura e Restauro</option>
                        <option value="Polimento de Pisos">Polimento de Pisos</option>
                        <option value="Manutenção Geral">Manutenção Geral</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <label className="f-label" htmlFor="msg-text">Mensagem</label>
                    <textarea
                      id="msg-text"
                      rows={4}
                      placeholder="Descreva brevemente o que você precisa..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="f-textarea"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button type="submit" className="btn-solid-blue" style={{ width: '100%' }}>
                    ENVIAR MENSAGEM
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Card Inferior: Visite nosso escritório Conforme Screen 3 */}
          <div className="office-card-box">
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 13, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dark)', marginBottom: 4 }}>
                VISITE NOSSO ESCRITÓRIO
              </div>
              <div style={{ fontSize: 13.5, color: 'var(--text-light)' }}>
                Dispomos de atendimento técnico presencial para síndicos, administradoras e gestores prediais.
              </div>
            </div>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontFamily: 'var(--font-heading)',
                fontSize: 12.5,
                fontWeight: 800,
                color: 'var(--primary-blue)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase'
              }}
            >
              OBTER DIREÇÕES <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
