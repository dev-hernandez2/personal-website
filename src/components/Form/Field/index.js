import React from "react";

const Field = ({label, inputDisplay, inputId, placeholder, inputType, imputName}) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      {(() => {
        if (inputDisplay === "textarea") {
          return (
            <textarea
              className="textarea"
              id={inputId}
              placeholder={placeholder}
              rows="10"
              name={imputName}
            />
          );
        } else {
          return (
            <input
              className="input"
              id={inputId}
              type={inputType}
              placeholder={placeholder}
              name={imputName}
            />
          );
        }
      })()}
    </div>
  </div>
);

export default Field;
