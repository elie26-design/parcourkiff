// src/components/LegalPages.jsx

const PLACEHOLDER = "[À COMPLÉTER]";

function MentionsLegales() {
  return (
    <div className="legal-content">
      <h1 className="legal-title">Mentions Légales</h1>
      <p className="legal-date">Dernière mise à jour : avril 2026</p>

      <h2>1. Éditeur du site</h2>
      <p><strong>Nom du site :</strong> ParcourKiff</p>
      <p><strong>URL :</strong> https://parcourkiff.netlify.app</p>
      <p><strong>Nom de l'éditeur :</strong> {PLACEHOLDER}</p>
      <p><strong>Statut :</strong> {PLACEHOLDER}</p>
      <p><strong>SIRET :</strong> {PLACEHOLDER}</p>
      <p><strong>Adresse :</strong> {PLACEHOLDER}</p>
      <p><strong>Email :</strong> contact@parcourkiff.fr</p>

      <h2>2. Hébergeur</h2>
      <p><strong>Raison sociale :</strong> Netlify, Inc.</p>
      <p><strong>Adresse :</strong> 512 2nd Street, Suite 200, San Francisco, CA 94107, USA</p>
      <p><strong>Site web :</strong> https://www.netlify.com</p>

      <h2>3. Propriété intellectuelle</h2>
      <p>L'ensemble des contenus présents sur le site ParcourKiff (textes, graphismes, logos, icônes, images, logiciels, base de données) sont la propriété exclusive de l'éditeur ou de ses partenaires et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.</p>
      <p>Toute reproduction, représentation, modification, publication, transmission ou dénaturation, totale ou partielle, du site ou de son contenu, par quelque procédé que ce soit, est interdite sans autorisation écrite préalable de l'éditeur.</p>

      <h2>4. Responsabilité</h2>
      <p>L'éditeur s'efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes ou des carences dans la mise à jour.</p>
      <p>Les résultats fournis par les outils d'intelligence artificielle du site (QCM d'orientation, explorateur de parcours) sont donnés à titre indicatif uniquement et ne constituent en aucun cas un avis professionnel d'orientation. L'éditeur ne saurait être tenu responsable des décisions prises par les utilisateurs sur la base de ces résultats.</p>

      <h2>5. Crédits</h2>
      <p>Conception et développement : ParcourKiff</p>
      <p>Hébergement : Netlify, Inc.</p>
      <p>Intelligence artificielle : Anthropic (Claude)</p>
    </div>
  );
}

function CGU() {
  return (
    <div className="legal-content">
      <h1 className="legal-title">Conditions Générales d'Utilisation</h1>
      <p className="legal-date">Dernière mise à jour : avril 2026</p>

      <h2>Article 1 — Objet</h2>
      <p>Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les règles d'utilisation du site internet ParcourKiff, accessible à l'adresse https://parcourkiff.netlify.app, ainsi que des outils et services qui y sont proposés.</p>
      <p>L'utilisation du site implique l'acceptation pleine et entière des présentes CGU.</p>

      <h2>Article 2 — Description des services</h2>
      <p>ParcourKiff propose un service d'accompagnement à l'orientation post-bac pour les lycéens, comprenant :</p>
      <p>— Des outils d'intelligence artificielle : QCM d'orientation, explorateur de parcours d'études, calendrier Parcoursup interactif</p>
      <p>— Des appels avec des étudiants et jeunes diplômés (alumni)</p>
      <p>— Un service de rédaction personnalisée de lettres de motivation</p>
      <p>— Un accompagnement en orientation scolaire et professionnelle</p>
      <p>Les appels avec des étudiants ou jeunes diplômés (alumni) sont réalisés par des intervenants indépendants. 
Ces intervenants ne sont pas salariés de ParcourKiff. 
ParcourKiff agit en tant qu’intermédiaire de mise en relation et ne saurait être tenu responsable des propos ou conseils fournis par ces intervenants.</p>

      <h2>Article 3 — Accès au site</h2>
      <p>Le site est accessible gratuitement pour la consultation des informations et l'utilisation limitée des outils IA. L'accès aux services payants est conditionné à la souscription d'une offre et au paiement du prix correspondant.</p>

      <h2>Article 4 — Outils d'intelligence artificielle</h2>
      <p>Les outils d'intelligence artificielle proposés sur le site utilisent des modèles de langage développés par des tiers (Anthropic). Les résultats générés sont fournis à titre indicatif uniquement.</p>
      <p>L'utilisateur reconnaît et accepte que :</p>
      <p>— Les recommandations d'orientation ne constituent pas un avis professionnel certifié</p>
      <p>— Les résultats peuvent contenir des inexactitudes ou des informations obsolètes</p>
      <p>— Les outils IA ne remplacent pas un conseiller d'orientation qualifié</p>
      <p>Les services proposés constituent une aide méthodologique et informative uniquement et ne remplacent en aucun cas un accompagnement personnalisé par un conseiller d’orientation certifié.</p>

      <h2>Article 5 — Obligations de l'utilisateur</h2>
      <p>L'utilisateur s'engage à fournir des informations exactes, ne pas utiliser le site à des fins illicites, ne pas tenter de contourner les mesures de sécurité, ne pas revendre les contenus générés, et respecter les droits de propriété intellectuelle.</p>

      <h2>Article 6 — Compte utilisateur</h2>
      <p>L'utilisateur est responsable de la confidentialité de ses identifiants. L'utilisateur mineur doit obtenir l'autorisation de ses parents ou représentants légaux.</p>

      <h2>Article 7 — Propriété intellectuelle</h2>
      <p>L'ensemble des contenus du site sont protégés par le droit de la propriété intellectuelle. Les contenus générés par les outils IA à partir des données de l'utilisateur restent sa propriété.</p>

      <h2>Article 8 — Limitation de responsabilité</h2>
      <p>L'éditeur ne saurait être tenu responsable des décisions d'orientation prises sur la base des résultats des outils IA, des résultats d'admission sur Parcoursup, des interruptions temporaires du service, ou de la perte de données.</p>

      <h2>Article 9 — Droit applicable</h2>
      <p>Les présentes CGU sont régies par le droit français.</p>
    </div>
  );
}

function CGV() {
  return (
    <div className="legal-content">
      <h1 className="legal-title">Conditions Générales de Vente</h1>
      <p className="legal-date">Dernière mise à jour : avril 2026</p>

      <h2>Article 1 — Objet</h2>
      <p>Les présentes Conditions Générales de Vente (CGV) régissent les ventes de prestations de services d'accompagnement à l'orientation post-bac réalisées par ParcourKiff. Toute commande implique l'acceptation sans réserve des présentes CGV.</p>

      <h2>Article 2 — Prestations proposées</h2>
      <h3>Pack Essentiel — 150 €</h3>
      <p>— Accès illimité aux outils IA (QCM d'orientation, explorateur de parcours, calendrier Parcoursup)</p>
      <p>— 1 appel de 30 minutes avec un alumni</p>

      <h3>Pack Premium — 190 €</h3>
      <p>— Tout le Pack Essentiel</p>
      <p>— Rédaction personnalisée des lettres de motivation (jusqu'à 8 lettres)</p>
      <p>— Relecture et validation par un expert en orientation</p>

      <h3>Pack Intégral — 260 €</h3>
      <p>— Tout le Pack Premium</p>
      <p>— 2 appels alumni personnalisés</p>
      <p>— 1 session de coaching en orientation</p>
      <p>— Suivi personnalisé complet</p>

      <h2>Article 3 — Prix</h2>
      <p>Les prix sont indiqués en euros TTC. La TVA n'est pas applicable conformément à l'article 293 B du Code Général des Impôts.</p>

      <h2>Article 4 — Commande et paiement</h2>
      <p>La commande est validée après acceptation des présentes CGV et paiement intégral. Le paiement s'effectue en ligne par carte bancaire via Stripe.Les paiements sont sécurisés par Stripe. ParcourKiff n’a pas accès aux données bancaires.</p>

      <h2>Article 5 — Droit de rétractation</h2>
      <p>Le Client dispose d'un délai de 14 jours calendaires à compter de la validation de la commande pour exercer son droit de rétractation. Ce droit ne peut plus être exercé si l'exécution de la prestation a commencé avec l'accord du Client.</p>
      <p>Pour exercer ce droit, envoyez un email à contact@parcourkiff.fr. Le remboursement sera effectué dans un délai de 14 jours.</p>
      <p>Le Client reconnaît et accepte expressément que l’exécution des prestations commence immédiatement après paiement. 
En conséquence, il renonce expressément à son droit de rétractation conformément à l’article L221-28 du Code de la consommation.</p>

      <h2>Article 6 — Exécution des prestations</h2>
      <p>L'accès aux outils IA est activé immédiatement après paiement. Les appels alumni sont programmés en fonction des disponibilités mutuelles. La rédaction des lettres est réalisée dans un délai de 5 jours ouvrés.</p>

      <h2>Article 7 — Annulation et report</h2>
      <p>Tout appel alumni peut être reporté une fois, sous réserve de prévenir au moins 24 heures à l'avance. En cas d'absence non signalée, l'appel sera considéré comme consommé.</p>

      <h2>Article 8 — Responsabilité</h2>
      <p>ParcourKiff s'engage à fournir un service de qualité (obligation de moyens). ParcourKiff ne garantit en aucun cas l'admission du Client dans une formation via Parcoursup.</p>

      <h2>Article 9 — Réclamations</h2>
      <p>Toute réclamation doit être adressée à contact@parcourkiff.fr dans un délai de 30 jours. L'éditeur s'engage à traiter toute réclamation dans un délai de 15 jours ouvrés.</p>

      <h2>Article 10 — Droit applicable</h2>
      <p>Les présentes CGV sont soumises au droit français.</p>
    </div>
  );
}

function Confidentialite() {
  return (
    <div className="legal-content">
      <h1 className="legal-title">Politique de Confidentialité</h1>
      <p className="legal-date">Dernière mise à jour : avril 2026</p>

      <h2>Article 1 — Introduction</h2>
      <p>ParcourKiff s'engage à protéger la vie privée de ses utilisateurs. La présente Politique décrit les données personnelles collectées, les finalités de leur traitement, et vos droits conformément au RGPD (Règlement UE 2016/679).</p>

      <h2>Article 2 — Responsable du traitement</h2>
      <p><strong>Nom :</strong> {PLACEHOLDER}</p>
      <p><strong>Email :</strong> contact@parcourkiff.fr</p>

      <h2>Article 3 — Données collectées</h2>
      <p><strong>Données fournies par l'utilisateur :</strong> nom, prénom, email, téléphone, classe, filière, spécialités, réponses au QCM, informations pour les lettres de motivation.</p>
      <p><strong>Données collectées automatiquement :</strong> adresse IP, type de navigateur, pages visitées, durée de visite, cookies techniques.</p>

      <h2>Article 4 — Finalités du traitement</h2>
      <p>— Fourniture des services commandés</p>
      <p>— Personnalisation des recommandations d'orientation</p>
      <p>— Envoi de confirmations de commande et notifications</p>
      <p>— Amélioration anonymisée des outils</p>
      <p>— Conservation des données de facturation (obligation légale)</p>

      <h2>Article 5 — Durée de conservation</h2>
      <p>— Données de compte : durée d'utilisation + 3 ans</p>
      <p>— Résultats QCM et recherches : 2 ans</p>
      <p>— Données de facturation : 10 ans</p>
      <p>— Cookies : 13 mois maximum</p>

      <h2>Article 6 — Destinataires des données</h2>
      <p>— Anthropic (IA) : traitement des requêtes IA, sans utilisation pour l'entraînement</p>
      <p>— Supabase : hébergement sécurisé de la base de données</p>
      <p>— Stripe : traitement sécurisé des paiements</p>
      <p>— Netlify : hébergement du site web</p>
      <p>Les données ne sont jamais vendues à des tiers.</p>

      <h2>Article 7 — Vos droits</h2>
      <p>Conformément au RGPD, vous disposez des droits d'accès, de rectification, d'effacement, de portabilité, d'opposition et de limitation du traitement.</p>
      <p>Pour exercer vos droits : contact@parcourkiff.fr. Réponse sous 30 jours.</p>
      <p>Vous pouvez aussi introduire une réclamation auprès de la CNIL : www.cnil.fr</p>

      <h2>Article 8 — Mineurs</h2>
      <p>Pour les utilisateurs de moins de 15 ans, le consentement d'un parent est requis. Pour les 15-18 ans, le consentement est présumé valide mais un parent peut exercer les droits au nom du mineur.</p>

      <h2>Article 9 — Cookies</h2>
      <p>Le site utilise uniquement des cookies techniques nécessaires au fonctionnement. Aucun cookie publicitaire ou de tracking n'est utilisé.</p>
    </div>
  );
}

// ─── COMPOSANT PRINCIPAL ───
export default function LegalPages({ page }) {
  const renderPage = () => {
    switch (page) {
      case 'mentions': return <MentionsLegales />;
      case 'cgu': return <CGU />;
      case 'cgv': return <CGV />;
      case 'confidentialite': return <Confidentialite />;
      default: return <MentionsLegales />;
    }
  };

  return (
    <section className="legal-section">
      <div className="container">
        {renderPage()}
      </div>

      <style>{`
        .legal-section {
          padding: 120px 0 80px;
        }
        .legal-content {
          max-width: 760px;
          margin: 0 auto;
        }
        .legal-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 40px);
          color: var(--slate-900);
          margin-bottom: 8px;
          letter-spacing: -0.5px;
        }
        .legal-date {
          font-size: 13px;
          color: var(--slate-400);
          margin-bottom: 40px;
          font-style: italic;
        }
        .legal-content h2 {
          font-size: 18px;
          font-weight: 600;
          color: var(--blue-600);
          margin-top: 36px;
          margin-bottom: 12px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--slate-200);
        }
        .legal-content h3 {
          font-size: 15px;
          font-weight: 600;
          color: var(--slate-800);
          margin-top: 20px;
          margin-bottom: 8px;
        }
        .legal-content p {
          font-size: 14px;
          line-height: 1.7;
          color: var(--slate-600);
          margin-bottom: 10px;
        }
        .legal-content strong {
          color: var(--slate-800);
        }
      `}</style>
    </section>
  );
}
