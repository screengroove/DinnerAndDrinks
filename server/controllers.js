// call model functions in controller functions
//const yelp = require('../config').yelp
const models = require('./models')
let placeholder, placeholder2
const request = require('request')
const API_KEY = require('../config').googleMapsApiKey
console.log("GOOGLE KEYS", API_KEY )
const Yelp = require('yelp')
const helperFunc = require('./helperFunc.js')
const YelpFusion = require('yelp-fusion')

var yelp = new Yelp({
  consumer_key: 'dKI5eBNcR0yw6GYTnzx30A',
  consumer_secret: 'wLrdy1eKIxtqeUIan1-_zhzMJuQ',
  token: 'bJ-D11P4YJT0Q9NbYemqt0_pQZkpKclB',
  token_secret: 'qsxw0l9wRWmlPkn5w8b6xPmNKLU'
});

var token;
YelpFusion.accessToken('1Qd6z3rZis1wTI0urgRGzQ', '6EVEVoMiJDp9lwSlvBW5FZwp69oQWsBidx7TRb0YC5Rq6FHvRsfdjFO9rqGHiktR')
  .then(response => {
    token = response.jsonBody.access_token;
    console.log('yelp access token: ', token);

  }).catch(e => {
    console.log(e);
  });


module.exports = {

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
      //console.log(req.query);
      yelp.search({
        location: req.query.near,
        term: req.query.find
      })
      .then(resp => {
        //sort by rating and return top 10
        var results = helperFunc.sortYelpResultsByRating(resp.businesses)
        var arr = [];
        //var results2 = helperFunc.findBarsNearby()
        resp.businesses = results
        console.log(resp);
        res.send(resp)

      }).catch(err => { console.log(`getSearch Yelp error: `, err) })
    },
    getBars: (req, res) => {

      YelpFusion.client(token).search({
          term: 'bars',
          latitude: 34.1446518,
          longitude: -118.1354532,
          radius: 800
        })
        .then(response2 => {
          //var pics = response2.jsonBody.photos;
          var orderedBars = helperFunc.sortYelpResultsByRating(response2.jsonBody.businesses)
          console.log(orderedBars)
          res.send(orderedBars)
        }).catch(e => {
          console.log(e);
      });
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
  contacts: {
    get: (req, res) => {
      models.contact.get(req, res)
    },
    post: (req, res) => {
      models.contact.post(req.body, res)
      res.send(req.body)
    }
  }



}

// YelpFusion.accessToken('1Qd6z3rZis1wTI0urgRGzQ', '6EVEVoMiJDp9lwSlvBW5FZwp69oQWsBidx7TRb0YC5Rq6FHvRsfdjFO9rqGHiktR')
// .then(response => {
//   const client = YelpFusion.client(response.jsonBody.access_token);
//   client.search({
//     term: 'bars',
//     latitude: 34.1446518,
//     longitude: -118.1354532,
//     radius: 800
//   })
//   .then(response2 => {
//     //var pics = response2.jsonBody.photos;
//     var orderedBars = helperFunc.sortYelpResultsByRating(response2.jsonBody.businesses)
//     console.log(orderedBars)
//   }).catch(e => {
//     console.log(e);
//   });
// }).catch(e => {
//   console.log(e);
// });
