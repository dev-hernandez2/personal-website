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
    name: '',
    massage: '',
    response: '',
    isMailSent: false,
    errors: {
      email: false,
      name: false,
      massage: false
    },
    isDisabled: false
  }

  isValidEmail = email => {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) { return true }
  }

  cleanForm = () => { 
    document.getElementById("Contactform").reset();
  }

  handleEmailChange = email => {
    if(this.isValidEmail(email.target.value)){

      this.setState({ 
        email: email.target.value,
        errors: {
          email: false,
        },
        isDisabled: false
     });
      console.log(this.state.errors);
    } else {

      this.setState({ 
        errors: {
          email: true,
        },
        isDisabled: true
     });
     this.setState({ 
      email: email.target.value,
   });
    console.log(this.state.email);
     console.log(this.state.errors);
    }
  }

  handleInputChange = event => {

    const target = event.target;
    const value = target.value;
    const name = target.name;
    if(value) {
      this.setState({
        [name]: value,
          errors: {
            [name]: false
          },
          isDisabled: false
      });
    }else {
        this.setState({ 
          errors: {
            [name]: true
          },
          isDisabled: true
      });
    }

  }

  handleSubmit = event => {
    event.preventDefault();

    const { name, email, massage,  isDisabled } = this.state;

    const params = new URLSearchParams();
    params.append('name', name);

    if(isDisabled) {
      // axios.post('http://localhost/contact-post/', params)
      // .then(response => {
      //   this.setState({response: response.data,  isMailSent: true });
      //   console.log(response.data);
      // })
      // .catch(error => {
      //   console.log(error);
      // });
      // this.cleanForm();
      console.log(name, email, massage);
    } 
   
  }
  render() {
    const classActive = this.state.isMailSent ? "" : "is-invisible";
    const emailError = this.state.errors.email ? "" : "is-invisible";
    const nameError = this.state.errors.name ? "" : "is-invisible";
    const massageError = this.state.errors.massage ? "" : "is-invisible";
    const formError = this.state.isDisabled ? "" : "is-invisible";
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
            
            <form onSubmit={this.handleSubmit.bind(this)} id="Contactform">
            <p className={"help is-danger " + formError}>Every imput is required</p>
            <div className="field">
              <label className="label">Name:</label>
              <div className="control">
                <input
                className="input"
                id="name"
                type="text"
                placeholder="yourname"
                name="name"
                onChange={this.handleInputChange.bind(this)}
                />
              </div>
              
              <p className={"help is-danger " + nameError}>This Name is required</p>
            </div>
            <div className="field">
              <label className="label">Email:</label>
              <div className="control">
                <input
                  className="input"
                  id="email"
                  type="email"
                  placeholder="your email"
                  name="email"
                  onChange={this.handleEmailChange.bind(this)}

                />
              </div>
              <p className={"help is-danger " + emailError}>This email is invalid</p>
            </div>
            <div className="field">
            <label className="label">Massage:</label>
              <div className="control">
                <textarea
                  className="textarea"
                  id="massage"
                  placeholder="massage"
                  rows="10"
                  name="massage"
                  onChange={this.handleInputChange.bind(this)}
                />
              </div>
              <p className={"help is-danger " + massageError}>This Massage is required</p>
            </div>
         
              <h1 className={"has-text-primary is-size-4 has-text-centered " + classActive}>{this.state.response}</h1>
         
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
