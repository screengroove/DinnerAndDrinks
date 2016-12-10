

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

// module.exports.findBarsNearby = function(array){
//
// }
