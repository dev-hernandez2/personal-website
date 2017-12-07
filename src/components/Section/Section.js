import React, { Component } from 'react'




class Section extends Component {

  render() {
    return (
    <section className={"section-area " + (this.props.backgroundColor ? this.props.backgroundColor : '')}>
        <div className={"section-bg-text " + (this.props.textColor ? this.props.textColor : '')}>
            {this.props.textBg}
        </div>
        <div className="section container">
        
            {this.props.children}
        </div>
    </section>
    )
  }
}
export default Section
