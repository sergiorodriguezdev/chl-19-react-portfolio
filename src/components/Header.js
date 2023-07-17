import React from "react";
import avatar from "../assets/avatars/avatar-header.png";

function Header(props) {
  return (
    <header className="d-flex pt-1 ps-1">
      <h1 className="display-1">
        <img
          src={avatar}
          alt="avatar"
          className="w-25 rounded-circle border border-success border-3"
        />
        <span> Sergio Rodriguez</span>
      </h1>
    </header>
  );
}

export default Header;
