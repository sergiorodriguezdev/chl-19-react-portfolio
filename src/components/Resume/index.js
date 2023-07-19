import React, { useState } from "react";
import resumeSkills from "../../assets/metadata/skills"; // Import array of skills

function Resume() {
  // Create state variable to display warning when download link is clicked
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
            href="#" // This is meant to be empty since I am not hosting a copy of my resume anywhere at the moment
            onClick={() => setDisplayMessage(true)} // Set state variable to true when link is clicked
          >
            <i className="bi bi-download"></i>
            Download
          </a>
          {/* Hide message initially and display when link is clicked */}
          {displayMessage ? (
            <div className="alert alert-warning mb-2" role="alert">
              I don't have a way to host my resume securely at the moment.
              <br />
              Please reach out to me via{" "}
              <a
                href="https://www.linkedin.com/in/sergiodrodriguez/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>{" "}
              and I'll be happy to share it!
            </div>
          ) : (
            <div />
          )}

          <div className="d-flex flex-wrap">
            {/* Loop through all skills in array and list them */}
            {resumeSkills.map((skill, index) => (
              // Used array index as key value
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
