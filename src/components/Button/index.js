import React from "react";

const Button = ({type, href, color, text}) => {
  const buttonElement = props => {
    if (type === "link") {
      return (
        <a
          href={href ? href : ""}
          className={"button " + (color ? color : "")}
          target="_black"
        >
          {text ? text : "Link"}
        </a>
      );
    } else if (type === "submit") {
      return (
        <button
          type="submit"
          className={"button " + (color ? color : "")}
        >
          {text ? text : "Submit"}
        </button>
      );
    }
  };
    return buttonElement();
}

export default Button;
