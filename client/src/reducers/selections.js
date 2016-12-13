// REDUCER

const initialState = {
  dinnerVenue: 'Pick the Restaurant',
  drinksVenue: 'Pick the Bar',
  dinnerSelected: false
  
}

function selections(state = initialState , action) {
  switch(action.type){
    case 'DINNER_CHOICE' :
    console.log("SELECTION ACTION", action.payload )     
        return Object.assign( { }, state, {
            dinnerData: action.payload,
            dinnerVenue: action.payload.name,
            dinnerSelected: true
        });
    case 'DRINKS_CHOICE' :
    console.log("DRINKS ACTION", action.payload )     
        return Object.assign( { }, state, {
            drinksData: action.payload,
            drinksVenue: action.payload.name
        });
    default:
      return state;
  }
  return state;
}


export default selections;

