import React from 'react'


const Field = props => (
            <div className="field">
                <label className="label">{props.label}</label>
                <div className="control">
                     {(()=>{
                        if(props.inputDisplay === 'textarea') {
                            return (
                                <textarea className="textarea" id={props.inputId}  placeholder={props.placeholder} rows="10"></textarea>
                            )
                        } else {
                            return (
                                <input className="input" id={props.inputId} type={props.inputType} placeholder={props.placeholder}/>
                            )
                        }
                    })()}
                </div>
            </div>
)

export default Field