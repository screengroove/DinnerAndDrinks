const config = require('./config')
const oauth = require('oauth')
const querystring = require('querystring')
const OAuth = oauth.OAuth
const baseUrl = 'https://api.yelp.com/v2/'

class Yelp {
  constructor (props) {
    this.oauth = new OAuth(
            null, // request token
            null, // access token
            config.yelpConsumerKey,
            config.yelpConsumerSecret,
            '1.0A',
            null,
            'HMAC-SHA1'
        )
  }

  get (endpoint, params = {}, callback) {
    const promise = new Promise((resolve, reject) => {
      const debug = params.debug
      delete params.debug

      this.oauth.get(
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

  search (params, cb) {
    return this.get('search', params, cb)
  }

  business (id, cb) {
    return this.get(`business/${id}`, undefined, cb)
  }

  phoneSearch (params, cb) {
    return this.get('phone_search', params, cb)
  }
}

// Add more functions here

export default Yelp
