import React, { Component } from 'react';
import classNames from 'classnames';

class ListCard  extends Component{
	constructor(){
		super();
		this.state = {
			cardSelected: false
		}
	}

chooseDinnerSpot(){
	this.props.handler(this.props.deets)	
	console.log("YOYO", this.props.deets )
	this.setState({
		cardSelected: !this.state.cardSelected
	})
}

  render () {
  	const {deets} = this.props;
    console.log("DEETS PHOTOS", this.props.deets.photos )
      
  	const cardBG =this.props.deets.photos
                                                                                ? this.props.deets.photos[1]
                                                                                : 'http://www.jqueryscript.net/images/Minimal-jQuery-Loading-Overlay-Spinner-Plugin-Easy-Overlay.jpg'

    //console.log("INSIDE CARD PROPS", this.props.deets.photos[0])
      
    const btnStyle = classNames({
      "btn-select": true,
      "is-selected":  this.state.cardSelected
    })
    return (
      <div className="list-card">
      	<h2><span>{this.props.id + 1}</span> {deets.name}</h2>
      	<div className="card-photo"  style={{backgroundImage:  'url(' + cardBG + ')' }}>
          <div className="overlay">
              <p>{deets.snippet_text}</p>
          </div>
        </div>
      	<div className="card-symbols">
      		<div className="stars"></div>
      		<div className="price"></div>
      	</div>
      	<div className="addy">

      		<span>{deets.location.address1}</span>
      		<span>{deets.location.city}</span>
      		<span>{deets.location.zip_code}</span>
        
      	</div>
      	<button className={btnStyle} onClick={this.chooseDinnerSpot.bind(this)}>Select</button>
      </div>
    )
  }
}
export default ListCard