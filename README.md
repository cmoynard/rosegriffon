# Rose Griffon - Site officiel

## Présentation

Le site officiel de l'association Rose Griffon, dédié à la scène d'Inazuma Eleven en France.

## Fonctionnalités

- Accueil
- Événements
- Équipe
- Formulaire de contact
- Discord
- Inazuma Eleven

## Technologies

- Next.js
- Tailwind CSS
- Shadcn UI
- Cosmic JS

## Structure du projet

```bash
rosegriffon/
├── public/ # Contient les images / statiques
├── src/
│   ├── app/ # Contient les pages du site
│   ├── components/ # Contient les composants
│   ├── lib/ # Contient les librairies utilisées
│   ├── types/ # Contient les types TypeScript
│   └── utils/ # Contient les fonctions utilitaires
```

## Prérequis

- Node.js (22.x)
- npm (10.X)
- git (2.x)

> Pour de meilleurs performances, je recommande d'utiliser [PNPM](https://pnpm.io/installation)

## Installation

D'abord, cloner le repository via commande terminal :

```bash
git clone https://github.com/rosegriffon/rosegriffon.git
cd rosegriffon
```

Copier le fichier `.env.example` en `.env` et remplir les variables d'environnement.

```bash
cp .env.example .env
```

Ensuite, installer les dépendances (à l'intérieur du dossier) :

```bash
pnpm install
```

Enfin, lancer le serveur :

> En mode développement :

```bash
pnpm dev
```

> En mode production :

```bash
pnpm build
# chargement du build
pnpm start
```

Finalement, ouvrir [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir le résultat.
