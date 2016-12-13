import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import *  as actionCreators from '../../actions/actionCreators.js';
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
      			city: "Los Angeles",
            state: "CA",
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
		var first = this.props.selections.dinnerData
	  var second = this.props.selections.drinksData
	  var firstCleanCity = ""
    var secondCleanCityState = ""
    var firstCleanName=""
    var secondCleanName=""
    var firstNameArr= first.name.split('')
    var secondNameArr=second.name.split('')
	 	var cityArr = first.location.city.split('')
    var citystateArr2 = second.location.city.split('')
	 	console.log('cityArr', cityArr);
	  for(var j = 0; j<cityArr.length; j++){
	  		console.log("hey line 48")
	  		if(cityArr[j] === ' '){
	  			cityArr[j] = ''
	  		} 
	  		else if(cityArr[j] === ','){
	  			cityArr[j] = '+'
	  			firstCleanCity+= cityArr[j]
	  		}else {
	  		firstCleanCity += cityArr[j]
	  		}
	  	if(firstCleanCity.length > 0)
	  		console.log("firstCleanCity", firstCleanCity)
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
  var sourced = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyANStO9s7YVwIP9ven5W1U9IhgYhFTR4yU&origin=" + firstCleanName + "," + firstCleanCity + "+" + first.location.state + "&destination=" + secondCleanName + "," + secondCleanCityState + "+" + second.location.state + "&mode=walking&avoid=tolls|highways"
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
      console.log("drink data", this.props.selections.drinkData)
    	axios.post('/api/contacts', {
    		phone: cleannumber,
        name: name,
		    firstLocation: this.props.selections.dinnerData.name,
		    secondLocation: this.props.selections.drinksData.name
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
  	var first = this.props.selections.dinnerData
  	var second = this.props.selections.drinksData
    var usesource = this.state.source
  	
    return (
      <div>	
      	<h1 className="headerOne">Your Night Out</h1>
      	<div className="selections">
      		<div className="carousel"> 
      				<h3 className="selectionH"> First Dinner </h3>

      				<img className="img" src={this.props.selections.dinnerData.image_url} alt="Ledlow Pic" height="300"></img>	

      		</div>
      		<div className="location">
      			<div className="restaurantName"> {first.name} {first.price}</div>
      			<div className="address">
	      			<div> {first.location.address1} </div>
	      			<div> {first.location.city}, {first.location.state}</div>
	      			<div> {first.location.zip}</div>
	      		</div>
      			<div>{first.review_count} Reviews</div>
      			<div>{first.rating} Stars</div>
      			
      		</div>
      		<div className="carousel"> 
      			<h3 className="selectionH"> Then Drinks</h3>
      				<img className="img" src={second.image_url} alt="Perch Pic" ></img>
      		</div>
      		<div className="location">
      			<div className="restaurantName"> {second.name} {second.price}</div>
      			<div className="address">
	      			<div> {second.location.address1} </div>
	      			<div> {second.location.city}, {second.location.state}</div>
	      			<div> {second.location.zip}</div>
	      		</div>
      			<div>{second.review_count} Reviews</div>
      			<div>{second.rating} Stars</div>
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

function mapStateToProps(state) {
  return {
    yelp: state.yelp,
    selections: state.selections,
    ui: state.ui
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
 
export default connect( mapStateToProps , mapDispachToProps)(Results);

