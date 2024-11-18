import React from 'react';
import './Button.scss';

const Button = ({ color = 'default', onClick, children }) => {
  return (
    <button 
      onClick={onClick}
      className={`button button_color_${color}`}>
      {children}
    </button>
  )
}

export default Button