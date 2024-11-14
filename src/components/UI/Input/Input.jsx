import React from 'react';
import './Input.scss';

const Input = ({ placeholder = '', type = 'text', name, value, required = false, onChange, icon, children }) => {
  return (
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`input-field ${icon ? `input-field_type_${icon}` : ""}`}
      placeholder={placeholder}
      required={required}
    >
      {children}
    </input>
  )
}

export default Input;