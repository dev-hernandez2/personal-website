import React, { Component } from 'react';


class Buttom extends Component {
    constructor(props){
        super(props);
        this.buttomElement = this.buttomElement.bind(this)
    }

    buttomElement = (props) => {
        if (this.props.type === 'link') {
            return (
                <a 
                    href={this.props.href ? this.props.href : ''} 
                    className="button is-primary">
                        {this.props.text ? this.props.text : 'Link'}
                </a>
            );
        } else if (this.props.type === 'submit') {
            return (
                <button 
                    type="submit" 
                    className="button is-primary">
                        {this.props.text ? this.props.text : 'Submit'}
                </button>
            );
        }
       
      }

  render() {
    
    return (
        this.buttomElement()
    );
  }
}


export default  Buttom;