import React from 'react'
import axios from 'axios'

export default class HotspotForm extends React.Component {

  constructor (props) {
    super(props)

    this.state = {}

    this.useCurrentLocation = this.useCurrentLocation.bind(this)
  }

  useCurrentLocation () {
    this.setState({ lat: localStorage['Current-Location-lat'], long: localStorage['Current-Location-long']})
  }

  submitHotspotForm () {
    let name = document.getElementById('hotspotLocationName').value
    let address = document.getElementById('hotspotAddress').value
    let description = document.getElementById('hotspotDescription').value

    let location = {
      name: name,
      address: address || this.state,
      description: description
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
      <div id="hotspots-form">
        <input placeholder='name' id='hotspotLocationName' />
        <input placeholder='address' id='hotspotAddress' />
        <button onClick={this.useCurrentLocation}>Use Current Location</button>
        <textarea placeholder='description' id='hotspotDescription' />
        <button onClick={this.submitHotspotForm}>Submit Form</button>
      </div>
    )
  }

}

