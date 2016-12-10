// REDUCER
import { pizza } from '../data/yelp.js'

const initialState = {
  restaurants: pizza
  
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