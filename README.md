# AI Garden

Application web d'assistance au jardinage avec intelligence artificielle.

## Description

AI Garden est un assistant intelligent basee sur Mistral pour repondre aux questions sur l'entretien des plantes, des donnees meteo en temps reel, et une plateforme communautaire pour echanger avec d'autres jardiniers.

## Fonctionnalites

- **Assistant IA Mistral**: Conseils personnalises sur l'entretien des plantes d'interieur
- **API Meteo**: Integration de donnees meteorologiques pour adapter les recommandations
- **Messagerie communautaire**: Salons de discussion thematiques sur les plantes
- **Moderation IA**: L'assistant peut agir comme moderateur dans les salons

## Technologies utilisees

### Frontend
- **Next.js 16** - Framework React avec rendu hybride (SSR/SSG)
- **React 19** - Bibliotheque UI
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Framework CSS utilitaire
- **SPA (Single Page Application)** - Architecture client pour une navigation fluide

### Backend
- **Next.js API Routes** - Endpoints API serverless
- **Ollama** - Execution locale de modeles IA (Mistral)

### Outils de developpement
- **ESLint** - Analyse statique du code
- **PostCSS** - Transformation CSS

## Installation

```bash
# Cloner le depot
git clone <repository-url>

# Installer les dependances
npm install

# Lancer le serveur de developpement
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

## Configuration requise

- Node.js 20+
- Ollama installe localement avec le modele Mistral
- API key pour le service meteo (a configurer)

## Contraintes et limites

- **Contraintes temporelles**: Projet developpe dans un cadre de temps limite
- **Performance**: L'IA locale peut necessiter des ressources systeme importantes
- **API meteo**: Limitation du nombre de requetes selon le service utilise

## Structure du projet

```
app/
├── api/          # Routes API
├── Home/         # Page d'accueil
├── Menu/         # Navigation
├── Nav/          # Barre de navigation
├── Content/      # Contenu principal
└── Ad/           # Composants publicitaires
```

## Scripts disponibles

- `npm run dev` - Lancer le serveur de developpement
- `npm run build` - Construire l'application pour la production
- `npm start` - Lancer l'application en production
- `npm run lint` - Analyser le code

## Licence

Projet prive
