# Architecture du Projet Deliveroo

Ce document décrit l'architecture globale de l'application "Deliveroo" (Projet de formation Laiterie de Montaigu).

## Vue d'ensemble

Le projet est une application web Full-Stack composée de trois parties principales :

1.  **Frontend** : Interface utilisateur.
2.  **Backend (API)** : Serveur de données.
3.  **Base de Données** : Stockage persistant.

## Composants

### 1. Frontend
-   **Technologie** : Vanilla JavaScript.
-   **Build Tool** : [Vite](https://vitejs.dev/).
-   **Styling** : [Tailwind CSS](https://tailwindcss.com/).
-   **Validation** : [Yup](https://github.com/jquense/yup) pour la validation des formulaires.
-   **Localisation** : Dossier `src/`.
-   **Point d'entrée** : `index.html` et `src/index.js`.

### 2. Backend (API)
-   **Technologie** : Node.js avec [Express](https://expressjs.com/).
-   **ORM** : [Sequelize](https://sequelize.org/) pour l'interaction avec la base de données.
-   **Sécurité** : `helmet`, `cors`.
-   **Logging** : `morgan`.
-   **Localisation** : Dossier `api/`.
-   **Point d'entrée** : `api/server.js`.

### 3. Base de Données
-   **SGBD** : MariaDB (version 11.4.5).
-   **Gestion** : Docker Compose.
-   **Outil d'administration** : PhpMyAdmin (accessible sur le port 8080).
-   **Configuration** : Fichier `compose.yml`.

## Flux de Données

1.  L'utilisateur interagit avec le **Frontend** (navigateur).
2.  Le Frontend envoie des requêtes HTTP (via `fetch`) à l'**API** (port 3000).
3.  L'API reçoit la requête, valide les données, et utilise **Sequelize** pour interroger la **Base de Données**.
4.  La Base de Données retourne les données à l'API.
5.  L'API formate la réponse (JSON) et la renvoie au Frontend.
6.  Le Frontend met à jour le DOM pour afficher les données.
