// MongoDB database
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Schema
const userSchema = new Schema({
<<<<<<< HEAD
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
  favorites: [{
    yelpId: String,
    name: String,
    catergories: [String],
    address: String,
    phone: String,
    rating: Number,
    image_url: String,
    businessUrl: String,
    lat: Number,
    long: Number
  }]
=======
  username: String,
  email: String,
  password: String,
  fbAuth: Boolean,
  name: String,
  bio: String,
  photo: String,
  hometown: String,
  interests: String
})
const favoriteSchema = new Schema({
  userId: String,
  yelpId: String,
  name: String,
  categories: [String],
  address: String,
  phone: String,
  rating: Number,
  image_url: String,
  businessUrl: String,
  lat: Number,
  long: Number
>>>>>>> afd4f5d02248da72dd17324a73b47bc519f44a89
})
const commentSchema = new Schema({
  userId: String,
  message: String,
  date: Date,
  yelpId: String
})
const hotspotSchema = new Schema({
  name: String,
  address: String,
  lat: Number,
  long: Number,
  description: String,
  rating: Number,
  image: String
})
// Models
let User = mongoose.model('User', userSchema)
let Hotspot = mongoose.model('Hotspot', hotspotSchema)
let Comment = mongoose.model('Review', commentSchema)
let Favorites = mongoose.model('Favorites', favoriteSchema)
// Exports here
module.exports = {
  User: User,
  Hotspot: Hotspot,
  Comment: Comment,
  Favorites: Favorites
}
