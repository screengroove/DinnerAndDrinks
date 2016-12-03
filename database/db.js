// MongoDB database
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Schema
const userSchema = new Schema({
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
})
const commentSchema = new Schema({
  author: String,
  message: String,
  date: Date,
  venue: String
})
const hotspotSchema = new Schema({
  name: String,
  address: String,
  latitude: Number,
  longitude: Number,
  description: String,
  rating: Number,
  image: String
})

// Models
let User = mongoose.model('User', userSchema)
let Hotspot = mongoose.model('Hotspot', hotspotSchema)
let Comment = mongoose.model('Review', commentSchema)
// Exports here
module.exports = {
  User: User,
  Hotspot: Hotspot,
  Comment: Comment
}
