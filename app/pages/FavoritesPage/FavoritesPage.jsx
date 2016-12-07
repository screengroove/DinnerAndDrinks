import React from 'react'
import Subheader from 'material-ui/Subheader'
import { Router, Route, Link, browserHistory } from 'react-router'

import FavoritesList from '../../component/FavoritesList/favoritesList.jsx'

const subheader = {
  'font-size': '24px'
}

export default class name extends React.Component {

  render () {
    return (
      <div>
        <Subheader style={subheader}>Favorites</Subheader>
        <FavoritesList />
      </div>
    )
  }
}
