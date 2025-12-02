const { DataTypes } = require('sequelize')
const { sequelize } = require('../utils/db')

const Restaurant = sequelize.define(
  'Restaurant',
  {
    nom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    adresse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type_nourriture: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'Restaurants',
    timestamps: true
  }
)

module.exports = Restaurant

// const mongoose = require('mongoose')
// const { Schema } = mongoose

// const RestaurantSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true
//     }
//   },
//   { timestamps: true }
// )

// module.exports = mongoose.model('Restaurants', RestaurantSchema)
