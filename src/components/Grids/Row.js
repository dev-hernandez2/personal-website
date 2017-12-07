import React, { Component } from 'react'




class Row extends Component {

  render() {
    return (
      <div className={"columns " + (this.props.display ? this.props.display : '')}>
        
         {this.props.children}
       
      </div>
       
    )
  }
}
export default Row
