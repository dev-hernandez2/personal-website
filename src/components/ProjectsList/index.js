import React from "react";

import Row from "../Grids/Row";
import Column from "../Grids/Column";
import Button from "../Button";

//test img
import images from "../../assets/img/dummy.jpg";

const ProjectsList = props => {
  return props.projects.map(project => {
    return (
      <Row key={project.id} display="is-mobile">
        <Column size="is-12 is-offset-1">
          <Row display="how-do-div">
            {(() => {
              if (project.position === "left") {
                return (
                  <Column>
                    <img className="" src={images} alt="" />
                  </Column>
                );
              }
            })()}
            <Column size="project-info">
              <h3>{project.title}</h3>
              <h4 className="do-tch">{project.do}</h4>
              <p>{project.description}</p>
              <Button
                color=" is-primary btn-project hvr-shadow"
                type="link"
                href="#"
                text="See Case Study"
              />
            </Column>
            {(() => {
              if (project.position === "right") {
                return (
                  <Column>
                    <img className="" src={images} alt="" />
                  </Column>
                );
              }
            })()}
          </Row>
        </Column>
      </Row>
    );
  });
};

export default ProjectsList;
