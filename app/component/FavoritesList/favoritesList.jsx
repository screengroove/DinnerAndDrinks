import React from 'react'
import axios from 'axios'

export default class FavoritesList extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentWillMount () {
    this.getFavorites()
  }

  getFavorites () {
    axios.get('/api/favorites')
            .then(resp => { this.setState({ list: resp.data }) })
            .catch(err => { console.log(`Favorites get error: ${err}`) })
  }

  deleteFavorite (index) {
    axios({
      method: 'DELETE',
      url: '/api/favorites',
      data: {
        deleteMe: this.state.list[index]._id
      }
    })
        .then((resp) => {
          console.log(`Successful delete`)
        })
        .catch((err) => {
          console.log(`Error in deleting favorite: ${err}`)
        })
    let copy = this.state.list.slice()
    copy.splice(index, 1)
    this.setState({list: copy})
  }

  render () {
    return (
      <div>

        {this.state.list.map((e, i) => (
          <div>
            {e.name}
            <button className='toggleBtn' onClick={this.deleteFavorite.bind(this, [i])}>Delete Me</button>
          </div>
        ))}

      </div>
    )
  }
}
