import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import styles from './sass/index.scss'

// Importing MasterPage for the router
import MasterPage from './pages/MasterPage.jsx'
import MainPage from './pages/MainPage/MainPage.jsx'

// Main page to re-render routes is MasterPage
// IndexRoute is the component seen on that '/' route
class Root extends React.Component {

    render() {
        return (
            // Used to name the routes on address bar
            <Router history={ browserHistory }>
            {/* Nested Routes in React Router: look at docs to add routes */}
                <Route path="/" component={MasterPage}>
                <IndexRoute component={MainPage} />
                 {/* Main page will show on the first route */}

                 {/**

                    Add new Routes here     
                    <Route path="/user" component={*LoginPage*} /> 

                    Don't Forget to import your component at the top

                 */}

                </Route>
            </Router>
            )
        }
}

// Rendering React to the index.html page
ReactDOM.render(<Root />, document.getElementById('app'))