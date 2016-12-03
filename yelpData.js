const config = require('./config')
const oauth = require('oauth')
const querystring = require('querystring')
const OAuth = oauth.OAuth
const baseUrl = 'https://api.yelp.com/v2/'

let Yelp = () => {
  let work = new OAuth(
            null, // request token
            null, // access token
            config.yelpConsumerKey,
            config.yelpConsumerSecret,
            '1.0A',
            null,
            'HMAC-SHA1'
        )
}

Yelp.prototype.get = (endpoint, params = {}, callback) => {
  const promise = new Promise((resolve, reject) => {
    const debug = params.debug
    delete params.debug

    this.work.get(
            baseUrl + endpoint + '?' + querystring.stringify(params),
            config.yelpToken,
            config.yelpTokenSecret,
            (err, data, resp) => {
              if (err) return reject(err)
              const lastestData = JSON.parse(data)
              if (debug) {
                return resolve([lastestData, resp])
              }
              resolve(lastestData)
            }
        )
  })
  if (typeof callback === 'function') {
    promise.then(res => callback(res)).catch(callback)
    return null
  }
  return promise
}

Yelp.prototype.search = (params, cb) => (
    this.get('search', params, cb)
)

Yelp.prototype.business = (id, cb) => (
    this.get(`business/${id}`, undefined, cb)
)

Yelp.prototype.phoneSearch = (params, cb) => (
    this.get('phone_search', params, cb)
)

// Add more functions here

export default Yelp
