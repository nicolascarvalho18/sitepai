import { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';
import { COMPANY, WA_URL } from '../../constants/config';
import { useReveal } from '../../hooks/useReveal';

export default function ContactForm() {
  const { ref, vis } = useReveal(0.08);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Lavagem de Fachada',
    city: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulação de envio rápido e seguro
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contato" className="sec" style={{ background: 'var(--bg-soft)' }} aria-labelledby="contact-title">
      <div className="wrap">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`sec-head${vis ? ' anim-up' : ' hidden-anim'}`}>
          <div className="eyebrow">Atendimento Direto</div>
          <h2 id="contact-title" className="sec-title">SOLICITE SEU ORÇAMENTO</h2>
          <p className="sec-sub">
            Conte um pouco sobre o seu projeto e nossa equipe poderá entrar em contato para entender sua necessidade.
          </p>
        </div>

        <div className="contact-grid">
          {/* Formulário Principal */}
          <div className="form-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.12)',
                  color: '#10B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text)', marginBottom: 10 }}>
                  Solicitação Enviada com Sucesso!
                </h3>
                <p style={{ color: 'var(--text-light)', fontSize: '14.5px', maxWidth: 440, margin: '0 auto 24px', lineHeight: 1.6 }}>
                  Obrigado, <strong>{formData.name}</strong>! Recebemos seus dados e nossa equipe técnica entrará em contato em breve para apresentar a melhor proposta para o seu imóvel.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', service: 'Lavagem de Fachada', city: '', message: '' });
                  }}
                >
                  Enviar Nova Solicitação
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="f-name">
                      Nome completo <span className="req">*</span>
                    </label>
                    <input
                      id="f-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Seu nome ou condomínio"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="f-phone">
                      Telefone / WhatsApp <span className="req">*</span>
                    </label>
                    <input
                      id="f-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="f-email">
                      E-mail
                    </label>
                    <input
                      id="f-email"
                      name="email"
                      type="email"
                      placeholder="seuemail@exemplo.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="f-city">
                      Cidade / Região
                    </label>
                    <input
                      id="f-city"
                      name="city"
                      type="text"
                      placeholder="Ex: São Paulo, Barueri, Guarulhos..."
                      value={formData.city}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="f-service">
                    Tipo de serviço <span className="req">*</span>
                  </label>
                  <select
                    id="f-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Lavagem de Fachada">Lavagem de Fachada</option>
                    <option value="Polimento de Piso">Polimento de Piso</option>
                    <option value="Pintura">Pintura (Residencial / Comercial)</option>
                    <option value="Outro">Outro serviço</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="f-message">
                    Mensagem / Detalhes do imóvel
                  </label>
                  <textarea
                    id="f-message"
                    name="message"
                    rows={4}
                    placeholder="Descreva o que precisa ser feito, tamanho estimado, condições atuais..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-outline-blue btn-lg"
                  style={{ width: '100%' }}
                  id="btn-enviar-formulario"
                >
                  {loading ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send size={18} />
                      ENVIAR SOLICITAÇÃO
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar de Contato */}
          <aside className="form-sidebar">
            <h3 className="sidebar-title">Prefere falar direto?</h3>
            <p className="sidebar-sub">
              Nossa equipe está disponível para tirar dúvidas e agilizar seu atendimento.
            </p>

            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon-box" style={{ background: 'rgba(37, 211, 102, 0.15)', color: '#25D366' }}>
                <MessageCircle size={18} />
              </div>
              <div>
                <div className="contact-lbl">WhatsApp</div>
                <div className="contact-val">{COMPANY.contact.phone}</div>
              </div>
            </a>

            <a href={`tel:${COMPANY.contact.phone}`} className="contact-item">
              <div className="contact-icon-box">
                <Phone size={18} />
              </div>
              <div>
                <div className="contact-lbl">Telefone</div>
                <div className="contact-val">{COMPANY.contact.phone}</div>
              </div>
            </a>

            <a href={`mailto:${COMPANY.contact.email}`} className="contact-item">
              <div className="contact-icon-box">
                <Mail size={18} />
              </div>
              <div>
                <div className="contact-lbl">E-mail</div>
                <div className="contact-val">{COMPANY.contact.email}</div>
              </div>
            </a>

            <div className="contact-item">
              <div className="contact-icon-box">
                <MapPin size={18} />
              </div>
              <div>
                <div className="contact-lbl">Região de Atendimento</div>
                <div className="contact-val">{COMPANY.contact.region}</div>
              </div>
            </div>

            <div style={{ marginTop: 24, paddingTop: 18, borderTop: '1px solid var(--border-light)' }}>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa"
                style={{ width: '100%', fontSize: 13.5 }}
              >
                Iniciar conversa no WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
