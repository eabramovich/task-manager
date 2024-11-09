import React from "react";
import "./VerticalMenu.scss";

const VerticalMenu = ({ menuItems }) => {
  return (
    <ul className="vertical-menu">
      {menuItems.map((item, index) => (
        <li key={index} className="vertical-menu__item">
          {item.title}
        </li>
      ))}
    </ul>
  )
}

export default VerticalMenu;