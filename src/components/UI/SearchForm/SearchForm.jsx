import React from "react";
import Input from "../Input/Input";
import "./SearchForm.scss";

const SearchForm = ({ placeholder, buttonType }) => {
  return (
    <form className="search-form">
      <Input />
      <button
        type="submit"
        className={`search-form__button search-form__button_type_${buttonType}`}
      />
    </form>
  )
}

export default SearchForm;