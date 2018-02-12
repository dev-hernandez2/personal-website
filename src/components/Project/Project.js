import React from 'react';

import Section from '../Section/Section';
import SectionTitle from "../Section/SectionTile";
import Button from "../Button";


const Project = ({project}) => (

    <div>
        
    <Section
        backgroundColor="bg-section-color-white"
    >
        <SectionTitle
            title={project.challengeTitle}
            textColor="title is-3 color-regular"
            topLineColor="top-primary"
        />

        <div className="row-m about-body">
            <h4 className="is-case-h">The Challenge</h4>
            <p className="regular">{project.challenge01}</p>
            <p className="regular">{project.challenge02}</p>

            <div className="is-center-img leyer-cake">
            <img src={project.challengeImg} alt={project.company} />
            </div>
        </div>
    </Section>
    <Section backgroundColor="bg-section-color-blue" >

        <div className="big-block" >
        </div>    
    </Section>
        <Section 
            backgroundColor="bg-section-color-white"
            textBg={
                <div>
                    <p>What</p>
                    <p>I Did</p>
                </div>
            }
            textColor="bgtextSectionProject"
        >
        <div className="row-m about-body">
            <h4 className="is-case-h">The Solution</h4>
            <p className="regular">{project.solution01}</p>
            <p className="regular">{project.solution02}</p>
        </div>
        <div className="is-center-img">
            <img src={project.solutionImg} alt={project.company} />
        </div>
        <div className="is-center-element">
            <Button
                color="is-primary is-medium btn-project hvr-shadow"
                type="link"
                href={project.webpage}
                text="View Webpage"
            />
        </div>
    </Section>
</div>
)

export default Project;