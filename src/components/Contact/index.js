import React, { Component }from 'react'

import Section from '../../components/Section/Section'
import SectionTitle from '../../components/Section/SectionTile'
import Row from '../../components/Grids/Row'
import Column from '../../components/Grids/Column'

import Button from '../Button'

class Contact extends Component {
 
    render() {

        const letGetToWork = (
                <div>
                <p> Let's</p>
                <p> get to</p>
                <p> work</p>
                </div>
            )

        return(
            <Section
            backgroundColor="bg-section-color-grey"
            textBg={letGetToWork}
            textColor="bgtextSectionContact"
            >
              <SectionTitle 
                title="Interested in working together?"
                textColor="title is-3 color-regular"
                topLineColor="top-primary"
               />

               <Row display="top-space-m row-m">
                <Column>
                    <p>Texto contact</p>
                </Column>
                <Column>
                    <div className="box box-contact">
                        <form>
                            <div className="field">
                                <label className="label">Email</label>
                                 <div className="control">
                                    <input className="input" type="text" placeholder="Text input"/>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Text input"/>
                                </div>
                             </div>
                             <div className="field">
                                <label className="label">Message</label>
                                <div className="control">
                                    <textarea className="textarea" placeholder="10 lines of textarea" rows="10"></textarea>
                                </div>
                            </div>
                            <div className="control">
                                <Button
                                color=" is-primary hvr-shadow is-medium contact-btn"
                                type="submit" 
                                text="Send"
                                />
                            </div>
                        </form>
                    </div>
                </Column>
               </Row>
            </Section>
        )
    }  
}

export default Contact
