const Animal = require('./Animal')

class Chat extends Animal {
  constructor (nom, race) {
    // Appelle le constructeur de la classe parente
    super(nom)
    this.race = race
  }

  // Surcharge (j'écrase la fonction de la classe parente)
  parler () {
    console.log(`Le chat ${this.nom} de race ${this.race} miaule`)
  }
}

module.exports = Chat
