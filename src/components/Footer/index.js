import React from "react";

import Row from "../Grids/Row";
import Column from "../Grids/Column";


const fullYear = new Date().getFullYear();

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <Row>
          <Column>
            <a href="https://github.com/dev-hernandez2" target="_black">
              Github
            </a>
          </Column>
          <Column>
            <a href="https://www.linkedin.com/in/dev-hernandez2/" target="_black">
              Linkedin
            </a>
          </Column>
          <Column>
            <a href="https://twitter.com/dev_hernandez2" target="_black">
              Twitter
            </a>
          </Column>
          <Column>
            <a href="https://s3.us-east-2.amazonaws.com/porfolio-bucket/WilliamHernandez2-CV.pdf" target="_black">
              Download CV
            </a>
          </Column>
        </Row>
        <Row>
          <Column size="is-11 is-offset-1">
            <div className="terms-policy">
              <p>Copyright ©{fullYear} Hernandez2. All Rights Reserved.</p>
              <a className="policy-link" href="/terms-and-use">
                Terms of Use & Privacy Policy
              </a>
            </div>
          </Column>
        </Row>
      </div>
    </div>
  </footer>
);

export default Footer;
