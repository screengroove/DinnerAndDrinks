import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import './sass/index.scss'

// Importing MasterPage for the router
import MasterPage from './pages/MasterPage.jsx'
import MainPage from './pages/MainPage/MainPage.jsx'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage.jsx'
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx'
import appData from './redux/appData.jsx'

const actionLogger = ({dispatch, getStore}) =>
    (next) => (action) => { console.log(action); return next(action) }
const middleware = applyMiddleware(actionLogger)

let dataStore = createStore(appData, middleware)

// Main page to re-render routes is MasterPage
// IndexRoute is the component seen on that '/' route
class Root extends React.Component {

  render () {
    return (
      <Provider store={dataStore}>
        <Router history={browserHistory}>
          <Route path='/' component={MasterPage}>
            <IndexRoute component={MainPage} />
            <Route path='favorites' component={FavoritesPage} />

            <Route path='signup' component={SignUpPage} />

          </Route>
        </Router>
      </Provider>
    )
  }
}

// Rendering React to the index.html page
ReactDOM.render(<Root />, document.getElementById('app'))
