import React from 'react'

let choices = [
  'Coffee',
  'Movies',
  'Restaurants'
]

export default class Selector extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  getText (e) {
    localStorage.setItem(['Yelp-Search-Term'], e.target.value)
    this.setState({ term: e.target.value })
  }

  render () {
    let selections = choices.map(e => (
      <input type='submit' value={e} onClick={this.getText.bind(this)} />
    ))

    return (
      <div>
        {selections}
      </div>
    )
  }
}
