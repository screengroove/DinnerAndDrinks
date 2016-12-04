import { combineReducers } from 'redux'

let name = ''
let latitude = ''
let longitude = ''

const locationAction = (name, lat, long) => {

}

const searchTermAction = (term) => {

}

const location = (state = {}, action) => {
    switch (action.type) {
        case "CHANGE_LOCATION":
            return {
                name: action.name,
                latitude: action.latitude,
                longitude: action.longitude
            }
        default:
            return state
    }
}

const searchTerm = (state = {}, action) => {
    switch (action.type) {
        case "CHANGE_TERM":
            return {
                term: ''
            }
        default:
            return state
    }   
}

let appData = combineReducers({ location, searchTerm })
export default appData
