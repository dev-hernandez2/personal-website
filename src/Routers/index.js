import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//component
import Nav from '../components/Nav'
import Footer from '../components/Footer'

//views
import Home from '../views/Home'
import About from '../views/About'
import Error404 from '../views/Error/404'

const Blog   = () => <h1> Blog </h1>

class Routers extends Component {
  render() {
    return (
      <Router>
        <div>
           <Nav />
            
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/blog" component={Blog}/>
                  <Route component={Error404}/> 
              </Switch>
            
            <Footer />
          </div>
      </Router>
      
    )
  }
}

export default Routers
