import React from "react";
import "../css/skills.css";

const Skills = () => {
  return (
    <>
      <div className="skills-main">
        <div className="skills-content">
          <h2 className="education-text">Skills</h2>
          <div className="bars">
            <div className="boxs">
              <h3 className="skills-item">Git</h3>

              <div className="bar">
                <div className="percent-git">
                  <h4 className="percent-text-git">40%</h4>
                </div>
              </div>
              <h3 className="skills-item">ReactJS</h3>

              <div className="bar">
                <div className="percent-reactjs">
                  <h4 className="percent-text-reactjs">40%</h4>
                </div>
              </div>
              <h3 className="skills-item">JavaScript</h3>

              <div className="bar">
                <div className="percent-javascript">
                  <h4 className="percent-text-javascript">40%</h4>
                </div>
              </div>
              <h3 className="skills-item">PHP</h3>

              <div className="bar">
                <div className="percent-php">
                  <h4 className="percent-text-php">40%</h4>
                </div>
              </div>
              <h3 className="skills-item">C#/Java</h3>

              <div className="bar">
                <div className="percent-java">
                  <h4 className="percent-text-java">40%</h4>
                </div>
              </div>
            </div>

            <div className="boxs">
              <h3 className="skills-item">HTML5</h3>

              <div className="bar">
                <div className="percent-html">
                  <h4 className="percent-text-html">72%</h4>
                </div>
              </div>
              <h3 className="skills-item">CSS3</h3>

              <div className="bar">
                <div className="percent-css">
                  <h4 className="percent-text-css">67%</h4>
                </div>
              </div>
              <h3 className="skills-item">NodeJS</h3>

              <div className="bar">
                <div className="percent-nodejs">
                  <h4 className="percent-text-nodejs">38%</h4>
                </div>
              </div>
              <h3 className="skills-item">MySQL</h3>

              <div className="bar">
                <div className="percent-mysql">
                  <h4 className="percent-text-mysql">35%</h4>
                </div>
              </div>
              <h3 className="skills-item">Ubuntu</h3>

              <div className="bar">
                <div className="percent-ubuntu">
                  <h4 className="percent-text-ubuntu">43%</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
