# Rose Griffon - Site officiel

## Prérequis

- Node.js (22.x)
- npm (10.X)
- git (2.x)

> Pour de meilleurs performances, je recommande d'utiliser [PNPM](https://pnpm.io/installation)

## Installation

D'abord, cloner le repository via commande terminal :

```bash
git clone https://github.com/rosegriffon/rosegriffon.git
cd rosegriffon # ou lancer un nouveau terminal dans le dossier
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
