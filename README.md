# 🎓 ParcourKiff — Accompagnement Parcoursup

Plateforme d'accompagnement Parcoursup avec coach IA et mentors alumni.

## 🚀 Déploiement rapide

### 1. Prérequis
- [Node.js](https://nodejs.org/) (v18+)
- Un compte [Netlify](https://netlify.com) (gratuit)
- Un compte [Anthropic](https://console.anthropic.com) (pour la clé API)
- Un compte [Supabase](https://supabase.com) (gratuit)

### 2. Installation locale

```bash
# Clone ou copie le projet
cd parcourkiff-project

# Installe les dépendances
npm install

# Copie le fichier d'environnement
cp .env.example .env

# Remplis tes clés dans .env
# ANTHROPIC_API_KEY=sk-ant-...
# VITE_SUPABASE_URL=https://xxx.supabase.co
# VITE_SUPABASE_ANON_KEY=eyJ...

# Lance en local
npm run dev
```

### 3. Configuration Supabase

1. Va sur [supabase.com](https://supabase.com) et crée un nouveau projet
2. Dans le Dashboard, va dans **SQL Editor**
3. Copie-colle le contenu de `supabase-setup.sql` et exécute-le
4. Récupère ton URL et ta clé anonyme dans **Settings > API**
5. Mets-les dans ton `.env`

### 4. Déploiement sur Netlify

**Option A — Via GitHub (recommandé) :**
1. Pousse le projet sur un repo GitHub
2. Sur Netlify, clique "Add new site" > "Import from Git"
3. Connecte ton repo GitHub
4. Netlify détecte automatiquement la config (`netlify.toml`)
5. Dans **Site settings > Environment variables**, ajoute :
   - `ANTHROPIC_API_KEY` = ta clé API Anthropic
   - `VITE_SUPABASE_URL` = ton URL Supabase
   - `VITE_SUPABASE_ANON_KEY` = ta clé anonyme Supabase
6. Redéploie

**Option B — Via CLI :**
```bash
# Installe Netlify CLI
npm install -g netlify-cli

# Connecte-toi
netlify login

# Build + déploie
npm run build
netlify deploy --prod --dir=dist
```

### 5. Domaine personnalisé

Sur Netlify, va dans **Domain settings** et ajoute `parcourkiff.fr` (ou ton domaine).

## 📁 Structure du projet

```
parcourkiff-project/
├── index.html                  # Point d'entrée HTML
├── package.json                # Dépendances
├── vite.config.js              # Config Vite
├── netlify.toml                # Config Netlify + redirects
├── supabase-setup.sql          # Script création base de données
├── .env.example                # Template des variables d'environnement
│
├── netlify/
│   └── functions/
│       └── claude.js           # ⚡ Fonction serverless (proxy API Claude)
│
├── public/
│   └── favicon.svg
│
└── src/
    ├── main.jsx                # Point d'entrée React
    ├── App.jsx                 # Composant principal
    │
    ├── components/
    │   ├── Navbar.jsx          # Navigation
    │   ├── Hero.jsx            # Section héro
    │   ├── ToolSection.jsx     # Sélecteur d'outils IA
    │   ├── QCMTool.jsx         # QCM d'orientation
    │   ├── ExplorerTool.jsx    # Explorateur de parcours
    │   ├── LettreTool.jsx      # Coach lettres de motivation
    │   ├── Packs.jsx           # Section tarifs
    │   └── Footer.jsx          # Pied de page
    │
    ├── lib/
    │   ├── api.js              # Helper appels API (via serverless)
    │   └── supabase.js         # Client Supabase
    │
    └── styles/
        └── global.css          # Styles globaux + variables CSS
```

## 💰 Coûts estimés

| Service | Coût |
|---------|------|
| Netlify (hébergement) | Gratuit (jusqu'à 100GB/mois) |
| Supabase (BDD) | Gratuit (jusqu'à 500MB) |
| API Claude Haiku | ~0.05-0.10€ par élève |
| Domaine .fr | ~8-12€/an |
| **Total fixe** | **~10€/an** |

## 🔜 Prochaines étapes

- [ ] Intégrer Stripe pour le paiement
- [ ] Ajouter l'authentification (login élève)
- [ ] Dashboard élève avec suivi
- [ ] Système de réservation alumni (Calendly)
- [ ] Simulateur d'admission (V2)
- [ ] Mode parents
