import { getColorFromType } from './restaurants.js'

async function init () {
  const loadingEl = document.getElementById('loading')
  const cardEl = document.getElementById('restaurant-card')
  const errorEl = document.getElementById('error')
  const errorMessageEl = document.getElementById('error-message')

  try {
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')

    if (!id) {
      throw new Error('Aucun ID de restaurant spécifié.')
    }

    const response = await fetch(`http://localhost:3000/restaurants/${id}`)

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`)
    }

    const result = await response.json()
    const restaurant = result.data

    if (!restaurant) {
      throw new Error('Restaurant introuvable.')
    }

    // Update DOM
    document.title = `${restaurant.nom} - Détail`
    document.getElementById('title').textContent = restaurant.nom
    document.getElementById('restaurant-id').textContent = restaurant.id

    const typeBadge = document.getElementById('type-badge')
    typeBadge.textContent = restaurant.type_nourriture

    // Apply dynamic colors
    const colorClass = getColorFromType(restaurant.type_nourriture)
    // getColorFromType returns "bg-xxx text-xxx", we want to apply it to the badge
    // But for the header background, we might want just the bg color.
    // Let's just apply the full class to the badge for now.
    typeBadge.className = `absolute -top-4 right-8 px-4 py-2 rounded-full text-sm font-bold shadow-md ${colorClass}`

    // For the header background, let's try to extract the bg class or just use the same class but maybe without text color if it conflicts?
    // Actually, applying text-white to a div without text is fine.
    document.getElementById('header-bg').className = `h-32 w-full transition-colors duration-500 ${colorClass}`

    // Show card, hide loading
    loadingEl.classList.add('hidden')
    cardEl.classList.remove('hidden')
  } catch (error) {
    console.error(error)
    loadingEl.classList.add('hidden')
    errorEl.classList.remove('hidden')
    errorMessageEl.textContent = error.message || 'Une erreur est survenue.'
  }
}

init()
