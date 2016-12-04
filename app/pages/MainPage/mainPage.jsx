import React from 'react'

// importing map view
import MapView from './../../component/MapView/mapView.jsx'
import YelpMap from './../../component/YelpMap/yelpMap.jsx'
import HotspotForm from './../../component/Hotspot/hotspotForm.jsx'
import HotspotList from './../../component/Hotspot/hotspotList.jsx'
export default class MainPage extends React.Component {

  render () {
    return (
      <div>
          Hello World...
          <MapView />
        <YelpMap />
        <HotspotForm />
        <HotspotList />
      </div>
    )
  }
}
