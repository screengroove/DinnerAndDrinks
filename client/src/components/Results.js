import React, { Component } from 'react'
import axios from 'axios'

class Results  extends Component{
  constructor(props){
		super(props);
		this.state = {
      		firstLocation: {
      			name: "Ledlow",
      			reviews: "338",
      			address: "400 South Main Street",
      			citystate: "Los Angeles, CA",
      			zip: "90013",
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
      			address: "448 Hill Street",
      			citystate: "Los Angeles, CA",
      			zip: "90013",
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
    	//need to check if valid phone number
    }
    handleSubmit(event) {
    	alert('A text has been sent to ' + this.state.value)
    	event.preventDefault()
    	var phone = this.state.value
    	var cleannumber = '+1';
    	for(var i = 0; i < phone.length; i++){
    		console.log(phone[i])
    		if(phone[i] === "1" || phone[i] === "2" || phone[i] === "3"  
    			|| phone[i] === "4" || phone[i] === "5" || phone[i] === "6" 
    			|| phone[i] === "7" || phone[i] === "8" || phone[i] === "9"
    			|| phone[i] === "0"){
    			cleannumber+= phone[i]
    		}
    	}
    	console.log("cleannumber in handleSubmit", cleannumber)
    	axios.post('/api/contacts', {
    		phone: cleannumber,
		    firstLocation: this.state.firstLocation.address,
		    secondLocation: this.state.secondLocation.address
		  })
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  })
  	}
  render () {
  	var first = this.state.firstLocation
  	var distance = this.state.distance
  	var second = this.state.secondLocation
    return (
      <div>	
      	<div className="selections">
      		<h1>Your Night Out</h1>
      		<div className="carousel"> 
      				<h3 className="selectionH"> First Dinner </h3>
      				<img src={first.image1} alt="Ledlow Pic" height="200"></img>	
      		</div>
      		<div className="location">
      			<div> {first.name} {first.price}</div>
      			<div className="address">
	      			<div> {first.address} </div>
	      			<div> {first.citystate}</div>
	      			<div> {first.zip}</div>
	      		</div>
      			<div>{first.reviews} Reviews</div>
      			<div>{first.stars} Stars</div>
      			
      		</div>
      		<div className="carousel"> 
      			<h3 className="selectionH"> Then Drinks</h3>
      				<img src={second.image1} alt="Perch Pic" height="200"></img>
      		</div>
      		<div className="location">
      			<div> {second.name} {first.price}</div>
      			<div className="address">
	      			<div> {second.address} </div>
	      			<div> {second.citystate}</div>
	      			<div> {second.zip}</div>
	      		</div>
      			<div>{second.reviews} Reviews</div>
      			<div>{second.stars} Stars</div>
      		</div>
      	</div>
      		<div className="mapForm">
      			<h3>So How Close Is The Bar?</h3>
      			<form className="twilioForm" onSubmit={this.handleSubmit}>
      				<div className="subhead"> Enter your mobile number to receive a text message with your itinerary </div>
      				<input type="text" value={this.state.value} name="value" onChange={this.handleChange}/>
      				<input className="twilioButton" type="submit" value="Submit" />
      			</form>
      		</div>
      </div>
    )
  }
}
export default Results



  // initMap () {
  //   let map = new google.maps.Map(document.getElementById('map'), {
  //     center: {lat: 33.975374099999996, lng: -118.39200809999998},
  //     zoom: 11
  //   })
  //   let infoWindow = new google.maps.InfoWindow({map: map})

  //       // Try HTML5 geolocation.
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       let pos = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       }

  //       localStorage.setItem(['Current-Location-lat'], pos.lat)
  //       localStorage.setItem(['Current-Location-long'], pos.lng)

  //       let geocoder = new google.maps.Geocoder()
  //       geocoder.geocode({'latLng': pos}, (results, status) => {
  //         localStorage.setItem(['Current-Location-city'], results[0].formatted_address.split(', ')[1])
  //       })

  //       infoWindow.setPosition(pos)
  //       infoWindow.setContent('Location found.')
  //       map.setCenter(pos)
  //     }, () => {
  //       handleLocationError(true, infoWindow, map.getCenter())
  //     })

  //     this.state.list.map((e, i) => {
  //       let marker = new google.maps.Marker({
  //         position: { lat: e.location.coordinate.latitude, lng: e.location.coordinate.longitude },
  //         map: map,
  //         title: e.name
  //       })
  //       return marker
  //     })
  //     this.state.hotspots.map((e, i) => {
  //       console.log(e)
  //       let marker = new google.maps.Marker({
  //         position: { lat: e.lat, lng: e.long },
  //         map: map,
  //         title: e.name
  //       })
  //       return marker
  //     })
  //   } else {
  //     // Browser doesn't support Geolocation
  //     handleLocationError(false, infoWindow, map.getCenter())
  //   }
  // }