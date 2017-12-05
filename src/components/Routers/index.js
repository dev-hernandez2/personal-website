import React, { Component } from 'react';
import {  Route } from 'react-router-dom';

import Nav from '../Nav';
import Home from '../../scenes/Home';

class Routers extends Component {
  render() {
    return (
      <div>
        
           <Nav />
            <div>
            <Route exact path="/" component={Home}/>
           {/*  
            <Route path="/about" component={About}/>
            <Route path="/blog" component={Blog}/>
          */}  
            </div>

      </div>
      
    );
  }
}

export default Routers;
