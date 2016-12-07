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
import HotspotsPage from './pages/HotspotsPage/HotspotsPage.jsx'
import Login from './component/Logins/logins.jsx'

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
            <Route path='profile' component={ProfilePage} />
            <Route path='hotspots' component={HotspotsPage} />
          </Route>
        </Router>
      </MuiThemeProvider>
    )
  }
}

// Rendering React to the index.html page
ReactDOM.render(<Root />, document.getElementById('app'))
