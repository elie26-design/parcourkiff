// src/App.jsx
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ToolSection from './components/ToolSection';
import Packs from './components/Packs';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  return (
    <div className="app">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {activeSection === 'home' && (
        <>
          <Hero setActiveSection={setActiveSection} />
          <ToolSection />
          <Packs />
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

      <Footer />
    </div>
  );
}
