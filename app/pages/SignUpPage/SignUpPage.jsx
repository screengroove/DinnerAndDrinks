import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import SignUp from '../../component/SignUp/signUp.jsx'

export default class SignUpPage extends React.Component {

  render () {
    return (
     <div className="signup-div">
      <SignUp />
     </div>
    )
  }
}
