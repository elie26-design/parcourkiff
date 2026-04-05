export async function handler(event) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  try {
    const { systemPrompt, userMessage } = JSON.parse(event.body);

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return { statusCode: response.status, headers, body: JSON.stringify({ error: "Erreur API", details: data }) };
    }

    const text = data.choices?.[0]?.message?.content || "Pas de réponse";

    return { statusCode: 200, headers, body: JSON.stringify({ text }) };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Erreur serveur" }) };
  }
}