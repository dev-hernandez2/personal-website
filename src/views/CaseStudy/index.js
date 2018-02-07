import React, { Component } from "react";
import { Helmet } from "react-helmet";

import TopHeader from "../../components/TopHeader";
import Section from "../../components/Section/Section";
import SectionTitle from "../../components/Section/SectionTile";
import Button from "../../components/Button";

import projectsData from "../../services/data/projects";

class Project extends Component {
  state = {
    project: [],
    urlId: parseFloat(this.props.match.params.id)
  };

  componentDidMount() {
    this.setState({
      project: projectsData.find(p => {
        if (p.id === this.state.urlId) {
          return p;
        } else {
          return (window.location.href = "/404");
        }
      })
    });
  }

  render() {
    const project = this.state.project;

    return (
      <div className="animated fadeIn">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | dev_hernandez2 Personal Website</title>
          <meta name="description" content="Hernandez2.com" />
        </Helmet>

        <div className="header">
          <TopHeader
            title={
              <div>
                <p>{project.title}</p>
                <strong className="has-text-primary">{project.company}</strong>
              </div>
            }
          />
        </div>
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
            <h4 className="color-white is-case-h">The Mission</h4>
            <p className="white-regular">{project.mission02}</p>
            <p className="white-regular">{project.mission01}</p>

            <div className="is-center-img">
              <img src={project.missionImg} alt={project.company} />
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
            <p className="regular">{project.mission02}</p>
            <div className="is-center-img">
              <img src={project.missionImg} alt={project.company} />
            </div>
          </div>
        </Section>
        <Section backgroundColor="bg-section-color-white">
          <div className="row-m about-body">
            <h4 className="is-case-h">The Mission</h4>
            <p className="regular">{project.mission02}</p>
            <p className="regular">{project.mission01}</p>
          </div>
          <div className="is-center-img">
            <Button
              color="is-primary is-medium btn-project hvr-shadow"
              type="link"
              href={project.webpage}
              text="See webpage"
            />
          </div>
        </Section>
      </div>
    );
  }
}

export default Project;
