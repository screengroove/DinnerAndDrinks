import React from 'react'
import axios from 'axios'

export default class FavoritesList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    componentWillMount() {
        this.getFavorites()
    }

    getFavorites () {
        axios.get('/api/favorites')
            .then(resp => { this.setState({ list: resp.data }) })
            .catch(err => { console.log(`Favorites get error: ${err}`) })
    }

    render() {
        return (
            <div>
                {this.state.list.map(e => (
                    <div>
                        {e.name}
                    </div>
                ))}
            </div>
            )
        }
}