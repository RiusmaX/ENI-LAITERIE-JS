// const mongoose = require('mongoose')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'mariadb'
  }
)

async function openConnectionToDatabase () {
  try {
    await sequelize.authenticate()
    console.info('Connecté à la base de données MariaDB')
  } catch (error) {
    console.error('Erreur de connection à la base de données')
    console.error(error)
  }
}

async function closeConnectionToDatabase () {
  try {
    await sequelize.close()
    console.info('Déconnecté de la base de données MariaDB')
  } catch (error) {
    console.error('Erreur de déconnection à la base de données')
    console.error(error)
  }
}

// async function connectToDatabase () {
//   try {
//     await mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
//     console.info('Connection à la base de données réussie !')
//   } catch (error) {
//     console.error(error)
//   }
// }

module.exports = {
  sequelize,
  openConnectionToDatabase,
  closeConnectionToDatabase
  // connectToDatabase
}
