import React from "react";
import MenuToogleIcon from "../UI/MenuToogleIcon/MenuToogleIcon";
import FavoriteIcon from "../UI/FavoriteIcon/FavoriteIcon";
import "./LeftSidebar.scss";

const LeftSidebar = ({ children }) => {
  return (
    <div className="left-sidebar">
      <div className="left-sidebar__control">
        <MenuToogleIcon />
        <FavoriteIcon />
      </div>
      <div className="left-sidebar__menu">
        
      </div>
      {children}
    </div>
  )
}

export default LeftSidebar