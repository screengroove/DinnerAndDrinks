import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import yelp from './yelp';


const rootReducer = combineReducers({ yelp,  routing: routerReducer });

export default rootReducer;