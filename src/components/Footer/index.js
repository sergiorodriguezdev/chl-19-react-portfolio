import React from "react";
import logo from "../../assets/ReactLogo.svg";  // Import React logo

function Footer() {
  // Create styles object and properties
  const styles = {
    logo: {
      height: "24px",
      width: "24px",
    },
  };

  return (
    <footer className="mt-3 text-center">
      <div>
        {/* Display current year on page footer */}
        <span>© {new Date().getFullYear()} Copyright: Sergio Rodriguez </span>
        <a className="link-secondary link-underline-opacity-0" href="https://github.com/sergiorodriguezdev" target="_blank" rel="noreferrer">
            <i className="bi bi-github"> </i>
        </a>
        <a className="link-secondary link-underline-opacity-0" href="https://www.linkedin.com/in/sergiodrodriguez/" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin"></i>
        </a>
      </div>
      <div>
        <span>Powered by</span>
        <a href="https://react.dev/" target="_blank" rel="noreferrer">
          {/* Set img src to logo imported and apply styles object to style attribute */}
          <img src={logo} alt="React Logo" style={styles.logo} />
        </a>
        <span>and </span>
        <a className="link-secondary link-underline-opacity-0" href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
          <i className="bi bi-bootstrap-fill"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
