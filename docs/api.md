# Documentation de l'API

L'API est construite avec Express et sert les données relatives aux restaurants.

**Base URL** : `http://localhost:3000`

## Endpoints

### Restaurants

#### Récupérer tous les restaurants

*   **URL** : `/restaurants`
*   **Méthode** : `GET`
*   **Description** : Récupère la liste complète des restaurants enregistrés.
*   **Réponse de succès (200)** :
    ```json
    {
      "message": "OK",
      "data": [
        {
          "id": 1,
          "nom": "Nom du Restaurant",
          "type_nourriture": "Type",
          ...
        },
        ...
      ]
    }
    ```

#### Créer un restaurant

*   **URL** : `/restaurants`
*   **Méthode** : `POST`
*   **Description** : Ajoute un nouveau restaurant à la base de données.
*   **Corps de la requête (JSON)** :
    ```json
    {
      "nom": "Nom du Restaurant",
      "type": "Type de cuisine"
    }
    ```
*   **Réponse de succès (200)** :
    ```json
    {
      "message": "OK",
      "data": {
        "id": 2,
        "nom": "Nom du Restaurant",
        "type_nourriture": "Type de cuisine",
        ...
      }
    }
    ```

#### Récupérer un restaurant par ID

*   **URL** : `/restaurants/:id`
*   **Méthode** : `GET`
*   **Description** : Récupère les détails d'un restaurant spécifique.

## Gestion des Erreurs

En cas d'erreur serveur (500), l'API retourne un objet JSON contenant l'erreur :

```json
{
  "error": { ... }
}
```

## Conventions de Code (Backend)

*   **Connexion DB** : La connexion à la base de données doit être ouverte explicitement au début de chaque handler de route via `openConnectionToDatabase()` et fermée si nécessaire (bien que le code actuel semble laisser Sequelize gérer le pool ou fermer implicitement selon la configuration).
*   **Modèles** : Les modèles Sequelize sont définis dans `api/models/`.
