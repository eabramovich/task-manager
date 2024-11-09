import React from "react";
import MenuToogleIcon from "../UI/MenuToogleIcon/MenuToogleIcon";
import FavoriteIcon from "../UI/FavoriteIcon/FavoriteIcon";
import VerticalMenu from "../VerticalMenu/VerticalMenu";
import FormInput from "../UI/FormInput/FormInput";
import IconButton from "../UI/IconButton/IconButton";
import { menuData } from "../../utils/constants";
import "./LeftSidebar.scss";

const LeftSidebar = ({ children }) => {
  return (
    <div className="left-sidebar">
      <div className="left-sidebar__control">
        <MenuToogleIcon />
        <FavoriteIcon />
      </div>
      <div className="left-sidebar__menu">
        <div className="left-sidebar__search">
          <div className="left-sidebar__search-input-container">
            <FormInput icon="filter" placeholder="Поиск по меню" />
          </div>
          <IconButton icon="no-pin" />
        </div>
        <div className="left-sidebar__menu-container">
          <VerticalMenu menuItems={menuData}/>
        </div>
      </div>
      {children}
    </div>
  )
}

export default LeftSidebar