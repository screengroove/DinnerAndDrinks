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
  	const bgImage = {
  		backgroundImage: `url('http://svcdn.simpleviewinc.com/v3/cache/chicago/DDAE812259830DDF584DFC2E8B3DA1CE.jpg')`
  	}
    const btnStyle = classNames({
      "btn-select": true,
      "is-selected":  this.state.cardSelected
    })
    return (
      <div className="list-card">
      	<h2><span>{this.props.id + 1}</span> {deets.name}</h2>
      	<div className="card-photo"  style={bgImage}>
          <div className="overlay">
              <p>{deets.snippet_text}</p>
          </div>
        </div>
      	<div className="card-symbols">
      		<div className="stars"></div>
      		<div className="price"></div>
      	</div>
      	<div className="addy">
      {/* JSX Comment 
      		<span>{deets.location.display_address[0]}</span>
      		<span>{deets.location.display_address[1]}</span>
      		<span>{deets.location.display_address[2]}</span>
          */}
      	</div>
      	<button className={btnStyle} onClick={this.chooseDinnerSpot.bind(this)}>Select</button>
      </div>
    )
  }
}
export default ListCard