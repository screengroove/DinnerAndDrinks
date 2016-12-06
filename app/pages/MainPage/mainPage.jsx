import React from 'react'
import { Link } from 'react-router'
// importing map view
import MapView from './../../component/MapView/mapView.jsx'
import HotspotForm from './../../component/Hotspot/hotspotForm.jsx'
import HotspotList from './../../component/Hotspot/hotspotList.jsx'

export default class MainPage extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
          Main
          <MapView />
        <HotspotForm />
        <HotspotList />
        <div id='links'>
          <Link to='/signup'>To signup Page</Link>
          <Link to='/favorites'>To Favorites Page</Link>
        </div>

      </div>
    )
  }
}
