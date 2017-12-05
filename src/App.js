import Routers from './components/Routers';
import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <Routers />
        </Router>
    );
  }
}

export default App;
