import React, { Component } from 'react'
import axios from 'axios'
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

    if(find === undefined || find === ''){
      this.setState({ inputFindValid: false });
    }
    if(near === undefined || near === ''){
      this.setState({ inputNearValid: false });
    }

    axios.get('/api/yelp/search', {
      params: {
        find: find,
        near: near,
        price: price
      }
    })
    .then(response =>{
      response.data.businesses.forEach(function(restaurant){
        var restId = restaurant.id
        var coordinates = restaurant.coordinates;
        // console.log(restaurant);
        axios.get('api/yelp/searchbars', {
          params: {
            lon: coordinates.longitude,
            lat: coordinates.latitude,
            price: price
          }
        })
        .then(response2 => {

          restaurant.bars = response2;
        })
        .catch(err => {
          console.log(err);
        })

        axios.get('api/yelp/business', {
          params: {
            id: restId
          }
        })
        .then(response3 => {
          restaurant.photos = response3.data
        })
        .catch(err => {
          console.log(err);
        });
      })
      console.log(response);
    })
    // if(this.state.inputFindValid === false && this.state.inputNearValid === false){
      //this.setState({find: '', near: '', price: 3})
    //}

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
        </div>
      </div>
    )
  }
}
export default Home
