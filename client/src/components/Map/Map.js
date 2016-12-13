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
    this.props.selections.dinnerData ? this.props.selections.dinnerData.test = 'red':  null;
    const allMarkers = this.props.selections.dinnerData === undefined ? this.props.yelp.listings : [...this.props.yelp.listings, this.props.selections.dinnerData];
    console.log("ALL MARKERS",allMarkers )
      
    const { yelp } = this.props;
    const mapCenter = {lat:yelp.region.center.latitude , lng: yelp.region.center.longitude}
    const Markers = allMarkers.map( (item, i) =>{   
        return <Marker key={i} lat={ item.coordinates.latitude } lng={item.coordinates.longitude} text={i +1} test={item.test}/>
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