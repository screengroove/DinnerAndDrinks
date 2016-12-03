import React from 'react'

import CurrentLocation from './currentLocation.jsx'
import DisplayMap from './displayMap.jsx'

export default class MapView extends React.Component {

  render () {
    return (
      <div>
        <div id="map"></div>
        <CurrentLocation />
        <DisplayMap />
      </div>
    )
  }

}
