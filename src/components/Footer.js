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
    <footer className="fixed-bottom">
      <div>© {new Date().getFullYear()} Copyright: Sergio Rodriguez</div>
      <div>
        <span>Powered by</span>
        <a href="https://react.dev/" target="_blank" rel="noreferrer">
          <img src={logo} alt="React Logo" style={styles.logo} />
        </a>
        <span>and </span>
        <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
          <i class="bi bi-bootstrap-fill"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
