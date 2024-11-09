import React from "react";
import Logo from "../UI/Logo/Logo";
import FormInput from "../UI/FormInput/FormInput";
import Profile from "../Profile/Profile";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <div className="header__search-profile-container">
        <div className="header__search-container">
          <FormInput icon="search" placeholder="Поиск" />
        </div>
        <Profile />
      </div>

    </header>
  )

}

export default Header;