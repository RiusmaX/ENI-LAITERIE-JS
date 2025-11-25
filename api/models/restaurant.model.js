const mongoose = require('mongoose')
const { Schema } = mongoose

const RestaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Restaurants', RestaurantSchema)
