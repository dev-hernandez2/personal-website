import React, { Component } from 'react';


class Button extends Component {
    constructor(props){
        super(props);
        this.buttonElement = this.buttonElement.bind(this)
    }

    buttonElement = (props) => {
        
        if (this.props.type === 'link') {
            return (
                <a 
                    href={this.props.href ? this.props.href : ''} 
                    className={"button " + (this.props.color ? this.props.color : '')}>
                        {this.props.text ? this.props.text : 'Link'}
                </a>
            );
        } else if (this.props.type === 'submit') {
            return (
                <button 
                    type="submit" 
                    className={"button " + (this.props.color ? this.props.color : '')}>
                        {this.props.text ? this.props.text : 'Submit'}
                </button>
            );
        }
       
      }

  render() {
    
    return (
        this.buttonElement()
    );
  }
}


export default  Button;