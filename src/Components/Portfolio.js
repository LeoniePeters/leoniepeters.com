import React from "react";
import "./Portfolio.scss";
import PortfolioItem from "./PortfolioItem";
import AllProjects from "../AllProjects";

function Portfolio() {
  return (
    <div className="Portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <ul>
        {AllProjects.map((project, index) => (
          <PortfolioItem project={project} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
