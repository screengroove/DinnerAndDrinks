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
            // _getPHOTOS(resp)
            _getBARS(resp, price)
            console.log("RESP", resp )
                
            return _getPHOTOS(resp)
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



 function _getBARS(resultArr, price) {
     //console.log("IN GET BARS",resultArr )
     let bizArray = resultArr.data.businesses
     bizArray.forEach(function(venue) {
         let lat = venue.coordinates.latitude;
         let lng = venue.coordinates.longitude;
         console.log("EACH PRICE IN BAR", price)

         axios.get('api/yelp/searchbars', {
                 params: {
                     lat: lat,
                     lon: lng,
                     price: price
                 }
             })
             .then((nearbyBars) => {
                 venue.bars = nearbyBars
             })
             .catch((err)=>{
                 console.log(err )            
             })
     })
 }






    // bizArray.forEach(function(venue){
    //     let venueID = venue.id;
    //     //console.log("VENUE ID",venueID )          
    //    axios.get('api/yelp/business', {
    //             params: {
    //                 id: venueID
    //             }
    //     })
    //     .then(photoResp =>{
    //         venue.photos = photoResp.data
    //     })

    // })

