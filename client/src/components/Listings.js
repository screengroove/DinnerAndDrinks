import React, { Component } from 'react';
import Map from './Map/Map';
import Sidebar from './Map/Sidebar';

class Listings  extends Component{
  render () {
    return (
      <div className="full-screen">
      		<Sidebar/>
      		<Map/>
      </div>
      		
     
    )
  }
}
export default Listings