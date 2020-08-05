import React from "react";
import "../css/first.css";

const First = () => {
  return (
    <div className="main-content">
      <div className="layer">
        <div className="box">
          <h1 className="big-text">I'm Jerico Navarro</h1>
          <div className="des-text">
            I'm a Web developer specializing in building (and occasionally
            designing) exceptional websites, applications, and everything in
            between.
          </div>
          <div className="buttons">
            <a href="https://github.com/jericoxnavarro">
              <div className="btn-github"></div>
            </a>
            <a href="https://www.instagram.com/jeco.error/">
              <div className="btn-instagram"></div>
            </a>
            <a href="https://www.facebook.com/jerico.admin">
              <div className="btn-facebook"></div>
            </a>
            <a href="https://twitter.com/jeco_error">
              <div className="btn-twitter"></div>
            </a>
            <a href="https://open.spotify.com/user/xngt3iyh8vmr3tcatwdkve51h?si=0qUmJR32QKii6931a5p2Zg">
              <div className="btn-spotify"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
