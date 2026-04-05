// src/components/Footer.jsx

export default function Footer({ setActiveSection }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-icon">◆</span>
            parcour<span className="footer__logo-accent">kiff</span>
          </div>
          <p className="footer__tagline">L'orientation post-bac, enfin kiffante.</p>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <h4 className="footer__col-title">Outils</h4>
            <a href="#" className="footer__link" onClick={(e) => { e.preventDefault(); setActiveSection('outils'); }}>QCM Orientation</a>
            <a href="#" className="footer__link" onClick={(e) => { e.preventDefault(); setActiveSection('outils'); }}>Explorateur Parcours</a>
            <a href="#" className="footer__link" onClick={(e) => { e.preventDefault(); setActiveSection('outils'); }}>Calendrier</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Offres</h4>
            <a href="#" className="footer__link" onClick={(e) => { e.preventDefault(); setActiveSection('packs'); }}>Pack Essentiel</a>
            <a href="#" className="footer__link" onClick={(e) => { e.preventDefault(); setActiveSection('packs'); }}>Pack Premium</a>
            <a href="#" className="footer__link" onClick={(e) => { e.preventDefault(); setActiveSection('packs'); }}>Pack Intégral</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <a href="#" className="footer__link">Instagram</a>
            <a href="#" className="footer__link">TikTok</a>
            <a href="mailto:contact@parcourkiff.fr" className="footer__link">Email</a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer__bottom">
          <p className="footer__copy">© 2026 ParcourKiff — Tous droits réservés</p>
          <div className="footer__legal">
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('mentions'); }}>Mentions légales</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('cgv'); }}>CGV</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('cgu'); }}>CGU</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('confidentialite'); }}>Confidentialité</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--slate-900);
          padding: 64px 0 0;
          margin-top: 40px;
        }
        .footer__inner {
          display: flex;
          justify-content: space-between;
          gap: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid var(--slate-800);
          flex-wrap: wrap;
        }
        .footer__brand { max-width: 280px; }
        .footer__logo {
          font-size: 22px;
          font-weight: 700;
          color: white;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .footer__logo-icon { color: var(--sage-400); font-size: 16px; }
        .footer__logo-accent { color: var(--sage-400); }
        .footer__tagline {
          font-size: 14px;
          color: var(--cream-500);
          line-height: 1.6;
        }
        .footer__links {
          display: flex;
          gap: 56px;
          flex-wrap: wrap;
        }
        .footer__col-title {
          font-size: 13px;
          font-weight: 600;
          color: var(--cream-400);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }
        .footer__link {
          display: block;
          font-size: 14px;
          color: var(--cream-600);
          padding: 5px 0;
          transition: color 0.2s;
        }
        .footer__link:hover { color: white; }
        .footer__bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 0;
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer__copy {
          font-size: 12px;
          color: var(--cream-700);
        }
        .footer__legal {
          display: flex;
          gap: 24px;
        }
        .footer__legal a {
          font-size: 12px;
          color: var(--cream-700);
          transition: color 0.2s;
        }
        .footer__legal a:hover { color: var(--cream-400); }

        @media (max-width: 640px) {
          .footer__inner { flex-direction: column; gap: 36px; }
          .footer__links { gap: 32px; }
          .footer__bottom { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
