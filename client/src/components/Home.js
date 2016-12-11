import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component{
  constructor(props){
    super(props)

    this.state = {
      find: '',
      near: ''
    }
    this.onFindChange = this.onFindChange.bind(this)
    this.onNearChange = this.onNearChange.bind(this)
    this.onSubmitForm = this.onSubmitForm.bind(this)
  }

  // componentWillMount(){
  //   axios.get('/api/yelp/search')
  //   .then(response =>{
  //     console.log(response);
  //   })
  // }

  onFindChange(event){
    this.setState({ find: event.target.value })
  }

  onNearChange(event){
    this.setState({ near: event.target.value })
  }

  onSubmitForm(event){
    event.preventDefault();
    var find = this.state.find
    var near = this.state.near
    axios.get('/api/yelp/searchbars', {
      params: {
        find: find,
        near: near
      }

    })
    .then(response =>{
      console.log(response);
    })

    this.setState({find: '', near: ''})
  }

  render () {

    return (
      <div>
      		<h1>HOME</h1>
          <form onSubmit={this.onSubmitForm}>
            <label>

              <input type="text" placeholder="Find" value={this.state.find} onChange={this.onFindChange}/>
            </label>
            <label>

              <input type="text" placeholder="Near" value={this.state.near} onChange={this.onNearChange} />
            </label>

            <input type="submit" value="Submit" />
          </form>
      </div>
    )
  }
}
export default Home
