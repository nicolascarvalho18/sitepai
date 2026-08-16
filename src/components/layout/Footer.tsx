import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { COMPANY, WA_URL } from '../../constants/config';

const YEAR = new Date().getFullYear();

function InstIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function FbIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function LiIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 80,
      behavior: 'smooth'
    });
  }
}

export default function Footer() {
  return (
    <footer className="ftr" role="contentinfo">
      <div className="wrap">
        <div className="ftr-grid">
          {/* Logo e Institucional */}
          <div>
            <div className="ftr-logo-box">
              <img src="/images/logo-nc.png" alt="NC Construções" className="ftr-logo-img" />
            </div>
            
            <p className="ftr-desc">{COMPANY.desc}</p>
            
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 12,
              fontWeight: 700,
              color: '#60A5FA',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: 16
            }}>
              <ShieldCheck size={16} />
              Qualidade • Compromisso • Confiança
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da NC Construções"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'background 0.2s ease'
                }}
              >
                <InstIcon />
              </a>
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da NC Construções"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'background 0.2s ease'
                }}
              >
                <FbIcon />
              </a>
              <a
                href={COMPANY.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da NC Construções"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'background 0.2s ease'
                }}
              >
                <LiIcon />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="ftr-col-title">Navegação</h4>
            <button className="ftr-link" onClick={() => scrollTo('inicio')}>Início</button>
            <button className="ftr-link" onClick={() => scrollTo('servicos')}>Serviços</button>
            <button className="ftr-link" onClick={() => scrollTo('projetos')}>Projetos</button>
            <button className="ftr-link" onClick={() => scrollTo('sobre')}>Sobre</button>
            <button className="ftr-link" onClick={() => scrollTo('contato')}>Contato</button>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="ftr-col-title">Serviços</h4>
            <button className="ftr-link" onClick={() => scrollTo('servicos')}>Lavagem de Fachadas</button>
            <button className="ftr-link" onClick={() => scrollTo('servicos')}>Polimento de Pisos</button>
            <button className="ftr-link" onClick={() => scrollTo('servicos')}>Pintura Residencial</button>
            <button className="ftr-link" onClick={() => scrollTo('servicos')}>Pintura Comercial</button>
            <button className="ftr-link" onClick={() => scrollTo('servicos')}>Pintura de Fachadas</button>
          </div>

          {/* Contato Direto */}
          <div>
            <h4 className="ftr-col-title">Canais Oficiais</h4>
            
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255, 255, 255, 0.8)', fontSize: 13.5, marginBottom: 12 }}>
              <div style={{ color: '#25D366' }}><Phone size={15} /></div>
              <span>WhatsApp: {COMPANY.contact.phone}</span>
            </a>

            <a href={`mailto:${COMPANY.contact.email}`} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255, 255, 255, 0.8)', fontSize: 13.5, marginBottom: 12 }}>
              <div style={{ color: '#60A5FA' }}><Mail size={15} /></div>
              <span>{COMPANY.contact.email}</span>
            </a>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255, 255, 255, 0.8)', fontSize: 13.5 }}>
              <div style={{ color: '#60A5FA' }}><MapPin size={15} /></div>
              <span>{COMPANY.contact.region}</span>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="ftr-bottom">
          <div>
            © {YEAR} NC Construções — Todos os direitos reservados.
          </div>
          <div>
            Qualidade • Compromisso • Confiança
          </div>
        </div>
      </div>
    </footer>
  );
}
