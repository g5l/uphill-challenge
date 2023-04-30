import React from "react";
import "./style.css";
import cls from "classnames";
import {kFormatter} from "util/number";

function RepositoryCard({value, className}) {
  const {html_url, name, stargazers_count, description} = value;

  return (
    <div className={cls(className, "repo-card-container")}>
      <a href={html_url} target={"_blank"} rel="noreferrer">
        <h2 className="repo-card-title">{name}</h2>
        <div className="repo-card-stars">
          <i className="fa-solid fa-circle-star"></i>
          {kFormatter(stargazers_count)}
        </div>
        <div className="repo-card-desc">{description}</div>
      </a>
    </div>
  );
}

export default RepositoryCard;