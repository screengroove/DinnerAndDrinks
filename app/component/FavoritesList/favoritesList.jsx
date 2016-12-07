import React from 'react'
import axios from 'axios'
import {List, ListItem, makeSelectable} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentRemove from 'material-ui/svg-icons/content/remove'

const style = {
  marginRight: 20
}

let SelectableList = makeSelectable(List)

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
        <SelectableList>
            {this.state.list.map((e, i) => (
              <ListItem
                value={i}
                primaryText={e.name}
                rightIcon={<FloatingActionButton onClick={this.deleteFavorite.bind(this, [i])} mini secondary style={style}>
                  <ContentRemove />
                </FloatingActionButton>}
                secondaryText={e.phone + ' || Rating: ' + e.rating}
                leftAvatar={<Avatar src={e.image_url} />}
            />
        ))}
          </SelectableList>
      </div>
    )
  }
}

/**
 * 
  userId: String,
  yelpId: String,
  name: String,
  categories: [String],
  address: [String],
  phone: String,
  rating: Number,
  image_url: String,
  businessUrl: String,
  lat: Number,
  long: Number
 * 
 */