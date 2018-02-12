import React, { Component } from "react";
import { Helmet } from "react-helmet";

import TopHeader from "../../components/TopHeader";

import projectsData from "../../services/data/projects";
import CaseStudy from "../../components/Project/Casestudy";
import ProjectRegular from "../../components/Project/Project";



class Project extends Component {
  state = {
    project: [],
    urlId: parseFloat(this.props.match.params.id)
  };

  componentDidMount() {
    this.setState({
      project: projectsData.map(p => p).find(p => p.id === this.state.urlId)
    });
  }

  render() {
   
    const project = (this.state.project  !== undefined ) ? this.state.project : window.location.href = "/404";
    const fullBackground = {
        background: `url(${project.headerImg}) center center / cover no-repeat `,
    };



    return (
      <div className="animated fadeIn">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{project.title + " " + project.company + " | dev_hernandez2 Personal Website"}</title>
          <meta name="description" content="Hernandez2.com" />
        </Helmet>

        <div className="header" style={{...fullBackground}} >
          <TopHeader
            title={
              <div style={{color: 'white'}}>
                <p>{project.title}</p>
                <strong className="has-text-primary">{project.company}</strong>
              </div>
            }
            
          />
        </div>
        {(() => {
          if (project.isCase) {
            return(
              <CaseStudy project={project}/>
            ) 
          } else {
              return(
                <ProjectRegular project={project} />
              )
          }
        })()}
      </div>
    );
  }
}

export default Project;
