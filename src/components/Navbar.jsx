// src/components/Navbar.jsx
import { useState, useEffect } from 'react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'home', label: 'Accueil' },
    { id: 'outils', label: 'Outils IA' },
    { id: 'packs', label: 'Nos Packs' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <div className="navbar__logo" onClick={() => { setActiveSection('home'); setMobileOpen(false); }}>
          <span className="navbar__logo-icon">◆</span>
          parcour<span className="navbar__logo-accent">kiff</span>
        </div>

        <button className="navbar__burger" onClick={() => setMobileOpen(!mobileOpen)}>
          <span /><span /><span />
        </button>

        <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {links.map(l => (
            <button
              key={l.id}
              className={`navbar__link ${activeSection === l.id ? 'navbar__link--active' : ''}`}
              onClick={() => { setActiveSection(l.id); setMobileOpen(false); }}
            >
              {l.label}
            </button>
          ))}
          <button className="navbar__cta" onClick={() => { setActiveSection('packs'); setMobileOpen(false); }}>
            Commencer
          </button>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: rgba(248,250,252,0.7);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          transition: all 0.3s;
        }
        .navbar--scrolled {
          background: rgba(248,250,252,0.92);
          box-shadow: 0 1px 0 var(--slate-200);
        }
        .navbar__inner {
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar__logo {
          font-size: 22px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          letter-spacing: -0.5px;
          user-select: none;
        }
        .navbar__logo-icon { color: var(--blue-600); font-size: 16px; }
        .navbar__logo-accent { color: var(--blue-600); }
        .navbar__links {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .navbar__link {
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 500;
          color: var(--slate-500);
          border-radius: var(--radius-sm);
          transition: all 0.2s;
        }
        .navbar__link:hover { color: var(--slate-900); background: var(--slate-100); }
        .navbar__link--active { color: var(--blue-600); background: var(--blue-50); }
        .navbar__cta {
          margin-left: 12px;
          padding: 9px 20px;
          background: var(--blue-600);
          color: white;
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 600;
          transition: all 0.2s;
        }
        .navbar__cta:hover { background: var(--blue-700); }
        .navbar__burger { display: none; }

        @media (max-width: 640px) {
          .navbar__burger {
            display: flex;
            flex-direction: column;
            gap: 5px;
            padding: 8px;
          }
          .navbar__burger span {
            display: block;
            width: 22px;
            height: 2px;
            background: var(--slate-700);
            border-radius: 2px;
            transition: all 0.2s;
          }
          .navbar__links {
            display: none;
            position: absolute;
            top: 68px; left: 0; right: 0;
            background: white;
            flex-direction: column;
            padding: 16px 24px;
            border-bottom: 1px solid var(--slate-200);
            gap: 8px;
          }
          .navbar__links--open { display: flex; }
          .navbar__cta { margin-left: 0; width: 100%; text-align: center; }
        }
      `}</style>
    </nav>
  );
}
