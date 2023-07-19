import React from "react";
import Project from "../Project";
import projects from "../../assets/metadata/projects";  // Import array of project metadata

function Portfolio() {
  return (
    <div>
      <div className="row">
        <h1 className="h1">Portfolio</h1>
      </div>
      <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
        {/* Loop through all projects in array and render a Project component per each one */}
        {projects.map((project) => (
          <div key={project.repoName} className="col">
            {/* Project - pass project object as component prop */}
            <Project project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
