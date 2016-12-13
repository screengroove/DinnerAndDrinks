import React, { Component } from 'react';
import ListCard from './ListCard';



class Sidebar  extends Component{

  handleSelectClick(stuff){
    this.props.setDinnerChoice(stuff)
  }

  fetchBarsNearby(find, near, price){  
    this.props.getDinnerListings(find, near, price)
  }

  chooseDrinksSpot(choice){
    this.props.setDrinksChoice(choice)
  }

  render () {
  	const { yelp } = this.props;

  	const ListItems  = yelp.listings.map( (item, i) =>{
        //console.log("CARD ITEMS", item )        
          return <ListCard deets={ item }  key={i} id={i} {...this.props}/>
  	} )

    return (
      <aside>
        {ListItems}
      </aside>
    )
  }
}

export default Sidebar;