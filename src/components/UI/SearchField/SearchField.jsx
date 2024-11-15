import React, { Children } from "react";
import IconButton from "../IconButton/IconButton";
import Input from "../Input/Input";
import "./SearchField.scss";

const SearchField = ({ value }) => {
  return (
    <div className="search-field">
      <div className="search-field__wrapper">
        <Input value={value}/>
      </div>
      <IconButton icon="search"/>
    </div>
  )
}

export default SearchField;