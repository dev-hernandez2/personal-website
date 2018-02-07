import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//component
import Nav from "../components/Nav";
import Footer from "../components/Footer";

//views
import Home from "../views/Home";
import Project from "../views/CaseStudy";
import About from "../views/About";
import Blog from "../views/Blog";
import Error404 from "../views/Error/404";


const Routers = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/project/:id' component={Project}/>
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/404" component={Error404} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default Routers;
