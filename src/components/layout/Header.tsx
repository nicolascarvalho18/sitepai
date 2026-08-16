import { useState } from 'react';
import { User, Menu, X } from 'lucide-react';
import { WA_URL } from '../../constants/config';

const NAV_LINKS = [
  { label: 'HOME',     id: 'inicio' },
  { label: 'SERVIÇOS', id: 'servicos' },
  { label: 'GALERIA',  id: 'galeria' },
  { label: 'CONTATO',  id: 'contato' },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 76,
      behavior: 'smooth'
    });
  }
}

export default function Header() {
  const [active, setActive] = useState('inicio');
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    setActive(id);
    setOpen(false);
    scrollTo(id);
  };

  return (
    <>
      <header className="header-bar" role="banner">
        <div className="header-inner">
          {/* Logo + Nome NC CONSTRUÇÕES */}
          <button
            onClick={() => handleNav('inicio')}
            className="brand-group"
            aria-label="NC Construções — Início"
          >
            <div style={{
              background: '#fff',
              padding: '4px 10px',
              borderRadius: 6,
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
            }}>
              <img src="/images/logo-nc.png" alt="NC" className="brand-logo-img" />
            </div>
            <span className="brand-name">NC CONSTRUÇÕES</span>
          </button>

          {/* Nav Links Desktop */}
          <nav className="nav-menu" aria-label="Menu principal">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                className={`nav-item${active === link.id ? ' active' : ''}`}
                onClick={() => handleNav(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* User Profile Button / Action */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="user-icon-btn"
              aria-label="Área do cliente / WhatsApp"
              title="Falar no WhatsApp"
            >
              <User size={18} />
            </a>

            <button
              className="hdr-burger"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mob-drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="mob-drawer-head">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <img src="/images/logo-nc.png" alt="NC Construções" style={{ height: 36, objectFit: 'contain' }} />
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: 14, fontWeight: 900, color: 'var(--text-dark)' }}>
              NC CONSTRUÇÕES
            </span>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Fechar menu">
            <X size={22} color="var(--text-dark)" />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className="mob-nav-item"
              onClick={() => handleNav(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 'auto' }}>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid-blue"
            style={{ width: '100%', textDecoration: 'none' }}
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>

      {open && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 240, background: 'rgba(0,0,0,0.6)' }}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
