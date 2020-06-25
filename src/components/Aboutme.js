import React from "react";
import "../css/aboutme.css";

const Aboutme = () => {
  return (
    <>
      <div className="aboutme-main">
        <div className="aboutme-box">
          <div className="profile-pic">
            <div className="pic"></div>
          </div>
          <div className="my-info">
            <h3>About Me</h3>
            <span className="text">
              I'm currently taking BSIT at the University of Northern
              Philippines. I was never the best at school or academicsasdasdas,
              I’m just aasdasd super curious guy. I love playing computer or
              console games.
            </span>
            <h3>Contact Details</h3>
            <span className="text">Jerico Navarro</span>
            <span className="text">jericoxnavarro@gmail.com</span>
            <span className="text">09356555717</span>
            <span className="text">Anonang Mayor Caoayan Ilocos Sur</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
