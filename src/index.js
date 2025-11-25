console.log('Début de mon programme')

const Animal = require('./classes/Animal')
const Chat = require('./classes/Chat')

const animal = new Animal('Toto')
animal.parler()

const minou = new Chat('Ricotta', 'Siamoise')
minou.parler()

try {
  minou.nom = ''
} catch (error) {
  console.error('ERREUR : ' + error.message)
}

// Pas de paramètre = Paramètre par défaut
const inconnu = new Animal()
inconnu.parler()
