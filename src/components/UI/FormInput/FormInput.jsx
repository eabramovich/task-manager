import React from 'react';
import './FormInput.scss';

const FormInput = ({ label, placeholder = '', type = 'text', name, value, required = false, onChange, icon, children }) => {
  return (
    <div className='form-input'>
      {label && (
        <label htmlFor={name}>{label}</label>
      )}
      <div className='form-input__wrapper'>
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={`form-input__field ${icon ? `form-input__field_type-${icon}` : ""}`}
          placeholder={placeholder}
          required={required}
        >
          {children}
        </input>
        {icon && (<i className={`form-input__icon ${icon}`}></i>)}
      </div>
    </div>
  )
}

export default FormInput;