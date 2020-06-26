import React from "react";
import "../css/educations.css";

const Educations = () => {
  return (
    <>
      <div className="educ-main">
        <div className="educ">
          <div className="seperator-top"></div>
          <h2 className="education-text">Educations</h2>
          <div className="content-educ">
            <h2 className="h2-educ">Senior High</h2>
            <div className="schools">
              <span className="school">STI</span>
              <span class="dot"></span>
              <span className="course">
                ICT - Mobile Application and Web Development
              </span>
              <span class="dot"></span>
              <span className="school">Batch 2018</span>
            </div>
            <span className="about-des">
              In this school, I've learned a lot from creating a simple mobile
              app and website. I've learned my first programming language here
              which is <span className="java">Java</span> we used{" "}
              <span className="java">Java</span> for creating a mobile app in
              <span className="android"> Android Studio</span>. After that, they
              thought as on how to create a simple website. I, ve learned the
              basics of <span className="html">HTML</span>,{" "}
              <span className="css">CSS</span> and,{" "}
              <span className="javascript">JavaScript</span>, here.
            </span>
            <div className="seperator"></div>
            <h2 className="h2-educ1">College</h2>
            <div className="schools">
              <span className="school">UNP</span>
              <span class="dot"></span>
              <span className="course">
                Bachelor of Science in Information Technology
              </span>
              <span class="dot"></span>
              <span className="school">Present</span>
            </div>
            <span className="about-des">
              I'm currently 2nd-year college in this school and what I learned
              so far is object-oriented programming, Data structure, and
              Algorithm. Also, We created our first basic system as our project.
              For me, I've created a cinema online reservation system that can
              allow the user to reserve a seat and ticket I've used{" "}
              <span className="php">PHP</span>,
              <span className="javascript"> JavaScript</span>,{" "}
              <span className="html">HTML</span>,
              <span className="css"> CSS</span>,{" "}
              <span className="mysql">MySQL</span> in that project.
            </span>
            <div className="seperator"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Educations;
