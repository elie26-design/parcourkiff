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
      '1 appel avec un alumni (30 min)',
    ],
  },
  {
    name: 'Premium',
    price: '190',
    popular: true,
    features: [
      'Tout le pack Essentiel',
      'Rédaction personnalisée de tes lettres de motivation',
      'Par un expert en orientation',
      'Jusqu\'à 8 lettres accompagnées',
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
          background: var(--cream-50);
          border-radius: var(--radius-xl);
          border: 2px solid var(--cream-300);
          position: relative;
          transition: all 0.3s;
        }
        .pack-card:hover {
          border-color: var(--cream-400);
          box-shadow: 0 8px 32px rgba(0,0,0,0.06);
          transform: translateY(-2px);
        }
        .pack-card--popular {
          border-color: var(--sage-600);
          box-shadow: 0 12px 48px rgba(74,122,74,0.12);
          transform: scale(1.03);
          background: white;
        }
        .pack-card--popular:hover {
          box-shadow: 0 16px 56px rgba(74,122,74,0.18);
        }
        .pack-popular-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          padding: 7px 20px;
          background: var(--sage-600);
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
          color: var(--sage-600);
          font-family: var(--font-display);
          line-height: 1;
          letter-spacing: -2px;
        }
        .pack-price__cur {
          font-size: 22px;
          font-weight: 600;
          color: var(--sage-600);
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
          border-bottom: 1px solid var(--cream-200);
          line-height: 1.4;
        }
        .pack-check {
          color: var(--sage-600);
          flex-shrink: 0;
        }
        .pack-btn {
          width: 100%;
          padding: 15px 24px;
          border-radius: var(--radius-md);
          font-size: 15px;
          font-weight: 600;
          transition: all 0.2s;
          cursor: pointer;
          font-family: var(--font-body);
        }
        .pack-btn--primary {
          background: var(--sage-600);
          color: white;
          border: none;
          box-shadow: 0 4px 16px rgba(74,122,74,0.25);
        }
        .pack-btn--primary:hover {
          background: var(--sage-700);
          transform: translateY(-1px);
        }
        .pack-btn--outline {
          background: transparent;
          color: var(--sage-600);
          border: 2px solid var(--sage-600);
        }
        .pack-btn--outline:hover {
          background: var(--sage-50);
        }

        @media (max-width: 640px) {
          .pack-card--popular { transform: none; }
          .packs-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
