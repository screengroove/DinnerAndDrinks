import React from 'react'

// importing map view
import MapView from './../../component/MapView/mapView.jsx'
import HotspotForm from './../../component/HotspotForm/hotspotForm.jsx'
export default class MainPage extends React.Component {

  render () {
    return (
      <div>
          Hello World...
          <MapView />
        <HotspotForm />
      </div>
    )
  }
}
