import React from 'react'
import axios from 'axios'

export default class HotspotForm extends React.Component {

  constructor (props) {
    super(props)

  }

  submitHotspotForm () {
    let name = document.getElementById('hotspotLocationName').value
    let address = document.getElementById('hotspotAddress').value
    let description = document.getElementById('hotspotDescription').value

    let location = {
      name: name,
      address: address,
      description: description
    }

    axios.post('/api/hotspots', location)
      .then((response) => {
        console.log("Successful reponse: ", response.data)
      })
      .catch((error) => {
        console.log("Error in axios hotspot form post: ", error)
      })

  }


  render () {
    return(
      <div>
        <input placeholder="name" id="hotspotLocationName" />
        <input placeholder="address" id="hotspotAddress" />
        <textarea placeholder="description" id="hotspotDescription" />
        <button onClick={this.submitHotspotForm}>Submit Form</button>
      </div>
    )
  }

}

