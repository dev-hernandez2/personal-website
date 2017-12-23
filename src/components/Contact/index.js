import React, { Component }from 'react'

import Section from '../../components/Section/Section'
import SectionTitle from '../../components/Section/SectionTile'
import Row from '../../components/Grids/Row'
import Column from '../../components/Grids/Column'
import Form from '../Form'

class Contact extends Component {
 
    render() {

        return(
            <Section
            backgroundColor="bg-section-color-grey"
            textBg={(
                <div>
                    <p> Let's</p>
                    <p> get to</p>
                    <p> work</p>
                </div>
            )}
            textColor="bgtextSectionContact"
            >
              <SectionTitle 
                title="Interested in working together?"
                textColor="title is-3 color-regular"
                topLineColor="top-primary"
               />

               <Row display="top-space-m row-m">
                <Column>
                    <h2 className="title">Let's build something!</h2>
                    <p className="regular">Email me if your have any
                    unanswered questions.</p>
                </Column>
                <Column>
                    <Form action="#" method="post" />
                </Column>
               </Row>
            </Section>
        )
    }  
}

export default Contact
