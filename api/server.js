require('dotenv').config({ path: '.env.local' })

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Logger : permet de notifier dans la console tout les accès à l'API (avec détail comme la date, l'heure et l'origine)
const morgan = require('morgan')
app.use(morgan('short'))

// Protection par domaine (origine)
const cors = require('cors')
app.use(cors())

// Suite de 12 outils de sécurité supplémentaires
const helmet = require('helmet')
app.use(helmet())
// Port d'écoute de l'api
const port = 3000

// Routes
const restaurantRoute = require('./routes/restaurants.route')

app.use('/restaurants', restaurantRoute)

app.get('/', (req, res) => {
  return res.send('Hello API !')
})

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`)
})
