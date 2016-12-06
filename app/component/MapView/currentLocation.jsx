import React from 'react'
import axios from 'axios'
import {List, ListItem, makeSelectable} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import {GridList, GridTile} from 'material-ui/GridList'

let choices = [
  'Coffee',
  'Movies',
  'Restaurants',
  'Art',
  'Music',
  'Bars',
  'Sports',
  'Travel'
]

let gridColor = {color: 'rgb(0, 188, 212)'}
let gridList = { display: 'flex', flexWrap: 'nowrap', overflowX: 'auto' }

let SelectableList = makeSelectable(List)

export default class CurrentLocation extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      list: [],
      reviews: [],
      id: '',
      term: ''
    }

    this.latitude = 0.0
    this.longitude = 0.0
    localStorage.setItem(['Current-Location-lat'], this.state.lat)
    localStorage.setItem(['Current-Location-long'], this.state.long)

  }

  componentWillUpdate () {

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
      yelpId: this.state.list[index].id,
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
    .then(resp => {
      this.setState({id: this.state.list[index].id})
      this.getReviews()
    })
    .catch(err => { console.log(`save Favorites error: `, err) })
  }

  getYelpData () {
    axios.get('/api/yelp/search')
    .then(resp => {
      this.setState({ list: resp.data.businesses })
    })
    .catch(err => { console.log(`${err}`) })
  }

  selector (text) {
    this.setState({term: text})
    localStorage.setItem(['Yelp-Search-Term'], this.state.term)
    this.postYelpData()
    this.getYelpData()
  }

  getReviews () {
    this.postId()
    axios.get('/api/yelp/business')
      .then(resp => {
        console.log(resp)
        this.setState({ reviews: resp.data.reviews })
      }).catch(err => {
        console.log(`${err}`)
      })
  }

  postId () {
    axios.post('/api/yelp/business', {
      id: this.state.id
    }).then(resp => {})
    .catch(err => { console.log(`${err}`) })
  }

  postYelpData () {
    axios.post('/api/yelp/search', {
      location: localStorage['Current-Location-city'],
      term: localStorage['Yelp-Search-Term']
    })
    .then(resp => { })
    .catch(err => { console.log(`${err}`) })
  }

  // Google Api function
  initMap () {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 33.975374099999996, lng: -118.39200809999998},
      zoom: 11
    })
    let infoWindow = new google.maps.InfoWindow({map: map})

        // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }

        localStorage.setItem(['Current-Location-lat'], pos.lat)
        localStorage.setItem(['Current-Location-long'], pos.lng)

        let geocoder = new google.maps.Geocoder()
        geocoder.geocode({'latLng': pos}, (results, status) => {
          localStorage.setItem(['Current-Location-city'], results[0].formatted_address.split(', ')[1])
           // address => string=> results[0].formatted_address
        })

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
      <div>
        <div id='selector'>
          <GridList style={gridList} cols={2.2}>
            {choices.map((e, i) => (
              <GridTile onClick={this.selector.bind(this, [e])} className='tile' title={e} titleStyle={gridColor} titleBackground='linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)' />
          ))}
          </GridList>
        </div>
        <div id='map' />
        <div id='map-list'>
          <SelectableList>
            {this.state.list.map((e, i) => (
              <ListItem
                value={i}
                primaryText={e.name}
                secondaryText={e.display_phone + ' || Rating: ' + e.rating}
                leftAvatar={<Avatar src={e.image_url} />}
                onClick={this.saveFavorite.bind(this, [i])}
            />
        ))}
          </SelectableList>
        </div>
        <div id='reviews-list'>
          {this.state.reviews.map((e, i) => (
            <div key={i}>
              {e.excerpt}
            </div>
          ))}
        </div>
      </div>
    )
  }

}

// export this
// export default connect()(CurrentLocation)
