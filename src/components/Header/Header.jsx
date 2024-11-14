import React, { useState } from "react";
import Logo from "../UI/Logo/Logo";
//import FormInput from "../UI/FormInput/FormInput";
import Input from "../UI/Input/Input";
import SearchForm from "../UI/SearchForm/SearchForm";
import Profile from "../Profile/Profile";
import "./Header.scss";

const Header = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="header">
      <Logo />
      <div className="header__search-profile-container">
        <div className="header__search-container">
          {/* <FormInput icon="search" placeholder="Поиск" /> */}
          {/* <Input icon="search" placeholder="Поиск" onChange={(e) => setSearchValue(e.target.value)} value={searchValue}/> */}
          <SearchForm placeholder="Поиск" buttonType="search" />
        </div>
        <Profile />
      </div>

    </header>
  )

}

export default Header;