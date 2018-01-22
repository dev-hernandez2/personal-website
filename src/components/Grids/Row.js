import React from "react";

const Row = ({display, children}) => (
  <div className={"columns " + (display ? display : "")}>
    {children}
  </div>
);
export default Row;
