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

## Configuration de l'intégration Google Calendar

Pour récupérer les événements du calendrier "Conventions" depuis Google Calendar, suivez ces étapes :

### 1. Créer un projet Google Cloud et activer l'API Google Calendar

1. Rendez-vous sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créez un nouveau projet
3. Activez l'API Google Calendar pour ce projet
4. Créez un compte de service et téléchargez le fichier de clé JSON

### 2. Créer un calendrier dédié pour les Conventions

1. Connectez-vous à [Google Calendar](https://calendar.google.com/)
2. Dans le panneau latéral gauche, cliquez sur le "+" à côté de "Autres agendas"
3. Sélectionnez "Créer un agenda" et nommez-le "Conventions"
4. Une fois créé, cliquez sur les trois points à côté du calendrier "Conventions"
5. Sélectionnez "Paramètres et partage"
6. Faites défiler jusqu'à "ID de l'agenda" et copiez cet identifiant
7. Partagez ce calendrier avec l'adresse email du compte de service créé précédemment

### 3. Configurer les variables d'environnement

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```
# Google Maps API (pour l'affichage de la carte)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY

# Google Calendar API (pour l'accès au calendrier)
GOOGLE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour_private_key\n-----END PRIVATE KEY-----\n"
GOOGLE_CALENDAR_ID=your_conventions_calendar_id@group.calendar.google.com
```

### 4. Format des événements dans le calendrier

Pour que les événements s'affichent correctement sur la carte, incluez les coordonnées géographiques dans la description de l'événement au format suivant :

```
lat:48.8566,lng:2.3522

Description de l'événement...
```

Où 48.8566 et 2.3522 sont respectivement la latitude et la longitude de l'emplacement de l'événement.
