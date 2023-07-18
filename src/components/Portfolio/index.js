import React from "react";
import Project from "../Project";
import projects from "./projects";

function Portfolio(props) {
  return (
    <div>
      <div className="row">
        <h1 className="h1">Portfolio</h1>
      </div>
      <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
        {projects.map((project) => (
          <div key={project.repoName} className="col">
            <Project project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
