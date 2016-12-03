import React from 'react'
import yelp from '../../../config.js'

import CurrentLocation from './currentLocation.jsx'

export default class MapView extends React.Component {

  render () {
    return (
      <div>
        <div id='map' />
        <CurrentLocation />
      </div>
    )
  }

}
