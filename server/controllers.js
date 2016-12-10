// call model functions in controller functions
//const yelp = require('../config').yelp
const models = require('./models')
let placeholder, placeholder2
const request = require('request')
const API_KEY = require('../config').googleMapsApiKey
console.log("GOOGLE KEYS", API_KEY )
const Yelp = require('yelp')
const helperFunc = require('./helperFunc.js');

var yelp = new Yelp({
  consumer_key: 'dKI5eBNcR0yw6GYTnzx30A',
  consumer_secret: 'wLrdy1eKIxtqeUIan1-_zhzMJuQ',
  token: 'bJ-D11P4YJT0Q9NbYemqt0_pQZkpKclB',
  token_secret: 'qsxw0l9wRWmlPkn5w8b6xPmNKLU'
});


module.exports = {
    // Josh's endpoint is user
  users: {
    get: (req, res) => {
      models.users.get(req.query, res)
    },
    post: (req, res) => {
      models.users.post(req.body, res)
      res.send(req.body)
    }
  },
  favorites: {
    get: (req, res) => {
      models.favorites.get(req.body, res)
    },
    post: (req, res) => {
      models.favorites.post(req.body)
      res.send(req.body)
    },
    delete: (req, res) => {
      models.favorites.delete(req.body, res)
    }
  },
  comments: {
    get: (req, res) => {
            /* can look something like this
                models.user.get() */
    },
    post: (req, res) => {
            /* can look something like this
                models.user.post() */
    }
  },
  hotspots: {
    get: (req, res) => {
      models.hotspots.get(req.body, res)
    },
    post: (req, res) => {
      req.body.lat = 0
      req.body.long = 0
      request.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + req.body.address + '&key=' + API_KEY, (error, response, body) => {
        if (error) {
          console.log(`There has been a grave error: ${error}`)
        }
        let coordinates = JSON.parse(body)
        req.body.lat = coordinates.results[0].geometry.location.lat
        req.body.long = coordinates.results[0].geometry.location.lng
        models.hotspots.post(req.body)
        res.send(req.body)
      })
    }
  },
  yelp: {
    getPhoneSearch: (req, res) => {
      yelp.phoneSearch({ phone: '' })
        .then(resp => { res.send(resp) })
        .catch((err) => { console.log(`getPhoneSearch error: `, err) })
    },
    postPhoneSearch: (req, res) => {
      yelp.phoneSearch({ phone: req.body.phoneNumber })
        .then(console.log)
        .catch((err) => { console.log(`postPhoneSearch error: `, err) })
    },
    postSearch: (req, res) => {
      placeholder = {
        term: req.body.term,
        location: req.body.location
      }
      res.json({
        location: req.body.location,
        term: req.body.term
      })
    },
    getSearch: (req, res) => {
      console.log(req.query);
      yelp.search({
        location: req.query.near,
        term: req.query.find
      })
      .then(resp => {


        var results = helperFunc.sortYelpResultsByRating(resp.businesses)
        resp.businesses = results

        res.send(resp)



      }).catch(err => { console.log(`getSearch Yelp error: `, err) })
    },
    postBusiness: (req, res) => {
      placeholder2 = {
        id: req.body.id
      }
      res.json(placeholder2)
    },
    getBusiness: (req, res) => {
      yelp.business(placeholder2.id).then(resp => {
        res.send(resp)
      }).catch(err => { console.log(`getBusiness Yelp error: `, err) })
    }
  },
  maps: {
    get: (req, res) => {
            /* can look something like this
                models.user.post() */
    },
    post: (req, res) => {
            /* can look something like this
                models.user.post() */
    }
  }

}
