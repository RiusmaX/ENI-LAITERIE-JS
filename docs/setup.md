# Guide d'Installation et de Démarrage

Ce guide explique comment configurer et lancer l'environnement de développement du projet.

## Prérequis

-   [Node.js](https://nodejs.org/) (v18+ recommandé)
-   [Docker](https://www.docker.com/) et Docker Compose

## Installation et Lancement

Le projet nécessite le lancement de 3 processus distincts.

### 1. Base de Données

Démarrez les conteneurs Docker (MariaDB et PhpMyAdmin) :

```bash
# À la racine du projet
docker compose up -d
```

-   **MariaDB** sera accessible sur le port `3306`.
-   **PhpMyAdmin** sera accessible sur `http://localhost:8080`.
    -   Serveur : `db`
    -   Utilisateur : `user`
    -   Mot de passe : `password`

### 2. Backend (API)

Installez les dépendances et lancez le serveur API :

```bash
# Dans un nouveau terminal
cd api
npm install
npm run dev
```

-   L'API sera accessible sur `http://localhost:3000`.
-   Le serveur redémarre automatiquement lors des modifications (via `nodemon`).

### 3. Frontend

Installez les dépendances et lancez le serveur de développement Vite :

```bash
# Dans un nouveau terminal, à la racine du projet
npm install
npm run dev
```

-   L'application sera accessible via l'URL fournie par Vite (généralement `http://localhost:5173`).

## Configuration

### Variables d'Environnement

-   **Backend** : Le fichier `api/.env.local` contient les configurations spécifiques (non versionné, à créer si inexistant).
-   **Docker** : Les identifiants de la base de données sont définis dans `compose.yml`.

**Note** : Assurez-vous que les identifiants dans `api/.env.local` correspondent à ceux définis dans `compose.yml`.
