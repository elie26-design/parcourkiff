// src/components/CalendrierTool.jsx
import { useState, useEffect } from 'react';

// ─── DATES CLÉS PARCOURSUP 2026 ───
// Mets à jour ces dates chaque année
const events = [
  {
    id: 1,
    date: "2025-12-18",
    endDate: null,
    title: "Ouverture du site Parcoursup",
    desc: "Tu peux consulter les formations disponibles et commencer tes recherches.",
    icon: "🔓",
    category: "info",
  },
  {
    id: 2,
    date: "2026-01-15",
    endDate: "2026-03-13",
    title: "Inscription & formulation des vœux",
    desc: "Tu peux t'inscrire et formuler jusqu'à 10 vœux (et 20 sous-vœux). L'ordre n'a pas d'importance.",
    icon: "📝",
    category: "action",
  },
  {
    id: 3,
    date: "2026-03-13",
    endDate: null,
    title: "Date limite des vœux",
    desc: "Dernier jour pour ajouter des vœux. Après cette date, tu ne peux plus en ajouter.",
    icon: "⚠️",
    category: "deadline",
  },
  {
    id: 4,
    date: "2026-03-14",
    endDate: "2026-04-02",
    title: "Finalisation du dossier",
    desc: "Complète tes lettres de motivation (projet de formation motivé) et confirme tes vœux.",
    icon: "✍️",
    category: "action",
  },
  {
    id: 5,
    date: "2026-04-02",
    endDate: null,
    title: "Date limite de confirmation",
    desc: "Dernier jour pour finaliser ton dossier et confirmer tes vœux. Rien ne peut être modifié après.",
    icon: "🔒",
    category: "deadline",
  },
  {
    id: 6,
    date: "2026-06-05",
    endDate: "2026-07-11",
    title: "Phase d'admission principale",
    desc: "Tu reçois les réponses des formations. Tu peux accepter, refuser ou rester en attente.",
    icon: "📬",
    category: "result",
  },
  {
    id: 7,
    date: "2026-06-16",
    endDate: null,
    title: "Pause bac",
    desc: "Les délais de réponse sont suspendus pendant les épreuves du bac.",
    icon: "📚",
    category: "info",
  },
  {
    id: 8,
    date: "2026-07-11",
    endDate: null,
    title: "Fin de la phase principale",
    desc: "Dernier jour pour accepter une proposition d'admission.",
    icon: "🏁",
    category: "deadline",
  },
  {
    id: 9,
    date: "2026-07-12",
    endDate: "2026-09-10",
    title: "Phase complémentaire",
    desc: "Si tu n'as pas de place, tu peux formuler de nouveaux vœux sur les formations ayant encore des places.",
    icon: "🔄",
    category: "action",
  },
];

// ─── HELPERS ───
function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function formatDateShort(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
}

function getDaysUntil(dateStr) {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const target = new Date(dateStr + 'T00:00:00');
  const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
  return diff;
}

function getStatus(event) {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const start = new Date(event.date + 'T00:00:00');
  const end = event.endDate ? new Date(event.endDate + 'T00:00:00') : start;

  if (now < start) return 'upcoming';
  if (now > end) return 'past';
  return 'active';
}

function getNextDeadline() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return events.find(e => {
    const d = new Date(e.date + 'T00:00:00');
    return d >= now && (e.category === 'deadline' || e.category === 'action');
  });
}

// ─── COMPOSANT ───
export default function CalendrierTool() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [now, setNow] = useState(new Date());

  // Mise à jour du compte à rebours chaque minute
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const nextDeadline = getNextDeadline();
  const daysUntil = nextDeadline ? getDaysUntil(nextDeadline.date) : null;

  const categoryColors = {
    info: { bg: '#EFF6FF', border: '#BFDBFE', text: '#1E40AF' },
    action: { bg: '#F0FDF4', border: '#BBF7D0', text: '#166534' },
    deadline: { bg: '#FEF2F2', border: '#FECACA', text: '#991B1B' },
    result: { bg: '#FFF7ED', border: '#FED7AA', text: '#9A3412' },
  };

  return (
    <div className="tool-card fade-up">
      <div className="tool-header">
        <div className="tool-header__icon tool-header__icon--blue">📅</div>
        <h3 className="tool-header__title">Calendrier Parcoursup 2026</h3>
      </div>

      {/* Compte à rebours */}
      {nextDeadline && daysUntil >= 0 && (
        <div className="cal-countdown">
          <div className="cal-countdown__days">
            <span className="cal-countdown__num">{daysUntil}</span>
            <span className="cal-countdown__label">jour{daysUntil > 1 ? 's' : ''}</span>
          </div>
          <div className="cal-countdown__info">
            <span className="cal-countdown__title">avant : {nextDeadline.title}</span>
            <span className="cal-countdown__date">{formatDate(nextDeadline.date)}</span>
          </div>
        </div>
      )}

      {/* Légende */}
      <div className="cal-legend">
        <span className="cal-legend__item"><span className="cal-dot cal-dot--info" /> Info</span>
        <span className="cal-legend__item"><span className="cal-dot cal-dot--action" /> Action requise</span>
        <span className="cal-legend__item"><span className="cal-dot cal-dot--deadline" /> Date limite</span>
        <span className="cal-legend__item"><span className="cal-dot cal-dot--result" /> Résultats</span>
      </div>

      {/* Timeline */}
      <div className="cal-timeline">
        {events.map((event, i) => {
          const status = getStatus(event);
          const colors = categoryColors[event.category];
          const isSelected = selectedEvent === event.id;
          const days = getDaysUntil(event.date);

          return (
            <div
              key={event.id}
              className={`cal-event cal-event--${status} ${isSelected ? 'cal-event--selected' : ''}`}
              onClick={() => setSelectedEvent(isSelected ? null : event.id)}
            >
              {/* Ligne de connexion */}
              {i < events.length - 1 && (
                <div className={`cal-line cal-line--${status}`} />
              )}

              {/* Point sur la timeline */}
              <div
                className={`cal-point cal-point--${status}`}
                style={{
                  borderColor: colors.border,
                  backgroundColor: status === 'active' ? colors.text : status === 'past' ? '#CBD5E1' : 'white',
                }}
              />

              {/* Contenu */}
              <div className="cal-event__content">
                <div className="cal-event__top">
                  <span className="cal-event__icon">{event.icon}</span>
                  <div className="cal-event__header">
                    <span className="cal-event__title">{event.title}</span>
                    <span className="cal-event__date">
                      {formatDateShort(event.date)}
                      {event.endDate && ` → ${formatDateShort(event.endDate)}`}
                    </span>
                  </div>
                  {status === 'upcoming' && days > 0 && days <= 60 && (
                    <span
                      className="cal-event__badge"
                      style={{ background: colors.bg, color: colors.text, borderColor: colors.border }}
                    >
                      J-{days}
                    </span>
                  )}
                  {status === 'active' && (
                    <span className="cal-event__badge cal-event__badge--active">
                      En cours
                    </span>
                  )}
                  {status === 'past' && (
                    <span className="cal-event__badge cal-event__badge--past">
                      ✓ Passé
                    </span>
                  )}
                </div>

                {/* Description dépliable */}
                {isSelected && (
                  <div className="cal-event__desc fade-in">
                    <p>{event.desc}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="cal-footer">
        Clique sur un événement pour voir les détails. Dates basées sur le calendrier officiel Parcoursup.
      </p>

      <style>{`
        /* Countdown */
        .cal-countdown {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px 24px;
          background: linear-gradient(135deg, var(--blue-600), #4F46E5);
          border-radius: var(--radius-lg);
          margin-bottom: 24px;
          color: white;
        }
        .cal-countdown__days {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 72px;
          padding: 8px 16px;
          background: rgba(255,255,255,0.15);
          border-radius: var(--radius-md);
        }
        .cal-countdown__num {
          font-size: 36px;
          font-weight: 700;
          font-family: var(--font-display);
          line-height: 1;
        }
        .cal-countdown__label {
          font-size: 12px;
          opacity: 0.8;
          font-weight: 500;
        }
        .cal-countdown__info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .cal-countdown__title {
          font-size: 15px;
          font-weight: 600;
        }
        .cal-countdown__date {
          font-size: 13px;
          opacity: 0.75;
        }

        /* Legend */
        .cal-legend {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 28px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--slate-100);
        }
        .cal-legend__item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: var(--slate-500);
          font-weight: 500;
        }
        .cal-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .cal-dot--info { background: #1E40AF; }
        .cal-dot--action { background: #166534; }
        .cal-dot--deadline { background: #991B1B; }
        .cal-dot--result { background: #9A3412; }

        /* Timeline */
        .cal-timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
          margin-bottom: 24px;
        }
        .cal-event {
          display: flex;
          gap: 16px;
          padding: 14px 16px;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
        }
        .cal-event:hover {
          background: var(--slate-50);
        }
        .cal-event--selected {
          background: var(--slate-50) !important;
        }
        .cal-event--past {
          opacity: 0.55;
        }
        .cal-event--past:hover {
          opacity: 0.8;
        }

        /* Line connecting dots */
        .cal-line {
          position: absolute;
          left: 30px;
          top: 42px;
          bottom: -14px;
          width: 2px;
          background: var(--slate-200);
        }
        .cal-line--active {
          background: var(--blue-300);
        }
        .cal-line--past {
          background: var(--slate-200);
        }

        /* Point */
        .cal-point {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 3px solid var(--slate-300);
          flex-shrink: 0;
          margin-top: 4px;
          z-index: 1;
          transition: all 0.2s;
        }
        .cal-event--active .cal-point {
          box-shadow: 0 0 0 4px rgba(37,99,235,0.15);
        }

        /* Content */
        .cal-event__content {
          flex: 1;
          min-width: 0;
        }
        .cal-event__top {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .cal-event__icon {
          font-size: 18px;
          flex-shrink: 0;
        }
        .cal-event__header {
          flex: 1;
          min-width: 0;
        }
        .cal-event__title {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: var(--slate-900);
          line-height: 1.3;
        }
        .cal-event__date {
          display: block;
          font-size: 12px;
          color: var(--slate-400);
          margin-top: 2px;
        }

        /* Badges */
        .cal-event__badge {
          flex-shrink: 0;
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 600;
          border: 1px solid;
          white-space: nowrap;
        }
        .cal-event__badge--active {
          background: #DBEAFE;
          color: #1E40AF;
          border-color: #93C5FD;
          animation: pulse 2s ease-in-out infinite;
        }
        .cal-event__badge--past {
          background: var(--slate-100);
          color: var(--slate-400);
          border-color: var(--slate-200);
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        /* Description */
        .cal-event__desc {
          margin-top: 10px;
          padding: 12px 16px;
          background: white;
          border-radius: var(--radius-sm);
          border: 1px solid var(--slate-200);
        }
        .cal-event__desc p {
          font-size: 13px;
          color: var(--slate-600);
          line-height: 1.6;
        }

        /* Footer */
        .cal-footer {
          font-size: 12px;
          color: var(--slate-400);
          text-align: center;
          font-style: italic;
        }

        @media (max-width: 640px) {
          .cal-countdown { flex-direction: column; text-align: center; }
          .cal-legend { gap: 10px; }
          .cal-event__top { flex-wrap: wrap; }
        }
      `}</style>
    </div>
  );
}
