import React from 'react'
// import { connect } from 'react-redux'
// import addLoc from '../../redux/appData.jsx'
import axios from 'axios'

export default class CurrentLocation extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      lat: 33.976002,
      long: -118.390891,
      term: 'coffee',
      list: []
    }
  }

  componentWillMount () {
    setTimeout(this.initMap.bind(this), 250) // on load this gets your current location
    this.postYelpData()
  }

  componentDidMount () {
    this.getYelpData()
  }

  getYelpData () {
    axios.get('/api/yelp/search')
    .then(resp => {
      this.setState({ list: resp.data.businesses })
    })
    .catch(err => { console.log(`${err}`) })
  }

  postYelpData () {
    axios.post('/api/yelp/search', {
      location: 'Los Angeles',
      term: this.state.term
    })
    .then(resp => { console.log(`Successful`) })
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
        {console.log(`Yelp`, this.state.list)}
      </div>
    )
  }

}

// export this
// export default connect()(CurrentLocation)
