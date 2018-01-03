import React from "react";

import Row from "../Grids/Row";
import Column from "../Grids/Column";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <Row>
            <Column>
              <a href="/#" target="_black">
                Github
              </a>
            </Column>
            <Column>
              <a href="/#" target="_black">
                Linkedin
              </a>
            </Column>
            <Column>
              <a href="/#" target="_black">
                Twitter
              </a>
            </Column>
            <Column>
              <a href="/#" target="_black">
                Download CV
              </a>
            </Column>
          </Row>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
