// netlify/functions/claude.js
// Fonction serverless qui sert de proxy sécurisé vers l'API Claude
// Ta clé API reste côté serveur, jamais exposée au navigateur

export async function handler(event) {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  // Handle preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  try {
    const { systemPrompt, userMessage } = JSON.parse(event.body);

    if (!systemPrompt || !userMessage) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "systemPrompt et userMessage requis" }),
      };
    }

    // Rate limiting basique — en production tu voudras quelque chose de plus robuste
    // (ex: vérifier le token Supabase de l'utilisateur connecté)

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1500,
        system: systemPrompt,
        messages: [{ role: "user", content: userMessage }],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Anthropic API error:", data);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ error: "Erreur API", details: data }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        text: data.content?.[0]?.text || "Pas de réponse",
      }),
    };
  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Erreur serveur" }),
    };
  }
}
