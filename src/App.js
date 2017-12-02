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
          color="p-5 is-primary"
          type="link" 
          href="https://reactjs.org/docs/components-and-props.html" 
          text="Available for hire" />
          
          
      </div>
    );
  }
}

export default App;
