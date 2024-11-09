import React from 'react';
import './IconButton.scss';

const IconButton = ({ icon, onClick}) => {
  return (
    <input
      type='button'
      className={`icon-button icon-button__icon-${icon}`}
    />
  )
}

export default IconButton;