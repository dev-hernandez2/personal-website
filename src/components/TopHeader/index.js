import React from "react";

//import componets
import Button from "../Button";

const TopHeader = props => {
  const buttonElement = props => {
    if (props.HasButton) {
      return (
        <Button
          color={props.buttonStyles}
          type="link"
          href={props.buttonHref}
          text={props.buttonText}
        />
      );
    }
  };
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{props.title}</h1>
            <h2 className="subtitle">{props.subTitle}</h2>
            {buttonElement(props)}
          </div>
        </div>
      </section>
    );
}

export default TopHeader;
