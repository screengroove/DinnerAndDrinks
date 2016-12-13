import { push } from 'react-router-redux';
import { browserHistory } from 'react-router';
import  {getRESTAURANTS, getBARS} from '../helpers/http.js';



export function getDinnerListings(find, near, price) {  
   return function(dispatch) {
    type: 'IS_LOADING'
    getRESTAURANTS(find, near, price)  
     .then(function (response) {
        console.log("API RESPONSE", response);
         dispatch({
          type: 'YELP_LISTINGS',
          payload: response
        });
    })
     .then(function(){
      browserHistory.push('/map')
     })
    //return response.data
  }
}

export function getBarListings(lat, lng) {  
   return function(dispatch) {
   getBARS(lat, lng)
     .then(function (response) {
        console.log("API RESPONSE", response);
         dispatch({
          type: 'YELP_LISTINGS',
          payload: response.data.businesses
        });
    })
     .then(function(){
     		console.log("Transition to Loading")
     		dispatch({
                  type: 'IS_LOADING',
            });
     })
    //return response.data
  }
}

export function setDinnerChoice(choice) { 
	return function(dispatch) {
		 dispatch({
		  type: 'DINNER_CHOICE',
		  payload: choice
		});
	}
}

export function setDrinksChoice(choice) { 
	return function(dispatch) {
		 dispatch({
		  type: 'DRINKS_CHOICE',
		  payload: choice
		});
		browserHistory.push('/results')
	}
}


