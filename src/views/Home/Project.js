import React, { Component } from 'react'

import Section from '../../components/Section/Section'
import SectionTitle from '../../components/Section/SectionTile'
import ProjectsList from '../../components/ProjectsList'



class Projects extends Component {
 
  render() {

    return (
       
      <div>
        <Section
          backgroundColor="bg-section-color-white"
          textBg={(
            <div>
              <p> How I</p>
              <p> Do It</p>
            </div>
          )}
          textColor="bgtextSectionProject"
        >
            <SectionTitle 
              title="Selected Work"
              textColor="title is-3 color-regular"
              topLineColor="top-primary"
            />

            <div className="row-m">
              <ProjectsList projects={this.props.projects} />    
            </div>
        </Section>
      </div>
    )
  }
}


export default Projects
