import React, { Component } from 'react'




class Column extends Component {

  render() {
    return (
      <div className={"column " + (this.props.size ? this.props.size : '')}>
        {this.props.children}
      </div>
       
    )
  }
}
export default Column
