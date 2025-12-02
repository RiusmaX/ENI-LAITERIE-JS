# Documentation Frontend

Le frontend est une application Single Page (SPA) simulée ou Multi-Page utilisant Vite pour le bundling et le Hot Module Replacement (HMR).

## Structure des Fichiers

*   `index.html` : Page d'accueil.
*   `restaurants.html` : Page de liste des restaurants.
*   `src/js/` : Logique JavaScript.
    *   `restaurants.js` : Gestion de l'affichage et récupération des restaurants.
    *   `restaurants.actions.js` : Actions spécifiques (probablement ajout/suppression).
    *   `validation/forms.validation.js` : Schémas de validation Yup.
*   `src/classes/` : Classes métiers (ex: `Animal.js`, `Chat.js` - *Note: Ces fichiers semblent être des vestiges ou des exemples de cours*).

## Fonctionnalités Clés

### Récupération des Données

Les données sont récupérées via l'API REST en utilisant `fetch`.
Exemple dans `src/js/restaurants.js` :

```javascript
async function fetchRestaurants () {
  const response = await fetch('http://localhost:3000/restaurants')
  const result = await response.json()
  return result.data
}
```

### Styles Dynamiques

L'application utilise Tailwind CSS. Des classes sont appliquées dynamiquement en fonction des données, par exemple pour la couleur des badges de type de cuisine.

Fonction `getColorFromType` (`src/js/restaurants.js`) :
Mappe un type de cuisine (ex: "Japonais", "Italien") à des classes Tailwind (ex: `bg-red-600`, `bg-green-600`).

### Validation des Formulaires

La librairie **Yup** est utilisée pour valider les données avant envoi.
Fichier : `src/js/validation/forms.validation.js`.

Schéma d'exemple :
```javascript
const restaurantSchema = object({
  nom: string().required().min(2).max(150),
  type: string().oneOf([...]).required()
})
```

## Développement

Pour lancer le serveur de développement :
```bash
npm run dev
```
Cela démarre Vite, qui sert les fichiers et assure le rechargement à chaud.
