import React, { Component } from 'react'

import Section from '../../components/Section/Section'
import SectionTitle from '../../components/Section/SectionTile'
import Row from '../../components/Grids/Row'
import Column from '../../components/Grids/Column'

import projects from '../../services/data/projects'


class WhatIDo extends Component {

    state = {
        data: projects,
    }
      

  getDo = () => {
    return(
      <div>
      <p> How I</p>
      <p> Do IT</p>
      </div>
    )
  }

  render() {
    const project = projects.map(project => {
        return (
          <Row  key={project.id} display="is-mobile"  >
            <Column size="is-11 is-offset-1" >
                <div className="how-do-div">
                <h3>{project.title}</h3>
                <h4 className="do-tch">{project.do}</h4>
                <p>
                  {project.description}
                </p>
                </div>
            </Column>
          </Row>
        )
    })
    return (
       
      <div>
        <Section
          backgroundColor=""
          textBg={this.getDo()}
          textColor="bgtextSectionProject"
         >
            <SectionTitle 
              title="Selected Work"
              textColor="title is-3 color-regular"
              topLineColor="top-primary"
             />

            <div className="row-m">
              {project}      
            </div>
        </Section>
      </div>
    )
  }
}

export default WhatIDo
