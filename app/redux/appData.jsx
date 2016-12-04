import { combineReducers } from 'redux'

const location = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_LOCATION':
      return action.loc
  }
  return state
}

const searchTerm = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_TERM':
      return action.term
  }
  return state
}

const appData = combineReducers({ location, searchTerm })
export default appData

