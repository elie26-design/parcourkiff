// src/components/LettreTool.jsx
import { useState } from 'react';
import { askClaude } from '../lib/api';

const steps = [
  { key: 'formation', label: 'Quelle formation vises-tu ?', placeholder: "Ex : BUT Informatique à l'IUT de Lyon" },
  { key: 'pourquoi', label: 'Pourquoi cette formation t\'intéresse ?', placeholder: 'Raconte avec tes mots, sois sincère...' },
  { key: 'experiences', label: 'Quelles expériences en lien as-tu ? (stages, projets, hobbies…)', placeholder: "Ex : j'ai créé un site web pour l'asso de mon lycée..." },
  { key: 'qualites', label: 'Quelles sont tes 3 principales qualités ?', placeholder: 'Ex : curieux, persévérant, créatif...' },
  { key: 'projet', label: 'Quel est ton projet professionnel ?', placeholder: 'Ex : devenir développeur dans une startup tech...' },
];

const SYSTEM_PROMPT = `Tu es un coach expert en rédaction de lettres de motivation pour Parcoursup. À partir des informations fournies par l'élève, aide-le à structurer sa lettre de motivation.

RÈGLES IMPORTANTES :
- Ne rédige PAS la lettre à sa place. Propose un BROUILLON structuré que l'élève devra personnaliser
- Garde le registre de langue d'un lycéen (pas trop soutenu)
- Ne jamais inventer d'expériences — utilise UNIQUEMENT ce que l'élève a dit
- Structure : Accroche → Parcours et motivations → Expériences en lien → Qualités → Projet professionnel → Conclusion
- Ajoute des CONSEILS entre crochets [conseil] pour aider l'élève à améliorer chaque partie
- Maximum 1500 caractères (contrainte Parcoursup)
Réponds en français.`;

export default function LettreTool() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ formation: '', pourquoi: '', experiences: '', qualites: '', projet: '' });
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNext = async () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setLoading(true);
      const msg = `Formation visée : ${data.formation}\nPourquoi cette formation : ${data.pourquoi}\nExpériences : ${data.experiences}\nQualités : ${data.qualites}\nProjet pro : ${data.projet}`;
      const res = await askClaude(SYSTEM_PROMPT, msg);
      setResult(res);
      setLoading(false);
    }
  };

  const reset = () => {
    setStep(0);
    setData({ formation: '', pourquoi: '', experiences: '', qualites: '', projet: '' });
    setResult('');
  };

  if (loading) {
    return (
      <div className="tool-card fade-in">
        <div className="tool-loading">
          <div className="tool-spinner" />
          <p>Préparation de ton brouillon...</p>
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <div className="tool-card fade-up">
        <div className="tool-header">
          <div className="tool-header__icon tool-header__icon--emerald">✍️</div>
          <h3 className="tool-header__title">Ton brouillon de lettre</h3>
        </div>
        <div className="result-box">
          {result.split('\n').map((line, i) => (
            <p key={i} className="result-line">{line || '\u00A0'}</p>
          ))}
        </div>
        <div className="lettre-disclaimer">
          ⚠️ Ceci est un brouillon. Personnalise-le avec tes propres mots avant de le soumettre sur Parcoursup.
        </div>
        <button className="btn-tool-reset" onClick={reset}>Nouvelle lettre</button>
      </div>
    );
  }

  const current = steps[step];

  return (
    <div className="tool-card fade-up">
      <div className="tool-header">
        <div className="tool-header__icon tool-header__icon--emerald">✍️</div>
        <h3 className="tool-header__title">Coach Lettre de Motivation</h3>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
      </div>
      <p className="progress-text">Étape {step + 1} sur {steps.length}</p>

      <h4 className="question-text">{current.label}</h4>

      <textarea
        className="text-area"
        placeholder={current.placeholder}
        value={data[current.key]}
        onChange={(e) => setData({ ...data, [current.key]: e.target.value })}
        rows={4}
      />

      <div className="step-buttons">
        {step > 0 && (
          <button className="btn btn--outline btn--sm" onClick={() => setStep(step - 1)}>
            ← Retour
          </button>
        )}
        <button
          className="btn btn--primary btn--sm"
          onClick={handleNext}
          disabled={!data[current.key].trim()}
          style={{ opacity: data[current.key].trim() ? 1 : 0.5 }}
        >
          {step === steps.length - 1 ? 'Générer le brouillon' : 'Suivant →'}
        </button>
      </div>
    </div>
  );
}
