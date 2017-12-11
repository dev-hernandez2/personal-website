import React, { Component } from 'react'

import Section from '../../components/Section/Section'
import SectionTitle from '../../components/Section/SectionTile'
import Row from '../../components/Grids/Row'
import Column from '../../components/Grids/Column'

import projects from '../../services/data/projects'
//import componets
import Button from '../../components/Button'

//test img
import images from '../../assets/img/dummy.jpg'


class WhatIDo extends Component {

    state = {
        data: projects,
    }
      

  getDo = () => {
    return(
      <div>
      <p> How I</p>
      <p> Do It</p>
      </div>
    )
  }

  render() {
    const project = projects.map(project => {
     
        return (
          <Row  key={project.id} display="is-mobile"  >
            <Column size="is-12 is-offset-1" >
                <Row display="how-do-div">
                {(()=>{
                  if(project.position === 'left') {
                    return (
                      <Column >
                        <img className=""  src={images} alt="" />
                      </Column>
                    )
                  }
                 })()}
                  <Column size="project-info">
                    <h3>{project.title}</h3>
                    <h4 className="do-tch">{project.do}</h4>
                    <p>
                      {project.description}
                    </p>
                    <Button
                    color=" is-primary btn-project hvr-shadow"
                    type="link" 
                    href="#"
                    text="See Case Study"
                  />
                  </Column>
               {(()=>{
                if(project.position === 'right') {
                  return (
                    <Column >
                      <img className=""  src={images} alt="" />
                    </Column>
                  )
                }
              })()}
                  
                </Row>
            </Column>
          </Row>
        )
        
    })
    return (
       
      <div>
        <Section
          backgroundColor="bg-section-color-white"
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
