// REDUCER
import { pizza } from '../data/yelp.js'

const initialState = {
  yelp: pizza,
  
}

function yelp(state = initialState , action) {

  return state;
}



export default yelp;