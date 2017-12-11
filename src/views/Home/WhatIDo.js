import React, { Component } from 'react'

import Section from '../../components/Section/Section'
import SectionTitle from '../../components/Section/SectionTile'
import Row from '../../components/Grids/Row'
import Column from '../../components/Grids/Column'


class WhatIDo extends Component {

  
  render() {
    const WhatIDoBg = (
      <div>
      <p> what</p>
      <p> I Do</p>
      </div>
    )
    return (
      <div>
        <Section
          backgroundColor="bg-section-color-blue"
          textBg={WhatIDoBg}
          textColor="bgtextSection"
         >
            <SectionTitle 
              title="I code your ideas to life"
              textColor="title is-3 color-white"
             />

             <Row display="has-text-centered row-m">
                <Column>
                  <div className="what-ido-div">
                    <h3>Back-End Developer</h3>
                    <p> 
                      Move fast and ship robust and
                      reliable solutions.
                    </p>
                  </div>
                </Column>
                <Column>
                  <div className="what-ido-div">
                    <h3>Front-End Developer</h3>
                    <p>
                      Though-out UI and UX that leads to
                      a responsive products that work.
                    </p>
                  </div>
                </Column>
                <Column>
                  <div className="what-ido-div">
                    <h3> Designer</h3>
                    <p>
                      With a background in Fine Arts,
                      good design is part of who I am.
                    </p>
                  </div>
                </Column>
             </Row>     
        </Section>
      </div>
    )
  }
}

export default WhatIDo
