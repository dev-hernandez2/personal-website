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
    isSend: false
  }
  cleanForm = () => { 
    document.getElementById("Contactform").reset();
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
    var params = new URLSearchParams();
    params.append('name', this.state.name);
    
    axios.post('http://localhost/contact-post/', params)
    .then(response => {
      this.setState({response: response.data, isSend: true });
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
    this.cleanForm();
    console.log(this.state.name, this.state.email, this.state.massage);
  }
  render() {
    const classActive = this.state.isSend ? "" : "is-invisible";
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
            </div>
            <div className="field">
              <label className="label">Email:</label>
              <div className="control">
                <input
                  className="input"
                  id="email"
                  type="text"
                  placeholder="your email"
                  name="email"
                  onChange={this.handleInputChange.bind(this)}
                />
              </div>
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
