# JUZ IMMOBILIER — projet Next.js (base fonctionnelle V1)

Site premium aux couleurs de JUZ IMMOBILIER, avec **logo original**, portrait fourni, navigation publique, catalogue dynamique, formulaire d'estimation qui enregistre réellement les prospects, administration sécurisée, saisie des annonces, import CSV et structure ouverte à une API métier.

## Mise en route

Pré-requis : Node.js 20+ (22 recommandé), accès en écriture au dossier `data/` et serveur capable de faire fonctionner Next.js en mode Node (pas un hébergement statique uniquement).

```bash
npm install
cp .env.example .env.local
# Remplacer ADMIN_PASSWORD et SESSION_SECRET dans .env.local
npm run dev
```

Site : `http://localhost:3000` — Administration : `http://localhost:3000/admin`.

Avant la mise en production : `npm run build && npm run start`, derrière HTTPS. Conserver le dossier `data/` sur un stockage persistant, **hors du répertoire public** ; faire des sauvegardes de la base SQLite. Ne jamais versionner `.env.local`.

## Annonces

Création manuelle dans `/admin`, statuts brouillon / publié / sous compromis / vendu / archivé. La page publique n'affiche que les statuts publiés, compromis ou vendus.

Import CSV (UTF-8) via l'administration, modèle téléchargeable sur `/modele-annonces.csv` :
`ref,title,city,type,price,surface,rooms,bedrooms,description,image_url,dpe,ges,status`

Le séparateur `;` est également accepté. Import atomique, avec création ou **mise à jour par `ref`**. Les images passent pour l'instant par une URL publique ; le stockage et la compression de fichiers téléversés seront à développer avec le réseau.

Une future API pourra alimenter les mêmes tables depuis un adaptateur indépendant. Prévoir un mapping des champs du logiciel propriétaire et un mécanisme d'archivage des annonces supprimées à la source.

## Estimation et prospects

Le formulaire collecte commune, type de bien, surface, pièces, état, identité, téléphone, e-mail, notes et accord de contact. Les demandes sont enregistrées dans la table `leads`, consultables via `/admin`. Une notification e-mail peut être configurée avec `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_FROM`, `LEAD_NOTIFY_TO`.

**Aucune valeur immobilière fictive n'est affichée en production par défaut.** `ESTIMATION_ENABLED=false` : le prospect reçoit confirmation, mais aucune fourchette automatique. Après validation d'une méthode d'estimation locale (DVF et autres éléments, contrôles qualitatifs et limites), l'administrateur peut renseigner `ESTIMATION_EUR_M2` et activer `ESTIMATION_ENABLED=true`. Le calcul actuel (±15 % autour d'un prix moyen unique) n'est qu'un **prototype technique non suffisant** pour une mise en production ; il ne tient pas encore compte du terrain, de la situation, de l'état ou de la typologie. Il doit être remplacé par une estimation plus rigoureuse avant toute activation publique.

## Juridique et sécurité — conditions impératives avant publication

- Le **logo original n'a pas été retouché**, et conserve visuellement la baseline : « Agent commercial indépendant de SAS IMMOBILIER EMAIL - EI ».
- Les mentions légales, honoraires, RSAC, carte T et titulaire, hébergeur, médiation, politique de confidentialité, cookies et obligations des annonces sont **à fournir et valider par le réseau**. Les pages actuelles sont des placeholders, pas un corpus légal exploitable.
- Prévoir une vérification RGPD/consentement, durée de conservation et suppression des leads, anti-spam/rate limiting et surveillance des erreurs avant exposition publique. La protection par mot de passe de l'administration est une **base de développement**, pas un audit de sécurité complet.
- Les biens et leurs mentions réglementaires doivent être contrôlés avant publication. L'application actuelle ne force pas toutes les informations réglementaires et ne doit pas être publiée en l'état.
- La photo d'arrière-plan de la page d'accueil est une URL de démonstration Unsplash. Remplacer par une photo autorisée, idéalement locale, hébergée sur le site.

## Note d'hébergement

La version fournie utilise SQLite (base de données embarquée et persistante), facile à installer. Si le réseau impose MySQL ou PostgreSQL, remplacer le module `src/lib/db.ts` par un adaptateur compatible avant déploiement. Éviter les hébergements serverless avec disque éphémère sans migration vers une base managée.

## Prochaine étape

Valider l'environnement serveur du réseau, les mentions légales, les moyens de stockage des photographies, le processus de sauvegarde, les notifications et le moteur d'estimation. Puis ajouter les fiches détaillées réglementaires, le téléchargement de photos et la pagination des annonces.
