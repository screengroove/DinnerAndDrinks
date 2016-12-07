import React from 'react'
import {Button, Modal} from 'react-bootstrap/lib'

export default class LoginModal extends React.Component {
  getInitialState () {
    return { show: false }
  }

  render () {
    let close = () => this.setState({ show: false})

    return (
      <div className='modal-container' style={{height: 200}}>
        

        <Modal
          show={this.state.show}
          onHide={close}
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
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
