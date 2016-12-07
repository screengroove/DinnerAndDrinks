import React from 'react'
import axios from 'axios'
import {List, ListItem, makeSelectable} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Avatar from 'material-ui/Avatar'
import {GridList, GridTile} from 'material-ui/GridList'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card'

let choices = [
  {name: 'Coffee', url: 'https://genesistransformation.files.wordpress.com/2014/11/coffee.jpg'},
  {name: 'Movies', url: 'http://cdn.shopify.com/s/files/1/1046/0096/products/movie-tickets-and-popcorn-600x400_grande.jpg?v=1447772629'},
  {name: 'Restaurants', url: 'http://img1.10bestmedia.com/static/img/placeholder-restaurants.jpg'},
  {name: 'Art', url: 'http://img.mota.ru/upload/wallpapers/2015/07/27/13/05/44958/mota.ru-20150727134-1920x1080.jpg'},
  {name: 'Music', url: 'http://artinest.com/wp-content/uploads/2015/09/openmic.jpg'},
  {name: 'Bars', url: 'https://cdn.pastemagazine.com/www/articles/LABEERBARS-NEWMAIN.jpg'},
  {name: 'Sports', url: 'http://www.wallcoo.net/sport/nba_la_clippers/images/jerseyroad.jpg'},
  {name: 'Travel', url: 'http://traveltelly.com//media/uploads/2012/09/TravelTelly_Paris_eiffel_tower04.jpg'}
]

const style = {
  marginRight: 20
}

const fonts = {
  'font-size': '14px'
}

const subheader = {
  'font-size': '24px'
}

const gambler = {
  height: '400px',
  width: '400px',
  margin: '0 auto'
}

let gridColor = {color: 'rgb(0, 188, 212)'}
let gridList = { display: 'flex', flexWrap: 'nowrap', overflowX: 'auto' }

let SelectableList = makeSelectable(List)

export default class CurrentLocation extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      hotspots: [],
      list: [],
      reviews: [],
      id: '',
      term: '',
      index: 0,
      showing: false
    }

    this.latitude = 0.0
    this.longitude = 0.0
    localStorage.setItem(['Current-Location-lat'], this.state.lat)
    localStorage.setItem(['Current-Location-long'], this.state.long)
  }

  componentWillMount () {
    this.postYelpData()
  }

  componentDidMount () {
    this.getYelpData()
    this.getHotspots()
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
    })
    .catch(err => { console.log(`save Favorites error: `, err) })
  }

  getHotspots () {
    axios.get('/api/hotspots')
      .then((response) => {
        this.setState({ hotspots: response.data })
        console.log(this.state.hotspots)
      })
      .error((error) => {
        console.log(`Consolleeeeeee ${error}`)
      })
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
        this.setState({ reviews: resp.data })
        this.setState({showing: true})
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
      this.state.hotspots.map((e, i) => {
        console.log(e)
        let marker = new google.maps.Marker({
          position: { lat: e.lat, lng: e.long },
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

  getId (index) {
    this.setState({id: this.state.list[index].id})
    this.setState({index: index})
    this.getReviews()
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
              <GridTile onClick={this.selector.bind(this, [e.name])} className='tile' title={e.name} titleStyle={gridColor} titleBackground='linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)' >
                <img src={e.url} />
              </GridTile>
          ))}
          </GridList>
        </div>
        <div id='map' />
        <div id='map-list'>
          <SelectableList>
            {this.state.list.map((e, i) => (
              <ListItem
                value={i}
                onClick={this.getId.bind(this, [i])}
                primaryText={e.name}
                rightIcon={<FloatingActionButton onClick={this.saveFavorite.bind(this, [i])} mini secondary style={style}>
                  <ContentAdd />
                </FloatingActionButton>}
                secondaryText={e.display_phone + ' || Rating: ' + e.rating}
                leftAvatar={<Avatar src={e.image_url} />}
            />
          ))}
          </SelectableList>
        </div>
        <div id='spaceholder' />
        <div id='reviews-list'>
          <Subheader style={subheader}>Details</Subheader>
          <Card style={gambler}>
            <CardMedia overlay={<CardTitle title={(!this.state.showing ? '' : this.state.reviews.name)} />}>
              <img src={(!this.state.showing ? '' : this.state.reviews.image_url)} />
            </CardMedia>
            <CardText style={fonts}>
              {(!this.state.showing ? '' : 'Review: ' + this.state.reviews.reviews[0].excerpt)} <br /> <br />
              {(!this.state.showing ? '' : 'Rating: ' + this.state.reviews.rating)} <br />
              {(!this.state.showing ? '' : 'Phone Number: ' + this.state.reviews.display_phone)} <br /><br />
              {(!this.state.showing ? '' : 'Address: ' + this.state.reviews.location.display_address[0])} <br />
              {(!this.state.showing ? '' : '               ' + this.state.reviews.location.display_address[1])} <br />
              {(!this.state.showing ? '' : '               ' + this.state.reviews.location.display_address[2])} <br />
            </CardText>
          </Card>
        </div>
      </div>
    )
  }

}
