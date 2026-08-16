import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../../data/navigation';
import { buildWhatsAppUrl } from '../../data/company';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 74;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`header-wrap${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="header-container">
          {/* Logo NC Construções */}
          <button
            onClick={() => scrollToSection('inicio')}
            className="header-brand"
            aria-label="NC Construções — Ir para o início"
          >
            <div className="header-logo-box">
              <img src="/images/logo-nc.png" alt="NC Construções" className="header-logo-img" />
            </div>
            <span className="header-brand-name">NC CONSTRUÇÕES</span>
          </button>

          {/* Desktop Nav */}
          <nav className="header-nav" aria-label="Menu principal">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="header-nav-link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="header-cta-desktop">
            <a
              href={buildWhatsAppUrl("Olá! Gostaria de solicitar um orçamento com a NC Construções.")}
              target="_blank"
              rel="noopener noreferrer"
              className="header-cta-btn"
              id="header-cta-solicitar"
            >
              SOLICITAR ORÇAMENTO
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="header-burger"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu de navegação'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mob-drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="mob-drawer-head">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="/images/logo-nc.png" alt="NC Construções" style={{ height: 34, objectFit: 'contain' }} />
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: 14, fontWeight: 900, color: 'var(--grafite)' }}>
              NC CONSTRUÇÕES
            </span>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Fechar menu" style={{ padding: 4 }}>
            <X size={22} color="var(--grafite)" />
          </button>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="mob-nav-item"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: 16 }}>
          <a
            href={buildWhatsAppUrl("Olá! Gostaria de solicitar um orçamento com a NC Construções.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ width: '100%', textDecoration: 'none' }}
          >
            SOLICITAR ORÇAMENTO
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

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
