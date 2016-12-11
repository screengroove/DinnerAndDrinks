import React, { Component } from 'react'
import GoogleMap from 'google-map-react';


import Sidebar from './Sidebar';
import Marker from './Marker';

import { pizza } from '../../data/yelp';
import { bars } from '../../data/bars';

class Map  extends Component{
  // static defaultProps = {
  //     center: {lat: 59.938043, lng: 30.337157},
  //     zoom: 9,
  //     greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  //   };
    constructor(props) {
        super(props);
        this.state = {
              center: {lat: 34.019454, lng: -118.491191},
              zoom: 14,
             greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
        }
    }

  render () {
    const {yelp} = this.props
    const Markers = yelp.listings.businesses.map( (item, i) =>{   
        
        return <Marker key={i} lat={ item.location.coordinate.latitude} lng={item.location.coordinate.longitude} text={i}/>
    })

    return (

        <GoogleMap
                apiKey='AIzaSyAtXmlxbzavjc-4wM8KAlMLvIpCOiv-yc4'
                defaultCenter={this.state.center}
                defaultZoom={this.state.zoom}>

                       {Markers}
        </GoogleMap>
    
    )
  }
}
export default Map