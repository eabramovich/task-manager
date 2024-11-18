import React, {useRef} from 'react';
import './Input.scss';

const Input = ({ placeholder = '', type = 'text', name, value, required = false, icon, children }) => {
  const inputRef = useRef();

  return (
    <input
      id={name}
      ref={inputRef}
      type={type}
      name={name}
      defaultValue={value}
      className={`input-field ${icon ? `input-field_type_${icon}` : ""}`}
      placeholder={placeholder}
      required={required}
    >
      {children}
    </input>
  )
}

export default Input;