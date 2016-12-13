import React, { Component } from 'react';


class Header  extends Component{
  render () {
    return (
      <header className="map-header">
      	<div className="step">
      		Step 1 {this.props.selections.dinnerChoice}
      	</div>
      	<div className="step">
      		Step 2: Select Bar
      	</div>
      </header>
    )
  }
}
export default Header