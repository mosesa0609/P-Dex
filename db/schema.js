const mongoose = require('./connection')

const PokieSchema = new mongoose.Schema({
  name: String,
  url: String,
  index: Number,
  type1: String,
  type2: String
})

const Pokie = mongoose.model('Pokie', PokieSchema)

module.exports = Pokie
