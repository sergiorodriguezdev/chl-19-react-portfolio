import React from "react";
import logo from "../ReactLogo.svg";

function Footer(props) {
  const styles = {
    logo: {
      height: "24px",
      width: "24px",
    },
  };

  return (
    <footer className="fixed-bottom text-center">
      <div>
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
