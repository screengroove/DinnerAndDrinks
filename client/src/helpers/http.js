import axios from 'axios';

export function getRESTAURANTS(find, near, price) {
    return axios.get('/api/yelp/search', {
            params: {
                find: find,
                near: near,
                price: price
            }
        })
        .then((resp) => {
            //_getBARS(resp, price)
            console.log("RESP", resp )
                
            return _getPHOTOS(resp)
        })
        .catch((err)=>{
            console.log(err )            
        })
}

export function getBARS(lat, lng, price) {
    console.log("IN getBARS " )
    return axios.get('/api/yelp/searchbars', {
            params: {
                price: price,
                latitude: lat,
                longitude: lng
            }
        })
        .then((resp) => {
            console.log("IN getBARS " , resp)
            // _getPHOTOS(resp)
           // _getBARS(resp, price)
          
            return _getPHOTOSBAR(resp)
        })
        .catch((err)=>{
            console.log(err )            
        })
}

function _getPHOTOS(resultArr) {
    let bizArray = resultArr.data.businesses

   // This is
    const apiCallMaker = function(venue) {
        let venueID = venue.id;
        return axios.get('api/yelp/business', {
            params: {
                id: venueID
            }
        })
    }

    const arrayOfPromises = bizArray.map(venue => {
        return apiCallMaker(venue)
    })

    return axios.all(arrayOfPromises)
        .then((photoData) => {
            bizArray.forEach((venue, index) => {
                venue.photos = photoData[index].data
            })
            return {businesses: bizArray,
                        region : resultArr.data.region
                    }
        })
        .catch((err) => {
            console.log(err)
        })
}

function _getPHOTOSBAR(resultArr) {
    let bizArray = resultArr.data

   // This is
    const apiCallMaker = function(venue) {
        let venueID = venue.id;
        console.log("VENUE ID",venueID )
            
        return axios.get('api/yelp/business', {
            params: {
                id: venueID
            }
        })
    }

    const arrayOfPromises = bizArray.map(venue => {
        return apiCallMaker(venue)
    })

    return axios.all(arrayOfPromises)
        .then((photoData) => {
            bizArray.forEach((venue, index) => {
                venue.photos = photoData[index].data
            })
            return {businesses: bizArray,
                        region : resultArr.data.region
                    }
        })
        .catch((err) => {
            console.log(err)
        })
}








