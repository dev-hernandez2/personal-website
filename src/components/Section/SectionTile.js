import React, { Component } from 'react'




class SectionTitle extends Component {

  render() {
    return (
      <div className={"has-text-centered " + (this.props.display ? this.props.display : '')}>
        <div className={"top-line " + (this.props.topLineColor ? this.props.topLineColor : '' )}>
        </div>

        <h2 className={this.props.textColor}>{this.props.title}</h2>
      </div>
       
    )
  }
}
export default SectionTitle
