
const controllers = require('./controllers')
const axios = require('axios');
const Yelp = require('yelp')
const YelpFusion = require('yelp-fusion')
var yelp = new Yelp({
  consumer_key: 'dKI5eBNcR0yw6GYTnzx30A',
  consumer_secret: 'wLrdy1eKIxtqeUIan1-_zhzMJuQ',
  token: 'bJ-D11P4YJT0Q9NbYemqt0_pQZkpKclB',
  token_secret: 'qsxw0l9wRWmlPkn5w8b6xPmNKLU'
});

// var token;
// YelpFusion.accessToken('1Qd6z3rZis1wTI0urgRGzQ', '6EVEVoMiJDp9lwSlvBW5FZwp69oQWsBidx7TRb0YC5Rq6FHvRsfdjFO9rqGHiktR')
//   .then(response => {
//     token = response.jsonBody.access_token;
//     console.log('yelp access token: ', token);
//
//   }).catch(e => {
//     console.log(e);
//   });

module.exports.sortYelpResultsByRating = function(array){
  array.sort(function(a, b){
    if(a.rating < b.rating){
      return 1;
    }
    if(a.rating > b.rating){
      return -1;
    }
    return 0;
  });
  return array.splice(array.length - 10);
};

module.exports.sortYelpResultsByDistance = function(array){
  array.sort(function(a, b){
    if(a.distance > b.distance){
      return 1;
    }
    if(a.distance < b.distance){
      return -1;
    }
    return 0;
  });
  return array;
};

module.exports.removeRestFromBars = function(array){
      //console.log('yelp access token: ', response.jsonBody.access_token);

}
