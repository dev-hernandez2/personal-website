import React, { Component } from 'react';
import {  Route } from 'react-router-dom';

import Nav from '../Nav';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Blog = () => <h2>Blog</h2>;

class Routers extends Component {
  render() {
    return (
      <div>
        
           <Nav />
            <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/blog" component={Blog}/>
            </div>

      </div>
      
    );
  }
}

export default Routers;
