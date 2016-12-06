import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import Profile from '../../component/Profile/Profile.jsx'
export default class ProfilePage extends React.Component {

  render () {
    return (
      <div>

        <Profile />
        Profile Page
        <br />
        Or go
        <Link to='/'> home.</Link>

      </div>
    )
  }
}
