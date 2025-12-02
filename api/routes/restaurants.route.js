const restaurantModel = require('../models/restaurant.model')
const { openConnectionToDatabase } = require('../utils/db')

const router = require('express').Router()

router.get('/', async (req, res) => {
  try {
    // Ouvrir la connection à la base de données
    await openConnectionToDatabase()
    // On récupère les restaurants depuis la base de données
    const result = await restaurantModel.findAll()
    // console.log(result)

    // Fermer la connection à la base de données
    // await closeConnectionToDatabase()
    // On retourne la liste de restaurants dans la réponse de l'API
    return res.status(200).json({
      message: 'OK',
      data: result
    })
  } catch (error) {
    console.error(error)
    // On renvoit l'erreur en cas de problèmes
    return res.status(500).json({
      error
    })
  }
})
router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    await openConnectionToDatabase()

    const restaurant = await restaurantModel.create({
      nom: req.body.nom,
      type_nourriture: req.body.type
    })
    return res.status(200).json({
      message: 'OK',
      data: restaurant
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      error
    })
  }
})
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    if (!id) return res.status(500).send('ID missing')
    const data = await restaurantModel.findByPk(id)
    return res.status(200).json({
      message: 'OK',
      data
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      error
    })
  }
})
module.exports = router
