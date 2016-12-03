import React from 'react'

// Needed for Routing only
// Not a component page or display page
// anything on this MasterPage will be on EVERY page of the app
import MainPage from './MainPage/MainPage.jsx'

export default class MasterPage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
            )
        }
}