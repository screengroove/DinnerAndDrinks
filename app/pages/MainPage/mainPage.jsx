import React from 'react'
import { Link } from 'react-router'
import MapView from './../../component/MapView/mapView.jsx'
import HotspotForm from './../../component/Hotspot/hotspotForm.jsx'
import HotspotList from './../../component/Hotspot/hotspotList.jsx'

export default class MainPage extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      isAuth: false
    }
  }

  render () {
    return (
      <div>
        <MapView />
        <HotspotForm />
        <HotspotList />
        <Link to='/signup'>signup</Link><br />
        <Link to='/favorites'>To Favorites Page</Link>


      </div>
    )
  }
}
