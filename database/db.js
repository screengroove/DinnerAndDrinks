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
<<<<<<< HEAD
    }] // one to many
  }
=======
    }] // one to many //asdf
  },
>>>>>>> b4be1c97c3b75206f43b0f17002d397f071211fa
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
