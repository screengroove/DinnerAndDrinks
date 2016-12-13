import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import *  as actionCreators from '../actions/actionCreators.js';
import Loader from  'react-loader';
import Map from './Map/Map';
import Sidebar from './Map/Sidebar';
import Header from './Map/Header';

class Listings  extends Component{
  constructor(){
    super();
      this.state = {
        loaded: true
      }
  }



  render () {
    return (
      <Loader loaded={this.state.loaded}>
          <div className="full-screen">
          		<Header {...this.props}/>
          		<Sidebar {...this.props}/>
          		<Map  {...this.props}/>
          </div>
      </Loader>
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