import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import *  as actionCreators from '../actions/actionCreators.js';
import Loader from  './Loader.js';
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
    const {ui }= this.props
    return (
          <div className="full-screen">
          		<Header {...this.props}/>
          		<Sidebar {...this.props}/>
          		<Map  {...this.props}/>
                    <Loader loading={ui.loading}/>
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
 export default connect( mapStateToProps , mapDispachToProps)(Listings);