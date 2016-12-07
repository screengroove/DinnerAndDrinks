import React from 'react'
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton'
import injectTapEventPlugin from 'react-tap-event-plugin'
import TextField from 'material-ui/TextField'

import Slider from 'material-ui/Slider'

injectTapEventPlugin();
export default class HotspotForm extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      rating: 2.5
    }

    this.submitHotspotForm = this.submitHotspotForm.bind(this)
    this.handleSlider = this.handleSlider.bind(this)
  }

  handleSlider (event, value) {
      this.setState({rating: value});
  };

  submitHotspotForm () {
    let name = document.getElementById('hotspotLocationName').value
    let address = document.getElementById('hotspotAddress').value
    let description = document.getElementById('hotspotDescription').value

    let location = {
      name: name,
      address: address,
      description: description,
      rating: this.state.rating,
      user: localStorage['User-Name']
    }
    if (!address){
      alert('Please enter a valid address')
      return
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
      console.log(`Hit me`)
  }

  render () {
    return (

      <div id='hotspot-form-foundation'>
        <h2>Submit A Hotspot</h2>
        <div id='hotspots-form'>
          <TextField
          id="hotspotLocationName"
          floatingLabelText="Location Name" />
        </div>

        <div>
          <TextField
          id="hotspotAddress"
          floatingLabelText="Address" />
        </div>

        <div>
          <TextField
          id="hotspotDescription"
          floatingLabelText="Description"
          multiLine={true}
          rows={2} />
        </div>


        <div>

          <Slider
            min={0}
            max={5}
            step={.1}
            defaultValue={2.5}
            value={this.state.rating}
            onChange={this.handleSlider} />

          <h3>Rating: {this.state.rating}</h3>

        </div>



        <RaisedButton primary={true} fullWidth={true} onClick={this.submitHotspotForm}>Send it up</RaisedButton>
      </div>
    )
  }

}

