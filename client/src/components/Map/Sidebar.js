import React, { Component } from 'react';
import ListCard from './ListCard';



class Sidebar  extends Component{

  handleSelectClick(stuff){
    this.props.setDinnerChoice(stuff)
  }

  fetchBarsNearby(find, near, price){
   
    this.props.getDinnerListings(find, near, price)
  }

  render () {
  	const { yelp } = this.props;

  	const ListItems  = yelp.listings.map( (item, i) =>{
        //console.log("CARD ITEMS", item )        
          return <ListCard deets={ item } key={i} id={i} handler={this.handleSelectClick.bind(this)} fetchBarsNearby={this.fetchBarsNearby.bind(this)}  />
  	} )

    return (
      <aside>
        {ListItems}
      </aside>
    )
  }
}

export default Sidebar;