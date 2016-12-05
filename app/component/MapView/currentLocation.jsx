import React from 'react'
// import { connect } from 'react-redux'
// import addLoc from '../../redux/appData.jsx'
import axios from 'axios'

export default class CurrentLocation extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      lat: 34.026829,
      long: -118.473297,
      location: 'Santa Monica',
      term: 'coffee',
      list: []
    }
    this.latitude = 0.0
    this.longitude = 0.0
  }

  componentWillUpdate () {
    setTimeout(this.initMap.bind(this), 250)
  }

  componentWillMount () {
    this.postYelpData()
  }

  componentDidMount () {
    this.getYelpData()
  }

  saveFavorite (index) {
    axios.post('/api/favorites', {
      userId: index,
      name: this.state.list[index].name,
      categories: this.state.list[index].categories,
      address: this.state.list[index].location.address,
      phone: this.state.list[index].phone,
      rating: this.state.list[index].rating,
      image_url: this.state.list[index].image_url,
      businessUrl: this.state.list[index].url,
      lat: this.state.list[index].location.coordinate.latitude,
      long: this.state.list[index].location.coordinate.longitude
    })
    .then(resp => { console.log(`Successful`) })
    .catch(err => { console.log(`save Favorites error: `, err) })
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
      location: this.state.location,
      term: this.state.term
    })
    .then(resp => { })
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
          // lat: position.coords.latitude,
          // lng: position.coords.longitude
          lat: this.state.lat,
          lng: this.state.long
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

      this.state.list.map((e, i) => {
        let marker = new google.maps.Marker({
          position: { lat: e.location.coordinate.latitude, lng: e.location.coordinate.longitude },
          map: map,
          title: e.name
        })
        return marker
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
    setTimeout(this.initMap.bind(this), 500)
    return (
      <div id='map-list'>
        {console.log(this.state.list)}
        {this.state.list.map((e, i) => (
          <input key={i} type='submit' value={e.name} onClick={this.saveFavorite.bind(this, [i])} />
        ))}
      </div>
    )
  }

}

// export this
// export default connect()(CurrentLocation)
