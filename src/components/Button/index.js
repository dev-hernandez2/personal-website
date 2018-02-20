import React from "react";

const Button = ({type, href, color, text, target}) => {
  const buttonElement = props => {
    if (type === "link") {
      return (
        <a
          href={href ? href : ""}
          className={"button " + (color ? color : "")}
          target={(target === 'new' ? "_black" : "_self")}
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
