import React, { Component } from 'react'
import axios from 'axios'
var Slider = require('react-rangeslider')
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import *  as actionCreators from '../actions/actionCreators.js';


class Home extends Component{
  constructor(props){
    super(props)

    this.state = {
      find: '',
      near: '',
      price: ''
    }
    this.onFindChange = this.onFindChange.bind(this)
    this.onNearChange = this.onNearChange.bind(this)
    this.onPriceChange = this.onPriceChange.bind(this)
    this.onSubmitForm = this.onSubmitForm.bind(this)
  }

  onFindChange(event){
    this.setState({ find: event.target.value })
  }

  onNearChange(event){
    this.setState({ near: event.target.value })
  }


  onPriceChange(event){
    this.setState({ price: event.target.value })
  }

  onSubmitForm(event){
    event.preventDefault();
    var find = this.state.find
    var near = this.state.near
    var price = this.state.price

    if(price === '' || price === undefined || price == 4){
      price = '1,2,3,4';
    }else if(price == 3){

      price = '1,2,3';
      console.log(price);
    }else if(price == 2){
      price = '1,2';
    }

    axios.get('/api/yelp/search', {
      params: {
        find: find,
        near: near,
        price: price
      }
    })
    .then(response =>{
      response.data.businesses.forEach(function(restaurant){
        var restId = restaurant.id
        var coordinates = restaurant.coordinates;
        // console.log(restaurant);
        axios.get('api/yelp/searchbars', {
          params: {
            lon: coordinates.longitude,
            lat: coordinates.latitude,
            price: price
          }
        })
        .then(response2 => {

          restaurant.bars = response2;
        })
        .catch(err => {
          console.log(err);
        })

        axios.get('api/yelp/business', {
          params: {
            id: restId
          }
        })
        .then(response3 => {
          restaurant.photos = response3.data
        })
        .catch(err => {
          console.log(err);
        });
      })
      console.log(response);
    })

    this.setState({find: '', near: '', price: ''})
  }
  
  // onSubmitForm(event){
  //     var find = this.state.find
  //     var near = this.state.near
  //   event.preventDefault();
  //   this.props.getDinnerListings(find, near)
  // }

  render () {

    return (
      <div className="center">
      		<h1>Dinner & Drinks</h1>
          <form onSubmit={this.onSubmitForm} >
            <label >

              <input type="text" placeholder="Find" value={this.state.find} onChange={this.onFindChange}/>
            </label>

            <label>

              <input type="text" placeholder="Near" value={this.state.near} onChange={this.onNearChange} />
            </label>

            <label>

              <input type="text" placeholder="price" value={this.state.price} onChange={this.onPriceChange} />
            </label>


            {/* <div className="panel-body">
                        <h3>Current Volume: { this.props.app.volume }</h3>
                        <Slider
                            value={ this.props.app.volume }
                            orientation="horizontal"
                            step={ 1 }
                            min={ 0 }
                            max={ 31 }
                            onChange={ this.handleChange }
                          />
            </div> */}

            <input type="submit" value="Submit" className="btn-round" />
          </form>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    yelp: state.yelp,
    selections: state.selections
  }
}
function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
 export default connect(mapStateToProps,mapDispachToProps)(Home);
