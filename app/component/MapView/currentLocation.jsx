import React from 'react'
import { connect } from 'react-redux'
import addLoc from '../../redux/appData.jsx'
import axios from 'axios'

export default class CurrentLocation extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      lat: 33.976002,
      long: -118.390891,
      term: 'food'
    }
  }

  componentWillMount () {
    setTimeout(this.initMap.bind(this), 250) // on load this gets your current location
  }

  getYelpData () {
    axios.get('/yelp/search', {
      latitude: this.state.lat,
      longitude: this.state.long,
      term: this.state.term,
      sort: 0,
      category_filter: '',
      catergories: '',
      rating: 5.0
    })
    .then(resp => { console.log(resp) })
    .catch(err => { console.log(`${err}`) })
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
        // this.setState({lat: pos.lat, long: pos.lng})
        // add new states of current location here

        // this.props.dispatch(addLoc(this.state.lat, this.state.long))

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
        {this.getYelpData()}
      </div>
    )
  }

}

// export this
// export default connect()(CurrentLocation)
