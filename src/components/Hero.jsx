// src/components/Hero.jsx

export default function Hero({ setActiveSection }) {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__grain" />

      <div className="hero__content fade-up">
        <div className="hero__badge">✦ Ton avenir commence ici</div>
        <h1 className="hero__title">
          Trouve ta voie.<br />
          <span className="hero__title-accent">Kiffe ton parcours.</span>
        </h1>
        <p className="hero__sub">
          L'accompagnement Parcoursup nouvelle génération : coach IA + mentors qui ont vécu ce que tu vis.
        </p>
        <div className="hero__buttons">
          <button className="btn btn--primary btn--lg" onClick={() => setActiveSection('outils')}>
            Découvrir les outils IA
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
          <button className="btn btn--outline btn--lg" onClick={() => setActiveSection('packs')}>
            Voir les packs
          </button>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">3</span>
            <span className="hero__stat-label">Outils IA</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">150+</span>
            <span className="hero__stat-label">Alumni mentors</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">98%</span>
            <span className="hero__stat-label">Satisfaction</span>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 94vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .hero__bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 20% 20%, var(--cream-200) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, var(--sage-50) 0%, transparent 45%),
            radial-gradient(ellipse at 50% 50%, var(--cream-50) 0%, var(--cream-50) 100%);
        }
        .hero__grain {
          position: absolute; inset: 0;
          opacity: 0.3;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
        }
        .hero__content {
          position: relative;
          text-align: center;
          max-width: 720px;
          padding: 0 24px;
        }
        .hero__badge {
          display: inline-block;
          padding: 7px 18px;
          background: var(--sage-50);
          color: var(--sage-700);
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 28px;
          letter-spacing: 0.3px;
          border: 1px solid var(--sage-200);
        }
        .hero__title {
          font-family: var(--font-display);
          font-size: clamp(42px, 7vw, 76px);
          line-height: 1.03;
          font-weight: 400;
          color: var(--slate-900);
          margin-bottom: 22px;
          letter-spacing: -1.5px;
        }
        .hero__title-accent {
          color: var(--sage-600);
          font-style: italic;
        }
        .hero__sub {
          font-size: 18px;
          color: var(--slate-500);
          line-height: 1.65;
          margin-bottom: 40px;
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
        }
        .hero__buttons {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 56px;
        }
        .hero__stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 36px;
        }
        .hero__stat {
          display: flex;
          flex-direction: column;
        }
        .hero__stat-num {
          font-size: 30px;
          font-weight: 700;
          color: var(--sage-600);
          font-family: var(--font-display);
        }
        .hero__stat-label {
          font-size: 13px;
          color: var(--slate-400);
          font-weight: 500;
        }
        .hero__stat-divider {
          width: 1px;
          height: 40px;
          background: var(--cream-300);
        }

        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          border-radius: var(--radius-md);
          transition: all 0.2s;
          font-size: 15px;
        }
        .btn--lg { padding: 15px 30px; }
        .btn--primary {
          background: var(--sage-600);
          color: white;
          box-shadow: 0 4px 20px rgba(74,122,74,0.25);
          position: relative;
          overflow: hidden;
        }
        .btn--primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .btn--primary:hover::after {
          transform: translateX(100%);
        }
        .btn--primary:hover {
          background: var(--sage-700);
          box-shadow: 0 6px 28px rgba(74,122,74,0.35);
          transform: translateY(-1px);
        }
        .btn--outline {
          background: transparent;
          color: var(--slate-800);
          border: 2px solid var(--cream-300);
        }
        .btn--outline:hover {
          border-color: var(--cream-400);
          background: var(--cream-100);
        }

        @media (max-width: 640px) {
          .hero__stats { gap: 20px; }
          .hero__stat-num { font-size: 24px; }
          .hero__buttons { flex-direction: column; align-items: center; }
          .btn--lg { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
}
