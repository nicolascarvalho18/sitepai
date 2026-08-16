import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY, WA_URL } from '../../constants/config';
import { useReveal } from '../../hooks/useReveal';

interface F { name:string; phone:string; email:string; city:string; propertyType:string; service:string; size:string; time:string; desc:string }
interface E { name?:string; phone?:string; email?:string; city?:string; propertyType?:string; service?:string }
const INIT: F = { name:'',phone:'',email:'',city:'',propertyType:'',service:'',size:'',time:'',desc:'' };

function validate(d: F): E {
  const e: E = {};
  if (!d.name.trim() || d.name.trim().length < 3) e.name = 'Nome deve ter ao menos 3 caracteres';
  if (!d.phone || d.phone.replace(/\D/g,'').length < 10) e.phone = 'Telefone inválido';
  if (!d.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = 'E-mail inválido';
  if (!d.city.trim() || d.city.trim().length < 2) e.city = 'Informe a cidade';
  if (!d.propertyType) e.propertyType = 'Selecione o tipo de imóvel';
  if (!d.service) e.service = 'Selecione o serviço';
  return e;
}

function fmtPhone(v: string) {
  const d = v.replace(/\D/g,'').slice(0,11);
  if (d.length <= 2)  return `(${d}`;
  if (d.length <= 6)  return `(${d.slice(0,2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0,2)}) ${d.slice(2,6)}-${d.slice(6)}`;
  return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`;
}

function WaIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

export default function ContactForm() {
  const { ref, vis } = useReveal(0.04);
  const [form, setForm] = useState<F>(INIT);
  const [errs, setErrs] = useState<E>({});
  const [status, setStatus] = useState<'idle'|'submitting'|'success'>('idle');

  const change = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: name === 'phone' ? fmtPhone(value) : value }));
    if (errs[name as keyof E]) setErrs(p => ({ ...p, [name]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate(form);
    if (Object.keys(v).length) { setErrs(v); return; }
    setStatus('submitting');
    setTimeout(() => { setStatus('success'); setForm(INIT); setErrs({}); }, 1600);
  };

  const ic = (n: keyof E) => `finput${errs[n] ? ' err' : ''}`;

  return (
    <section id="contato" className="form-sec" aria-labelledby="form-title">
      <div className="sec wrap">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`sec-head${vis ? ' anim-up' : ' hidden-anim'}`}>
          <div className="eyebrow">Orçamento gratuito</div>
          <h2 id="form-title" className="sec-title">Solicite seu orçamento</h2>
          <p className="sec-sub">
            Preencha os dados abaixo e nossa equipe entrará em contato para entender seu projeto.
          </p>
        </div>

        <div className={`form-grid${vis ? ' anim-up d2' : ' hidden-anim'}`}>
          {/* Sidebar */}
          <aside className="form-sidebar">
            <div className="form-sb-title">Prefere falar direto?</div>
            <div className="form-sb-sub">Use um dos canais abaixo para falar com nossa equipe agora.</div>

            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="form-info">
              <div className="form-info-icon" style={{ background: 'rgba(37,211,102,.18)' }}><WaIcon /></div>
              <div><div className="form-info-lbl">WhatsApp</div><div className="form-info-val">{COMPANY.contact.phone}</div></div>
            </a>
            <a href={`tel:${COMPANY.contact.phone}`} className="form-info">
              <div className="form-info-icon"><Phone size={14} /></div>
              <div><div className="form-info-lbl">Telefone</div><div className="form-info-val">{COMPANY.contact.phone}</div></div>
            </a>
            <a href={`mailto:${COMPANY.contact.email}`} className="form-info">
              <div className="form-info-icon"><Mail size={14} /></div>
              <div><div className="form-info-lbl">E-mail</div><div className="form-info-val">{COMPANY.contact.email}</div></div>
            </a>
            <div className="form-info" style={{ cursor: 'default' }}>
              <div className="form-info-icon"><MapPin size={14} /></div>
              <div><div className="form-info-lbl">Atendimento</div><div className="form-info-val">{COMPANY.contact.region}</div></div>
            </div>

            <div style={{ marginTop: 26 }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ width: '100%', justifyContent: 'center' }}>
                <WaIcon /> Iniciar conversa agora
              </a>
            </div>
          </aside>

          {/* Form card */}
          <div className="form-card">
            {status === 'success' ? (
              <div className="fsuccess">
                <div className="fsuccess-icon"><CheckCircle size={30} color="#059669" /></div>
                <h3 className="fsuccess-title">Solicitação enviada!</h3>
                <p className="fsuccess-sub">Recebemos seu pedido. Nossa equipe entrará em contato em até 24 horas.</p>
                <button className="btn btn-primary" onClick={() => setStatus('idle')}>Novo orçamento</button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div className="f2">
                  <div className="field">
                    <label className="flabel" htmlFor="f-name">Nome completo <span className="req">*</span></label>
                    <input id="f-name" name="name" type="text" value={form.name} onChange={change} placeholder="Seu nome completo" className={ic('name')} autoComplete="name" />
                    {errs.name && <div className="ferr"><AlertCircle size={12}/>{errs.name}</div>}
                  </div>
                  <div className="field">
                    <label className="flabel" htmlFor="f-phone">Telefone / WhatsApp <span className="req">*</span></label>
                    <input id="f-phone" name="phone" type="tel" value={form.phone} onChange={change} placeholder="(11) 99999-9999" className={ic('phone')} inputMode="numeric" />
                    {errs.phone && <div className="ferr"><AlertCircle size={12}/>{errs.phone}</div>}
                  </div>
                </div>

                <div className="f2">
                  <div className="field">
                    <label className="flabel" htmlFor="f-email">E-mail <span className="req">*</span></label>
                    <input id="f-email" name="email" type="email" value={form.email} onChange={change} placeholder="seu@email.com" className={ic('email')} autoComplete="email" />
                    {errs.email && <div className="ferr"><AlertCircle size={12}/>{errs.email}</div>}
                  </div>
                  <div className="field">
                    <label className="flabel" htmlFor="f-city">Cidade <span className="req">*</span></label>
                    <input id="f-city" name="city" type="text" value={form.city} onChange={change} placeholder="Sua cidade" className={ic('city')} />
                    {errs.city && <div className="ferr"><AlertCircle size={12}/>{errs.city}</div>}
                  </div>
                </div>

                <div className="f2">
                  <div className="field">
                    <label className="flabel" htmlFor="f-prop">Tipo de imóvel <span className="req">*</span></label>
                    <select id="f-prop" name="propertyType" value={form.propertyType} onChange={change} className={ic('propertyType')}>
                      <option value="">Selecione...</option>
                      {COMPANY.propertyTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {errs.propertyType && <div className="ferr"><AlertCircle size={12}/>{errs.propertyType}</div>}
                  </div>
                  <div className="field">
                    <label className="flabel" htmlFor="f-svc">Serviço desejado <span className="req">*</span></label>
                    <select id="f-svc" name="service" value={form.service} onChange={change} className={ic('service')}>
                      <option value="">Selecione...</option>
                      {COMPANY.services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errs.service && <div className="ferr"><AlertCircle size={12}/>{errs.service}</div>}
                  </div>
                </div>

                <div className="f2">
                  <div className="field">
                    <label className="flabel" htmlFor="f-size">Tamanho aproximado do imóvel</label>
                    <input id="f-size" name="size" type="text" value={form.size} onChange={change} placeholder="Ex: 500m², 10 andares..." className="finput" />
                  </div>
                  <div className="field">
                    <label className="flabel" htmlFor="f-time">Melhor horário para contato</label>
                    <select id="f-time" name="time" value={form.time} onChange={change} className="finput">
                      <option value="">Qualquer horário</option>
                      <option value="Manhã (8h–12h)">Manhã (8h–12h)</option>
                      <option value="Tarde (12h–18h)">Tarde (12h–18h)</option>
                      <option value="Noite (18h–21h)">Noite (18h–21h)</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label className="flabel" htmlFor="f-desc">Descrição do serviço</label>
                  <textarea id="f-desc" name="desc" value={form.desc} onChange={change}
                    placeholder="Descreva o que precisa ser feito, condições do imóvel, urgência..."
                    rows={4} className="finput" style={{ resize: 'none' }} />
                </div>

                <button id="form-submit" type="submit" disabled={status === 'submitting'} className="fsub">
                  {status === 'submitting'
                    ? <><div style={{ width:18,height:18,border:'2px solid rgba(255,255,255,.3)',borderTopColor:'#fff',borderRadius:'50%',animation:'spin .8s linear infinite' }}/>Enviando...</>
                    : <><Send size={17}/>Solicitar orçamento</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </section>
  );
}
