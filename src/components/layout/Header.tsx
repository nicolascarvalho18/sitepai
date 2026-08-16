import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { WA_URL } from '../../constants/config';

const NAV = [
  { l: 'Início',         id: 'inicio' },
  { l: 'Sobre nós',      id: 'sobre' },
  { l: 'Serviços',       id: 'servicos' },
  { l: 'Antes e depois', id: 'antes-depois' },
  { l: 'Diferenciais',   id: 'diferenciais' },
  { l: 'Depoimentos',    id: 'depoimentos' },
  { l: 'Contato',        id: 'contato' },
];

function go(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const nav = (id: string) => { setOpen(false); go(id); };

  return (
    <>
      <style>{`
        .nav-lnk {
          position: relative;
          padding: 9px 15px;
          border-radius: 10px;
          font-size: 13.5px;
          font-weight: 500;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          transition: color 0.22s ease, background 0.22s ease;
          white-space: nowrap;
          letter-spacing: .01em;
        }
        .nav-lnk::after {
          content: '';
          position: absolute;
          bottom: 5px; left: 15px; right: 15px;
          height: 2px; border-radius: 2px;
          background: linear-gradient(90deg, #1B3A8C, #60A5FA);
          transform: scaleX(0);
          transition: transform 0.28s cubic-bezier(.16,1,.3,1);
          transform-origin: left;
        }
        .nav-lnk:hover::after { transform: scaleX(1); }
        .hdr:not(.on) .nav-lnk { color: rgba(255,255,255,.82); }
        .hdr:not(.on) .nav-lnk:hover { color: #fff; background: rgba(255,255,255,.09); }
        .hdr.on  .nav-lnk { color: #374151; }
        .hdr.on  .nav-lnk:hover { color: #1B3A8C; background: rgba(27,58,140,.07); }
        /* ===== LOGO ===== */
        .logo-btn {
          background: none; border: none; cursor: pointer; padding: 0;
          transition: opacity .2s ease;
          display: flex; align-items: center;
        }
        .logo-btn:hover { opacity: .88; }
        
        .logo-container {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border-radius: 8px;
        }
        
        /* Fundo branco sutil quando o header está transparente (sobre a foto do hero) para destacar a logo escura */
        .hdr:not(.on) .logo-container {
          background: rgba(255, 255, 255, 0.95);
          padding: 8px 16px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        }
        
        /* Sem fundo quando o header está branco */
        .hdr.on .logo-container {
          background: transparent;
          padding: 4px 0;
          box-shadow: none;
        }

        .logo-img {
          width: auto;
          transition: height 0.3s ease;
          object-fit: contain;
        }
        
        /* Tamanhos da logo no Desktop */
        @media (min-width: 768px) {
          .hdr:not(.on) .logo-img { height: 50px; }
          .hdr.on .logo-img { height: 60px; }
        }
        
        /* Tamanhos da logo no Mobile */
        @media (max-width: 767px) {
          .hdr:not(.on) .logo-img { height: 40px; }
          .hdr.on .logo-img { height: 48px; }
        }

        .hdr { height: 85px; }
      `}</style>

      <header className={`hdr${scrolled ? ' on' : ''}`} role="banner">
        <div className="hdr-inner">

          {/* ===== LOGO REAL NC CONSTRUÇÕES ===== */}
          <button className="logo-btn" onClick={() => nav('inicio')} aria-label="NC Construções — Início">
            <div className="logo-container">
              <img src="/images/logo-nc.png" alt="NC Construções" className="logo-img" />
            </div>
          </button>

          {/* ===== NAV DESKTOP ===== */}
          <nav className="hdr-nav" aria-label="Menu principal">
            {NAV.map(n => (
              <button key={n.id} className="nav-lnk" onClick={() => nav(n.id)}>
                {n.l}
              </button>
            ))}
          </nav>

          {/* ===== ACTIONS ===== */}
          <div className="hdr-actions">
            <button className="hdr-cta" id="hdr-orcamento" onClick={() => nav('contato')}>
              <Phone size={14} />
              Solicitar orçamento
            </button>
            <button
              id="mob-menu-btn"
              className="hdr-burger"
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ===== MOBILE MENU ===== */}
      <div className={`mob-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="mob-menu-inner">
          {/* Logo no topo do drawer mobile */}
          <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0', borderBottom: '1px solid #EEF2FA', marginBottom: 12 }}>
             <img src="/images/logo-nc.png" alt="NC Construções" style={{ height: 65, objectFit: 'contain' }} />
          </div>
          {NAV.map(n => (
            <button key={n.id} className="mob-nav-btn" onClick={() => nav(n.id)}>{n.l}</button>
          ))}
          <div className="mob-menu-cta">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="btn btn-wa" style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => setOpen(false)}>
              Falar pelo WhatsApp
            </a>
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}
              onClick={() => nav('contato')}>
              Solicitar orçamento
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 198, background: 'rgba(0,0,0,.3)' }}
          onClick={() => setOpen(false)} aria-hidden="true" />
      )}
    </>
  );
}
