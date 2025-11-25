const mongoose = require('mongoose')

async function connectToDatabase () {
  try {
    await mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
    console.info('Connection à la base de données réussie !')
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  connectToDatabase
}
