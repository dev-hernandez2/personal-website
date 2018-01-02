import React from "react";

const Column = props => (
  <div className={"column " + (props.size ? props.size : "")}>
    {props.children}
  </div>
);

export default Column;
