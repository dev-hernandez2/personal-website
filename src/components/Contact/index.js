import React, { Component } from "react";
import axios from 'axios';

import Section from "../../components/Section/Section";
import SectionTitle from "../../components/Section/SectionTile";
import Row from "../../components/Grids/Row";
import Column from "../../components/Grids/Column";
import Button from "../../components/Button";


class Contact extends Component {
  state = {
    email:'',
    emailError: '',
    name: '',
    nameError: '',
    message: '',
    messageError: '',
    response: '',
    isMailSent: false,
    mainError: ''
  }

  isValid = email => {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) { return true }
  }

  
  validate = () => {
    let isError = false;
    const errors = {};
    const { name, email, message} = this.state;

    if(this.isValid(email)) {
      isError = true;
      errors.emailError = "Need to be a valid email";
   
    }
    if(email.length <= 0) {
      isError = true;
      errors.emailError = "Email is required";
    
    }

    if(name.length <= 0) {
      isError = true;
      errors.nameError = "Name is required";

    }

    if(message.length <= 0) {
      isError = true;
      errors.messageError = "Message is required";
     
    }

    if(isError) {
      this.setState({
        ...this.state,
        ...errors,
        mainError: '*Every imput is required'

      })
    }

    return isError;
  }

  cleanForm = () => { 
    document.getElementById("Contactform").reset();
    this.setState({
      emailError: '',
      nameError: '',
      messageError: '',
      mainError: false
    });
  }

  handleInputChange = event => {

    const target = event.target;
    const value = target.value;
    const name = target.name;
      this.setState({
        [name]: value
      });
  }

  handleSubmit = event => {
    event.preventDefault();

    const { name, email, message} = this.state;

    const params = new URLSearchParams();
    params.append('name', name);
    params.append('email', email);
    params.append('message', message);

    const isError = this.validate();

    if(!isError) {
      axios.post('/server/contact/', params)
      .then(response => {
        this.setState({response: response.data,  isMailSent: true });
      
      })
      .catch(error => {
        console.log(error);
      });

      this.cleanForm();

    } 
   
  }
  
  render() {
    const classActive = this.state.isMailSent ? "" : "is-invisible";
    const { state } = this;
    return (
      <Section
        backgroundColor="bg-section-color-grey"
        textBg={
          <div>
            <p> Let's</p>
            <p> get to</p>
            <p> work</p>
          </div>
        }
        textColor="bgtextSectionContact"
      >
        <SectionTitle
          title="Interested in working together?"
          textColor="title is-3 color-regular"
          topLineColor="top-primary"
        />

        <Row display="top-space-m row-m">
          <Column>
            <h2 className="title">Let's build something!</h2>
            <p className="regular">
              Email me if your have any unanswered questions.
            </p>
          </Column>
          <Column>
          <div className="box box-contact">
            
            <form onSubmit={this.handleSubmit.bind(this)} id="Contact">
            <p className="help is-danger ">{state.mainError}</p>
            <div className="field">
              <label className="label">*Name:</label>
              <div className="control">
                <input
                className="input"
                id="name"
                type="text"
                placeholder="Your name"
                name="name"
                onChange={this.handleInputChange.bind(this)}
                />
              </div>
              
              <p className="help is-danger ">{state.nameError}</p>
            </div>
            <div className="field">
              <label className="label">*Email:</label>
              <div className="control">
                <input
                  className="input"
                  id="email"
                  type="email"
                  placeholder="Your email"
                  name="email"
                  onChange={this.handleInputChange.bind(this)}

                />
              </div>
              <p className="help is-danger ">{state.emailError}</p>
            </div>
            <div className="field">
            <label className="label">*Message:</label>
              <div className="control">
                <textarea
                  className="textarea"
                  id="message"
                  placeholder="Your message"
                  rows="10"
                  name="message"
                  onChange={this.handleInputChange.bind(this)}
                />
              </div>
              <p className="help is-danger " >{state.messageError}</p>
            </div>
         
              <h3 className={"has-text-primary is-size-4 has-text-centered " + classActive}>{state.response}</h3>
         
              <div className="control">
                <Button
                  color=" is-primary hvr-shadow is-medium contact-btn"
                  type="submit"
                  text="Send"
                />
              </div>
            </form>
        </div>
          </Column>
        </Row>
      </Section>
    );
  }
}

export default Contact;
