import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import yelp from './yelp';
import selections from './selections';
import ui from './ui';


const rootReducer = combineReducers({ yelp, selections, ui, routing: routerReducer });

export default rootReducer;