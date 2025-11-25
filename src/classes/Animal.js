class Animal {
  // Valeur par défaut
  constructor (nom = 'Inconnu') {
    this._nom = nom
  }

  get nom () {
    return this._nom.toUpperCase()
  }

  set nom (nouveauNom) {
    if (nouveauNom.length > 0) {
      this._nom = nouveauNom
    } else {
      throw new Error('Le nom ne peut pas être vide')
    }
  }

  parler () {
    console.log(`L'animal ${this.nom} parle`)
  }
}

module.exports = Animal
