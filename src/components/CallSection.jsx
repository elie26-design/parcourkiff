// src/components/CallSection.jsx
import { useState } from 'react';

export default function CallSection() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!email.trim() || !email.includes('@')) {
      setError(true);
      return;
    }

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: 'service_yl3icdf',
        template_id: 'template_83e48r4',
        user_id: '4klRpkIItXRGyhYGW',
        template_params: { user_email: email },
      }),
    });

    setSent(true);
  };

  return (
    <section className="call-section" style={{
      maxWidth: 520,
      margin: '0 auto 80px',
      padding: '40px 28px',
      background: 'white',
      borderRadius: 20,
      border: '2px solid var(--sage-200)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.04)',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: 28, marginBottom: 12 }}>📞</div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--slate-900)', marginBottom: 8 }}>
        Réserve ton premier call gratuit
      </h3>
      <p style={{ fontSize: 14, color: 'var(--slate-500)', marginBottom: 24, lineHeight: 1.5 }}>
        Un échange de 15 min avec un mentor pour répondre à tes questions sur Parcoursup
      </p>

      {sent ? (
        <div style={{
          padding: 16, background: 'var(--sage-50)', border: '1px solid var(--sage-200)',
          borderRadius: 12, fontSize: 14, color: 'var(--sage-700)', fontWeight: 500,
        }}>
          ✓ Merci ! On te recontacte très vite pour fixer un créneau.
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
            <input
              type="email"
              placeholder="Ton adresse email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(false); }}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              style={{
                flex: 1, padding: '14px 18px',
                border: `2px solid ${error ? '#DC2626' : 'var(--cream-300)'}`,
                borderRadius: 12, fontSize: 15, fontFamily: 'var(--font-body)',
                outline: 'none', background: 'var(--cream-50)',
              }}
            />
            <button onClick={handleSubmit} style={{
              padding: '14px 24px', background: 'var(--sage-600)', color: 'white',
              border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 600,
              fontFamily: 'var(--font-body)', cursor: 'pointer', whiteSpace: 'nowrap',
            }}>
              Réserver →
            </button>
          </div>
          {error && <p style={{ fontSize: 12, color: '#DC2626', marginBottom: 8 }}>Entre une adresse email valide</p>}
          <p style={{ fontSize: 12, color: 'var(--slate-400)', marginTop: 14 }}>Gratuit et sans engagement · Réponse sous 24h</p>
        </>
      )}
    </section>
  );
}
