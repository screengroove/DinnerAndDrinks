import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import App   from '../components/App';
import Home   from '../components/Home';
import Listings   from '../components/Listings';
import Results   from '../components/Results';

import { Provider } from 'react-redux';
import  store, { history } from '../store/store.js';


const routes = (
<Provider store={store}>	
	  <Router history={ history }>	     
		<Route path='/' component={App} />  
			<IndexRedirect to="/home"/>
			<Route path='home' component={Home} />
			<Route path='map' component={Listings} />
			<Route path='results' component={Results} />
		<Route/>
	  </Router>
  </Provider>
)

export default routes;