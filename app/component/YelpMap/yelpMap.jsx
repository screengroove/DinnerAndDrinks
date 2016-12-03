import React from 'react'
import axios from 'axios'
import Yelp from '../../../yelpData.js'

export default class YelpMap extends React.Component {

  componentWillMount () {
    this.getYelpMap()
  }

  getYelpMap () {
    let yelp = new Yelp()
    yelp.search({term: 'food', location: 'Los Angeles'})
      .then(resp => {
        console.log(resp)
      }).catch(err => {
        console.log(`getYelpMap error : ${err}`)
      })
    console.log(yelp)
  }

  render () {
    return (
      <div />
    )
  }
}
