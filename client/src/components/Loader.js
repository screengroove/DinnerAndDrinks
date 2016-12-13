import React, { Component } from 'react';
import classNames from 'classnames';
import spinner from '../assets/spinner.svg'


class Loader  extends Component{
  render () {
  	const loadStyle = classNames({
  	  "loader": true,
  	  "is-loading":  this.props.loading
  	})
    return (
      <div className={loadStyle}>
      		<p> Searching top spots in your area...</p>
      		<img src={spinner} alt=""/>
      </div>
    )
  }
}
export default Loader;