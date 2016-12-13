import React, { Component } from 'react';
import '../styles/main.css';
import eat from '../assets/eat_icon.svg';
console.log(eat )




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

      </div>
    );
  }
}

export default App;
