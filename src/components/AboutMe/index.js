import React from "react";
import avatar from "../../assets/avatars/avatar-aboutme.png";

function AboutMe() {
  return (
    <div>
      <div className="row">
        <h1 className="h1">About Me</h1>
      </div>
      <div className="row">
        <div className="col-12 col-lg-3 d-flex flex-column flex-wrap justify-content-center align-items-center my-3">
          <figure className="figure">
            <img
              src={avatar}
              className="img-fluid rounded m-auto bg-body-secondary bg-gradient"
              alt=""
            />
          </figure>
        </div>
        <div className="col-12 col-lg-9 my-auto">
          Thank you for visiting my portfolio!
          <br />
          <br />
          My name is Sergio, I have over 15 years of experience working in
          technology. I have always enjoyed writing code so I signed up for a
          full-stack web development bootcamp in 2023. This portfolio was built
          in React and includes bootcamp related projects as well as personal
          projects I will be working on during my spare time.
          <br />
          <br />
          Feel free to connect with me via LinkedIn!
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
