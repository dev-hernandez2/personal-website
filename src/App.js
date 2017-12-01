import React, { Component } from 'react';

import Nav from './components/Nav';
import Buttom from './components/Buttom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Buttom 
          type="link" 
          href="https://reactjs.org/docs/components-and-props.html" 
          text="React" />
      </div>
    );
  }
}

export default App;
