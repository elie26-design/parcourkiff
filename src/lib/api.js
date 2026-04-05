// src/lib/api.js
// Appelle la fonction serverless Netlify (qui elle appelle Claude)
// En dev local, utilise localhost; en prod, utilise le domaine Netlify

const API_ENDPOINT = "/.netlify/functions/claude";

export async function askClaude(systemPrompt, userMessage) {
  try {
    const res = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ systemPrompt, userMessage }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("API Error:", err);
      return "Une erreur est survenue. Réessaie dans quelques instants.";
    }

    const data = await res.json();
    return data.text || "Pas de réponse.";
  } catch (e) {
    console.error("Network error:", e);
    return "Erreur de connexion. Vérifie ta connexion internet.";
  }
}
