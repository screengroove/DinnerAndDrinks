import React, { Component } from 'react';
import { VelocityComponent  } from 'velocity-react';
import velocity_animate from 'velocity-animate';
import velocity_ui from 'velocity-animate/velocity.ui';
import {Motion, spring} from 'react-motion';
import pin  from '../../assets/marker_icon.svg';
import pinTest  from '../../assets/marker_red.svg';


class Marker  extends Component{
  constructor(){
    super();

  }

  render () {
  const pinIcon = this.props.test === 'red' ? pinTest : pin;
  const pinKey = this.props.test === 'red' ? 'X' : this.props.text;
    return (


     <Motion style={{x: spring(this.props.motion ? -400 :0)}}>
      {({x}) =>
          <div className="pin" style={{
                transform: `translate3d(0, ${x}px, 0)`

              }}>
          		<img src={pinIcon} alt=""/>
          		<div className="key">
          			<span>{pinKey}</span>
          		</div>      		
          </div>
        }
        </Motion>
    )
  }
}
export default Marker