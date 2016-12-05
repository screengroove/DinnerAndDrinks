import { combineReducers } from 'redux'

const location = (state = {lat: 33.976002, long: -118.390891}, action) => {
  switch (action.type) {
    case 'CHANGE_LOCATION':
      return action.loc
    default:
      return state
  }
}

const searchTerm = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_TERM':
      return action.term
    default:
      return state
  }
}

const appData = combineReducers({ location, searchTerm })
export default appData

