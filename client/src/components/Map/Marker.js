import React, { Component } from 'react';
import { VelocityComponent  } from 'velocity-react';
import velocity_animate from 'velocity-animate';
import velocity_ui from 'velocity-animate/velocity.ui';
import pin  from '../../assets/marker_icon.svg';
import pinTest  from '../../assets/marker_red.svg';


class Marker  extends Component{
  render () {
  const pinIcon = this.props.test === 'red' ? pinTest : pin;
    return (
      <div className="pin">
      		<img src={pinIcon} alt=""/>
      		<div className="key">
      			<span>{this.props.text}</span>
      		</div>      		
      </div>
    )
  }
}
export default Marker