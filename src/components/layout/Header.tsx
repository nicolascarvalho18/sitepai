import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { WA_URL } from '../../constants/config';

const NAV = [
  { label: 'Início',     id: 'inicio' },
  { label: 'Serviços',   id: 'servicos' },
  { label: 'Projetos',   id: 'projetos' },
  { label: 'Sobre',      id: 'sobre' },
  { label: 'Contato',    id: 'contato' },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 80,
      behavior: 'smooth'
    });
  }
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nav = (id: string) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <>
      <header className={`hdr${scrolled ? ' on' : ''}`} role="banner">
        <div className="hdr-inner">
          {/* Logo NC Construções */}
          <button onClick={() => nav('inicio')} aria-label="NC Construções — Início">
            <div className="logo-box">
              <img src="/images/logo-nc.png" alt="NC Construções" className="logo-img" />
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hdr-nav" aria-label="Menu principal">
            {NAV.map((n) => (
              <button key={n.id} className="nav-link" onClick={() => nav(n.id)}>
                {n.label}
              </button>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="hdr-actions">
            <button
              className="btn btn-accent btn-sm"
              onClick={() => nav('contato')}
              id="hdr-btn-orcamento"
            >
              SOLICITAR ORÇAMENTO
              <ArrowRight size={15} />
            </button>

            {/* Mobile burger */}
            <button
              className="hdr-burger"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mob-drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="mob-drawer-head">
          <img src="/images/logo-nc.png" alt="NC Construções" style={{ height: 42, objectFit: 'contain' }} />
          <button onClick={() => setOpen(false)} aria-label="Fechar menu">
            <X size={24} color="#0F172A" />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          {NAV.map((n) => (
            <button key={n.id} className="mob-nav-item" onClick={() => nav(n.id)}>
              {n.label}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 'auto' }}>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa"
            style={{ width: '100%' }}
            onClick={() => setOpen(false)}
          >
            Falar pelo WhatsApp
          </a>
          <button
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={() => nav('contato')}
          >
            Solicitar orçamento
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 240, background: 'rgba(0,0,0,0.5)' }}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
