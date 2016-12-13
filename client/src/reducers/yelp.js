// REDUCER
import { pizza } from '../data/yelp.js'
import { bars } from '../data/bars.js'

const initialState = {
  listings: ["a","b"],
  loading: false
  
}

function yelp(state = initialState , action) {
  switch(action.type){    
    case 'YELP_LISTINGS':
      console.log("YELP_LISTINGS REDUCER", action.payload )
        return Object.assign( { }, state, {
            listings: action.payload.businesses,
            region: action.payload.region
        });
      case 'IS_LOADING':
        return Object.assign( { }, state, {
          loading: true
        });
      case 'IS_LOADED':
        return Object.assign( { }, state, {
          loading: false
        });
    default:
      return state;
  }
  return state;
}


export default yelp;