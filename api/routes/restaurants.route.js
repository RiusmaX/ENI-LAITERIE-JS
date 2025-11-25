const restaurantModel = require('../models/restaurant.model')

const router = require('express').Router()

router.get('/', async (req, res) => {
  try {
    // On récupère les restaurants depuis la base de données
    const result = await restaurantModel.find({})
    // On retourne la liste de restaurants dans la réponse de l'API
    return res.status(200).json({
      message: 'OK',
      data: result
    })
  } catch (error) {
    console.error(error)
    // On renvoit l'erreur en cas de problèmes
    return res.status(500).json({
      error: error
    })
  }
 
})

module.exports = router
