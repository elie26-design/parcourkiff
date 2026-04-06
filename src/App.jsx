import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ToolSection from './components/ToolSection';
import Packs from './components/Packs';
import Footer from './components/Footer';
import LegalPages from './components/LegalPages';
import CallSection from './components/CallSection';

const ACCESS_CODE = "eliesimon";

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [unlocked, setUnlocked] = useState(false);
  const [codeInput, setCodeInput] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('pk_access') === 'true') {
      setUnlocked(true);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const handleSubmit = () => {
    if (codeInput === ACCESS_CODE) {
      setUnlocked(true);
      sessionStorage.setItem('pk_access', 'true');
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!unlocked) {
    return (
      <div style={lockStyles.page}>
        <div style={lockStyles.card}>
          <div style={lockStyles.icon}>◆</div>
          <h1 style={lockStyles.title}>your<span style={lockStyles.accent}>way</span></h1>
          <p style={lockStyles.sub}>Entre le code d'accès pour continuer</p>
          <input
            type="password"
            placeholder="Code d'accès"
            value={codeInput}
            onChange={(e) => { setCodeInput(e.target.value); setError(false); }}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            style={{
              ...lockStyles.input,
              borderColor: error ? '#DC2626' : '#E2E8F0',
            }}
          />
          {error && <p style={lockStyles.error}>Code incorrect</p>}
          <button onClick={handleSubmit} style={lockStyles.btn}>Accéder</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {activeSection === 'home' && (
        <>
          <Hero setActiveSection={setActiveSection} />
          <ToolSection />
          <Packs />
          <CallSection />
        </>
      )}
      {activeSection === 'outils' && (
        <>
          <div style={{ height: 100 }} />
          <ToolSection />
        </>
      )}
      {activeSection === 'packs' && (
        <>
          <div style={{ height: 100 }} />
          <Packs />
        </>
      )}
      {activeSection === 'mentions' && <LegalPages page="mentions" />}
      {activeSection === 'cgu' && <LegalPages page="cgu" />}
      {activeSection === 'cgv' && <LegalPages page="cgv" />}
      {activeSection === 'confidentialite' && <LegalPages page="confidentialite" />}

      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}

const lockStyles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#FEFDFB',
    fontFamily: "'DM Sans', sans-serif",
    padding: 24,
  },
  card: {
    textAlign: 'center',
    maxWidth: 380,
    width: '100%',
  },
  icon: {
    fontSize: 28,
    color: '#4A7A4A',
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
    color: '#1F1A13',
    marginBottom: 8,
  },
  accent: {
    color: '#4A7A4A',
  },
  sub: {
    fontSize: 15,
    color: '#8D7A60',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    padding: '14px 18px',
    border: '2px solid #E2E8F0',
    borderRadius: 12,
    fontSize: 15,
    outline: 'none',
    textAlign: 'center',
    fontFamily: "'DM Sans', sans-serif",
    marginBottom: 8,
  },
  error: {
    fontSize: 13,
    color: '#DC2626',
    marginBottom: 8,
  },
  btn: {
    width: '100%',
    padding: '14px 24px',
    background: '#4A7A4A',
    color: 'white',
    border: 'none',
    borderRadius: 12,
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: "'DM Sans', sans-serif",
    marginTop: 8,
  },
};