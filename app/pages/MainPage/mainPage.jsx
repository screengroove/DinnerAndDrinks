import React from 'react'

// importing map view
import MapView from './../../component/MapView/mapView.jsx'
<<<<<<< HEAD
import HotspotForm from './../../component/HotspotForm/hotspotForm.jsx'

=======
import YelpMap from './../../component/YelpMap/yelpMap.jsx'
import HotspotForm from './../../component/Hotspot/hotspotForm.jsx'
import HotspotList from './../../component/Hotspot/hotspotList.jsx'
>>>>>>> afd4f5d02248da72dd17324a73b47bc519f44a89
export default class MainPage extends React.Component {

  render () {
    return (
      <div>
          Hello World...
          <MapView />
        <HotspotForm />
        <HotspotList />
      </div>
    )
  }
}
