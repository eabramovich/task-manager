import React from "react";
import "./MenuToogleIcon.scss";

const MenuToogleIcon = ({ isOpen, onclick }) => {
  return (
    <button 
      className={`menu-toggle-icon ${isOpen ? 'menu-toggle-icon_state-open' : ''}`} 
      onClick={onclick}
      aria-label="Toggle menu"
    />
  )
}

export default MenuToogleIcon;