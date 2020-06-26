import React from "react";
import "../css/educations.css";

const Educations = () => {
  return (
    <>
      <div className="educ-main">
        <div className="educ">
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
              ICT - Mobile Application and Web Development
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Educations;
