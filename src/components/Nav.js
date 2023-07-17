import React from "react";

function Nav({ currentPage, setCurrentPage }) {
  const clickNavLink = (e) => {
    e.preventDefault();
    const clickedLinkText = e.target.textContent;

    switch (clickedLinkText) {
      case "About Me":
        setCurrentPage("aboutme");
        break;
      case "Portfolio":
        setCurrentPage("portfolio");
        break;
      case "Contact Me":
        setCurrentPage("contact");
        break;
      case "Resume":
        setCurrentPage("resume");
        break;
      default:
        break;
    }
  };
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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="myNavbar"
        >
          <div className="navbar-nav">
            <button
              className={
                currentPage === "aboutme"
                  ? "text-decoration-underline nav-link active"
                  : "nav-link"
              }
              type="button"
              onClick={clickNavLink}
            >
              About Me
            </button>
            <button
              className={
                currentPage === "portfolio"
                  ? "text-decoration-underline nav-link active"
                  : "nav-link"
              }
              type="button"
              onClick={clickNavLink}

            >
              Portfolio
            </button>
            <button
              className={
                currentPage === "contact"
                  ? "text-decoration-underline nav-link active"
                  : "nav-link"
              }
              type="button"
              onClick={clickNavLink}

            >
              Contact Me
            </button>
            <button
              className={
                currentPage === "resume"
                  ? "text-decoration-underline nav-link active"
                  : "nav-link"
              }
              type="button"
              onClick={clickNavLink}

            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
