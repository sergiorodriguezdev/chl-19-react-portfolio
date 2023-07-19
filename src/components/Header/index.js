import React from "react";
import avatar from "../../assets/avatars/avatar-header.png"; // Import header avatar

function Header() {
  return (
    <header className="d-flex pt-3 ps-3 bg-body-tertiary">
      <h1 className="display-1">
        <img
          src={avatar}  // Use the avatar imported above as the image source
          alt="avatar"
          className="bg-light rounded-circle border border-success border-3"
          style={{width: "15%"}} // Set some styling inline
        />
        <span className="text-light"> Sergio Rodriguez</span>
      </h1>
    </header>
  );
}

export default Header;
