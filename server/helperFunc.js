
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

module.exports.findBarsNearby = function(){
    yelp.search({
      location: 'santa monica',
      term: 'bars'
    })
    .then(response =>{
      console.log("bar search.........",response);
    })
    .catch(err => {
      console.log("something", err)
    })
};

module.exports.getBusinessInfo = function(restId){
      //console.log('yelp access token: ', response.jsonBody.access_token);
      
}
