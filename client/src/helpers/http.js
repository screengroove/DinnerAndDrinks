import axios from 'axios';

export function getRESTAURANTS(find, near) {
    return axios.get('/api/yelp/search', {
            params: {
                find: find,
                near: near
            }
    })
}

export function getBARS(lat, lng) {
    return axios.get('/api/yelp/searchbars', {
            params: {
                lat: lat,
                lng: lng
            }
    })
}
