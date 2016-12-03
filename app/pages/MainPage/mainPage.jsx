import React from 'react'

// importing map view
import MapView from './../../component/MapView/mapView.jsx'

export default class MainPage extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
                Hello World...
                <MapView />
      </div>
    )
  }
}
