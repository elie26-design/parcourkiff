// src/components/Packs.jsx

const packs = [
  {
    name: 'Essentiel',
    price: '150',
    popular: false,
    features: [
      'QCM d\'orientation IA',
      'Explorateur de parcours IA',
      'Coach IA illimité',
      '1 appel avec un alumni de la formation de TON choix',
    ],
  },
  {
    name: 'Premium',
    price: '190',
    popular: true,
    features: [
      'Tout le pack Essentiel',
      'rédaction de 5 lettres de motivations personnalisées',
      'Relecture humaine par un alumni',
    ],
  },
  {
    name: 'Intégral',
    price: '260',
    popular: false,
    features: [
      'Tout le pack Premium',
      '2 appels alumni personnalisés',
      '1 session coach d\'orientation',
      'Suivi personnalisé complet',
      'Toutes tes lettres de motivation personnalisées et modifiables a volonté',
    ],
  },
];

export default function Packs() {
  return (
    <section className="packs-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Nos offres</span>
          <h2 className="section-title">Choisis ton accompagnement</h2>
          <p className="section-sub">Chaque pack inclut l'accès aux outils IA + un accompagnement humain.</p>
        </div>

        <div className="packs-grid">
          {packs.map((p, i) => (
            <div key={i} className={`pack-card ${p.popular ? 'pack-card--popular' : ''}`}>
              {p.popular && <div className="pack-popular-badge">★ Le plus choisi</div>}
              <h3 className="pack-name">{p.name}</h3>
              <div className="pack-price">
                <span className="pack-price__num">{p.price}</span>
                <span className="pack-price__cur">€</span>
              </div>
              <ul className="pack-features">
                {p.features.map((f, j) => (
                  <li key={j} className="pack-feature">
                    <svg className="pack-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`pack-btn ${p.popular ? 'pack-btn--primary' : 'pack-btn--outline'}`}>
                Choisir ce pack
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .packs-section {
          padding: 100px 0;
        }
        .packs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: 24px;
          max-width: 960px;
          margin: 0 auto;
        }
        .pack-card {
          padding: 40px 36px;
          background: white;
          border-radius: var(--radius-xl);
          border: 2px solid var(--slate-200);
          position: relative;
          transition: all 0.3s;
        }
        .pack-card:hover {
          border-color: var(--slate-300);
          box-shadow: 0 8px 32px rgba(0,0,0,0.06);
        }
        .pack-card--popular {
          border-color: var(--blue-600);
          box-shadow: 0 12px 48px rgba(37,99,235,0.15);
          transform: scale(1.03);
        }
        .pack-card--popular:hover {
          box-shadow: 0 16px 56px rgba(37,99,235,0.2);
        }
        .pack-popular-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          padding: 7px 20px;
          background: var(--blue-600);
          color: white;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
          letter-spacing: 0.3px;
        }
        .pack-name {
          font-size: 20px;
          font-weight: 600;
          color: var(--slate-900);
          margin-bottom: 20px;
        }
        .pack-price {
          display: flex;
          align-items: flex-start;
          gap: 3px;
          margin-bottom: 32px;
        }
        .pack-price__num {
          font-size: 56px;
          font-weight: 700;
          color: var(--blue-600);
          font-family: var(--font-display);
          line-height: 1;
          letter-spacing: -2px;
        }
        .pack-price__cur {
          font-size: 22px;
          font-weight: 600;
          color: var(--blue-600);
          margin-top: 10px;
        }
        .pack-features {
          list-style: none;
          margin-bottom: 32px;
        }
        .pack-feature {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: var(--slate-600);
          padding: 12px 0;
          border-bottom: 1px solid var(--slate-100);
          line-height: 1.4;
        }
        .pack-check {
          color: var(--blue-600);
          flex-shrink: 0;
        }
        .pack-btn {
          width: 100%;
          padding: 15px 24px;
          border-radius: var(--radius-md);
          font-size: 15px;
          font-weight: 600;
          transition: all 0.2s;
        }
        .pack-btn--primary {
          background: var(--blue-600);
          color: white;
          box-shadow: 0 4px 16px rgba(37,99,235,0.25);
        }
        .pack-btn--primary:hover {
          background: var(--blue-700);
          transform: translateY(-1px);
        }
        .pack-btn--outline {
          background: transparent;
          color: var(--blue-600);
          border: 2px solid var(--blue-600);
        }
        .pack-btn--outline:hover {
          background: var(--blue-50);
        }

        @media (max-width: 640px) {
          .pack-card--popular { transform: none; }
          .packs-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
