import React from 'react'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import {orange500, blue800, blue900} from 'material-ui/styles/colors'
import { Router, Route, Link, browserHistory } from 'react-router'

export default class SignUp extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      errorMessage: ''
    }

  }

  validatePassword () {
    console.log('validatePassword')

    let password = document.getElementById('password').value
    let confirmPassword = document.getElementById('confirmPassword').value
    if (password === confirmPassword) {
      this.setState({errorMessage: ''})
    } else {
      this.setState({errorMessage: 'Passwords do not match'})
    }
    this.setState({errorMessage: ''})

  }
 

  validatePassword () {
    console.log('validatePassword')

    let password = document.getElementById('password').value
    let confirmPassword = document.getElementById('confirmPassword').value
    if (password === confirmPassword) {
      this.setState({errorMessage: ''})
    } else {
      this.setState({errorMessage: 'Passwords do not match'})
    }
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
        console.log(response, 'respnss')
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
    const styles = {
      errorStyle: {
        color: orange500
      },
      underlineStyle: {
        borderColor: orange500
      },
      floatingLabelStyle: {
        color: blue800
      },
      floatingLabelFocusStyle: {
        color: blue900
      }
    }
    return (

      <div className="signup-div"><br />
      <p id="signup-p">Sign Up</p>

        <TextField
          floatingLabelText='First Name' type='text' id='firstName' required
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        /><br />
        <TextField
          floatingLabelText='Email Address' type='email' id='email' required
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        /><br />
        <TextField
          floatingLabelText='Password' type='password' id='password' required
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        /><br />
        <TextField

          floatingLabelText='Confirm Password'input type='password' id='confirmPassword'

          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          onChange={this.validatePassword.bind(this)}
         /><br />
        <p id="errorMessage">{this.state.errorMessage}</p><br />

        <button type='submit' className="button" onClick={this.submitSignupForm}>Submit</button>
        <br/>
        Already Have an Account?
        <Link to='/login'> Login</Link>
        <br />
        Or go
        <Link to='/'> home.</Link>


      </div>
    )
  }
}

