import React from 'react'
import axios from 'axios'
import { Router, Route, Link, browserHistory } from 'react-router'

export default class SignUp extends React.Component {

  constructor (props) {
    super(props)
  }

  submitSignupForm () {
    let email = document.getElementById('email').value
    let firstName = document.getElementById('firstName').value
    let password = document.getElementById('password').value
    let confirmPassword = document.getElementById('confirmPassword').value

    let signup = {
      firstName: firstName,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }

    axios.post('/api/auth', signup)
      .then((response) => {
        document.querySelector('#firstName').value = ''
        document.querySelector('#email').value = ''
        document.querySelector('#password').value = ''
        document.querySelector('#confirmPassword').value = ''
        browserHistory.push('/')
      })
      .catch((error) => {
        console.log('Error in axios hotspot from POST: ', error)
      })
  }

  render () {
    return (
      <div>
      Sign Up <br />
        <input placeholder='First Name' id='firstName' /><br />
        <input placeholder='Email' id='email' /><br />
        <input placeholder='Password' id='password' /><br />
        <input placeholder='Please confirm password' id='confirmPassword' /><br />
        <button onClick={this.submitSignupForm}>Submit Form</button>
      </div>
    )
  }
}

