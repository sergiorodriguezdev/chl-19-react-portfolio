import React from "react";

function Nav({ currentPage }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span>{/* This is meant to be empty */}</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#myNavbar"
          aria-controls="myNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="myNavbar">
          <div className="navbar-nav">
            <button className={currentPage === 'aboutme' ? "nav-link active" : "nav-link"} type="button">
              About Me
            </button>
            <button className={currentPage === 'portfolio' ? "nav-link active" : "nav-link"} type="button">
              Portfolio
            </button>
            <button className={currentPage === 'contact' ? "nav-link active" : "nav-link"} type="button">
              Contact Me
            </button>
            <button className={currentPage === 'resume' ? "nav-link active" : "nav-link"} type="button">
              Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
