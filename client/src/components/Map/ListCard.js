import React, { Component } from 'react';

class ListCard  extends Component{
  render () {
  	const {deets} = this.props;
  	const bgImage = {
  		backgroundImage: `url('http://svcdn.simpleviewinc.com/v3/cache/chicago/DDAE812259830DDF584DFC2E8B3DA1CE.jpg')`
  	}
    return (
      <div className="list-card">
      	<h2><span>{this.props.id + 1}</span> {deets.name}</h2>
      	<div className="card-photo"  style={bgImage}></div>
      	<div className="card-symbols">
      		<div className="stars"></div>
      		<div className="price"></div>
      	</div>
      	<div className="addy">
      		<span>{deets.location.display_address[0]}</span>
      		<span>{deets.location.display_address[1]}</span>
      		<span>{deets.location.display_address[2]}</span>
      	</div>
      	<button className="btn-select">Select</button>
      </div>
    )
  }
}
export default ListCard