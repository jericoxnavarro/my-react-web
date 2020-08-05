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
            <h3 className="info-h3">About Me</h3>
            <span className="text">
              Hello! I'm Jerico, a web developer. I enjoy creating things that
              live on the internet, whether that be websites, applications, or
              anything in between. My goal is to always build products that
              provide pixel-perfect, performant experiences.
            </span>
            <h3 className="info-h3">Contact Details</h3>
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
