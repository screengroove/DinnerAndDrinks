// secret keys go here
// add to .gitignore on your own computer
// when adding here talk to everyone so they can add
// those keys and values too
require('dotenv').config()
const Yelp = require('yelp')
const yelp = new Yelp({
  consumer_key: process.env.YELP_KEY,
  consumer_secret: process.env.YELP_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET
})
module.exports = {
  googleMapsApiKey: process.env.GOOGLE_MAPS_KEY,
  yelp: yelp,
  'database': {
    //'test': process.env.test,
    'mongo': process.env.MONGO
  }
}



