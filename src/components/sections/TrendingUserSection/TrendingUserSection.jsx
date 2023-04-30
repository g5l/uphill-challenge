import Title from "components/Title/Title";
import UserCard from "components/UserCard/UserCard";
import React from "react";
import "./style.css";

function TrendingUserSection(props) {
  return (
    <div>
      <Title>Trending Users</Title>
      <div className="user-section-items">
        {props.value.map(v => <UserCard key={v.id} value={v} className="user-section-item"/>)}
      </div>
    </div>
  );
}

export default TrendingUserSection;