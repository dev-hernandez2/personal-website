
import React, { Component } from 'react';


import Button from '../Button';


class TopHeader extends Component {
  constructor(props) {
    super();
    this.buttonElement = this.buttonElement.bind(this);
  }
  
  buttonElement = (props) => {
    
    if (this.props.HasButton) {
        return (
          <Button
            color={this.props.buttonStyles}
            type="link" 
            href={this.props.buttonHref}
            text={this.props.buttonText}
          />
      
        );
    }
  }

  render() {
    return (
    <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
             {this.props.title}
            </h1>
            <h2 className="subtitle">
              {this.props.subTitle}
            </h2>
             
            {this.buttonElement()}
             
          </div>
        </div>
    </section>  
    );
  }
}

export default TopHeader;
