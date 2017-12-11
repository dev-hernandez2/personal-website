import React from 'react'




const Row = props =>  (
      <div className={"columns " + (props.display ? props.display : '')}>
         {props.children}
      </div>     
)
export default Row
