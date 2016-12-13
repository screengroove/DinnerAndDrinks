import React, { Component } from 'react';

import '../styles/main.css';
import loader_bg from '../assets/loader_bg.jpg';
console.log(loader_bg )


class App extends Component {
  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        test: "something" //sends auth instance from route to children
      })
    }
    return (
      <div className="App">
       {children}
       {loader_bg}
      </div>
    );
  }
}

export default App;
