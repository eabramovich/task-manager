import React from "react";
import './FormField.scss';

const FormField = ({ label, name, required=false, children }) => {
  return (
    <div className="form-field">
      {label && (
        <label htmlFor={name} className={`form-field__label ${required ? "form-field__label_required" : ""}`}>{label}</label>
      )}
      <div className="form-field__wrapper">
        {children}
      </div>
    </div>
  )
}

export default FormField;