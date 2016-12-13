import React, { Component } from 'react'
import axios from 'axios'
import GoogleMap from 'google-map-react'

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
      		value: "",
          yourname: "",
          source: "",

    	}
    	this.handleChange = this.handleChange.bind(this)
      this.handleNameChange = this.handleNameChange.bind(this)
    	this.handleSubmit = this.handleSubmit.bind(this)
    	
	}
	componentDidMount() {
		console.log('in componentDidMount')
		var first = this.state.firstLocation
	  var distance = this.state.distance
	  var second = this.state.secondLocation
	  var firstCleanCityState = ""
    var secondCleanCityState = ""
    var firstCleanName=""
    var secondCleanName=""
    var firstNameArr= first.name.split('')
    var secondNameArr=second.name.split('')
	 	var citystateArr = first.citystate.split('')
    var citystateArr2 = second.citystate.split('')
	 	console.log('citystateArr', citystateArr);
	  for(var j = 0; j<citystateArr.length; j++){
	  		console.log("hey line 48")
	  		if(citystateArr[j] === ' '){
	  			citystateArr[j] = ''
	  		} 
	  		else if(citystateArr[j] === ','){
	  			citystateArr[j] = '+'
	  			firstCleanCityState += citystateArr[j]
	  		}else {
	  		firstCleanCityState += citystateArr[j]
	  		}
	  	if(firstCleanCityState.length > 0)
	  		console.log("firstCleanCityState", firstCleanCityState)
	}
   for(var h = 0; h<citystateArr2.length; h++){
        if(citystateArr2[h] === ' '){
          citystateArr2[h] = ''
        } 
        else if(citystateArr2[h] === ','){
          citystateArr2[h] = '+'
          secondCleanCityState += citystateArr2[h]
        }else {
        secondCleanCityState += citystateArr2[h]
        }
  }
   for(var k = 0; k<firstNameArr.length; k++){
        if(firstNameArr[k] === ' '){
          firstNameArr[k] = ''
        } 
        else if(citystateArr2[k] === ','){
          firstNameArr[k] = '+'
          firstCleanName += firstNameArr[k]
        }else {
        firstCleanName += firstNameArr[k]
        }
  }
  for(var l = 0; l<secondNameArr.length; l++){
        if(secondNameArr[l] === ' '){
          secondNameArr[l] = ''
        } 
        else if(citystateArr2[l] === ','){
          secondNameArr[l] = '+'
          secondCleanName += secondNameArr[l]
        }else {
        secondCleanName += secondNameArr[l]
        }
  }
  var sourced = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyANStO9s7YVwIP9ven5W1U9IhgYhFTR4yU&origin=" + firstCleanName + "," + firstCleanCityState + "&destination=" + secondCleanName + "," + secondCleanCityState + "&mode=walking&avoid=tolls|highways"
  this.setState({source: sourced})
}
	handleChange(event){
    	this.setState({value: event.target.value})
    }
  handleNameChange(event){
    this.setState({yourname: event.target.value})
  }
  handleSubmit(event) {
    	alert('A text has been sent to ' + this.state.value)
    	event.preventDefault()
    	var phone = this.state.value
      var name = this.state.yourname
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
        name: name,
		    firstLocation: this.state.firstLocation.name,
		    secondLocation: this.state.secondLocation.name
		  })
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  })
		this.setState({value: "", yourname: ""})
  	}
  
  render () {
  	var first = this.state.firstLocation
  	var distance = this.state.distance
  	var second = this.state.secondLocation
    var usesource = this.state.source
  	
    return (
      <div>	
      	<h1 className="header1">Your Night Out</h1>
      	<div className="selections">
      		<div className="carousel"> 
      				<h3 className="selectionH"> First Dinner </h3>
      				<img src={first.image1} alt="Ledlow Pic" height="300"></img>	
      		</div>
      		<div className="location">
      			<div className="restaurantName"> {first.name} {first.price}</div>
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
      				<img src={second.image1} alt="Perch Pic" height="300"></img>
      		</div>
      		<div className="location">
      			<div className="restaurantName"> {second.name} {first.price}</div>
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
            <h2> Step<span className="step3">3</span>Invite Your Friends</h2>
      			<form className="twilioForm" onSubmit={this.handleSubmit}>
              <label> Friend's Mobile : </label> <input className="twilioInput" type="text" value={this.state.value} name="value" onChange={this.handleChange}/>
              <br/>
      				<label> Your Full Name : </label> <input className="twilioInput" type="text" value={this.state.yourname} name="yourname" onChange={this.handleNameChange}/>
              <br/>
      				<button className="twilioButton" type="submit" value="Submit">Submit</button>
      				<div className="subhead"></div>
      			</form>
      			<h3 className="header3">So How Close Is The Bar?</h3>
      			<iframe
  					width="600"
  					height="450"
  					frameBorder="0" style={{border:0}}
  					src={usesource} allowFullScreen>
				</iframe>

      		</div>
      </div>
    )
  }
}
export default Results

// https://www.google.com/maps/embed/v1/directions
//   ?key=YOUR_API_KEY
//   &origin=Oslo+Norway
//   &destination=Telemark+Norway
//   &avoid=tolls|highways

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
