import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import *  as actionCreators from '../actions/actionCreators.js';
import Map from './Map/Map';
import Sidebar from './Map/Sidebar';
import Header from './Map/Header';

class Listings  extends Component{

  // componentWillMount(){
  //   this.props.getListings('bars', 'santa monica')
  // }

  render () {
    return (
      <div className="full-screen">
      		<Header {...this.props}/>
      		<Sidebar {...this.props}/>
      		<Map  {...this.props}/>
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
 export default connect( mapStateToProps , mapDispachToProps)(Listings);