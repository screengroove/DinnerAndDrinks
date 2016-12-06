import React from 'react'
import axios from 'axios'
import { Router, Route, Link, browserHistory } from 'react-router'

export default class Login extends React.Component {

  constructor (props) {
    super(props)
  }

  submitLoginForm () {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let login = {
      email: email,
      password: password

    }

    axios.get('/api/auth', {params: login})
      .then((response) => {
        console.log('Successful AUTH reponse in login: ', response)
        document.querySelector('#email').value = ''
        document.querySelector('#password').value = ''
        localStorage.setItem('User-Name', response.data.firstName)
        localStorage.setItem('User-Id', response.data._id)
        localStorage.setItem('UserLoggedIn', true)

        browserHistory.push('/')
      })
      .catch((error) => {
        console.log('Error in axios hotspot from get login: ', error)
      })
  }
  clearLocalStorage () {
    localStorage.clear()
    browserHistory.push('/')
      // redirect to home
  }

  render () {
    return (
      <div>
        <input placeholder='Email' id='email' /><br />
        <input placeholder='Password' type='password' id='password' /><br />
        <button onClick={this.submitLoginForm}>Submit Form</button><br /><br />
        <button onClick={this.clearLocalStorage}>Logout</button><br />

      </div>
    )
  }
}
