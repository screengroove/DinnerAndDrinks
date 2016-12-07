import React from 'react'
import axios from 'axios'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'


export default class HotspotList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hotspots: []
    }
    this.getHotspotList = this.getHotspotList.bind(this)
  }

  componentDidMount () {
    this.getHotspotList()

    setInterval(this.getHotspotList, 1000)
  }


  saveFavorite (index) {


    axios.post('/api/favorites', {
      name: this.state.list[index].name,
      address: this.state.list[index].location.address,
      rating: this.state.list[index].rating,
    })
    .then(resp => {
      this.setState({id: this.state.list[index].id})
    })
    .catch(err => { console.log(`save Favorites error: `, err) })
  }



  getHotspotList () {
    axios.get('/api/hotspots')
      .then((response) => {
        this.setState({ hotspots: response.data })
      })
      .catch((error) => {
        console.log(`Error in axios hotspot list get: ${error}`)
      })
  }

  render () {
    return (
      <div id='hotspot-list-foundation'>
        <List id='hotspot-list'>
        <h2>View Submissions</h2>
            {this.state.hotspots.map((spot, i) => (
              <ListItem id="hotspot-entry" key={i}>
                <span><p>{spot.name}</p></span>
                <span><p>{spot.address}</p></span>
                <span><p>{spot.description}</p></span>
                <span><p>{spot.rating} Stars</p></span>
                <span><p>{spot.user}</p></span>
                <FloatingActionButton onClick={this.saveFavorite.bind(this, [i])}>
                                      <ContentAdd />
                                    </FloatingActionButton>
                <p>______________________________________</p>
              </ListItem>

            ))}
        </List>
      </div>
    )
  }

}
