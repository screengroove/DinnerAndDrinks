import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import Modal from 'react-bootstrap/lib/Modal'

export default class LoginModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true
    }
    this.close = this.close.bind(this)
  }
  close () {
    this.setState({ show: false})
  }
  render () {
    return (
      <div className='modal-container' style={{height: 200}}>

        <Modal
          show={this.state.show}
          onHide={this.close}
          container={this}
          aria-labelledby='contained-modal-title'
        >
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title'>Thank you for Signing Up!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Feel free to login.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
