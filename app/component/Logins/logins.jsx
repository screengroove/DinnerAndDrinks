import React from 'react'
import axios from 'axios'
import { Router, Route, Link, browserHistory } from 'react-router'
import TextField from 'material-ui/TextField'
import {orange500, blue500, blue800} from 'material-ui/styles/colors'



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
    const styles = {
      errorStyle: {
        color: orange500
      },
      underlineStyle: {
        borderColor: orange500
      },
      floatingLabelStyle: {
        color: blue500
      },
      floatingLabelFocusStyle: {
        color: blue800
      }
    }
    return (
      <div id="login">
        <TextField
          floatingLabelText='Email Address' type='email' id='email' required
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        /><br/>
        <TextField
          floatingLabelText='Password' type='password' id='password' required
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        /><br/>
        <button onClick={this.submitLoginForm}>Submit Form</button><br /><br />
        <button onClick={this.clearLocalStorage}>Logout</button><br />

      </div>
    )
  }
}
