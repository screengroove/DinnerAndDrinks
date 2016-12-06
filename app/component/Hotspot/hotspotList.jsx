import React from 'react'
import axios from 'axios'

export default class HotspotList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hotspots: [],
      // curLoc: {
      //   lat: localStorage['Current-Location-lat'],
      //   long: localStorage['Current-Location-long']
      // }
    }
    this.getHotspotList = this.getHotspotList.bind(this)
  }

  getHotspotList () {
    var self = this;
    axios.get('/api/hotspots', self.state.curLoc)
      .then((response) => {
        console.log('------------------');
        self.setState({ hotspots: response.data })
      })
      .catch((error) => {
        console.log(`Error in axios hotspot list get: ${error}`)
      })
  }

  render () {
    return (
      <div id='hotspot-list'>
        <button onClick={this.getHotspotList}>Get local secret spots</button>
        {this.state.hotspots.map((spot, i) => (
          <div key={i}>
            {spot.name}
          </div>
        ))}
      </div>
    )
  }

}
