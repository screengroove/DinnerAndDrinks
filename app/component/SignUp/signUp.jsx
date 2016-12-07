import React from 'react'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import {orange500, blue800, blue900} from 'material-ui/styles/colors'
import { Router, Route, Link, browserHistory } from 'react-router'
import Button from 'react-bootstrap/lib/Button'
import Modal from 'react-bootstrap/lib/Modal'

export default class SignUp extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      errorMessage: '',
      show: false

    }
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
  }
  open () {
    this.setState({show: true})
  }
  close () {
    this.setState({show: false})
  }
  validatePassword () {
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

      <div className='signup-div'><br />
        <p id='signup-p'>Sign Up</p>

        <TextField
          floatingLabelText='First Name' type='text' id='firstName'
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        /><br />
        <TextField
          floatingLabelText='Email Address' type='text' id='email'
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        /><br />
        <TextField
          floatingLabelText='Password' type='password' id='password'
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        /><br />
        <TextField
          floatingLabelText='Confirm Password'type='password' id='confirmPassword'
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          onChange={this.validatePassword.bind(this)}
         /><br />
        <p id='errorMessage'>{this.state.errorMessage}</p><br />

        <button type='submit' className='btn btn-primary' onClick={this.submitSignupForm && this.open}>Sign Up</button>
        <Modal className='modal-signup'
          show={this.state.show}
          onHide={this.close}
          container={this}
          aria-labelledby='contained-modal-title'
            >
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title'>Thank you for signing up!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                Feel free to login.
              </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
        <br />
        Already Have an Account?
        <Link to='/login'> Login</Link>
        <br />
        Or go
        <Link to='/'> home.</Link>
      </div>
    )
  }
}

