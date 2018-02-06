import React from "react";

import Row from "../Grids/Row";
import Column from "../Grids/Column";
import Button from "../Button";


const ProjectsList = ({projects}) => {
  return projects.map(project => {
    return (
      <Row key={project.id} display="is-mobile">
        <Column size="is-12 is-offset-1">
          <Row display="how-do-div">
            {(() => {
              if (project.short.position === "left") {
                return (
                  <Column>
                    <img className="" src={project.short.image} alt="" />
                  </Column>
                );
              }
            })()}
            <Column size="project-info">
              <h3>{project.company}</h3>
              <h4 className="do-tch">{project.short.stack}</h4>
              <p>{project.short.description}</p>
              <Button
                color=" is-primary btn-project hvr-shadow"
                type="link"
                href={ (project.iscase) ? `/project/${project.id}` : project.webpage}
                text={(project.iscase) ? "See Case Study" : "See webpage"}
              />
            </Column>
            {(() => {
              if (project.short.position === "right") {
                return (
                  <Column>
                    <img className="" src={project.short.image} alt="" />
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
