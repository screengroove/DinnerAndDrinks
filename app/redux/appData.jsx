import { combineReducers, createStore } from 'redux'

let name = ''
let latitude = ''
let longitude = ''

const locationAction = (name, lat, long) => {

}

const searchTermAction = () => {

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

module.exports = combineReducers({ location, searchTerm })
