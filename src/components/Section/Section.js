import React from "react";

const Section = ({backgroundColor, textBg, textColor, children}) => (
  <section
    className={"section-area " + (backgroundColor ? backgroundColor : "")}
  >
    <div
      className={"section-bg-text " + (textColor ? textColor : "")}
    >
      {textBg}
    </div>
    <div className="section container">{children}</div>
  </section>
);
export default Section;
