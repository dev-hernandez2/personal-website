import Routers from './components/Routers';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Routers';
import Buttom from './components/Buttom';

import './App.css';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Blog = () => <h2>Blog</h2>;

class App extends Component {
  render() {
    return (
      <div className="app">

        <Router>
            <Routers />
        </Router>

      <Buttom 
        color="p-5 is-primary"
        type="link" 
        href="https://reactjs.org/docs/components-and-props.html" 
        text="Available for hire" 
      />
      </div>
      
    );
  }
}

export default App;
