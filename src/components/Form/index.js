import React, { Component }from 'react'

import Button from '../Button'
import Field from './Field'

class Form extends Component {
 
    render() {
        return (
            <div className="box box-contact">
                <form action={this.props.action} method={this.props.method}>
                    <Field
                        label="Email"
                        placeholder="Put your Email"
                        inputDisplay="input"
                        inputType="text"
                    />

                    <Field
                        label="Name"
                        placeholder="Put your Name"
                        inputDisplay="input"
                        inputType="text"
                    />
                    <Field
                        label="Message"
                        placeholder="10 lines of textarea"
                        inputDisplay="textarea"
                    />
                    
                    <div className="control">
                        <Button
                        color=" is-primary hvr-shadow is-medium contact-btn"
                        type="submit" 
                        text="Send"
                        />
                    </div>

                </form>
            </div>
        )
    }
}

export default Form