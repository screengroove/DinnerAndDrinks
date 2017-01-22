import React, { Component } from 'react';
import classNames from 'classnames';
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
      inputNearValid: true,
      focusLocation: false,
      focusFind: false
    };

  }

  onNearChange (event) {
    this.setState({ 
      near: event.target.value,
      focusLocation: event.target.value.length > 1 ? true : false 
    });
  }

  onFindChange (event) {
    this.setState({ 
      find: event.target.value,
      focusFind: event.target.value.length > 1 ? true : false
    
  });
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
    console.log("SUBMIT VALS", find, near )

    if (price === '' || price === undefined || price === 4) {
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

  handleFocusLocation(e) {
    this.setState({
      focusLocation: this.state.near.length > 1 ? true : false
    })
  }

  render () {
    var errorFindStyle = this.state.inputFindValid ? { opacity: 0 } : { opacity: 1 };
    var errorNearStyle = this.state.inputNearValid ? { opacity: 0 } : { opacity: 1 };
    const locationInput = classNames({
      'input': true,
      'input-filled': this.state.focusLocation
    });
    const findInput = classNames({
      'input': true,
      'input-filled': this.state.focusFind
    });
    return (
      <div className='home-hero' style={{backgroundImage: `url(${party_pic})`}}>
        <div className='home-cols'>
          <div className="left-col">
            <h1>Dinner & Drinks</h1>
          </div>
          <div className="right-col">
            <form onSubmit={this.onSubmitForm.bind(this)} >
              <span className={findInput}>
                <input className="input_field"
                  value={this.state.find}
                  onChange={this.onFindChange.bind(this)}
                  type="text"
                  placeholder="Sushi, Tacos, Tapas, etc.." />
                <label className="input_label">
                  <span className="input_label-content">What are you in the mood for?</span>
                </label>
              </span>

              <span className={locationInput}>
                <input className="input_field" 
                        value={this.state.near}
                        onChange={this.onNearChange.bind(this)}
                        type="text" 
                        placeholder="Santa Monica, Los Feliz, etc.." />
                <label className="input_label">
                  <span className="input_label-content">Where do you wanna get down?</span>
                </label>
              </span>
               <input type="submit" value="Submit" className="btn-submit" />

            </form>
          </div>
        </div>
         <Loader loading={this.state.loading}/>
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
