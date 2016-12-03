// MongoDB database
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Schema
let schema = new Schema({
  user: {
    auth: {
      username: String,
      email: String,
      password: String,
      fbAuth: Boolean
    },
    profile: [{
      name: String,
      bio: String,
      photo: String,
      hometown: String,
      interests: String
    }],
    favoites: [{
      yelpId: String,
      name: String,
      catergories: [String],
      address: String,
      phone: String,
      rating: Number,
      image_url: String,
      bussinessUrl: String,
      lat: Number,
      long: Number
    }] // one to many
  }
})

// Models
let Rec = mongoose.model('Rec', schema)

// Exports here
module.exports = Rec
