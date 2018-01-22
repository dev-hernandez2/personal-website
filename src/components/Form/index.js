import React from "react";

import Button from "../Button";
import Field from "./Field";

const Form = ({action, method}) => (
  <div className="box box-contact">
    <form action={action} method={method}>
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
);

export default Form;
