import React from 'react'
import axios from 'axios'

export default class HotspotForm extends React.Component {

  constructor (props) {
    super(props)

  }

  submitHotspotForm () {
    let location = {

    }

    axios.post('/api/hotspot/post', location)
      .then((response) => {
        console.log("Successful reponse: ", response)
      })
      .catch((error) => {
        console.log("There has been a grave error")
      })

    console.log()
  }


  render () {
    return(
      <div>
        <input />
        <button onClick={this.submitHotspotForm}>Click me</button>
      </div>
    )
  }

}

