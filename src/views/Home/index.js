import React, { Component } from "react"
import { Helmet } from "react-helmet"

import TopHeader from "../../components/TopHeader"
import Contact from "../../components/Contact"
import WhatIDoSection from "./WhatIDoSection"
import Project from "./Project"
import projectsData from "../../services/data/projects"

class Home extends Component {
  state = {
    projects: []
  }

  componentDidMount() {
    this.setState({ projects: projectsData })
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home | dev_hernandez2 Personal Website</title>
          <meta name="description" content="" />
        </Helmet>

        <div className="home-header">
          <div className=" has-text-centered">
            <TopHeader
              title="Hello, world"
              subTitle={
                <div>
                  My name is William Hernandez and I am a,
                  <strong className="has-text-primary">
                    {" "}
                    Full Stack Developer
                  </strong>, who loves to build Digital Products and is ...
                </div>
              }
              HasButton={true}
              buttonStyles="is-primary is-medium hvr-grow-shadow"
              buttonHref="#Contact"
              buttonText="Available for hire"
            />
          </div>
        </div>

        <WhatIDoSection />
        <Project projects={this.state.projects} />
        <Contact />
      </div>
    );
  }
}

export default Home;
