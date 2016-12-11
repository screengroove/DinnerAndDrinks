import React, { Component } from 'react';
import { VelocityComponent  } from 'velocity-react';
import velocity_animate from 'velocity-animate';
import velocity_ui from 'velocity-animate/velocity.ui';
import pin  from '../../assets/marker_icon.svg';


class Marker  extends Component{
  render () {

    return (
      <div className="pin">
      		<img src={pin} alt=""/>
      		{this.props.text}
      </div>
    )
  }
}
export default Marker