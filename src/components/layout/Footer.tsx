import { Mail, Phone, Share2, Globe } from 'lucide-react';
import { COMPANY, WA_URL } from '../../constants/config';

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 76,
      behavior: 'smooth'
    });
  }
}

export default function Footer() {
  return (
    <footer className="footer-black" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Logo & Institucional */}
          <div>
            <div style={{
              display: 'inline-flex',
              background: '#fff',
              padding: '6px 14px',
              borderRadius: 6,
              marginBottom: 16
            }}>
              <img src="/images/logo-nc.png" alt="NC Construções" style={{ height: 38, objectFit: 'contain' }} />
            </div>

            <p className="footer-desc-txt">
              Excelência técnica e compromisso com a qualidade em cada projeto.
            </p>

            <div style={{ display: 'flex', gap: 12, color: 'rgba(255,255,255,0.7)' }}>
              <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Compartilhar" style={{ color: 'inherit' }}>
                <Share2 size={16} />
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" aria-label="Website" style={{ color: 'inherit' }}>
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="footer-h4">EMPRESA</h4>
            <button className="footer-lnk" onClick={() => scrollTo('inicio')}>Sobre Nós</button>
            <button className="footer-lnk" onClick={() => scrollTo('servicos')}>Equipe Técnica</button>
            <button className="footer-lnk" onClick={() => scrollTo('contato')}>Carreiras</button>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="footer-h4">SERVIÇOS</h4>
            <button className="footer-lnk" onClick={() => scrollTo('servicos')}>Residencial</button>
            <button className="footer-lnk" onClick={() => scrollTo('servicos')}>Comercial</button>
            <button className="footer-lnk" onClick={() => scrollTo('servicos')}>Manutenção</button>
          </div>

          {/* Contato */}
          <div>
            <h4 className="footer-h4">CONTATO</h4>
            <a
              href={`mailto:${COMPANY.contact.email}`}
              className="footer-lnk"
              style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}
            >
              <Mail size={14} color="#0D5DFD" />
              <span>{COMPANY.contact.email}</span>
            </a>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-lnk"
              style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            >
              <Phone size={14} color="#0D5DFD" />
              <span>{COMPANY.contact.phone}</span>
            </a>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="footer-btm-row">
          © 2026 NC CONSTRUÇÕES. ENGENHARIA E CONSTRUÇÃO CIVIL. TODOS OS DIREITOS RESERVADOS.
        </div>
      </div>
    </footer>
  );
}
