import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

export default class MasterPage extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
