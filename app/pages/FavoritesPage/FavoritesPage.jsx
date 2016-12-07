import React from 'react'
import Subheader from 'material-ui/Subheader'
import { Router, Route, Link, browserHistory } from 'react-router'

import FavoritesList from '../../component/FavoritesList/favoritesList.jsx'

export default class name extends React.Component {

  render () {
    return (
      <div>
        <Subheader>Favorites</Subheader>
        <FavoritesList />
      </div>
    )
  }
}
