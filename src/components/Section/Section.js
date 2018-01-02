import React from "react";

const Section = props => (
  <section
    className={"section-area " + (props.backgroundColor ? props.backgroundColor : "")}
  >
    <div
      className={"section-bg-text " + (props.textColor ? props.textColor : "")}
    >
      {props.textBg}
    </div>
    <div className="section container">{props.children}</div>
  </section>
);
export default Section;
