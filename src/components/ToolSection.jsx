// src/components/ToolSection.jsx
import { useState } from 'react';
import QCMTool from './QCMTool';
import ExplorerTool from './ExplorerTool';
import CalendrierTool from './CalendrierTool';


const tools = [
  { id: 'qcm', icon: '🧭', label: 'QCM Orientation', desc: 'Découvre les études faites pour toi' },
  { id: 'explorer', icon: '🗺️', label: 'Explorateur Parcours', desc: 'Trouve les chemins vers ton métier' },
  { id: 'calendrier', icon: '📅', label: 'Calendrier Parcoursup', desc: 'Les dates clés et ton compte à rebours' },
];

export default function ToolSection() {
  const [activeTool, setActiveTool] = useState('qcm');

  const renderTool = () => {
    switch (activeTool) {
      case 'qcm': return <QCMTool />;
      case 'explorer': return <ExplorerTool />;
      case 'calendrier': return <CalendrierTool />;
      default: return null;
    }
  };

  return (
    <section className="tools-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Outils IA</span>
          <h2 className="section-title">Tes 3 outils pour réussir Parcoursup</h2>
          <p className="section-sub">Propulsés par l'intelligence artificielle, pensés pour toi.</p>
        </div>

        <div className="tool-tabs">
          {tools.map(t => (
            <button
              key={t.id}
              className={`tool-tab ${activeTool === t.id ? 'tool-tab--active' : ''}`}
              onClick={() => setActiveTool(t.id)}
            >
              <span className="tool-tab__icon">{t.icon}</span>
              <div>
                <div className="tool-tab__label">{t.label}</div>
                <div className="tool-tab__desc">{t.desc}</div>
              </div>
            </button>
          ))}
        </div>

        {renderTool()}
      </div>

      <style>{`
        .tools-section {
          padding: 100px 0 60px;
        }
        .section-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .section-badge {
          display: inline-block;
          padding: 7px 18px;
          background: var(--blue-50);
          color: var(--blue-600);
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 16px;
          border: 1px solid var(--blue-200);
        }
        .section-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 400;
          color: var(--slate-900);
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }
        .section-sub {
          font-size: 16px;
          color: var(--slate-500);
          max-width: 480px;
          margin: 0 auto;
        }

        /* Tabs */
        .tool-tabs {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .tool-tab {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 24px;
          background: white;
          border: 2px solid var(--slate-200);
          border-radius: var(--radius-lg);
          text-align: left;
          transition: all 0.25s;
          min-width: 250px;
        }
        .tool-tab:hover {
          border-color: var(--slate-300);
          background: var(--slate-50);
        }
        .tool-tab--active {
          border-color: var(--blue-600) !important;
          background: var(--blue-50) !important;
          box-shadow: 0 4px 20px rgba(37,99,235,0.1);
        }
        .tool-tab__icon {
          font-size: 26px;
          flex-shrink: 0;
        }
        .tool-tab__label {
          font-size: 15px;
          font-weight: 600;
          color: var(--slate-900);
        }
        .tool-tab__desc {
          font-size: 12px;
          color: var(--slate-400);
          margin-top: 2px;
        }

        /* Tool card */
        .tool-card {
          max-width: 700px;
          margin: 0 auto;
          padding: 40px;
          background: white;
          border-radius: var(--radius-xl);
          border: 1px solid var(--slate-200);
          box-shadow: 0 8px 40px rgba(0,0,0,0.04);
        }
        .tool-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
        }
        .tool-header__icon {
          width: 48px; height: 48px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
        }
        .tool-header__icon--blue { background: var(--blue-50); }
        .tool-header__icon--indigo { background: #EEF2FF; }
        .tool-header__icon--emerald { background: #ECFDF5; }
        .tool-header__title {
          font-size: 24px;
          font-weight: 600;
          color: var(--slate-900);
          font-family: var(--font-display);
        }
        .tool-desc {
          font-size: 15px;
          color: var(--slate-500);
          margin-bottom: 24px;
          line-height: 1.6;
        }

        /* Progress */
        .progress-bar {
          width: 100%;
          height: 6px;
          background: var(--slate-200);
          border-radius: 100px;
          margin-bottom: 8px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--blue-600), var(--blue-500));
          border-radius: 100px;
          transition: width 0.4s ease;
        }
        .progress-text {
          font-size: 13px;
          color: var(--slate-400);
          margin-bottom: 24px;
        }

        /* Question */
        .question-text {
          font-size: 20px;
          font-weight: 600;
          color: var(--slate-900);
          margin-bottom: 24px;
          line-height: 1.4;
        }

        /* Options */
        .options-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .option-btn {
          padding: 18px 20px;
          background: var(--slate-50);
          border: 2px solid var(--slate-200);
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 500;
          color: var(--slate-700);
          text-align: left;
          transition: all 0.2s;
          line-height: 1.4;
        }
        .option-btn:hover {
          border-color: var(--blue-500);
          background: var(--blue-50);
          color: var(--blue-700);
          transform: translateY(-1px);
        }

        /* Input */
        .input-row {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
        }
        .text-input {
          flex: 1;
          padding: 15px 20px;
          border: 2px solid var(--slate-200);
          border-radius: var(--radius-md);
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s;
          background: var(--slate-50);
        }
        .text-input:focus { border-color: var(--blue-500); background: white; }
        .text-area {
          width: 100%;
          padding: 15px 20px;
          border: 2px solid var(--slate-200);
          border-radius: var(--radius-md);
          font-size: 15px;
          outline: none;
          resize: vertical;
          background: var(--slate-50);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .text-area:focus { border-color: var(--blue-500); background: white; }
        .btn-send {
          padding: 15px 20px;
          background: var(--blue-600);
          color: white;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          transition: all 0.2s;
        }
        .btn-send:hover { background: var(--blue-700); }

        /* Steps */
        .step-buttons {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
        }
        .btn--sm { padding: 12px 24px; font-size: 14px; }

        /* Results */
        .result-box {
          padding: 28px;
          background: var(--slate-50);
          border-radius: var(--radius-lg);
          border: 1px solid var(--slate-200);
          margin-bottom: 20px;
          max-height: 500px;
          overflow-y: auto;
        }
        .result-line {
          font-size: 14px;
          line-height: 1.75;
          color: var(--slate-700);
          margin-bottom: 4px;
        }
        .btn-tool-reset {
          width: 100%;
          padding: 14px 24px;
          background: var(--blue-50);
          color: var(--blue-600);
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 600;
          transition: all 0.2s;
        }
        .btn-tool-reset:hover { background: var(--blue-100); }

        /* Disclaimer */
        .lettre-disclaimer {
          font-size: 12px;
          color: var(--slate-500);
          text-align: center;
          margin-bottom: 16px;
          padding: 14px;
          background: #FFFBEB;
          border-radius: var(--radius-sm);
          border: 1px solid #FDE68A;
          line-height: 1.5;
        }

        /* Loading */
        .tool-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 72px 0;
        }
        .tool-loading p {
          font-size: 15px;
          color: var(--slate-500);
          font-weight: 500;
        }
        .tool-spinner {
          width: 40px; height: 40px;
          border: 3px solid var(--slate-200);
          border-top-color: var(--blue-600);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin-bottom: 20px;
        }

        @media (max-width: 640px) {
          .tool-tabs { flex-direction: column; }
          .tool-tab { min-width: auto; }
          .options-grid { grid-template-columns: 1fr; }
          .tool-card { padding: 24px; }
        }
      `}</style>
    </section>
  );
}
