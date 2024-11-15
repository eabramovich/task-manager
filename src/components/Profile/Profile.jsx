import React, { useState } from "react";
import ava from "../../assets/ava.png"
import IconButton from "../UI/IconButton/IconButton";
import "./Profile.scss";

const Profile = () => {
  const [user, setUser] = useState({
    img: ava,
    username: "Евгения Абрамович"
  });

  return (
      <div className="profile">
        <img src={user.img} className="profile__img"/>
        <p className="profile__user-name hide-on-mobile">{user.username}</p>
        <IconButton icon="settings"/>
      </div>
  )
}

export default Profile;
