// src/components/ExplorerTool.jsx
import { useState } from 'react';
import { askClaude } from '../lib/api';

const SYSTEM_PROMPT = `Tu es un expert de l'orientation post-bac en France. L'élève te dit ce qu'il veut faire plus tard. Tu dois lui présenter TOUS les chemins d'accès possibles pour y arriver : les différentes formations (BTS, BUT, Licence, Prépa, Écoles post-bac, etc.), les avantages et inconvénients de chaque voie, la durée, la sélectivité, et les passerelles possibles. Sois structuré, concret et bienveillant. Mentionne des formations réelles disponibles sur Parcoursup. Réponds en français et tout ca sous une forme de bullet point, juste une liste des formation, leur durée, leur débouchés.`;

export default function ExplorerTool() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!query.trim()) return;
    setLoading(true);
    const res = await askClaude(SYSTEM_PROMPT, `Je veux devenir / travailler dans : ${query}`);
    setResult(res);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="tool-card fade-in">
        <div className="tool-loading">
          <div className="tool-spinner" />
          <p>Recherche des parcours possibles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="tool-card fade-up">
      <div className="tool-header">
        <div className="tool-header__icon tool-header__icon--indigo">🗺️</div>
        <h3 className="tool-header__title">Explorateur de Parcours</h3>
      </div>

      <p className="tool-desc">
        Dis-nous ce que tu veux faire plus tard, on te montre tous les chemins pour y arriver.
      </p>

      <div className="input-row">
        <input
          className="text-input"
          placeholder="Ex : architecte, marketing, médecin, game designer..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />
        <button className="btn-send" onClick={handleSubmit}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>

      {result && (
        <>
          <div className="result-box">
            {result.split('\n').map((line, i) => (
              <p key={i} className="result-line">{line || '\u00A0'}</p>
            ))}
          </div>
          <button className="btn-tool-reset" onClick={() => { setResult(''); setQuery(''); }}>
            Nouvelle recherche
          </button>
        </>
      )}
    </div>
  );
}
