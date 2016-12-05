import React from 'react'
import axios from 'axios'
import CurrentLocation from '../MapView/currentLocation.jsx'

export default class HotspotList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      secwetSpots: []
    }
    this.getHotspotList = this.getHotspotList.bind(this)
  }

  getHotspotList () {
    axios.get('/api/hotspots')
      .then((response) => {
        console.log(this)
        this.setState({ secwetSpots: response.data })
      })
      .catch((error) => {
        console.log(`Error in axios hotspot list get: ${error}`)
      })
  }

  render () {
    return (
      <div>
        <button onClick={this.getHotspotList}>Get local secret spots</button>
        {this.state.secwetSpots.map(spot => (
          <div>
            {spot.name}
          </div>
        ))}

      </div>
    )
  }

}
