import React, { useState } from "react";
import resumeSkills from "./skills";

function Resume(props) {
  const [displayMessage, setDisplayMessage] = useState(false);

  return (
    <div>
      <div className="row">
        <h1 className="h1">Resume</h1>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <a
            className="icon-link align-items-start mb-2"
            href="#"
            onClick={() => setDisplayMessage(true)}
          >
            <i className="bi bi-download"></i>
            Download
          </a>
          {displayMessage ? (
            <div className="alert alert-warning mb-2" role="alert">
              I don't have a way to host my resume securely at the moment.
              <br />
              Please reach out to me via <a href="https://www.linkedin.com/in/sergiodrodriguez/" target="_blank" rel="noreferrer" >LinkedIn</a> and I'll be happy to share it!
            </div>
          ) : (
            <div />
          )}

          <div className="d-flex flex-wrap">
            {resumeSkills.map((skill, index) => (
              <div key={index} className="border p-2 m-1">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
