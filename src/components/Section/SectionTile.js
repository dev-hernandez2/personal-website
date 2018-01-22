import React from "react";

const SectionTitle = ({display, topLineColor, textColor, title}) => (
  <div className={"has-text-centered " + (display ? display : "")}>
    <div
      className={"top-line " + (topLineColor ? topLineColor : "")}
    />
    <h2 className={textColor}>{title}</h2>
  </div>
);
export default SectionTitle;
