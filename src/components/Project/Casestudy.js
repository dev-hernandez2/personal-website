import React from 'react';

import Section from '../Section/Section';
import SectionTitle from "../Section/SectionTile";
import Button from "../Button";


const CaseStudy = ({project}) => (
  <div>
        <Section
        backgroundColor="bg-section-color-white"
        textBg={
            <div>
                <p>More</p>
                <p>Control</p>
            </div>
        }
        textColor="bgtextSectionProject"
        >
            <SectionTitle
                title="Putting a company in charge"
                textColor="title is-3 color-regular"
                topLineColor="top-primary"
            />

            <div className="row-m about-body">
                <h4 className="is-case-h">The Mission</h4>
                <p className="regular">{project.mission02}</p>
                <p className="regular">{project.mission01}</p>

                <div className="is-center-img">
                <img src={project.missionImg} alt={project.company} />
                </div>
            </div>
        </Section>
            <Section
            backgroundColor="bg-section-color-blue"
            textBg={
                <div>
                    <p> How</p>
                    <p> Do It</p>
                </div>
            }
            textColor="bgtextSection"
            >
                <div className="row-m about-body">
                    <h4 className="color-white is-case-h">The Research</h4>
                    <p className="white-regular">{project.research}</p>

                    <div className="is-center-img">
                        <img src={project.researchImg} alt={project.company} />
                    </div>
                </div>
            </Section>
            <Section
            backgroundColor="bg-section-color-grey"
            textBg={
                <div>
                    <p>What</p>
                    <p>They</p>
                    <p>get</p>
                </div>
            }
            textColor="bgtextSectionContact"
            >
            <div className="row-m about-body ">
                <h4 className="is-case-h">The Stack</h4>
                <p className="regular">{project.stack}</p>
                <p className="regular"><strong>The stack used on this project where:</strong>{project.stackUse}</p>
                <div className="is-center-img">
                    <img src={project.stackImg} alt={project.company} />
                </div>
            </div>
            </Section>
            <Section backgroundColor="bg-section-color-white">
            <div className="row-m about-body">
                <h4 className="is-case-h">The End Product</h4>
                <p className="regular">{project.endProduct01}</p>
                <p className="regular">{project.endProduct02}</p>
            </div>
            <div className="is-center-element">
                <Button
                    color="is-primary is-medium btn-project hvr-shadow"
                    type="link"
                    href={project.webpage}
                    text="See webpage"
                />
            </div>
        </Section>
  </div>
)

export default CaseStudy;