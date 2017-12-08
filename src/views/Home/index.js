import React, { Component } from 'react'
import {Helmet} from "react-helmet"

import TopHeader from '../../components/TopHeader'
import WhatIDo from './WhatIDo'
import Project from './Project'


class Home extends Component {
 
  subTitle = () => {
    return(
      <div>
        My name is William Hernandez and I am a, 
        <strong className="has-text-primary"> Full Stack Developer</strong>, 
        who loves to build Digital Products and is ...
      </div>
    )
  }
  
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home | dev_hernandez2 Personal Website</title>
          <meta name="description" content="Hernandez2.com" />
        </Helmet>

        <div className="home-header animated fadeIn">
          <div className=" has-text-centered">
              <TopHeader
                title="Hello, world"
                subTitle={this.subTitle()}
                HasButton={true}
                buttonStyles="is-primary is-large hvr-grow-shadow"
                buttonHref="#Contanct" 
                buttonText="Available for hire" 
              />
          </div>
        </div>

        <WhatIDo />        
        <Project />
      </div>
    )
  }
}

export default Home
