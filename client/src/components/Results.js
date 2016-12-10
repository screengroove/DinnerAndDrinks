import React, { Component } from 'react'

class Results  extends Component{
  constructor(props){
		super(props);
		this.state = {
      		firstLocation: {
      			name: "Ledlow",
      			reviews: "338",
      			address: "400 South Main Street, Los Angeles, CA 90013",
      			stars: "3.5",
      			price: "$$",
      			image1: "https://s3-media1.fl.yelpcdn.com/bphoto/CAfX7rN54iY4sZPWN0ATOw/o.jpg",
      			coordinates: {longitude: "",
      						 latitude: ""}
      		},
      		distance: "0.4 mile",
      		secondLocation: {
      			name: "Perch",
      			reviews: "4310",
      			address: "448 Hill Street, Los Angeles, CA 90013",
      			stars: "4",
      			price: "$$$",
      			image1: "https://s3-media2.fl.yelpcdn.com/bphoto/8rTQD0D8lvgCsGFazFy_wg/o.jpg",
      			coordinates: {longitude: "",
      						 latitude: ""}
      		},
      		value: ""

    	}
    	this.handleChange = this.handleChange.bind(this)
    	this.handleSubmit = this.handleSubmit.bind(this)
    	
	}	
	handleChange(event){
    	this.setState({value: event.target.value})
    }
    handleSubmit(event) {
    	alert('An email was submitted: ' + this.state.value)
    	event.preventDefault()
    	//axios post 
  	}
  render () {
  	var first = this.state.firstLocation
  	var distance = this.state.distance
  	var second = this.state.secondLocation
    return (
      <div>
      		<h1>RESULTS</h1>
      		<div className="firstLocation">
      			<h3> First Stop Dinner </h3>
      			<div> {first.name} </div>
      			<div> {first.address} </div>
      			<div>Number of Reviews: {first.reviews}</div>
      			<div>Stars: {first.stars} </div>
      			<div>Price: {first.price} </div>
      			<div className="carousel"> 
      				<img src={first.image1} alt="Ledlow Pic" height="200"></img>	
      			</div>
      		</div>
      		<div>
      			<h3>So How Close Is The Bar?</h3>
      			<span> Just a {distance} walk!</span>
      		</div>
      		<div className="secondLocation">
      			<h3> Then Drinks</h3>
      			<div> {second.name} </div>
      			<div> {second.address} </div>
      			<div>Number of Reviews: {first.reviews}</div>
      			<div>Stars: {first.stars} </div>
      			<div>Price: {first.price} </div>
      			<div className="carousel"> 
      				<img src={second.image1} alt="Perch Pic" height="200"></img>
      			</div>
      			<form onSubmit={this.handleSubmit}>
      				Invite your friends!
      				<input type="text" value={this.state.value} name="value" onChange={this.handleChange}/>
      				<input type="submit" value="Submit" />
      			</form>
      		</div>
      </div>
    )
  }
}
export default Results