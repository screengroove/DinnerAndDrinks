import React, { Component } from 'react';
import ListCard from './ListCard';



class Sidebar  extends Component{

  handleSelectClick(stuff){
    this.props.setDinnerChoice(stuff)
  }

  render () {
  	const { yelp } = this.props;

  	const ListItems  = yelp.listings.businesses.map( (item, i) =>{
          return <ListCard deets={item} key={i} id={i} handler={this.handleSelectClick.bind(this)} />
  	} )

    return (
      <aside>
        {ListItems}
      </aside>
    )
  }
}

export default Sidebar;