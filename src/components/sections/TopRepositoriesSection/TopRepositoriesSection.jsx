import React from "react";
import "./style.css";
import Title from "components/Title/Title";
import RepositoryCard from "components/RepositoryCard/RepositoryCard";

function TopRepositoriesSection(props) {
  
  return (
    <div>
      <Title>Top Repositories</Title>
      <div className="repo-section-items">
        {props.value.map(v => <RepositoryCard key={v.id} value={v} className="repo-section-item"/>)}
      </div>
    </div>
  );
}

export default TopRepositoriesSection;