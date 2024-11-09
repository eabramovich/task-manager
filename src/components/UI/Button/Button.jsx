import React from 'react';
import './Button.scss';

const Button = ({ color = 'default', children }) => {
  return (
    <button className={`button button_color_${color}`}>
      {children}
    </button>
  )
}

export default Button