// secret keys go here
// add to .gitignore on your own computer
// when adding here talk to everyone so they can add
// those keys and values too
require('dotenv')
const Yelp = require('yelp')
const yelp = new Yelp({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  token: process.env.token,
  token_secret: process.env.token_secret
})
module.exports = {
  googleMapsApiKey: process.env.googleMapsApiKey,
  yelp: yelp,
  'database': {
    'test': process.env.test,
    'mongo': process.env.mongo
  }
}
