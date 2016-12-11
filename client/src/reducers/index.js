import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import yelp from './yelp';
import selections from './selections';


const rootReducer = combineReducers({ yelp, selections,  routing: routerReducer });

export default rootReducer;