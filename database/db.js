// MongoDB database
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Schema
let schema = new Schema({
  user: {
    auth: {}, // one to one

    favorites: [{
      yelpId: String,
      name: String,
      catergories: [String],
      address: String,
      phone: String,
      rating: Number,
      image_url: String,
      bussinessUrl: String
    }] // one to many
  },
  comments: [{
    author: String,
    message: String,
    date: Date,
    venue: String
  }],

  hotspots: [{

    name: String,
    address: String,
    latitude: Number,
    longitude: Number,
    description: String,
    rating: Number,
    image: String

  }]

})

// Models
let Rec = mongoose.model('Rec', schema)

// Exports here
module.exports = Rec
