import React from "react";
import "../css/header.css";

const Header = () => {
  function menu() {}
  return (
    <>
      <header className="toolbar">
        <nav className="navbar">
          <div className="logo-box">
            <a className="logo1" href="/">
              <span className="link-text">echo</span>
            </a>
          </div>
          <div className="mob-nav">
            <a className="logo1" href="/">
              <div className="menu-icon"></div>
            </a>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <span className="link-text">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <span className="link-text">About Me</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <span className="link-text">Skills</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <span className="link-text">Educations</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <span className="link-text">Projects</span>
              </a>
            </li>
            <div className="btn-item">
              <div class="paypal-btn">
                <img
                  className="paypal-icon"
                  src="./paypal.png"
                  alt="Paypal Me"
                />
                <a className="paypal-link" href="http://paypal.me/jetrix16">
                  Paypal Me
                </a>
              </div>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
