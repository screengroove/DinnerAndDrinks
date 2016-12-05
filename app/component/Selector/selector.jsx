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
      choice: ''
    }
  }

  getText (e) {
    this.setState({choice: e.target.value})
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
