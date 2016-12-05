import React from 'react'
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
export default class HotspotForm extends React.Component {

  constructor (props) {
    super(props)

    this.state = {}

    this.submitHotspotForm = this.submitHotspotForm.bind(this);
  }

  submitHotspotForm () {
    let name = document.getElementById('hotspotLocationName').value
    let address = document.getElementById('hotspotAddress').value
    let description = document.getElementById('hotspotDescription').value
    //var self = this;
    let location = {
      name: name,
      address: address,
      description: description
    }
    if (!address){
      alert('Please enter a valid address')
      return;
    }
    axios.post('/api/hotspots', location)
      .then((response) => {
        console.log('Successful reponse: ', response.data)
        document.querySelector('#hotspotLocationName').value = ''
        document.querySelector('#hotspotAddress').value = ''
        document.querySelector('#hotspotDescription').value = ''
      })
      .catch((error) => {
        console.log('Error in axios hotspot form post: ', error)
      })
  }

  render () {
    return (
      <div id='hotspots-form'>
        <input placeholder='name' id='hotspotLocationName' />
        <input placeholder='address' id='hotspotAddress' />
        <textarea placeholder='description' id='hotspotDescription' />
        <RaisedButton onClick={this.submitHotspotForm}>Submit Form</RaisedButton>
      </div>
    )
  }

}

