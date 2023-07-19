import React from "react";

// Destructure component props
function Nav({ currentPage, setCurrentPage }) {
  
  // Link click handler
  const clickNavLink = (e) => {
    e.preventDefault();
    const clickedLinkText = e.target.textContent;
    document.title = `Sergio Rodriguez - ${clickedLinkText}`; // Set the page title dynamically to include the name of the page

    // Update state variable depending on link clicked
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
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
    >
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
                currentPage === "aboutme" // Set CSS classes dynamically depending on value of state variable currentPage
                  ? "text-decoration-underline nav-link fs-4 active"
                  : "nav-link fs-4"
              }
              type="button"
              onClick={clickNavLink} // Set link click handler
            >
              About Me
            </button>
            <button
              className={
                currentPage === "portfolio" // Set CSS classes dynamically depending on value of state variable currentPage
                  ? "text-decoration-underline nav-link fs-4 active"
                  : "nav-link fs-4"
              }
              type="button"
              onClick={clickNavLink} // Set link click handler
            >
              Portfolio
            </button>
            <button
              className={
                currentPage === "contact" // Set CSS classes dynamically depending on value of state variable currentPage
                  ? "text-decoration-underline nav-link fs-4 active"
                  : "nav-link fs-4"
              }
              type="button"
              onClick={clickNavLink} // Set link click handler
            >
              Contact Me
            </button>
            <button
              className={
                currentPage === "resume" // Set CSS classes dynamically depending on value of state variable currentPage
                  ? "text-decoration-underline nav-link fs-4 active"
                  : "nav-link fs-4"
              }
              type="button"
              onClick={clickNavLink} // Set link click handler
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
