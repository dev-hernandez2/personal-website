import React from "react";

const Column = ({size, children}) => (
  <div className={"column " + (size ? size : "")}>
    {children}
  </div>
);

export default Column;
