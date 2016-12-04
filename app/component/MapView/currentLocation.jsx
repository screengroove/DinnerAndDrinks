import React from 'react'
import dispatch from 'react-redux'
import addLoc from '../../redux/appData.jsx'

export default class CurrentLocation extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      lat: 0.0,
      long: 0.0
    }
  }

  componentWillMount () {
    setTimeout(this.initMap.bind(this), 250) // on load this gets your current location
  }

     // Google Api function
  initMap () {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 15
    })
    let infoWindow = new google.maps.InfoWindow({map: map})

        // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.setState({lat: pos.lat, long: pos.lng})
        // add new states of current location here
        dispatch(addLoc({lat: this.state.lat, long: this.state.long}))

        infoWindow.setPosition(pos)
        infoWindow.setContent('Location found.')
        map.setCenter(pos)
      }, () => {
        handleLocationError(true, infoWindow, map.getCenter())
      })
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter())
    }
  }

    // Google Api function:
    //  Handles Location Errors
  handleLocationError (browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos)
    infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.')
  }

  render () {
    return (
      <div>
        
      </div>
    )
  }

}