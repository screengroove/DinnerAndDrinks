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

  handleToggle () {
    this.setState({open: !!this.state.open})
  }

  render () {
    return (
      <div>
            <AppBar
              title="Recommendator"
              onLeftIconButtonTouchTap={console.log(`pressed`)}
            />
            <Drawer
              width={200}
              open={this.state.open}
            >
            <MenuItem>Home</MenuItem>
            <MenuItem>Sign Up</MenuItem>
            <MenuItem>Favorites</MenuItem>
          </Drawer>
          
        <MapView />
        <HotspotForm />
        <HotspotList />
      </div>
    )
  }
}
