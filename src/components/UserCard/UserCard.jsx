import cls from "classnames";
import React from "react";
import "./style.css";
import {kFormatter} from "util/number";

function UserCard({value, className}) {
  const {avatar_url, html_url, followers, login, email} = value;
  const background = {
    background: `
      linear-gradient(0deg, rgba(13, 39, 99, 0.7),
      rgba(13, 39, 99, 0.7)),
      url(${avatar_url})
    `
  };
  return (
    <div className={cls(className, "user-card-container")}>
      <a href={html_url} target={"_blank"} rel="noreferrer">
        <div className="user-card-header" style={background}>
          <img src={avatar_url} alt="" className="user-card-avatar"/>
        </div>
        <div className="user-card-content">
          <h2 className="user-card-name">{login}</h2>
          <h3 className="user-card-email">{email}</h3>
          <div className="user-card-followers">
            <i className="fa-regular fa-user"></i>
            <span>{kFormatter(followers)}</span>
            <span className="user-card-followers-text">Followers</span>
          </div>
          <hr/>
        </div>
      </a>
    </div>
  );
}

export default UserCard;