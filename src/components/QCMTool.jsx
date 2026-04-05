// src/components/QCMTool.jsx
import { useState } from 'react';
import { askClaude } from '../lib/api';

// ─── QUESTIONS DU QCM ───
// type: "single" = une seule réponse possible
// type: "multi" = plusieurs réponses possibles (cases à cocher)
const questions = [
  {
    q: "Quelles sont tes spécialités en Terminale ?",
    type: "multi",
    opts: [
      "Mathématiques",
      "Physique-Chimie",
      "SES",
      "NSI / SI",
      "SVT",
      "HGGSP",
      "HLP",
      "LLCE",
      "Arts",
      "Maths complémentaires",
      "Maths expertes",
      "Autres",
    ],
  },
  {
    q: "Quelle est ta moyenne générale ?",
    type: "single",
    opts: [
      "Au-dessus de 16",
      "Entre 13 et 16",
      "Entre 10 et 12,5",
      "Entre 7 et 10",
      "En dessous de 7",
    ],
  },
  {
    q: "Ce dans quoi tu es le plus à l'aise :",
    type: "single",
    opts: [
      "Raisonnement logique / calcul",
      "Analyse économique / sociale",
      "Expression écrite / argumentation",
      "Informatique / technique",
    ],
  },
  {
    q: "Ce que tu préfères faire :",
    type: "single",
    opts: [
      "Résoudre des problèmes",
      "Comprendre le monde",
      "Débattre / convaincre",
      "Créer / coder",
    ],
  },
  {
    q: "Ce qui t'attire le plus :",
    type: "single",
    opts: [
      "Sciences / ingénierie",
      "Business / finance",
      "Droit / politique",
      "Informatique / tech",
      "Je ne sais pas encore et je suis là pour ça",
    ],
  },
  {
    q: "Ton rapport à la pression :",
    type: "single",
    opts: [
      "Je performe sous pression",
      "Ça va, je gère",
      "J'évite quand je peux",
      "Je bloque",
    ],
  },
  {
    q: "Préfères-tu :",
    type: "single",
    opts: [
      "La sécurité de l'emploi",
      "Un salaire élevé",
      "Suivre ma passion",
      "L'équilibre de vie",
    ],
  },
  {
    q: "Ce qui te motive le plus :",
    type: "single",
    opts: [
      "Réussir et être reconnu(e)",
      "Gagner de l'argent",
      "Faire quelque chose qui a du sens",
      "Prendre du plaisir au quotidien",
    ],
  },
  {
    q: "Tu es plutôt :",
    type: "single",
    opts: [
      "Organisé(e)",
      "Adaptable",
      "Spontané(e)",
      "Désorganisé(e)",
    ],
  },
  {
    q: "Qu'est-ce qui te motive le plus dans tes études ?",
    type: "single",
    opts: [
      "Aider les autres",
      "Créer et innover",
      "Analyser et comprendre",
      "Organiser et gérer",
    ],
  },
  {
    q: "Quel environnement de travail te correspond ?",
    type: "single",
    opts: [
      "En équipe, au contact des gens",
      "Seul·e, concentré·e",
      "En extérieur / sur le terrain",
      "En labo / devant un écran",
    ],
  },
  {
    q: "Tu te vois plutôt faire des études :",
    type: "single",
    opts: [
      "Courtes (2-3 ans, vite opérationnel)",
      "Longues (5 ans+, expertise)",
      "En alternance (théorie + pratique)",
      "Je ne sais pas encore",
    ],
  },
  {
    q: "Quel type de défi t'attire ?",
    type: "single",
    opts: [
      "Résoudre des problèmes complexes",
      "Convaincre et communiquer",
      "Construire quelque chose de concret",
      "Prendre soin des autres",
    ],
  },
  {
    q: "Tu préfères travailler sur :",
    type: "single",
    opts: [
      "Des projets concrets avec des résultats visibles",
      "Des idées abstraites et de la réflexion",
      "Des relations humaines et du contact",
      "Des données et de l'analyse",
    ],
  },
  {
    q: "Dans un projet de groupe, tu es plutôt celui/celle qui :",
    type: "single",
    opts: [
      "Organise et planifie",
      "Trouve les idées",
      "Motive l'équipe",
      "Fait le travail technique",
    ],
  },
  {
    q: "Ton rapport à la créativité :",
    type: "single",
    opts: [
      "C'est essentiel pour moi",
      "J'aime bien mais c'est pas prioritaire",
      "Je préfère le cadre et la rigueur",
      "Ça dépend du contexte",
    ],
  },
  {
    q: "Géographiquement, tu te vois étudier :",
    type: "single",
    opts: [
      "Près de chez moi",
      "Dans une grande ville",
      "Peu importe, je suis mobile",
      "Pourquoi pas à l'étranger",
    ],
  },
  {
    q: "Quel budget études tu envisages ?",
    type: "single",
    opts: [
      "Le moins possible (public)",
      "Raisonnable (jusqu'à 3000€/an)",
      "Pas de limite si la formation est bonne",
      "Je veux être rémunéré(e) (alternance)",
    ],
  },
];

// ─── PROMPT SYSTÈME ───
const SYSTEM_PROMPT = `Tu es un conseiller d'orientation expert pour les lycéens français qui passent par Parcoursup.

L'élève a répondu à un QCM détaillé. Analyse l'ensemble de ses réponses (spécialités, moyenne, compétences, motivations, personnalité, préférences) et propose-lui 3 à 5 DOMAINES D'ÉTUDES adaptés à son profil.

Pour chaque domaine proposé :
1. Nomme clairement le domaine (ex : "Informatique & Numérique", "Droit & Sciences Politiques")
2. Explique en 2-3 phrases POURQUOI ça correspond à son profil en t'appuyant sur ses réponses
3. Donne 2-3 exemples de formations concrètes disponibles sur Parcoursup

Règles :
- Sois enthousiaste et bienveillant, tu parles à un lycéen
- Sois réaliste par rapport à sa moyenne et ses spécialités
- Si l'élève a une moyenne faible, ne le décourage pas mais oriente vers des formations adaptées (BTS, BUT)
- Si l'élève a répondu "je ne sais pas", explore large et propose des domaines variés
- Si les spécialités sont scientifiques, privilégie les domaines scientifiques mais propose aussi des alternatives
- Termine par un petit message d'encouragement

Réponds en français.`;

// ─── COMPOSANT ───
export default function QCMTool() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [multiSelected, setMultiSelected] = useState([]);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const current = questions[step];

  const handleSingleAnswer = async (opt) => {
    const newAnswers = [...answers, { q: current.q, a: opt }];
    setAnswers(newAnswers);
    advanceOrSubmit(newAnswers);
  };

  const toggleMulti = (opt) => {
    setMultiSelected((prev) =>
      prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]
    );
  };

  const submitMulti = () => {
    if (multiSelected.length === 0) return;
    const newAnswers = [...answers, { q: current.q, a: multiSelected.join(', ') }];
    setAnswers(newAnswers);
    setMultiSelected([]);
    advanceOrSubmit(newAnswers);
  };

  const advanceOrSubmit = async (newAnswers) => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setLoading(true);
      const msg = newAnswers.map((a) => `Q: ${a.q}\nR: ${a.a}`).join('\n\n');
      const res = await askClaude(SYSTEM_PROMPT, `Voici les réponses au QCM d'orientation :\n\n${msg}`);
      setResult(res);
      setLoading(false);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setMultiSelected([]);
    setResult('');
  };

  // ─── LOADING ───
  if (loading) {
    return (
      <div className="tool-card fade-in">
        <div className="tool-loading">
          <div className="tool-spinner" />
          <p>L'IA analyse ton profil...</p>
        </div>
      </div>
    );
  }

  // ─── RÉSULTATS ───
  if (result) {
    return (
      <div className="tool-card fade-up">
        <div className="tool-header">
          <div className="tool-header__icon tool-header__icon--blue">🧭</div>
          <h3 className="tool-header__title">Tes résultats d'orientation</h3>
        </div>
        <div className="result-box">
          {result.split('\n').map((line, i) => (
            <p key={i} className="result-line">{line || '\u00A0'}</p>
          ))}
        </div>
        <button className="btn-tool-reset" onClick={reset}>Recommencer le QCM</button>
      </div>
    );
  }

  // ─── QUESTIONS ───
  return (
    <div className="tool-card fade-up">
      <div className="tool-header">
        <div className="tool-header__icon tool-header__icon--blue">🧭</div>
        <h3 className="tool-header__title">QCM d'Orientation</h3>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${((step + 1) / questions.length) * 100}%` }} />
      </div>
      <p className="progress-text">Question {step + 1} sur {questions.length}</p>

      <h4 className="question-text">{current.q}</h4>

      {current.type === 'multi' ? (
        <>
          <p className="multi-hint">Sélectionne toutes tes spécialités puis clique sur Valider</p>
          <div className="options-grid">
            {current.opts.map((opt, i) => (
              <button
                key={i}
                className={`option-btn ${multiSelected.includes(opt) ? 'option-btn--selected' : ''}`}
                onClick={() => toggleMulti(opt)}
              >
                <span className="option-check">{multiSelected.includes(opt) ? '✓' : ''}</span>
                {opt}
              </button>
            ))}
          </div>
          <button
            className="btn-validate"
            onClick={submitMulti}
            disabled={multiSelected.length === 0}
            style={{ opacity: multiSelected.length === 0 ? 0.5 : 1 }}
          >
            Valider ({multiSelected.length} sélectionné{multiSelected.length > 1 ? 's' : ''})
          </button>
        </>
      ) : (
        <div className={`options-grid ${current.opts.length === 5 ? 'options-grid--odd' : ''}`}>
          {current.opts.map((opt, i) => (
            <button key={i} className="option-btn" onClick={() => handleSingleAnswer(opt)}>
              {opt}
            </button>
          ))}
        </div>
      )}

      <style>{`
        .multi-hint {
          font-size: 13px;
          color: var(--slate-400);
          margin-bottom: 16px;
          font-style: italic;
        }
        .option-btn--selected {
          border-color: var(--blue-500) !important;
          background: var(--blue-50) !important;
          color: var(--blue-700) !important;
        }
        .option-check {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 4px;
          border: 2px solid var(--slate-300);
          margin-right: 10px;
          font-size: 12px;
          font-weight: 700;
          color: var(--blue-600);
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .option-btn--selected .option-check {
          border-color: var(--blue-500);
          background: var(--blue-500);
          color: white;
        }
        .btn-validate {
          width: 100%;
          margin-top: 16px;
          padding: 15px 24px;
          background: var(--blue-600);
          color: white;
          border: none;
          border-radius: var(--radius-md);
          font-size: 15px;
          font-weight: 600;
          font-family: var(--font-body);
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-validate:hover:not(:disabled) {
          background: var(--blue-700);
          transform: translateY(-1px);
        }
        .options-grid--odd {
          grid-template-columns: 1fr 1fr;
        }
        .options-grid--odd > :last-child {
          grid-column: 1 / -1;
        }
      `}</style>
    </div>
  );
}