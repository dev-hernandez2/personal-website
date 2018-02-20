import React from "react";

import Row from "../Grids/Row";
import Column from "../Grids/Column";
import Button from "../Button";


const ProjectsList = ({projects}) => {
  return projects.map(project => {
    return (
      <Row key={project.id}>
        <Column size="">
          <Row display="how-do-div">
            {(() => {
              if (project.short.position === "left") {
                return (
                  <Column className="img-block">
                    <div className="img-block">
                      <img  src={project.short.image} alt={project.company} />
                    </div>
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
                href={`/project/${project.id}`}
                text={(project.isCase) ? "View Case Study" : "View Project"}
              />
            </Column>
            {(() => {
              if (project.short.position === "right") {
                return (
                  <Column >
                    <div className="img-block">
                      <img  src={project.short.image} alt={project.company} />
                    </div>
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
