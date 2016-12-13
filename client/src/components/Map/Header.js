import React, { Component } from 'react';
import eat from '../../assets/eat_icon.svg';
import drink from '../../assets/drink_icon.svg';
import pin from '../../assets/marker_red.svg';

class Header  extends Component{
  render () {
    const pinImg = this.props.selections.dinnerSelected 
                                ? <img src={pin}/> 
                                : null;
    const brandImg = this.props.selections.dinnerSelected ? drink : eat;
    return (
      <header className="map-header">
          <img className="brand" src={brandImg} alt=""/>
      	<div className="step first-step">
      		Step 1: <span>{this.props.selections.dinnerVenue}</span> 
              {pinImg}
      	</div>
      	<div className="step">
      		Step 2:  <span>{this.props.selections.drinksVenue}</span>
      	</div>
      </header>
    )
  }
}
export default Header