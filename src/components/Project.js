import React from "react";
// I referenced the method used in this video to import the project screenshots as an object
//  https://www.youtube.com/watch?v=gEMAZSO85KY
import projectScreenshots from "../assets/projects";

function Project({ project }) {
  return (
    <div className="p-3">
      <h4 className="h4 border-bottom border-2 text-end">
        {project.name}
        <a
          href={`https://github.com/sergiorodriguezdev/${project.repoName}`}
          target="_blank"
          rel="noreferrer"
          className="link-light"
        >
          <i className="bi bi-github ms-3"></i>
        </a>
        <a
          href={project.deployedAppUrl}
          target="_blank"
          rel="noreferrer"
          className="link-light"
        >
          <i className="bi bi-rocket-takeoff-fill ms-2"></i>
        </a>
      </h4>
      <div className="">
      <img src={projectScreenshots[project.repoName]} alt={project.name.toString()} className="img-fluid" />
      </div>
    </div>
  );
}

export default Project;
