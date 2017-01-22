import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import Loader from './Loader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators.js';
import Slider from 'react-rangeslider';
import party_pic from '../assets/loader_bg.jpg'


class Home extends Component {
  constructor (props) {
    super(props);

    this.state = {
      find: '',
      near: '',
      price: 3,
      priceRender: '$$$',
      inputFindValid: true,
      inputNearValid: true
    };
    this.onFindChange = this.onFindChange.bind(this);
    this.onNearChange = this.onNearChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onFindChange (event) {
    this.setState({ find: event.target.value });
  }

  onNearChange (event) {
    this.setState({ near: event.target.value });
  }

  onPriceChange (value) {
    var dollars;
    if (value === 1) {
      dollars = '$';
    } else if (value === 2) {
      dollars = '$$';
    } else if (value === 3) {
      dollars = '$$$';
    } else if (value === 4) {
      dollars = '$$$$';
    }
    this.setState({ priceRender: dollars });
    this.setState({ price: value });
  }

  onSubmitForm (event) {
    event.preventDefault();
    var find = this.state.find;
    var near = this.state.near;
    var price = this.state.price;

    if (price === '' || price === undefined || price == 4) {
      price = '1,2,3,4';
    } else if (price == 3) {
      price = '1,2,3';
    } else if (price == 2) {
      price = '1,2';
    }

    this.props.getDinnerListings(find, near, price);
    this.setState({find: '', near: '', price: '', loading: true});

    if (find === undefined || find === '') {
      this.setState({ inputFindValid: false });
    }
    if (near === undefined || near === '') {
      this.setState({ inputNearValid: false });
    }
  }

  render () {
    var errorFindStyle = this.state.inputFindValid ? { opacity: 0 } : { opacity: 1 };
    var errorNearStyle = this.state.inputNearValid ? { opacity: 0 } : { opacity: 1 };
    return (
      <div className='home-hero' style={{backgroundImage: `url(${party_pic})`}}>
        <div className='home-cols'>
          <div className="left-col">
            <h1>Dinner & Drinks</h1>
          </div>
          <div className="right-col">
            <form onSubmit={this.onSubmitForm} >

            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    yelp: state.yelp,
    selections: state.selections,
    ui: state.ui
  };
}
function mapDispachToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
export default connect(mapStateToProps, mapDispachToProps)(Home);
