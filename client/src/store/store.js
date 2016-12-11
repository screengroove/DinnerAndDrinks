import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

// import the root reducer
import rootReducer from '../reducers/index';

//const store = createStore(rootReducer , applyMiddleware(thunk));

//const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
 const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;