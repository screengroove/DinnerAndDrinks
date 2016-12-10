import React, { Component } from 'react';
import ListCard from './ListCard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import *  as actionCreators from '../../actions/actionCreators.js';


class Sidebar  extends Component{

  render () {
  	const { yelp } = this.props;

  	const ListItems  = yelp.restaurants.businesses.map( (item, i) =>{
  		console.log("ITEMS", item );
          return <ListCard deets={item} key={i} id={i} />
  	} )

    return (
      <aside>
        {ListItems}
      	

      </aside>
    )
  }
}

function mapStateToProps(state) {
  return {
    yelp: state.yelp
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
 export default connect( mapStateToProps , mapDispachToProps)(Sidebar);