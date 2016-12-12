import { push } from 'react-router-redux';
import { browserHistory } from 'react-router';


export function getListings() { 
return {
     type: 'FOOD_LISTINGS'
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


