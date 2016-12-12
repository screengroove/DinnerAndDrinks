import React, { Component } from 'react'
import GoogleMap from 'google-map-react';
import Sidebar from './Sidebar';
import Marker from './Marker';


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
    const { yelp } = this.props;
    const mapCenter = {lat:yelp.region.center.latitude , lng: yelp.region.center.longitude}
    const Markers = yelp.listings.map( (item, i) =>{   
        console.log("MARKER ITEMS", item )
          
        return <Marker key={i} lat={ item.location.coordinate.latitude } lng={item.location.coordinate.longitude} text={i}/>
    })

    return (

        <GoogleMap
                apiKey='AIzaSyAtXmlxbzavjc-4wM8KAlMLvIpCOiv-yc4'
                defaultCenter={mapCenter}
                defaultZoom={this.state.zoom}>
                       {Markers}
        </GoogleMap>
    
    )
  }
}
export default Map