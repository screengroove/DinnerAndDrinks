import React from 'react'

// importing map view
import MapView from './../../component/MapView/mapView.jsx'
import Yelp from './../../../yelpData.js'
import HotspotForm from './../../component/HotspotForm/hotspotForm.jsx'
export default class MainPage extends React.Component {

  practice () {
    let yelp = new Yelp()
    let data
    yelp.search({term: 'food', location: 'Denmark'})
      .then(res => {
        data = res
      })
    return data
  }

  render () {
    return (
      <div>
          Hello World...
          <MapView />
        {
            console.log(this.practice())
          }
        <HotspotForm />
      </div>
    )
  }
}
