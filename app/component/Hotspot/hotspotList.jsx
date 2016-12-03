import React from 'react'
import axios from 'axios'

export default class HotspotList extends React.Component {
  constructor (props) {
    super(props)

  }

  getHotspotList () {
    axios.get('/api/hotspots')
      .then((response) => {
        console.log("Successful response: ", response)
      })
      .catch((error) => {
        console.log("Error in axios hotspot list get: ", error)
      })
  }

  render () {
    return(
      <div>
        <button onClick={this.getHotspotList}>Get local secret spots</button>
      </div>
    )
  }

}