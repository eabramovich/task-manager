import React from "react";
import "./FavoriteIcon.scss";

const FavoriteIcon = ({ onClick }) => {
  return (
    <button 
      className="favorite-icon"
      onClick={ onClick }
    />
  )
}

export default FavoriteIcon;
