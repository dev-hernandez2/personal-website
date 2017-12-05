import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//component
import Nav from '../components/Nav'

//views
import Home from '../scenes/Home'

class Routers extends Component {
  render() {
    return (
      <Router>
        <div>
           <Nav />
            <div className="container">
              <Switch>
                  <Route exact path="/" component={Home}/>
                  {/*  
                    <Route path="/about" component={About}/>
                    <Route path="/blog" component={Blog}/>
                    <Route component={Error404}/>
                  */}  
              </Switch>
            </div>
          </div>
      </Router>
      
    )
  }
}

export default Routers
