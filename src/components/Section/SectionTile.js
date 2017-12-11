import React from 'react'




const SectionTitle = props => (
      <div className={"has-text-centered " + (props.display ? props.display : '')}>
        <div className={"top-line " + (props.topLineColor ? props.topLineColor : '' )}>
        </div>
        <h2 className={props.textColor}>{props.title}</h2>
      </div>     
 )
export default SectionTitle
