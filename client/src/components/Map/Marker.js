import React, { Component } from 'react';
import pin  from '../../assets/marker_icon.svg';


class Marker  extends Component{
  render () {

    return (
      <div className="pin" >
      		<img src={pin} alt=""/>
      </div>
    )
  }
}
export default Marker