// REDUCER
import { pizza } from '../data/yelp.js'
import { bars } from '../data/bars.js'

const initialState = {
  restaurants: pizza,
  bars: bars,
  listings: pizza
  
}

function yelp(state = initialState , action) {
  switch(action.type){
    case 'FOOD_LISTINGS':
        return Object.assign( { }, state, {
            restaurants: action.payload
        });

    default:
      return state;
  }
  return state;
}


export default yelp;