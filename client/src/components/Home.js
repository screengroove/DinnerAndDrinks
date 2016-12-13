import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router';
import Loader from './Loader';
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
        price: '',
        loading: false
      }
      this.onFindChange = this.onFindChange.bind(this)
      this.onNearChange = this.onNearChange.bind(this)
      this.onPriceChange = this.onPriceChange.bind(this)
      this.onSubmitForm = this.onSubmitForm.bind(this)
  }

  componentWillMount(){
    console.log("HOME COMPONENT WILL MOUNT" )
      
    //this.props.getDinnerListings('pizza', 'santa monica', 2)
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
    this.props.getDinnerListings(find, near, price)
    this.setState({find: '', near: '', price: '', loading: true})
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
          <Link to="/map"  className="btn-admin">MAP</Link>
          <Loader loading={this.state.loading}/>
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
