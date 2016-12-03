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
    googleMapsApiKey: "AIzaSyB92DEsCCYUsGL5O8ULNESPb12Cg2bVOSA",
    yelpConsumerKey: '9JsyXXhj9pxI0wRtxIdb9Q',
    yelpConsumerSecret: '0D3FHzK5wuysal4WYZY3CeYEdR8',
    yelpToken: 'ivBw983_ASe9DysxtuqI7cxlrGBFOI4m',
    yelpTokenSecret: 'k6QLpFpCtW0r3j_DsqJKEgqmI-Q',
    yelp: yelp
}

