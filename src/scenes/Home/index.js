import React, { Component } from 'react'
import {Helmet} from "react-helmet"

import TopHeader from '../../components/TopHeader'


class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
         
          <meta charSet="utf-8" />
          <title>Home | dev_hernandez2 Personal Website</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="home-header animated fadeIn">
          <div className=" has-text-centered">
              <TopHeader
                title="Hello, world"
                subTitle={["Hello, my name is William Hernandez and I am a  ", <strong className="has-text-primary">Full Stack Developer</strong>,  " who loves to build Digital Products and is ..."]}
                HasButton={true}
                buttonStyles="is-primary is-large hvr-grow-shadow"
                buttonHref="https://reactjs.org/docs/components-and-props.html" 
                buttonText="Available for hire" 
              />
          </div>
        </div>
    </div>
    )
  }
}

export default Home
