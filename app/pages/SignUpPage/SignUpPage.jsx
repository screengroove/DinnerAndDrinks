import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import SignUp from '../../component/SignUp/signUp.jsx'

export default class SignUpPage extends React.Component {

  render () {
    return (
      <div>

        <SignUp />
        Already Have an Account?
        <Link to='/login'> Login</Link>
        <br />
        Or go
        <Link to='/'> home.</Link>
      </div>
    )
  }
}
