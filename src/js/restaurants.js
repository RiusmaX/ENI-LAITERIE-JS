async function fetchRestaurants () {
  try {
    // On appelle l'API pour récupérer les restaurants
    const response = await fetch('http://localhost:3000/restaurants')
    const result = await response.json()
    return result.data
  } catch (error) {
    console.error(error)
  }
}

function getColorFromType (type_nourriture) { // eslint-disable-line camelcase
  switch (type_nourriture) { // eslint-disable-line camelcase
    case 'Français':
      return 'bg-gray-600 text-white'
    case 'Bistrot':
    case 'Brasserie':
    case 'Savoyard':
      return 'bg-blue-600 text-white'
    case 'Japonais':
    case 'Chinois':
    case 'Asiatique':
    case 'Vietnamien':
    case 'Thaïlandais':
      return 'bg-red-600 text-white'
    case 'Italien':
      return 'bg-green-600 text-white'
    case 'Américain':
    case 'Fast Food':
    case 'Grillades':
      return 'bg-orange-600 text-white'
    case 'Indien':
    case 'Marocain':
    case 'Libanais':
    case 'Turc':
      return 'bg-amber-500 text-black'
    case 'Mexicain':
    case 'Espagnol':
    case 'Latino':
      return 'bg-yellow-500 text-black'
    case 'Végétarien':
      return 'bg-lime-500 text-black'
    case 'Fruits de mer':
      return 'bg-cyan-600 text-white'
    case 'Gastronomique':
      return 'bg-purple-800 text-white'
    case 'Moderne':
      return 'bg-gray-800 text-white'
    case 'Café':
      return 'bg-amber-900 text-white'
    default:
      return 'bg-slate-200 text-black'
  }
}

function buildRestaurantsListItem (restaurant) {
  const restaurantItem = document.createElement('a')
  restaurantItem.href = `http://localhost:5173/restaurant.html?id=${restaurant.id}`
  restaurantItem.classList.add('flex', 'flex-col', 'gap-2', 'w-full', 'max-w-[280px]', 'p-6', 'items-center', 'shadow-lg', 'rounded-lg', 'cursor-pointer')
  const content = `
    <h2 class="text-xl font-semibold">${restaurant.nom}</h2>
    <span class="${getColorFromType(restaurant.type_nourriture)} py-1 px-2 rounded-full">${restaurant.type_nourriture}</span>
  `
  restaurantItem.innerHTML = content
  return restaurantItem
}

function buildRestaurantsList (restaurants) {
  const fragment = document.createDocumentFragment()
  for (const restaurant of restaurants) {
    const item = buildRestaurantsListItem(restaurant)
    fragment.appendChild(item)
    // Equivalent à : fragment.appendChild(buildRestaurantsListItem(restaurant))
  }
  return fragment
}

export async function main () {
  const restaurants = await fetchRestaurants()
  const listItems = buildRestaurantsList(restaurants)

  const list = document.querySelector('#restaurant-list')
  list.appendChild(listItems)
}

main()
