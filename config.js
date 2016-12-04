// secret keys go here
// add to .gitignore on your own computer
// when adding here talk to everyone so they can add
// those keys and values too
const Yelp = require('yelp')
const yelp = new Yelp({
  consumer_key: '9JsyXXhj9pxI0wRtxIdb9Q',
  consumer_secret: '0D3FHzK5wuysal4WYZY3CeYEdR8',
  token: 'ivBw983_ASe9DysxtuqI7cxlrGBFOI4m',
  token_secret: 'k6QLpFpCtW0r3j_DsqJKEgqmI-Q'
})
module.exports = {
  googleMapsApiKey: 'AIzaSyB92DEsCCYUsGL5O8ULNESPb12Cg2bVOSA',
  yelp: yelp,
  'database': {
    'test': 'mongodb://localhost:27017/test',
    'mongo': 'mongodb://beeple:secwets@ds011228.mlab.com:11228/beeple'
  }
}

