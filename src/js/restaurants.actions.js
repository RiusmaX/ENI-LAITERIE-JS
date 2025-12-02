import { main } from './restaurants.js'
import { validateRestaurantForm } from './validation/forms.validation.js'

// On sélectionne le bouton par son ID
const fabButton = document.querySelector('#fab')
const backdrop = document.querySelector('#backdrop')
const modal = document.querySelector('#modal')
const inputNom = document.querySelector('#nom')
const selectType = document.querySelector('#type')
const sendButton = document.querySelector('#sendButton')
let restaurantToAdd = {
  nom: '',
  type: ''
}

function showModal () {
  backdrop.classList.remove('hidden')
  backdrop.classList.add('block')
  modal.classList.remove('hidden')
  modal.classList.add('block')
  document.body.classList.add('overflow-hidden')
}

function hideModal () {
  backdrop.classList.remove('block')
  backdrop.classList.add('hidden')
  modal.classList.remove('block')
  modal.classList.add('hidden')
  document.body.classList.remove('overflow-hidden')
}

function handleChangeInput (event) {
  restaurantToAdd[event.target.id] = event.target.value
}

function handleFormError (fieldId, error) {
  const field = document.querySelector(`#${fieldId}`)
  const errorMessage = document.createElement('span')
  errorMessage.textContent = error
  errorMessage.classList.add('error', 'text-red-400', 'italic')
  field.after(errorMessage)
}

function clearErrors () {
  const errors = document.querySelectorAll('.error')
  errors.forEach(error => error.remove())
}

async function validateForm (event) {
  try {
    clearErrors()
    const result = await validateRestaurantForm(restaurantToAdd)
    if (result) {
      sendButton.disabled = false
    }
  } catch (error) {
    console.error(error.inner)
    // = for (const error of error.inner)
    error.inner.forEach(error => {
      handleFormError(error.path, error.message)
    })
  }
}

async function handleSubmit (event) {
  event.preventDefault()
  try {
    await fetch('http://localhost:3000/restaurants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(restaurantToAdd)
    })
    // Réinitialisation
    main()
    clearErrors()
    restaurantToAdd = {
      nom: '',
      type: ''
    }
    inputNom.value = ''
    selectType.value = ''
    hideModal()
  } catch (error) {
    console.error(error)
  }
}

function init () {
  // On connecte le gestionnaire d'évènement
  fabButton.addEventListener('click', showModal)
  backdrop.addEventListener('click', hideModal)
  // Empecher la propagation vers le backdrop lors d'un click sur le modal
  modal.addEventListener('click', (event) => {
    event.stopImmediatePropagation()
  })

  // Récupérer les valeurs saisies par l'utilisateur dans le formulaire
  inputNom.addEventListener('input', handleChangeInput)
  selectType.addEventListener('change', handleChangeInput)
  inputNom.addEventListener('blur', validateForm)
  selectType.addEventListener('blur', validateForm)
  sendButton.addEventListener('click', handleSubmit)
}

init()
