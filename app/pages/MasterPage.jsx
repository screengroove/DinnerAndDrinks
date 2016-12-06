import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

export default class MasterPage extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleToggle (e) {
    this.setState({open: !this.state.open})
  }

  render () {
    return (
      <div>
        <AppBar
            title="Recommendator"
            onLeftIconButtonTouchTap={this.handleToggle}
          />
          {console.log(this.state.open)}
        <Drawer
          width={200}
          open={this.state.open}
        >
          <MenuItem>Home</MenuItem>
          <MenuItem>Sign Up</MenuItem>
          <MenuItem>Favorites</MenuItem>
        </Drawer>
        {this.props.children}
      </div>
    )
  }
}
