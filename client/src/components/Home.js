import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import *  as actionCreators from '../actions/actionCreators.js';

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

  onFindChange(event){
    this.setState({ find: event.target.value })
  }

  onNearChange(event){
    this.setState({ near: event.target.value })
  }

  // onSubmitForm(event){
  //   event.preventDefault();
  //   var find = this.state.find
  //   var near = this.state.near
  //   axios.get('/api/yelp/searchbars', {
  //     params: {
  //       find: find,
  //       near: near
  //     }

  //   })
  //   .then(response =>{
  //     console.log(response);
  //   })

  //   this.setState({find: '', near: ''})
  // }

  onSubmitForm(event){
      var find = this.state.find
      var near = this.state.near
    event.preventDefault();
    this.props.getDinnerListings(find, near)
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
function mapStateToProps(state) {
  return {
    yelp: state.yelp,
    selections: state.selections
  }
}
function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
 export default connect(mapStateToProps,mapDispachToProps)(Home);
