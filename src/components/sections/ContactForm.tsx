import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { COMPANY, buildWhatsAppUrl } from '../../data/company';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Lavagem de Fachada',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Montar mensagem formatada para o WhatsApp
    const msg = `*Solicitação de Orçamento — NC Construções*
👤 *Nome:* ${formData.name}
📱 *Telefone:* ${formData.phone}
✉️ *E-mail:* ${formData.email || 'Não informado'}
🛠️ *Serviço de interesse:* ${formData.service}
📝 *Mensagem:* ${formData.message || 'Gostaria de mais detalhes e um orçamento.'}`;

    // 2. Abrir WhatsApp com a mensagem pronta
    const waUrl = buildWhatsAppUrl(msg);
    window.open(waUrl, '_blank');

    // 3. Exibir confirmação na interface
    setSubmitted(true);
  };

  return (
    <section id="contato" className="sec-pad" style={{ background: '#FFFFFF' }} aria-labelledby="contato-heading">
      <div className="container">
        <div className="sec-head">
          <div className="eyebrow">ATENDIMENTO DIRETO</div>
          <h2 id="contato-heading" className="sec-title">
            SOLICITE SEU ORÇAMENTO
          </h2>
          <p className="sec-subtitle">
            Preencha os campos abaixo e receba um retorno ágil com a proposta ideal para a sua necessidade.
          </p>
        </div>

        <div className="contact-grid-wrap">
          {/* Formulário Principal */}
          <div className="contact-form-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '36px 12px' }}>
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.12)',
                  color: '#10B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  <CheckCircle2 size={32} />
                </div>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--grafite)', marginBottom: 8 }}>
                  Solicitação Encaminhada!
                </h3>

                <p style={{ fontSize: 14.5, color: 'var(--grafite-muted)', maxWidth: 400, margin: '0 auto 24px', lineHeight: 1.6 }}>
                  Sua mensagem foi enviada para o WhatsApp da <strong>NC Construções</strong>. Em breve nossa equipe entrará em contato para alinhar os detalhes da sua obra.
                </p>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', service: 'Lavagem de Fachada', message: '' });
                  }}
                >
                  Enviar Outra Solicitação
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="form-name">
                      Nome completo <span className="req">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="Ex: Carlos Silva ou Condomínio Jardins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="form-phone">
                      Telefone / WhatsApp <span className="req">*</span>
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="form-email">
                      E-mail
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      placeholder="seuemail@exemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="form-service">
                      Tipo de serviço <span className="req">*</span>
                    </label>
                    <select
                      id="form-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="form-select"
                    >
                      <option value="Lavagem de Fachada">Lavagem de Fachada</option>
                      <option value="Polimento de Piso">Polimento de Piso</option>
                      <option value="Pintura">Pintura</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="form-message">
                    Mensagem / Detalhes do imóvel
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    placeholder="Descreva brevemente o que você precisa (ex: metragem aproximada, tipo de superfície, localização)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  id="form-btn-enviar"
                >
                  <Send size={16} />
                  ENVIAR E SOLICITAR ORÇAMENTO NO WHATSAPP
                </button>
              </form>
            )}
          </div>

          {/* Sidebar de Canais Oficiais */}
          <aside className="contact-sidebar-card">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--grafite)', marginBottom: 8 }}>
              Canais de Atendimento
            </h3>
            <p style={{ fontSize: 13.5, color: 'var(--grafite-muted)', lineHeight: 1.6, marginBottom: 20 }}>
              Prefere falar diretamente com nosso atendimento? Fique à vontade para nos contatar pelos canais abaixo.
            </p>

            <div className="contact-channel-item">
              <div className="contact-channel-icon">
                <Phone size={18} />
              </div>
              <div>
                <div className="contact-channel-lbl">Telefone / WhatsApp</div>
                <div className="contact-channel-val">{COMPANY.contact.phone}</div>
              </div>
            </div>

            <div className="contact-channel-item">
              <div className="contact-channel-icon">
                <Mail size={18} />
              </div>
              <div>
                <div className="contact-channel-lbl">E-mail Corporativo</div>
                <div className="contact-channel-val">{COMPANY.contact.email}</div>
              </div>
            </div>

            <div className="contact-channel-item">
              <div className="contact-channel-icon">
                <MapPin size={18} />
              </div>
              <div>
                <div className="contact-channel-lbl">Região de Atendimento</div>
                <div className="contact-channel-val">{COMPANY.contact.region}</div>
              </div>
            </div>

            <div className="contact-channel-item">
              <div className="contact-channel-icon">
                <Clock size={18} />
              </div>
              <div>
                <div className="contact-channel-lbl">Horário de Funcionamento</div>
                <div className="contact-channel-val">{COMPANY.contact.hours}</div>
              </div>
            </div>

            <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid var(--cinza-border)' }}>
              <a
                href={buildWhatsAppUrl("Olá! Gostaria de falar com o atendimento da NC Construções.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa"
                style={{ width: '100%', fontSize: 13 }}
              >
                Chamar no WhatsApp agora
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
