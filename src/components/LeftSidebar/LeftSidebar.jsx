import React, { useEffect } from "react";
import { useState } from "react";
import MenuToogleIcon from "../UI/MenuToogleIcon/MenuToogleIcon";
import FavoriteIcon from "../UI/FavoriteIcon/FavoriteIcon";
import VerticalMenu from "../VerticalMenu/VerticalMenu";
// import FormInput from "../UI/FormInput/FormInput";
import Input from "../UI/Input/Input";
import SearchForm from "../UI/SearchForm/SearchForm";
import IconButton from "../UI/IconButton/IconButton";
import { menuData } from "../../utils/constants";
import "./LeftSidebar.scss";

const LeftSidebar = ({ isOpen, toggleSidebar, children }) => {

  return (
    <div className="left-sidebar">
      <div className="left-sidebar__control">
        <MenuToogleIcon isOpen={isOpen} onclick={toggleSidebar} />
        <div className="hide-on-mobile">
          <FavoriteIcon />
        </div>

      </div>
      <div className={`left-sidebar__menu ${isOpen ? "left-sidebar__menu_open" : "left-sidebar__menu_closed"}`}>
        <div className="left-sidebar__search">
          <div className="left-sidebar__search-container">
            <SearchForm placeholder="Поиск" buttonType="filter" />
          </div>
          <IconButton icon="no-pin" />
        </div>
        <div className="left-sidebar__menu-container">
          <VerticalMenu menuItems={menuData} />
        </div>
      </div>
      {children}
    </div>
  )
}

export default LeftSidebar