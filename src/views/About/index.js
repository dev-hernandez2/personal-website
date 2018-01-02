import React from 'react'
import {Helmet} from "react-helmet"

import TopHeader from '../../components/TopHeader'
import Section from '../../components/Section/Section'
import SectionTitle from '../../components/Section/SectionTile'


const About = () => {


    return (
      <div className="animated fadeIn">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | dev_hernandez2 Personal Website</title>
          <meta name="description" content="Hernandez2.com" />
        </Helmet>

        <div className="header">
              <TopHeader
                title={(
                    <div>
                        <p>I'm William</p>
                        <p>a Full Stack</p>
                        <strong className="has-text-primary"> Adventurer</strong>
                    </div>
                  )}
                HasButton={true}
                buttonStyles="is-primary is-medium hvr-grow-shadow header-btn"
                buttonHref="#Contanct" 
                buttonText="Send Masagge" 
              />
        </div>
        <Section
        backgroundColor="bg-section-color-white"
        textBg={(
          <div>
            <p>Who</p>
            <p>am I</p>
          </div>
        )}
        textColor="bgtextSectionProject"
      >
          <SectionTitle 
            title="I code your ideas to life."
            textColor="title is-3 color-regular"
            topLineColor="top-primary"
          />

            <div className="row-m about-body">
              <p className="regular">
                I work across concept design, UX Development and Server Site
                Development to deliver custom Digital Products that resolve real life
                dilemmas. I love building Digital Products from start to fnish, and been
                doing so for the last eight years.
              </p>
              <p className="regular">
                With a background in Fine Arts, design has shown to be an extension of who
                I am. Having experiences in both felds has allowed me to excel in my
                professional life. I love great challenges and am always willing to learn new
                things, is all just part of my adventurous journey
              </p>
              <p className="regular">
                Currently work as a Full Stack Developer for Think Telic. Where I focus on
                creating experiences that empower and engage new users. I also work as
                Freelance for several companies, and am always looking for new
                opportunities. I understand there is always a better way to do things and
                our work can always (and should always) improve.
              </p>
              <p className="regular">
                Right now I’m focusing my learning tactics on becoming a MERN Developer.
              </p>
            
              <div className="skills">
                <h2><strong>Skills:</strong></h2>

                <p className="regular">
                  Node.js, Express.js, MongoDB, PHP, MYSQL, Wordpress, Laravel, CSS, SASS, HTML, JavaScript, React.js, Vue.js, Jquery,
                  Adobe Suite, Visual Studio Code
                </p>
              </div>
            </div>
          </Section>
      </div>
    )
  }

export default About
