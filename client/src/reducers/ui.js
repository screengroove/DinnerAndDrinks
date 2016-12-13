
const initialState = {
  loading: false
  
}

function ui(state = initialState , action) {
  switch(action.type){    
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

export default ui;
