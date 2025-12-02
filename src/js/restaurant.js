async function init () {
  try {
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')
    console.log(id)
    const response = await fetch(`http://localhost:3000/restaurants/${id}`)
    const result = await response.json()
    console.log(result)
    const title = document.querySelector('#title')
    title.textContent = result.data.nom
  } catch (error) {
    console.error(error)
  }
}

init()
