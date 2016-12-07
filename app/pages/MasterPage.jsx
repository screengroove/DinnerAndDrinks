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
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle () {
    this.setState({open: !this.state.open})
  }
  clearLocalStorage () {
    localStorage.clear()
  }

  render () {
    return (
      <div>
        <AppBar title='Recommendator' onClick={this.handleToggle} />
        <Drawer width={200} open={this.state.open}>
          <MenuItem onClick={this.handleToggle} ><Link to='/'>Home</Link></MenuItem>
          <MenuItem onClick={this.handleToggle} ><Link to='/signup'>Sign Up/Login</Link></MenuItem>
          <MenuItem onClick={this.handleToggle} ><Link to='/favorites'>Favorites</Link></MenuItem>
          <MenuItem onClick={this.handleToggle} ><Link to='/hotspots'>Hotspots</Link></MenuItem>
          <MenuItem onClick={this.clearLocalStorage}><Link to='/'>Logout</Link></MenuItem>

        </Drawer>
        {this.props.children}
      </div>
    )
  }
}
