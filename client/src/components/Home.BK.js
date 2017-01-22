import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router';
import Loader from './Loader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import *  as actionCreators from '../actions/actionCreators.js';
import Slider from 'react-rangeslider'


class Home extends Component{
  constructor(props){
      super(props)

    this.state = {
      find: '',
      near: '',
      price: 3,
      priceRender: "$$$",
      inputFindValid: true,
      inputNearValid: true
    }
    this.onFindChange = this.onFindChange.bind(this)
    this.onNearChange = this.onNearChange.bind(this)
    this.onPriceChange = this.onPriceChange.bind(this)
    this.onSubmitForm = this.onSubmitForm.bind(this)
  }

  onFindChange(event){
    this.setState({ find: event.target.value })
  }

  onNearChange(event){
    this.setState({ near: event.target.value })
  }

  onPriceChange(value){
    var dollars;
    if(value === 1){
      dollars = '$'
    }else if(value === 2){
      dollars = '$$'
    }else if(value === 3){
      dollars = '$$$'
    }else if(value === 4){
      dollars = '$$$$'
    }
    this.setState({ priceRender: dollars })
    this.setState({ price: value })
  }

  onSubmitForm(event){
    event.preventDefault();
    var find = this.state.find
    var near = this.state.near
    var price = this.state.price

    if(price === '' || price === undefined || price == 4){
      price = '1,2,3,4';
    }else if(price == 3){
      price = '1,2,3';
    }else if(price == 2){
      price = '1,2';
    }

    this.props.getDinnerListings(find, near, price)
    this.setState({find: '', near: '', price: '', loading: true})

    if(find === undefined || find === ''){
      this.setState({ inputFindValid: false });
    }
    if(near === undefined || near === ''){
      this.setState({ inputNearValid: false });
    }
  }

  render () {
    var errorFindStyle = this.state.inputFindValid ? { opacity: 0 } : { opacity: 1 };
    var errorNearStyle = this.state.inputNearValid ? { opacity: 0 } : { opacity: 1 };
    return (
      <div className="center">

        <div className="hero">
          <h1 >Dinner & Drinks</h1>
          <div className="description">
            <h4>The easy way to plan your night out</h4>

          </div>
          <form onSubmit={this.onSubmitForm} >
            <div>

              <label >
                <div className="hidden" style={ errorFindStyle }>required</div>
                Find:
                <input className="formInput" type="text" value={this.state.find} onChange={this.onFindChange}/>
              </label>
            </div>

            <div>

              <label>
                <div className="hidden" style={ errorNearStyle }>required</div>
                Near:
                <input className="formInput" type="text" value={this.state.near} onChange={this.onNearChange} />
              </label>
            </div>

            <div>
              <h3 className="center">Price: {this.state.priceRender}
              </h3>

              <Slider
                value={this.state.price}
                orientation="horizontal"
                onChange={ this.onPriceChange }
                min={1}
                max={4}
              />
            </div>

            <input type="submit" value="Submit" id="btn-round2" />
          </form>

          <Link to="/map"  className="btn-admin">MAP</Link>
          <Loader loading={this.state.loading}/>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    yelp: state.yelp,
    selections: state.selections,
    ui: state.ui
  }
}
function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
 export default connect(mapStateToProps,mapDispachToProps)(Home);
