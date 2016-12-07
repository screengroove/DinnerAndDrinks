import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './sass/index.scss'

// Importing MasterPage for the router
import MasterPage from './pages/MasterPage.jsx'
import MainPage from './pages/MainPage/MainPage.jsx'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage.jsx'
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx'
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx'
import AuthService from './component/AuthService/authService.jsx'
import Login from './component/Logins/logins.jsx'
// import AuthService class

const auth = new AuthService('1kZVXDOsyi16sfWAHEjefukPuX6HFjgc', 'recommend.auth0.com')

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

// Main page to re-render routes is MasterPage
// IndexRoute is the component seen on that '/' route
class Root extends React.Component {

  render () {
    return (
      <MuiThemeProvider>
        <Router history={browserHistory}>
          <Route path='/' component={MasterPage}>
            <IndexRoute component={MainPage} />
            <Route path='favorites' component={FavoritesPage} />
            <Route path='signup' component={SignUpPage} />
            <Route path='login' component={Login} />
            <Route path='profile' component={ProfilePage} onEnter={requireAuth} />
          </Route>
        </Router>
      </MuiThemeProvider>
    )
  }
}

// Rendering React to the index.html page
ReactDOM.render(<Root />, document.getElementById('app'))
